import { Project, EducationItem, Coursework, DocumentItem, SkillCategory } from '../types';

export const personalInfo = {
  name: "Rebecca",
  fullName: "Rebecca Nabusambya Manyasi",
  studentId: "2502692",
  gpa: "3.42 (B+ Average)",
  role: "IT Support Specialist & Software Developer",
  subRole: "Java, C, SQL, Hardware Diagnostics & Network Infrastructure",
  headline: "IT Support Specialist & Software Developer with proven expertise in Java, C, SQL, Network Cabling, and Hardware Diagnostics.",
  summary1: "Highly adaptable IT Diploma student at KCA University (GPA: 3.42, B+ Average) with verified Grade A results in Web Design, Network Design, Human-Computer Interaction, and Computer Organization, and Grade A- in Java Programming, Systems Analysis, and Database Systems. Skilled in hardware maintenance, PC assembly/disassembly, structured cabling, and software development.",
  summary2: "Junior Achievers Kenya National Runner-Up (2nd Place, Mombasa). Fully hands-on with PC assembly/teardowns, OS installations (Windows & Ubuntu Linux), structured cabling (RJ45, T568A/B), relational databases, and self-taught live website deployments (Vercel & GitHub Pages). Bilingual (Native Swahili, Fluent English) and ready for immediate IT support, web, and software roles.",
  email: "2502692@students.kcau.ac.ke",
  personalEmail: "rnabusambya@gmail.com",
  phone: "0116968755",
  formattedPhone: "+254 116 968 755",
  location: "Nairobi, Kenya",
  nationality: "Kenyan",
  postalAddress: "P.O. Box 56808-00200, Nairobi, Kenya",
  linkedin: "https://linkedin.com/in/becca-afk",
  github: "https://github.com/becca-afk",
  portfolioUrl: "https://becca-afk.github.io/Rebecca-s-portfolio/",
  availability: "Immediate / Open to Full-Time & Part-Time Roles",
  employmentTarget: "IT Support, Junior Software Development, Network Operations",
};

export const educationList: EducationItem[] = [
  {
    qualification: "Diploma in Information Technology",
    institution: "KCA University",
    period: "2025 - 2027 (Expected)",
  },
  {
    qualification: "KCSE (Grade C)",
    institution: "The Aga Khan High School, Nairobi",
    period: "2020 - 2024",
  },
];

export const completedCoursework: Coursework[] = [
  { title: "Web Development", grade: "A" },
  { title: "Human-Computer Interaction (HCI)", grade: "A" },
  { title: "Network Design & Setup", grade: "A" },
  { title: "Computer Architecture & Organization", grade: "A" },
  { title: "Java Programming", grade: "A-" },
  { title: "Database Systems & SQL", grade: "A-" },
  { title: "Systems Analysis & Design (SDLC)", grade: "A-" },
  { title: "C Language & Low-Level Programming", grade: "B+" },
  { title: "Structured Cabling & Infrastructure", grade: "B+" },
  { title: "Data Structures & Algorithms", grade: "B" },
  { title: "Network Fundamentals (TCP/IP & Routing)", grade: "B" },
  { title: "Operating Systems", grade: "B" },
];

export const currentStudies: Coursework[] = [
  { title: "Electronic Business Systems (E-Commerce & M-Pesa Integration)" },
  { title: "Desktop Publishing (DTP & Professional Layout)" },
  { title: "Financial Management & Budgeting" },
  { title: "Application Programming" },
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
    sourceUrl: "https://github.com/becca-afk/Rebecca-s-portfolio",
    badge: "React App",
  },
];

