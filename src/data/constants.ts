import { Project, EducationItem, ExperienceItem, Software } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ALIBINIT LOGO',
    category: 'Brand Identity',
    description: 'A complete visual identity system for a modern tech startup. This project involved creating a dynamic logo, color palette, and typography guidelines that reflect innovation and speed. The concept focuses on "digital acceleration," utilizing sharp angles and high-contrast colors to stand out in a saturated market.',
    image: 'https://picsum.photos/600/400?grayscale&random=1'
  },
  {
    id: '2',
    title: 'GRAPHIC POSTER',
    category: 'Poster Design',
    description: 'An exploration of typography and Swiss design principles. This series of posters breaks down complex information into digestible visual hierarchies. Used primarily for a design exhibition, the goal was to catch the eye from a distance while providing detailed information up close.',
    image: 'https://picsum.photos/600/800?grayscale&random=2'
  },
  {
    id: '3',
    title: 'BRANDING CONCEPT',
    category: 'Mockups',
    description: 'Decognar is a streetwear label focusing on brutalist aesthetics. This project included apparel design, packaging, and social media assets. The challenge was to maintain a "rough" look while ensuring the brand felt premium and established.',
    image: 'https://picsum.photos/600/400?grayscale&random=3'
  },
  {
    id: '4',
    title: 'MAGAZINE LAYOUT',
    category: 'Editorial',
    description: 'Editorial design for an art & culture magazine. Focused on grid systems and experimental text wrapping.',
    image: 'https://picsum.photos/600/500?grayscale&random=4'
  },
  {
    id: '5',
    title: 'VINYL COVER',
    category: 'Packaging',
    description: 'Cover art for an indie rock band. Mixed media approach using scanned textures and vector graphics.',
    image: 'https://picsum.photos/600/600?grayscale&random=5'
  }
];

export const education: EducationItem[] = [
  { school: 'School of Design', degree: 'Bachelor of Arts, Mumbai', gpa: '8.86' },
  { school: 'Institute of Art', degree: 'Diploma in Graphic Design', gpa: '4.65' },
  { school: 'Creative High', degree: 'Visual Arts Stream', gpa: '4.75' },
];

export const experience: ExperienceItem[] = [
  { role: 'Senior Designer at Studio X', period: '2023 - Present' },
  { role: 'Freelance Brand Designer', period: '2021 - 2023' },
  { role: 'Design Intern at Ogilvy', period: '2020 - 2021' },
];

export const softwares: Software[] = [
  { name: 'Photoshop', abbr: 'Ps' },
  { name: 'Illustrator', abbr: 'Ai' },
  { name: 'InDesign', abbr: 'Id' },
  { name: 'Figma', abbr: 'Fi' },
  { name: 'After Effects', abbr: 'Ae' },
  { name: 'Blender', abbr: 'Bl' },
];
