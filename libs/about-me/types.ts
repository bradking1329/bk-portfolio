export type Experience = {
  company: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  jobNotes: string[];
};

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
