export type InstitutionType = 'School' | 'PU College';

export type PackageType = 'Basic' | 'Premium' | 'Platinum' | 'Need Guidance';

export interface ExhibitorEnquiry {
  id?: string;
  institution_name: string;
  institution_type: InstitutionType;
  contact_person: string;
  designation: string;
  email: string;
  phone: string;
  whatsapp: string;
  location: string;
  preferred_package: PackageType;
  preferred_stall_type: string;
  additional_requirements?: string;
  consent: boolean;
  created_at?: string;
}

export interface PanelDiscussion {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  day: 'Day 1 (DRISTI)' | 'Day 2 (SRISTI)';
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineEvent {
  date: string;
  dayTitle?: string;
  title: string;
  description: string;
  isMilestone?: boolean;
}
