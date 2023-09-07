export interface Content {
  title: string;
  startDate: string;
  endDate: string;
  companyOrDistributor: string;
  notes: string[];
}

export enum SectionType {
  Certification = 'certifications',
  Experience = 'experience',
}

export interface SkillItem {
  label: string;
  color:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'success'
    | 'error'
    | 'warning'
    | 'info';
}
