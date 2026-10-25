import { ExhibitorEnquiry } from '../types';

/**
 * Retrieves the Google Sheets Web App endpoint URL from environment variables.
 */
export const getGoogleSheetsUrl = (): string => {
  return (import.meta.env.VITE_GOOGLE_SHEETS_URL || '').trim();
};

/**
 * Checks whether the Google Sheets endpoint is configured with a valid deployment URL.
 */
export const isGoogleSheetsConfigured = (): boolean => {
  const url = getGoogleSheetsUrl();
  return Boolean(
    url &&
    url.startsWith('https://script.google.com/macros/s/') &&
    !url.includes('your-google-apps-script')
  );
};

/**
 * Appends a new application enquiry as a row in the connected Google Sheet.
 * 
 * Uses URLSearchParams with mode: 'no-cors' so that browser
 * security does not block Google Apps Script's 302 redirect.
 */
export const appendToGoogleSheets = async (
  enquiry: ExhibitorEnquiry
): Promise<{ success: boolean; error?: string }> => {
  const url = getGoogleSheetsUrl();
  if (!url) {
    return { success: false, error: 'Google Sheets URL is not configured.' };
  }

  try {
    const params = new URLSearchParams();
    params.append('timestamp', new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }));
    params.append('institution_name', enquiry.institution_name);
    params.append('institution_type', enquiry.institution_type);
    params.append('contact_person', enquiry.contact_person);
    params.append('designation', enquiry.designation);
    params.append('email', enquiry.email);
    params.append('phone', enquiry.phone);
    params.append('whatsapp', enquiry.whatsapp || enquiry.phone);
    params.append('location', enquiry.location);
    params.append('preferred_package', enquiry.preferred_package);
    params.append('preferred_stall_type', enquiry.preferred_stall_type);
    params.append('additional_requirements', enquiry.additional_requirements || 'None');
    params.append('consent', enquiry.consent ? 'Yes' : 'No');

    // Google Apps Script accepts URLSearchParams natively
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      body: params,
    });

    return { success: true };
  } catch (err: any) {
    console.error('Error sending application to Google Sheets:', err);
    return {
      success: false,
      error: err.message || 'Network error transmitting to Google Sheets.',
    };
  }
};