export const documentsList: DocumentItem[] = [
  {
    id: "resume",
    title: "Professional Resume",
    description: "Up-to-date 2-page resume highlighting GPA 3.42, KCA grades, IT support, projects, and technical tools.",
    fileUrl: "./assets/aistudio/REBECCA_NABUSAMBYA_MANYASI_6c673a02.pdf",
    downloadName: "Rebecca_Nabusambya_Manyasi_Resume.pdf",
    iconType: "resume",
  },
  {
    id: "cv",
    title: "Curriculum Vitae",
    description: "Complete academic background, coursework grades, projects, and professional profile.",
    fileUrl: "./assets/aistudio/REBECCA_NABUSAMBYA_MANYASI_6c673a02.pdf",
    downloadName: "Rebecca_Nabusambya_Manyasi_CV.pdf",
    iconType: "cv",
  },
  {
    id: "cover-letter",
    title: "Cover Letter",
    description: "Tailored application letter showcasing IT support, website maintenance, and digital media skills.",
    fileUrl: "./assets/aistudio/cover_letter_21a661d7.pdf",
    downloadName: "Rebecca_Nabusambya_Manyasi_Cover_Letter.pdf",
    iconType: "letter",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming & Development",
    iconName: "Code",
    description: "Solid theoretical and hands-on coding foundation across object-oriented, systems, and web architectures.",
    skills: [
      { name: "Java", detail: "OOP principles, classes, inheritance, polymorphism, and application logic", grade: "A-" },
      { name: "C Language", detail: "Pointers, direct memory management, and low-level systems programming", grade: "B+" },
      { name: "SQL", detail: "Relational queries (JOINs, DDL/DML), schema design, and data normalization", grade: "A-" },
      { name: "HTML5 & CSS3", detail: "Front-end web design, responsive mobile layouts, and live hosting deployments", grade: "A" },
      { name: "Data Structures & Algorithms", detail: "Arrays, lists, sorting, searching, and computational logic", grade: "B" },
    ],
  },
  {
    id: "it-support",
    title: "IT Support & Hardware Maintenance",
    iconName: "Wrench",
    description: "Hands-on component diagnostics, assembly, OS deployment, and end-user support (from CSN 701 & OS).",
    skills: [
      { name: "PC Assembly & Disassembly", detail: "Full teardown and precision assembly of desktop and laptop hardware" },
      { name: "OS Installation", detail: "Clean formatting, dual-boot, and driver configuration (Windows & Linux)" },
      { name: "Hardware Troubleshooting", detail: "Diagnosing failing RAM, SSD/HDD, power supply (PSU), and peripherals" },
      { name: "Remote Support", detail: "Remote assistance, diagnostic utilities, and ticketing user issue resolution" },
    ],
  },
  {
    id: "networking",
    title: "Operating Systems & Networking",
    iconName: "Network",
    description: "Certified competence in physical cabling, network design, routing fundamentals, and multi-OS environments.",
    skills: [
      { name: "Linux (Ubuntu)", detail: "Command-line navigation, file systems, permissions, package management, and bash" },
      { name: "Windows Administration", detail: "User account management, group policies, security patches, and desktop upkeep" },
      { name: "Network Design & Setup", detail: "IPv4 addressing, subnetting, network topologies, and switch/router configuration", grade: "A" },
      { name: "Structured Cabling", detail: "Physical cabling infrastructure, RJ45 crimping, patch panels, T568A/T568B standards", grade: "B+" },
      { name: "Network Fundamentals", detail: "TCP/IP suite, OSI 7-layer model, packet routing, and DNS/DHCP services", grade: "B" },
    ],
  },
  {
    id: "business-systems",
    title: "Design, Systems & Business Analysis",
    iconName: "Briefcase",
    description: "Bridging technical software development with institutional business processes and user design.",
    skills: [
      { name: "Systems Analysis & Design", detail: "SDLC lifecycle, user requirements gathering, UML diagrams, and system planning", grade: "A-" },
      { name: "Human-Computer Interaction (HCI)", detail: "User-centered design, UI/UX accessibility, usability testing, and wireframing", grade: "A" },
      { name: "Electronic Business Systems", detail: "E-commerce architecture, digital transaction workflows, and M-Pesa integration" },
      { name: "Desktop Publishing (DTP)", detail: "Professional digital graphic layout, marketing media assets, and formatting" },
      { name: "Office & Dev Tooling", detail: "MS Office, Google Workspace, Git, GitHub, Vercel, and VirtualBox" },
      { name: "Financial Management", detail: "IT project budgeting, cost estimation, financial tracking, and operational analysis" },
    ],
  },
  {
    id: "soft-skills",
    title: "Professional & Soft Skills",
    iconName: "Award",
    description: "Proven track record in national competitions, multilingual communication, and fast autonomous learning.",
    skills: [
      { name: "Bilingual Fluency", detail: "Native Swahili, Fluent English (professional spoken & technical written)" },
      { name: "Teamwork & Pitching", detail: "National Runner-Up (2nd Place in Kenya) at Junior Achievers competition (Mombasa)" },
      { name: "Technical Problem Solving", detail: "Systematic root-cause debugging across software code, hardware, and networks" },
      { name: "Technical Documentation", detail: "Authoring comprehensive technical specifications, user manuals, and system reports" },
      { name: "Self-Driven Learning", detail: "Autonomously building, testing, and deploying production web applications to Vercel/GitHub" },
    ],
  },
];

