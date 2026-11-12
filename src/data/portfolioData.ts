import { Project, EducationItem, Coursework, DocumentItem } from '../types';

export const personalInfo = {
  name: "Rebecca",
  fullName: "Rebecca Nabusambya",
  studentId: "2502692",
  role: "Driven IT Professional & Web Developer",
  subRole: "Specializing in Cloud Security & Responsive Digital Experiences",
  headline: "Driven IT Professional & Web Developer specializing in Cloud Security & Responsive Digital Experiences.",
  summary1: "Driven IT diploma student at KCA University seeking a 3-month industrial attachment (September - November 2026). Passionate about cloud security, IT support, and web development. Proven ability to build practical digital systems and troubleshoot hardware & network environments.",
  summary2: "Junior Achievers national runner-up (2nd place, Kenya). Self-taught cloud enthusiast actively practicing Linux administration, networking, and AWS. Hardworking, ethical, and applies classroom knowledge to real-world institutional operations.",
  email: "2502692@students.kcau.ac.ke",
  personalEmail: "rnabusambya@gmail.com",
  phone: "0116968755",
  formattedPhone: "+254 116 968 755",
  location: "Nairobi, Kenya",
  nationality: "Kenyan",
  postalAddress: "P.O. Box 56808-00200, Nairobi, Kenya",
  linkedin: "https://linkedin.com/in/becca-afk",
  github: "https://github.com/becca-afk",
  portfolioUrl: "https://becca-afk.github.io/portfolio",
  attachmentPeriod: "September – November 2026",
  attachmentDuration: "3 Months",
};

export const educationList: EducationItem[] = [
  {
    qualification: "Diploma in Information Technology",
    institution: "KCA University",
    period: "2025 - 2027 (Expected)",
  },
  {
    qualification: "KCSE (Grade C)",
    institution: "AgaKhan Highschool",
    period: "Completed",
  },
];

export const completedCoursework: Coursework[] = [
  { title: "Computer Architecture", grade: "A" },
  { title: "Operating Systems", grade: "B" },
  { title: "Database Systems", grade: "A-" },
  { title: "Web Development", grade: "A" },
];

export const currentStudies: Coursework[] = [
  { title: "Java Programming" },
  { title: "Network Design" },
  { title: "Application Programming" },
  { title: "Data Structures" },
];

export const projectsList: Project[] = [
  {
    id: "perfume-store",
    title: "Perfume Store",
    description: "Live e-commerce site with a custom WhatsApp ordering system to streamline payments and customer interaction.",
    tags: ["HTML", "CSS", "Vercel", "WhatsApp API"],
    demoUrl: "https://first-class-perfume.vercel.app",
    badge: "Live E-Commerce",
  },
  {
    id: "car-showcase",
    title: "Car Showcase",
    description: "Modern, responsive gallery for vehicle listings optimized for all devices and screen sizes.",
    tags: ["HTML", "CSS", "GitHub Pages"],
    demoUrl: "https://becca-afk.github.io/car-website/index.html",
    badge: "Showcase Gallery",
  },
  {
    id: "portfolio-website",
    title: "Professional Portfolio",
    description: "This very portfolio site, built with a focus on performance, aesthetics, and clean code.",
    tags: ["React 19", "TypeScript", "Vite", "Responsive Design"],
    sourceUrl: "https://github.com/becca-afk/portfolio",
    badge: "React App",
  },
];

export const documentsList: DocumentItem[] = [
  {
    id: "cv",
    title: "Curriculum Vitae",
    description: "Detailed professional background, education, and career history.",
    fileUrl: "/CV.pdf",
    iconType: "cv",
  },
  {
    id: "resume",
    title: "Professional Resume",
    description: "A concise summary of my key skills and achievements.",
    fileUrl: "/Resume.pdf",
    iconType: "resume",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    description: "Personalized letter highlighting my passion and suitability for roles.",
    fileUrl: "/Cover_Letter.pdf",
    iconType: "letter",
  },
];

export const technicalSkills: string[] = [
  "Hardware & PC Diagnostics",
  "Networking (LAN/WLAN & Cabling)",
  "Linux OS & Bash Shell",
  "SQL & Relational Databases",
  "HTML5, CSS3 & JavaScript",
  "Java (OOP Principles)",
  "AWS Cloud Fundamentals",
  "Windows & User Tech Support",
];

