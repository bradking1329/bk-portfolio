import { Content, SkillItem } from './types';

export const csdCert: Content = {
  companyOrDistributor: 'Scrum Alliance',
  title: 'Certified Scrum Developer',
  startDate: 'June 2024',
  endDate: 'June 2026',
  notes: [],
};

export const dtCert: Content = {
  companyOrDistributor: 'Dynatrace',
  title: 'Certified Associate',
  startDate: 'August 2024',
  endDate: 'August 2026',
  notes: [],
};

export const seniorSeExp: Content = {
  companyOrDistributor: 'Dynatrace',
  title: 'Senior Software Engineer',
  startDate: 'December 2023',
  endDate: 'Present',
  notes: [],
};

export const seExp: Content = {
  companyOrDistributor: 'Dynatrace',
  title: 'Software Engineer',
  startDate: 'December 2021',
  endDate: 'December 2023',
  notes: ['Full stack application', 'Testing'],
};

export const psExp: Content = {
  companyOrDistributor: 'Dynatrace',
  title: 'Product Specialist II',
  startDate: 'February 2019',
  endDate: 'November 2021',
  notes: [
    'Consult and coach customers on Dynatrace features and best practices.',
    'Present Dynatrace and its core-concepts to technical and non-technical teams.',
    'Develop internal and customer-facing training on topics such as AIOps and Autonomous Cloud Management (Keptn).',
    'Provide live product triaging on user inquiries and issues, for quick customer assistance.',
    'Frontend development for internal Chat Tracker application (Angular, TypeScript, Redux, Git) which provides visibility into key metrics, creating accountability for chats and driving down Time to Response.',
    'Backend development for internal application (JavaScript, Node.js) which allows team members to deliver hands-on training to customers.',
    'Write scripts (Python) to meet specific customer use cases utilizing the Dynatrace API.',
  ],
};

export const allExp: Content[] = [seniorSeExp, seExp, psExp];
export const allCerts: Content[] = [csdCert, dtCert];

export const aboutMeContent = `I'm a software engineer based in Detroit, MI.`;

export const aboutMePassion = `I love learning new things. I'm passionate about mentoring others in technology and software development.`;

export const skillLegend: SkillItem[] = [
  { label: 'Frontend', color: 'primary' },
  { label: 'Backend', color: 'secondary' },
  { label: 'Languages', color: 'info' },
  { label: 'Testing', color: 'warning' },
  { label: 'Operations', color: 'success' },
];
export const skills: SkillItem[] = [
  { label: 'React', color: 'primary' },
  { label: 'Next.js', color: 'primary' },
  { label: 'Angular', color: 'primary' },
  { label: 'Node.js', color: 'secondary' },
  { label: 'Express', color: 'secondary' },
  { label: 'NestJS', color: 'secondary' },
  { label: 'Javascript', color: 'info' },
  { label: 'Typescript', color: 'info' },
  { label: 'Jest', color: 'warning' },
  { label: 'Testcafe', color: 'warning' },
  { label: 'Kubernetes', color: 'success' },
];
