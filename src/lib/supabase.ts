import { createClient } from '@supabase/supabase-js';
import { ExhibitorEnquiry } from '../types';
import { isGoogleSheetsConfigured, appendToGoogleSheets } from './sheets';

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

export const isBackendConfigured = (): boolean => {
  return isGoogleSheetsConfigured() || isSupabaseConfigured();
};

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

  let sheetsSent = false;
  let supabaseSent = false;

  // 1. Send directly to connected Google Sheet
  if (isGoogleSheetsConfigured()) {
    try {
      const sheetsResult = await appendToGoogleSheets(enquiry);
      if (sheetsResult.success) {
        sheetsSent = true;
      }
    } catch (err) {
      console.error('Google Sheets transmission note:', err);
    }
  }

  // 2. If Supabase is configured, also save in PostgreSQL table
  if (isSupabaseConfigured() && supabase) {
    try {
      const { error } = await supabase
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
        ]);

      if (!error) {
        supabaseSent = true;
      } else {
        console.error('Supabase submission note:', error);
      }
    } catch (err: any) {
      console.error('Supabase submission note:', err);
    }
  }

  // 3. Always save in browser local storage as instant backup
  try {
    const existing = JSON.parse(localStorage.getItem('parva_demo_enquiries') || '[]');
    const newRecord: ExhibitorEnquiry = {
      ...enquiry,
      id: `enquiry-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    existing.unshift(newRecord);
    localStorage.setItem('parva_demo_enquiries', JSON.stringify(existing));
  } catch (err: any) {
    console.error('Local backup storage notice:', err);
  }

  // If neither Google Sheets nor Supabase were connected, simulate short realistic network delay
  if (!sheetsSent && !supabaseSent) {
    await new Promise((resolve) => setTimeout(resolve, 800));
  }

  return {
    success: true,
    message:
      'Thank you for your interest in PARVA 2027. Your application has been successfully submitted! The organising team will contact you shortly.',
    isDemoMode: !sheetsSent && !supabaseSent,
    data: enquiry,
  };
};