export const softSkills: string[] = [
  "Fast Learner & Trainable",
  "Integrity & Confidentiality",
  "Hardware/Network Problem Solving",
  "Clear Communication",
  "Teamwork & Cooperation",
  "Work Ethic & Punctuality",
];

export interface Referee {
  name: string;
  title: string;
  department: string;
  institution: string;
  postal: string;
  email: string;
  phone: string;
}

export const defaultReferees: Referee[] = [
  {
    name: "Dr. Simon M. Ndung'u",
    title: "Dean, School of Technology",
    department: "School of Technology",
    institution: "KCA University",
    postal: "P.O. Box 56808-00200, Nairobi, Kenya",
    email: "technology@kcau.ac.ke",
    phone: "+254 710 888 022",
  },
  {
    name: "Industrial Attachment Coordinator",
    title: "Head of Student Attachment & Career Services",
    department: "Directorate of Career Services",
    institution: "KCA University",
    postal: "P.O. Box 56808-00200, Nairobi, Kenya",
    email: "attachment@kcau.ac.ke",
    phone: "+254 710 888 022",
  },
  {
    name: "Head of Computing & Informatics",
    title: "Senior Lecturer, Computing & Systems",
    department: "School of Technology",
    institution: "KCA University",
    postal: "P.O. Box 56808-00200, Nairobi, Kenya",
    email: "ictfaculty@kcau.ac.ke",
    phone: "+254 710 888 022",
  },
];

export interface AttachmentRequirement {
  id: string;
  title: string;
  category: 'mandatory' | 'academic' | 'identity';
  description: string;
  source: string;
  status: 'ready' | 'obtained_from_kca' | 'standard';
}

export const attachmentChecklist: AttachmentRequirement[] = [
  {
    id: "cv",
    title: "Printable Kenyan Standard Attachment CV",
    category: "mandatory",
    description: "Tailored to Kenyan employer & university standards, detailing education, grades (Grade A in Web Dev & Computer Architecture), technical troubleshooting competencies, projects, and 3 referees.",
    source: "Ready in this suite — Print 2-3 copies on crisp white paper",
    status: "ready",
  },
  {
    id: "application-letter",
    title: "Formal Application Letter",
    category: "mandatory",
    description: "Official cover letter signed with Reg No. 2502692, requesting placement for 3 months (September – November 2026) in the ICT department.",
    source: "Ready in this suite — Print & sign in blue/black ink",
    status: "ready",
  },
  {
    id: "intro-letter",
    title: "KCA University Attachment Introduction Letter",
    category: "academic",
    description: "Official university letter from the Dean / Career Services office verifying you are a bona fide KCA University student required to undertake attachment.",
    source: "Obtain from KCA University School of Technology / Career Office",
    status: "obtained_from_kca",
  },
  {
    id: "insurance",
    title: "Student Personal Accident Insurance Cover",
    category: "mandatory",
    description: "Mandatory in Kenya for all industrial attachees under NITA and occupational safety regulations covering the attachment period.",
    source: "KCA University student group policy or any registered Kenyan underwriter (approx. KES 500 - 1,500)",
    status: "obtained_from_kca",
  },
  {
    id: "transcripts",
    title: "Academic Transcripts / Result Slips",
    category: "academic",
    description: "Official coursework slip demonstrating high marks (Computer Architecture A, Web Dev A, Database A-, OS B).",
    source: "Student Portal (portal.kcau.ac.ke) / Exam Office",
    status: "obtained_from_kca",
  },
  {
    id: "id-copies",
    title: "Copies of National ID & KCA Student ID",
    category: "identity",
    description: "Clear photocopies of both sides of your Kenyan National Identity Card and KCA Student Smart Card.",
    source: "Personal document photocopies",
    status: "standard",
  },
  {
    id: "photos",
    title: "2 Passport-Sized Photographs",
    category: "identity",
    description: "Recent color passport photos with a white or plain background for gate passes and company files.",
    source: "Standard studio print",
    status: "standard",
  },
  {
    id: "logbook",
    title: "KCA Attachment Logbook & Assessment Guide",
    category: "academic",
    description: "Official logbook where daily tasks are signed by your workplace supervisor and academic supervisor.",
    source: "Issued by KCA University School of Technology prior to start date",
    status: "obtained_from_kca",
  },
];

