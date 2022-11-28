import { Experience, SkillItem } from './types';

export const seExp: Experience = {
  company: 'Dynatrace',
  jobTitle: 'Software Engineer',
  startDate: 'December 2021',
  endDate: 'Present',
  jobNotes: ['Full stack application', 'Testing'],
};

export const psExp: Experience = {
  company: 'Dynatrace',
  jobTitle: 'Product Specialist II',
  startDate: 'February 2019',
  endDate: 'November 2021',
  jobNotes: [
    'Consult and coach customers on Dynatrace features and best practices.',
    'Present Dynatrace and its core-concepts to technical and non-technical teams.',
    'Develop internal and customer-facing training on topics such as AIOps and Autonomous Cloud Management (Keptn).',
    'Provide live product triaging on user inquiries and issues, for quick customer assistance.',
    'Frontend development for internal Chat Tracker application (Angular, TypeScript, Redux, Git) which provides visibility into key metrics, creating accountability for chats and driving down Time to Response.',
    'Backend development for internal application (JavaScript, Node.js) which allows team members to deliver hands-on training to customers.',
    'Write scripts (Python) to meet specific customer use cases utilizing the Dynatrace API.',
  ],
};

export const allExp: Experience[] = [seExp, psExp];

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
  { label: 'Node.js', color: 'secondary' },
  { label: 'Nest.js', color: 'secondary' },
  { label: 'Javascript', color: 'info' },
  { label: 'Typescript', color: 'info' },
  { label: 'Jest', color: 'warning' },
  { label: 'Testcafe', color: 'warning' },
  { label: 'Kubernetes', color: 'success' },
];
