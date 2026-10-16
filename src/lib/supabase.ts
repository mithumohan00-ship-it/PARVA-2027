import { createClient } from '@supabase/supabase-js';
import { ExhibitorEnquiry } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('your-supabase-url')
  );
};

export const supabase = isSupabaseConfigured()
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * SQL Schema for Supabase Table setup:
 * 
 * CREATE TABLE IF NOT EXISTS exhibitor_enquiries (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   institution_name TEXT NOT NULL,
 *   institution_type TEXT NOT NULL CHECK (institution_type IN ('School', 'PU College')),
 *   contact_person TEXT NOT NULL,
 *   designation TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT NOT NULL,
 *   whatsapp TEXT NOT NULL,
 *   location TEXT NOT NULL,
 *   preferred_package TEXT NOT NULL CHECK (preferred_package IN ('Basic', 'Premium', 'Platinum', 'Need Guidance')),
 *   preferred_stall_type TEXT NOT NULL,
 *   additional_requirements TEXT,
 *   consent BOOLEAN NOT NULL DEFAULT true,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
 * );
 * 
 * -- Enable Row Level Security (RLS)
 * ALTER TABLE exhibitor_enquiries ENABLE ROW LEVEL SECURITY;
 * 
 * -- Only allow public insert (anonymous visitors submitting enquiries)
 * CREATE POLICY "Allow public insert of enquiries"
 *   ON exhibitor_enquiries
 *   FOR INSERT
 *   TO anon
 *   WITH CHECK (true);
 * 
 * -- Disallow public read/select (protecting private contact details)
 * -- Only authenticated admin users or service role can select records
 * CREATE POLICY "Allow authenticated read of enquiries"
 *   ON exhibitor_enquiries
 *   FOR SELECT
 *   TO authenticated
 *   USING (true);
 */

export interface SubmissionResult {
  success: boolean;
  message: string;
  isDemoMode: boolean;
  data?: ExhibitorEnquiry;
}

export const submitExhibitorEnquiry = async (
  enquiry: ExhibitorEnquiry
): Promise<SubmissionResult> => {
  // Validate basic constraints
  if (!enquiry.institution_name.trim()) throw new Error('Institution name is required.');
  if (!enquiry.contact_person.trim()) throw new Error('Contact person name is required.');
  if (!enquiry.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) throw new Error('Valid email address is required.');
  if (!enquiry.phone.trim() || enquiry.phone.replace(/\D/g, '').length < 10) {
    throw new Error('Valid 10-digit phone number is required.');
  }

  // If Supabase is configured, submit to live database
  if (isSupabaseConfigured() && supabase) {
    try {
      const { data, error } = await supabase
        .from('exhibitor_enquiries')
        .insert([
          {
            institution_name: enquiry.institution_name,
            institution_type: enquiry.institution_type,
            contact_person: enquiry.contact_person,
            designation: enquiry.designation,
            email: enquiry.email,
            phone: enquiry.phone,
            whatsapp: enquiry.whatsapp || enquiry.phone,
            location: enquiry.location,
            preferred_package: enquiry.preferred_package,
            preferred_stall_type: enquiry.preferred_stall_type,
            additional_requirements: enquiry.additional_requirements || null,
            consent: enquiry.consent,
          },
        ])
        .select()
        .single();

      if (error) {
        console.error('Supabase submission error:', error);
        throw new Error(error.message || 'Database error occurred during submission.');
      }

      return {
        success: true,
        message:
          'Thank you for your interest in PARVA 2027. Your enquiry has been received. The organising team will contact you shortly to discuss package details and stall availability.',
        isDemoMode: false,
        data,
      };
    } catch (err: any) {
      console.error('Error submitting enquiry:', err);
      throw new Error(err.message || 'Failed to submit stall enquiry.');
    }
  }

  // Graceful Demo / Local Preview Mode
  // Store locally so testing works immediately and alert the user
  try {
    const existing = JSON.parse(localStorage.getItem('parva_demo_enquiries') || '[]');
    const newRecord: ExhibitorEnquiry = {
      ...enquiry,
      id: `demo-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    existing.unshift(newRecord);
    localStorage.setItem('parva_demo_enquiries', JSON.stringify(existing));

    // Simulate network delay for realistic experience
    await new Promise((resolve) => setTimeout(resolve, 800));

    return {
      success: true,
      message:
        'Thank you for your interest in PARVA 2027. Your enquiry has been received. The organising team can contact you to discuss package details and stall availability.',
      isDemoMode: true,
      data: newRecord,
    };
  } catch (err: any) {
    throw new Error('Unable to store demo enquiry: ' + err.message);
  }
};