export const technicalSkills: string[] = [
  "Java (OOP - Grade A-)",
  "C Language (Systems - Grade B+)",
  "SQL & Relational Databases (Grade A-)",
  "HTML5 & Responsive CSS (Grade A)",
  "PC Assembly & Disassembly",
  "Hardware Troubleshooting (RAM/SSD/PSU)",
  "OS Installation (Windows & Linux)",
  "Remote Technical Support",
  "Network Design & Subnetting (Grade A)",
  "Structured Cabling & Crimping (Grade B+)",
  "Linux CLI & Bash (Ubuntu)",
  "Data Structures & Algorithms (Grade B)",
  "Systems Analysis & SDLC (Grade A-)",
  "Human-Computer Interaction (Grade A)",
  "E-Commerce & M-Pesa Integration",
];

export const softSkills: string[] = [
  "Bilingual: Native Swahili & Fluent English",
  "Junior Achievers National Runner-Up (2nd Place, Mombasa)",
  "Technical Debugging & Hardware Problem Solving",
  "System Documentation & Technical Writing",
  "Self-Driven Web Deployment (Vercel / GitHub Pages)",
  "High Integrity, Confidentiality & Punctuality",
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
    name: "Head of Computing & Informatics",
    title: "Senior Lecturer, Computing & Systems",
    department: "School of Technology",
    institution: "KCA University",
    postal: "P.O. Box 56808-00200, Nairobi, Kenya",
    email: "ictfaculty@kcau.ac.ke",
    phone: "+254 710 888 022",
  },
  {
    name: "Director of Career Development",
    title: "Head of Career & Corporate Partnerships",
    department: "Directorate of Career Development",
    institution: "KCA University",
    postal: "P.O. Box 56808-00200, Nairobi, Kenya",
    email: "careers@kcau.ac.ke",
    phone: "+254 710 888 022",
  },
];

export interface CareerDocumentRequirement {
  id: string;
  title: string;
  category: 'core' | 'academic' | 'verification';
  description: string;
  source: string;
  status: 'ready' | 'verified' | 'standard';
}

export const careerDossierChecklist: CareerDocumentRequirement[] = [
  {
    id: "cv",
    title: "Comprehensive Professional Curriculum Vitae",
    category: "core",
    description: "Detailed Kenyan & international standard CV highlighting technical competencies, verified KCA grades, hardware/network diagnostics, programming languages, and academic referees.",
    source: "Ready in Career Suite — Printable & exportable",
    status: "ready",
  },
  {
    id: "application-letter",
    title: "Customizable Job Application Cover Letter",
    category: "core",
    description: "Professional job application letter tailored for IT Support, Junior Developer, or Network Operations roles.",
    source: "Ready in Career Suite — Customizable with employer & position",
    status: "ready",
  },
  {
    id: "transcripts",
    title: "Official Academic Result Slip / Transcripts",
    category: "academic",
    description: "Verified coursework slips certifying top marks: Web Dev (A), HCI (A), Network Design (A), Java (A-), Database Systems (A-), Systems Analysis (A-).",
    source: "KCA University Student Portal / Examination Office",
    status: "verified",
  },
  {
    id: "projects",
    title: "Demonstrated Systems & Live Portfolios",
    category: "core",
    description: "Live commercial e-commerce platform (WhatsApp API integration on Vercel), car gallery on GitHub Pages, and production React application.",
    source: "Live web URLs included in portfolio",
    status: "ready",
  },
  {
    id: "honors",
    title: "Junior Achievers Kenya National 2nd Place Certificate",
    category: "academic",
    description: "National Runner-Up certificate from the Junior Achievers Kenya national competition in Mombasa, validating leadership, pitching, and business teamwork.",
    source: "National Certificate of Achievement",
    status: "verified",
  },
  {
    id: "id-credentials",
    title: "National Identity Card & Student Smart Card",
    category: "verification",
    description: "Kenyan National Identity Card (original & certified photocopies) and KCA University student smart identity card.",
    source: "Official personal identification",
    status: "standard",
  },
  {
    id: "referees",
    title: "Verified Academic & Professional Referees",
    category: "verification",
    description: "Three accredited institutional references including Dean of School of Technology and Senior Lecturers with full contact details.",
    source: "KCA University Faculty References",
    status: "ready",
  },
];

// Backwards-compatible export alias for any legacy references
export const attachmentChecklist = careerDossierChecklist;


