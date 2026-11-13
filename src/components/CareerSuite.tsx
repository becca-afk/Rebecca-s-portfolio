import React, { useState } from 'react';
import { 
  FileText, 
  Printer, 
  Copy, 
  Check, 
  Download, 
  Building2, 
  Award, 
  CheckCircle2, 
  Clock, 
  Settings2,
  ExternalLink,
  Mail,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles
} from 'lucide-react';
import { 
  personalInfo, 
  defaultReferees, 
  careerDossierChecklist 
} from '../data/portfolioData';
import { getCareerSuitePdfTarget, triggerPdfDownload } from '../utils/portfolioHelpers';

type TargetPreset = 'cellulant' | 'blue-oak' | 'enterprise' | 'custom';

export const CareerSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cv' | 'letter' | 'checklist'>('cv');
  const [copied, setCopied] = useState<string | null>(null);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  // Customization State for Cover Letter
  const [targetPreset, setTargetPreset] = useState<TargetPreset>('cellulant');
  const [recipientOrg, setRecipientOrg] = useState('Cellulant Corporation');
  const [recipientDept, setRecipientDept] = useState('Technology & Operations Department');
  const [recipientTitle, setRecipientTitle] = useState('The Hiring Manager / Talent Acquisition Team');
  const [targetRole, setTargetRole] = useState('IT Support Specialist / Junior Software Developer');
  const [postalLocation, setPostalLocation] = useState('Nairobi, Kenya');
  const [availabilityNote, setAvailabilityNote] = useState('Available immediately for full-time or flexible employment');

  // Candidate Details
  const fullName = personalInfo.fullName;
  const studentId = personalInfo.studentId;
  const phone = personalInfo.formattedPhone;
  const email = personalInfo.personalEmail;
  const kcaEmail = personalInfo.email;
  const postal = personalInfo.postalAddress;
  const location = personalInfo.location;

  const handlePresetChange = (preset: TargetPreset) => {
    setTargetPreset(preset);
    if (preset === 'cellulant') {
      setRecipientOrg('Cellulant Kenya');
      setRecipientDept('Technology, Core Systems & Operations');
      setRecipientTitle('The Talent Acquisition Team / Head of Engineering');
      setTargetRole('IT Operations & Junior Developer');
      setPostalLocation('Nairobi, Kenya');
      setAvailabilityNote('Available immediately for full-time or flexible employment');
    } else if (preset === 'blue-oak') {
      setRecipientOrg('Blue Oak Technologies');
      setRecipientDept('Software Development & Technical Support Services');
      setRecipientTitle('The Hiring Team / Technical Director');
      setTargetRole('Junior Software Developer & IT Support');
      setPostalLocation('Nairobi, Kenya');
      setAvailabilityNote('Available immediately for full-time or flexible placement');
    } else if (preset === 'enterprise') {
      setRecipientOrg('Corporate Enterprise Systems');
      setRecipientDept('Directorate of Information & Communication Technology');
      setRecipientTitle('The ICT Director / HR Department');
      setTargetRole('IT Support Specialist / Network Technician');
      setPostalLocation('Nairobi, Kenya');
      setAvailabilityNote('Available immediately for full-time or flexible placement');
    } else {
      setRecipientOrg('Company / Organization Name');
      setRecipientDept('ICT / Engineering Department');
      setRecipientTitle('The Hiring Manager');
      setTargetRole('IT Support Specialist / Junior Developer');
      setPostalLocation('Nairobi, Kenya');
      setAvailabilityNote('Available immediately for full-time or flexible placement');
    }
  };

  const handleCopyText = (type: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  // Plain Text CV Generator
  const generatePlainTextCV = () => {
    return `================================================================================
CURRICULUM VITAE - ${fullName.toUpperCase()}
================================================================================
Student Reg. No: ${studentId} | KCA University (School of Technology)
Phone: ${phone} | Email: ${email} | Academic: ${kcaEmail}
Postal Address: ${postal} | Location: ${location}
Portfolio: ${personalInfo.portfolioUrl} | GitHub: ${personalInfo.github} | LinkedIn: ${personalInfo.linkedin}

--------------------------------------------------------------------------------
1. CAREER OBJECTIVE
--------------------------------------------------------------------------------
A proactive, dedicated Information Technology professional completing a Diploma in IT 
at KCA University, seeking employment in ${targetRole}. Eager to apply verified 
theoretical foundations in Network Design (Grade A), Web Systems (Grade A), 
Java Programming (Grade A-), Database Systems (Grade A-), and Computer Architecture (Grade A), 
alongside practical hands-on proficiency in PC assembly/disassembly, hardware diagnostics, 
structured cabling (RJ45, T568A/B), and Linux administration to deliver reliable, high-availability operations.

--------------------------------------------------------------------------------
2. EDUCATIONAL BACKGROUND
--------------------------------------------------------------------------------
• 2025 – 2027 (Expected): Diploma in Information Technology
  Institution: KCA University, School of Technology, Nairobi, Kenya
  Student Registration No: ${studentId}
  Core Coursework Results (Verified Transcript):
    - Web Development: Grade A
    - Human-Computer Interaction (HCI): Grade A
    - Network Design & Setup: Grade A
    - Computer Architecture & Organization: Grade A
    - Java Programming: Grade A-
    - Database Management Systems & SQL: Grade A-
    - Systems Analysis & Design: Grade A-
    - Structured Cabling & Physical Infrastructure: Grade B+
    - C Language & Low-Level Systems: Grade B+
    - Data Structures & Algorithms: Grade B
    - Network Fundamentals (TCP/IP & Routing): Grade B
    - Operating Systems: Grade B
  Current Semester Coursework:
    - Electronic Business Systems (E-Commerce & M-Pesa Integration)
    - Desktop Publishing (DTP & Professional Layout)
    - Financial Management & Budgeting
    - Application Programming

• Kenya Certificate of Secondary Education (KCSE)
  - Riara High School (2019 – 2022)
  - Aga Khan High School (2023 – 2024)

--------------------------------------------------------------------------------
3. TECHNICAL PROFICIENCIES & PRACTICAL SKILLS
--------------------------------------------------------------------------------
• IT Support & Hardware Maintenance:
  - PC Assembly & Disassembly: Full teardown, precision component assembly (RAM, SSD/HDD, PSU).
  - Hardware Diagnostics: Systematic troubleshooting of power supply, memory, and motherboard faults.
  - OS Installation: Clean formatting, dual-boot configuration, and driver setups (Windows & Linux).
  - Remote Technical Support: Remote assistance, diagnostic tools, and user issue resolution.

• Networking & Cabling Infrastructure:
  - Structured Cabling: Physical cable routing, RJ45 termination & crimping (T568A/T568B).
  - Network Configuration: IPv4 addressing, subnetting, gateway assignment, DNS & DHCP configuration.
  - Architecture: LAN/WLAN deployment, switch & router fundamentals (TCP/IP and OSI models).

• Software & Systems Development:
  - Java: Object-Oriented Programming (encapsulation, inheritance, polymorphism), classes & application logic.
  - C Language: Pointers, memory allocation, and low-level computing principles.
  - Relational Databases (SQL): Schema design, normalization (1NF-3NF), queries (JOINs, DDL/DML) in MySQL & PostgreSQL.
  - Web Technologies: HTML5, CSS3, JavaScript, React 19, TypeScript, responsive mobile layouts.

• Systems Analysis & Business Systems:
  - Systems Analysis & Design: SDLC requirements gathering, process mapping, and technical documentation.
  - Human-Computer Interaction (HCI): User-centered UI/UX design and usability evaluations.
  - E-Business: Commercial architectures, digital transactions, and M-Pesa automated workflows.
  - Desktop Publishing (DTP): Digital design, typesetting, and corporate document publication.

• Systems Administration:
  - Linux (Ubuntu/Debian): Command-line operations, file hierarchies, user permissions, and bash shell.
  - Windows: Enterprise desktop management, group policies, and system updates.

--------------------------------------------------------------------------------
4. PRACTICAL PROJECTS & APPLIED SYSTEMS
--------------------------------------------------------------------------------
1. First-Class Perfume E-Commerce Platform
   - Live URL: https://first-class-perfume.vercel.app
   - Built a commercial storefront with automated WhatsApp ordering, product catalogs, and Vercel hosting.

2. Car Showcase Web Platform
   - Live URL: https://becca-afk.github.io/car-website/index.html
   - Responsive multi-device gallery hosted on GitHub Pages.

3. Professional Tech Portfolio & Career Hub
   - Live URL: ${personalInfo.portfolioUrl}
   - Engineered in React 19 and TypeScript, featuring automated build pipelines and career dossier tools.

--------------------------------------------------------------------------------
5. LEADERSHIP & AWARDS
--------------------------------------------------------------------------------
• Junior Achievers Kenya National Runner-Up (2nd Place in Kenya):
  Mombasa National Finals. Recognized for business model design, executive presentation, and teamwork.
• Bilingual Fluency: Native Swahili and Fluent English (spoken & written).

--------------------------------------------------------------------------------
6. REFEREES
--------------------------------------------------------------------------------
1. Dr. Simon M. Ndung'u
   Dean, School of Technology, KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: technology@kcau.ac.ke | Tel: +254 710 888 022

2. Head of Computing & Informatics
   Senior Lecturer, Computing & Systems, School of Technology, KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: ictfaculty@kcau.ac.ke | Tel: +254 710 888 022

3. Director of Career Development
   Head of Corporate Partnerships & Career Services, KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: careers@kcau.ac.ke | Tel: +254 710 888 022
================================================================================`;
  };

  // Plain Text Cover Letter Generator
  const generatePlainTextLetter = () => {
    const today = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    return `${fullName.toUpperCase()}
P.O. Box 56808-00200, Nairobi, Kenya
Phone: ${phone} | Email: ${email}
LinkedIn: ${personalInfo.linkedin} | Portfolio: ${personalInfo.portfolioUrl}

Date: ${today}

${recipientTitle}
${recipientDept}
${recipientOrg}
${postalLocation}

Dear Sir/Madam,

RE: APPLICATION FOR ${targetRole.toUpperCase()}

I am writing to formally submit my application for the position of ${targetRole} within ${recipientOrg}. I am an ambitious, technically disciplined Information Technology professional completing my Diploma in IT at KCA University (Student Reg. No: ${studentId}), and I am ${availabilityNote.toLowerCase()}.

Throughout my academic coursework and hands-on laboratory sessions at KCA University, I have maintained strong performance in core technical disciplines:
• Web Development (Grade A)
• Human-Computer Interaction (Grade A)
• Network Design & Setup (Grade A)
• Computer Architecture & Hardware (Grade A)
• Java Programming & OOP (Grade A-)
• Relational Database Systems & SQL (Grade A-)
• Systems Analysis & Design (Grade A-)
• Structured Cabling & Infrastructure (Grade B+)
• C Language & Low-Level Programming (Grade B+)
• Operating Systems & Linux Foundations (Grade B)

In addition to academic achievement, I bring practical hands-on capability:
1. PC Hardware Maintenance & Assembly: Full PC assembly/disassembly, diagnostics (RAM, SSD/HDD, PSU), and hardware fault repair.
2. Network Operations & Cabling: Structured RJ45 Ethernet termination (T568A/T568B), IPv4 addressing, and LAN/WLAN troubleshooting.
3. Systems Administration: Clean OS installations (Windows and Linux Ubuntu CLI), user management, and remote technical support.
4. Software Development: Object-oriented Java programming, relational SQL querying, and live commercial web deployments (Vercel & GitHub Pages).

My selection as National Runner-Up (2nd Place in Kenya) in the Junior Achievers competition in Mombasa demonstrates my work ethic, teamwork, problem-solving, and bilingual communication (Native Swahili, Fluent English).

I am eager to contribute immediate, reliable value to ${recipientOrg}. Enclosed are my Curriculum Vitae, academic result slips, and project portfolio. I welcome the opportunity to discuss my qualifications in an interview.

Thank you very much for your time and consideration.

Yours faithfully,

${fullName}
${phone} | ${email}`;
  };

  const handleDownloadTxt = (filename: string, content: string) => {
    const element = document.createElement('a');
    const file = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const blobUrl = URL.createObjectURL(file);
    element.href = blobUrl;
    element.download = filename;
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2500);
  };

  const handleDownloadPdf = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = getCareerSuitePdfTarget(activeTab);
    await triggerPdfDownload(target.fileUrl, target.downloadName);
    setPdfDownloaded(true);
    setTimeout(() => setPdfDownloaded(false), 2500);
  };

  return (
    <section id="career-suite" className="section" style={{ paddingTop: '2.5rem' }}>
      {/* Anchor for backward compatibility */}
      <div id="kca-application" style={{ position: 'relative', top: '-80px' }} />

      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(59, 130, 246, 0.12)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          padding: '6px 18px',
          borderRadius: '9999px',
          fontSize: '0.85rem',
          color: '#93c5fd',
          marginBottom: '1rem',
          fontWeight: 600
        }}>
          <Briefcase size={16} />
          <span>Professional Career & Employment Application Hub</span>
        </div>
        <h2>Job Application Suite & Professional CV</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.7' }}>
          Standardized Curriculum Vitae, customizable job application cover letters, and verified credentials dossier 
          tailored for technology employers like <strong>Cellulant</strong>, <strong>Blue Oak</strong>, telecommunications, and corporate IT departments.
        </p>
      </div>

      {/* Main Suite Container */}
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        {/* Navigation Tabs */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--glass-border)',
          background: 'rgba(5, 5, 5, 0.5)',
          overflowX: 'auto'
        }}>
          <button
            type="button"
            onClick={() => setActiveTab('cv')}
            style={{
              flex: '1 1 auto',
              padding: '1.1rem 1.5rem',
              background: activeTab === 'cv' ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'cv' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              color: activeTab === 'cv' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.94rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            <FileText size={18} color={activeTab === 'cv' ? 'var(--accent-blue)' : 'currentColor'} />
            <span>Professional CV (Kenyan & Tech Standard)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('letter')}
            style={{
              flex: '1 1 auto',
              padding: '1.1rem 1.5rem',
              background: activeTab === 'letter' ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'letter' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              color: activeTab === 'letter' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.94rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            <Mail size={18} color={activeTab === 'letter' ? 'var(--accent-blue)' : 'currentColor'} />
            <span>Tailored Job Application Letter</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('checklist')}
            style={{
              flex: '1 1 auto',
              padding: '1.1rem 1.5rem',
              background: activeTab === 'checklist' ? 'rgba(59, 130, 246, 0.15)' : 'transparent',
              border: 'none',
              borderBottom: activeTab === 'checklist' ? '2px solid var(--accent-blue)' : '2px solid transparent',
              color: activeTab === 'checklist' ? '#fff' : 'var(--text-secondary)',
              fontWeight: 600,
              fontSize: '0.94rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
          >
            <ShieldCheck size={18} color={activeTab === 'checklist' ? 'var(--accent-blue)' : 'currentColor'} />
            <span>Career Dossier & Verified Credentials</span>
          </button>
        </div>

        {/* Global Toolbar */}
        <div style={{
          padding: '1rem 1.5rem',
          background: 'rgba(15, 23, 42, 0.7)',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>Status:</span>
            <span style={{
              background: 'rgba(74, 222, 128, 0.15)',
              color: '#4ade80',
              border: '1px solid rgba(74, 222, 128, 0.3)',
              padding: '3px 10px',
              borderRadius: '9999px',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px'
            }}>
              <Check size={12} /> Ready for Tech Employment
            </span>
          </div>

          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => {
                const content = activeTab === 'cv' ? generatePlainTextCV() : generatePlainTextLetter();
                handleCopyText(activeTab, content);
              }}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              {copied === activeTab ? <Check size={15} color="#4ade80" /> : <Copy size={15} />}
              {copied === activeTab ? 'Copied Full Text!' : 'Copy Formatted Text'}
            </button>

            <a
              href={getCareerSuitePdfTarget(activeTab).fileUrl}
              download={getCareerSuitePdfTarget(activeTab).downloadName}
              onClick={handleDownloadPdf}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1.1rem', fontSize: '0.85rem' }}
            >
              {pdfDownloaded ? <Check size={15} /> : <Download size={15} />}
              {pdfDownloaded ? 'Downloaded!' : activeTab === 'letter' ? 'Download Cover Letter PDF' : 'Download Resume PDF'}
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Printer size={15} />
              Print Paper
            </button>

            <button
              type="button"
              onClick={() => {
                const isCv = activeTab === 'cv';
                const content = isCv ? generatePlainTextCV() : generatePlainTextLetter();
                const filename = isCv 
                  ? `${fullName.replace(/\s+/g, '_')}_Professional_CV.txt`
                  : `${fullName.replace(/\s+/g, '_')}_Job_Application_Letter.txt`;
                handleDownloadTxt(filename, content);
              }}
              className="btn btn-outline"
              style={{ padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}
              title="Download text file"
            >
              <Download size={15} />
              Download .TXT
            </button>
          </div>
        </div>

        {/* TAB 1: CURRICULUM VITAE */}
        {activeTab === 'cv' && (
          <div style={{ padding: '2rem 1.5rem', background: '#0a0f1d' }}>
            <div className="printable-paper" style={{
              background: '#ffffff',
              color: '#0f172a',
              maxWidth: '820px',
              margin: '0 auto',
              padding: '3rem 3.5rem',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              fontFamily: "'Times New Roman', Times, serif",
              lineHeight: '1.6'
            }}>
              {/* Header */}
              <div style={{ borderBottom: '2.5px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 4px', textTransform: 'uppercase', letterSpacing: '0.5px', color: '#0f172a' }}>
                  {fullName}
                </h1>
                <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1e3a8a', marginBottom: '4px' }}>
                  IT Support Specialist & Software Developer • Diploma in Information Technology
                </div>
                <div style={{ fontSize: '0.92rem', color: '#475569' }}>
                  Student Reg. No: <strong>{studentId}</strong> | School of Technology, KCA University
                </div>
                <div style={{ fontSize: '0.9rem', color: '#334155', marginTop: '6px' }}>
                  <strong>Phone / WhatsApp:</strong> {phone} &nbsp;|&nbsp; 
                  <strong>Email:</strong> {email} &nbsp;|&nbsp; 
                  <strong>Location:</strong> {location}
                </div>
                <div style={{ fontSize: '0.88rem', color: '#2563eb', marginTop: '4px' }}>
                  Portfolio: {personalInfo.portfolioUrl} &nbsp;|&nbsp; GitHub: {personalInfo.github} &nbsp;|&nbsp; LinkedIn: {personalInfo.linkedin}
                </div>
              </div>

              {/* Section 1: Career Objective */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  1. Career Objective
                </h2>
                <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.65', color: '#1e293b', textAlign: 'justify' }}>
                  A disciplined, highly motivated Information Technology professional completing a <strong>Diploma in IT at KCA University (Student Reg. No: {studentId})</strong>, seeking permanent or flexible roles in <strong>IT Support</strong>, <strong>Software Development (Java, Web, SQL)</strong>, or <strong>Network Infrastructure</strong>. 
                  Combines verified high academic performance in Web Systems (Grade A), Human-Computer Interaction (Grade A), Network Design (Grade A), Computer Architecture (Grade A), Java Programming (Grade A-), and Database Systems (Grade A-) with extensive hands-on laboratory experience in PC assembly/disassembly, structured cabling (T568A/B), OS formatting, and live web deployments. 
                  Committed to delivering dependable technical operations, prompt user troubleshooting, and high-quality software maintenance.
                </p>
              </div>

              {/* Section 2: Education Background */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  2. Education Background
                </h2>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, fontSize: '0.98rem' }}>
                    <span style={{ color: '#0f172a' }}>Diploma in Information Technology</span>
                    <span style={{ color: '#475569' }}>2025 – 2027 (Expected)</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.92rem' }}>
                    KCA University, School of Technology, Nairobi, Kenya
                  </div>

                  <div style={{ marginTop: '6px', fontSize: '0.9rem', color: '#334155' }}>
                    <strong>Verified Coursework Marks (KCA Transcript):</strong>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '4px 12px', marginTop: '4px' }}>
                      <div>• Web Development: <strong>Grade A</strong></div>
                      <div>• Human-Computer Interaction: <strong>Grade A</strong></div>
                      <div>• Network Design & Setup: <strong>Grade A</strong></div>
                      <div>• Computer Architecture: <strong>Grade A</strong></div>
                      <div>• Java Programming: <strong>Grade A-</strong></div>
                      <div>• Database Systems & SQL: <strong>Grade A-</strong></div>
                      <div>• Systems Analysis & Design: <strong>Grade A-</strong></div>
                      <div>• Structured Cabling: <strong>Grade B+</strong></div>
                      <div>• C Language & Systems: <strong>Grade B+</strong></div>
                      <div>• Data Structures & Algorithms: <strong>Grade B</strong></div>
                      <div>• Operating Systems: <strong>Grade B</strong></div>
                    </div>
                  </div>

                  <div style={{ marginTop: '6px', fontSize: '0.88rem', color: '#475569' }}>
                    <strong>Current Semester Units:</strong> Electronic Business Systems (E-Commerce & M-Pesa Integration), Desktop Publishing (DTP), Financial Management, Application Programming.
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#0f172a' }}>
                    Kenya Certificate of Secondary Education (KCSE)
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.92rem' }}>
                    • Riara High School (2019 – 2022)
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.92rem' }}>
                    • Aga Khan High School (2023 – 2024)
                  </div>
                </div>
              </div>

              {/* Section 3: Technical Competencies */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  3. Key Technical Competencies
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <div>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.95rem' }}>
                      • IT Support & Hardware Maintenance:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                      PC hardware assembly & disassembly, component diagnostics (RAM, SSD/HDD, PSU), clean OS formatting (Windows & Linux), driver updates, peripheral configuration, and remote technical support.
                    </span>
                  </div>

                  <div>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.95rem' }}>
                      • Networking & Infrastructure:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                      Structured cabling & crimping using RJ45 connectors (T568A/T568B), IPv4 addressing, subnetting, gateway & DNS configuration, LAN/WLAN troubleshooting, TCP/IP & OSI model fundamentals.
                    </span>
                  </div>

                  <div>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.95rem' }}>
                      • Programming & Database Systems:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                      Java (OOP principles: inheritance, encapsulation, polymorphism), C Language (pointers & low-level memory), Relational Databases (SQL schema design, normalization, complex JOINs in MySQL/PostgreSQL), HTML5, CSS3, JavaScript, React 19, TypeScript.
                    </span>
                  </div>

                  <div>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.95rem' }}>
                      • Systems Analysis & Business Systems:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                      SDLC requirements gathering, process mapping, Human-Computer Interaction (HCI usability & UI design), Electronic Business Systems (e-commerce & M-Pesa integration), Desktop Publishing (DTP), financial budgeting.
                    </span>
                  </div>

                  <div>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.95rem' }}>
                      • Systems Administration:
                    </strong>
                    <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                      Linux command-line navigation (Ubuntu/Debian bash, file hierarchies, user permissions), Windows enterprise administration, patch deployment, and cybersecurity hygiene.
                    </span>
                  </div>
                </div>
              </div>

              {/* Section 4: Projects */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  4. Practical Projects & Systems
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem', color: '#334155' }}>
                  <div>
                    <strong>1. First-Class Perfume E-Commerce System</strong> (Live at: https://first-class-perfume.vercel.app)
                    <div style={{ color: '#475569' }}>
                      Developed and deployed a commercial storefront with custom WhatsApp API ordering and Vercel hosting.
                    </div>
                  </div>

                  <div>
                    <strong>2. Car Showcase Responsive Platform</strong> (Live at: https://becca-afk.github.io/car-website/index.html)
                    <div style={{ color: '#475569' }}>
                      Modern responsive vehicle showcase built for cross-device usability and hosted on GitHub Pages.
                    </div>
                  </div>

                  <div>
                    <strong>3. Professional Portfolio & Application Suite</strong> (Live at: {personalInfo.portfolioUrl})
                    <div style={{ color: '#475569' }}>
                      Built with React 19 and TypeScript, featuring automated build verification and career application utilities.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5: Leadership & Honors */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  5. Honors, Leadership & Languages
                </h2>
                <ul style={{ margin: 0, paddingLeft: '1.25rem', fontSize: '0.9rem', color: '#334155', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <li>
                    <strong>National Runner-Up (2nd Place in Kenya):</strong> Junior Achievers Kenya national competition (Mombasa). Recognized for team leadership, business model presentation, and pitching.
                  </li>
                  <li>
                    <strong>Bilingual Proficiency:</strong> Native Swahili, Fluent English (professional oral communication and technical writing).
                  </li>
                  <li>
                    <strong>Autonomous Technical Learner:</strong> Independently learned modern frontend deployment workflows on Vercel and GitHub Pages.
                  </li>
                </ul>
              </div>

              {/* Section 6: Referees */}
              <div>
                <h2 style={{ fontSize: '1.15rem', color: '#1e3a8a', borderBottom: '1.5px solid #cbd5e1', paddingBottom: '3px', marginBottom: '8px', fontWeight: 700, textTransform: 'uppercase' }}>
                  6. Academic & Professional Referees
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', fontSize: '0.88rem' }}>
                  {defaultReferees.map((ref, i) => (
                    <div key={i} style={{ border: '1px solid #cbd5e1', padding: '10px 12px', borderRadius: '4px', background: '#f8fafc' }}>
                      <strong style={{ display: 'block', color: '#0f172a', fontSize: '0.94rem' }}>{ref.name}</strong>
                      <span style={{ color: '#475569', display: 'block' }}>{ref.title}</span>
                      <span style={{ color: '#475569', display: 'block' }}>{ref.institution}</span>
                      <span style={{ color: '#1e3a8a', display: 'block', marginTop: '4px' }}>{ref.email}</span>
                      <span style={{ color: '#475569', display: 'block' }}>{ref.phone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: JOB APPLICATION LETTER */}
        {activeTab === 'letter' && (
          <div style={{ padding: '2rem 1.5rem', background: '#0a0f1d' }}>
            {/* Customizer Box */}
            <div style={{
              maxWidth: '820px',
              margin: '0 auto 2rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(15, 23, 42, 0.8)',
              border: '1px solid var(--glass-border)',
              borderRadius: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                <Settings2 size={18} color="var(--accent-blue)" />
                <h3 style={{ margin: 0, fontSize: '1.05rem', color: '#fff', fontWeight: 600 }}>
                  Customize Application Target & Recipient
                </h3>
              </div>

              {/* Preset Buttons */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => handlePresetChange('cellulant')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: targetPreset === 'cellulant' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff'
                  }}
                >
                  Cellulant (Fintech / Operations)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetChange('blue-oak')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: targetPreset === 'blue-oak' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff'
                  }}
                >
                  Blue Oak (Software / Support)
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetChange('enterprise')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: targetPreset === 'enterprise' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff'
                  }}
                >
                  Corporate Enterprise IT
                </button>
                <button
                  type="button"
                  onClick={() => handlePresetChange('custom')}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.84rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    background: targetPreset === 'custom' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: '#fff'
                  }}
                >
                  Custom Target
                </button>
              </div>

              {/* Editable Fields Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.9rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '4px' }}>Target Company</label>
                  <input
                    type="text"
                    value={recipientOrg}
                    onChange={(e) => setRecipientOrg(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid var(--glass-border)',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.86rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '4px' }}>Position Title</label>
                  <input
                    type="text"
                    value={targetRole}
                    onChange={(e) => setTargetRole(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid var(--glass-border)',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.86rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '4px' }}>Department / Division</label>
                  <input
                    type="text"
                    value={recipientDept}
                    onChange={(e) => setRecipientDept(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid var(--glass-border)',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.86rem'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: '#94a3b8', marginBottom: '4px' }}>Recipient Contact Title</label>
                  <input
                    type="text"
                    value={recipientTitle}
                    onChange={(e) => setRecipientTitle(e.target.value)}
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid var(--glass-border)',
                      padding: '7px 10px',
                      borderRadius: '6px',
                      color: '#fff',
                      fontSize: '0.86rem'
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Letter Paper */}
            <div className="printable-paper" style={{
              background: '#ffffff',
              color: '#0f172a',
              maxWidth: '820px',
              margin: '0 auto',
              padding: '3rem 3.5rem',
              borderRadius: '8px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
              fontFamily: "'Times New Roman', Times, serif",
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              {/* Applicant Address Header */}
              <div style={{ textAlign: 'right', marginBottom: '1.75rem', color: '#1e293b' }}>
                <strong style={{ fontSize: '1.15rem', display: 'block', textTransform: 'uppercase' }}>{fullName}</strong>
                <span>P.O. Box 56808-00200, Nairobi, Kenya</span><br />
                <span>Phone: {phone} &nbsp;|&nbsp; Email: {email}</span><br />
                <span>Portfolio: {personalInfo.portfolioUrl}</span><br />
                <span style={{ color: '#475569', display: 'block', marginTop: '6px' }}>
                  {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
              </div>

              {/* Recipient Address */}
              <div style={{ marginBottom: '1.75rem', color: '#1e293b' }}>
                <strong>{recipientTitle}</strong><br />
                <span>{recipientDept}</span><br />
                <span>{recipientOrg}</span><br />
                <span>{postalLocation}</span>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                Dear Sir/Madam,
              </div>

              {/* Subject Line */}
              <div style={{
                fontWeight: 700,
                fontSize: '1.05rem',
                textTransform: 'uppercase',
                borderBottom: '1.5px solid #0f172a',
                paddingBottom: '4px',
                marginBottom: '1.5rem',
                color: '#0f172a'
              }}>
                RE: APPLICATION FOR {targetRole.toUpperCase()}
              </div>

              {/* Letter Body */}
              <div style={{ color: '#1e293b', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <p style={{ margin: 0 }}>
                  I am writing to formally submit my application for the position of <strong>{targetRole}</strong> at <strong>{recipientOrg}</strong>. I am an ambitious, technically disciplined Information Technology professional completing my <strong>Diploma in IT at KCA University (Student Reg. No: {studentId})</strong>, and I am {availabilityNote.toLowerCase()}.
                </p>

                <p style={{ margin: 0 }}>
                  Throughout my academic coursework at KCA University, I have maintained strong performance in core technical disciplines: 
                  <strong> Grade A in Web Development</strong>, 
                  <strong> Grade A in Human-Computer Interaction</strong>, 
                  <strong> Grade A in Network Design & Setup</strong>, 
                  <strong> Grade A in Computer Architecture</strong>, 
                  <strong> Grade A- in Java Programming</strong>, 
                  <strong> Grade A- in Relational Database Systems (SQL)</strong>, and 
                  <strong> Grade A- in Systems Analysis & Design</strong>. 
                  My training spans both theoretical foundations and hands-on laboratory application.
                </p>

                <p style={{ margin: 0 }}>
                  I am confident in my capacity to add immediate practical value to your technical team in:
                </p>

                <ul style={{ margin: 0, paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <li>
                    <strong>PC Hardware & Workstation Support:</strong> Precision component assembly, hardware troubleshooting (RAM, SSD/HDD, PSU), and preventive maintenance.
                  </li>
                  <li>
                    <strong>Network Infrastructure & Cabling:</strong> Structured cabling with RJ45 crimping (T568A/T568B), IPv4 addressing, and LAN/WLAN connectivity troubleshooting.
                  </li>
                  <li>
                    <strong>Operating Systems & Administration:</strong> Clean installations of Windows and Linux (Ubuntu CLI/bash), driver setups, and user support.
                  </li>
                  <li>
                    <strong>Software & Database Systems:</strong> Object-oriented Java programming, relational SQL database modeling, and live web deployments on Vercel and GitHub Pages.
                  </li>
                </ul>

                <p style={{ margin: 0 }}>
                  In addition to technical proficiencies, my recognition as a <strong>National Runner-Up (2nd Place in Kenya)</strong> in the Junior Achievers competition in Mombasa demonstrates my disciplined work ethic, accountability, problem solving, and effective bilingual communication (Native Swahili, Fluent English).
                </p>

                <p style={{ margin: 0 }}>
                  Enclosed are my Curriculum Vitae, certified academic course records, and project demonstrations. I would welcome the opportunity to attend an interview at your earliest convenience to discuss how my skillset aligns with {recipientOrg}'s objectives.
                </p>

                <p style={{ margin: 0 }}>
                  Thank you very much for your time and consideration.
                </p>
              </div>

              {/* Sign-off */}
              <div style={{ marginTop: '2.5rem', color: '#1e293b' }}>
                Yours faithfully,<br /><br />
                <div style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#0f172a' }}>
                  {fullName}
                </div>
                <span style={{ fontSize: '0.92rem', color: '#475569' }}>
                  {phone} | {email}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CAREER DOSSIER & VERIFIED CREDENTIALS */}
        {activeTab === 'checklist' && (
          <div style={{ padding: '2rem 1.5rem' }}>
            <div style={{ maxWidth: '850px', margin: '0 auto' }}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(15, 23, 42, 0.6) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.3)',
                padding: '1.5rem',
                borderRadius: '12px',
                marginBottom: '2rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <ShieldCheck size={22} color="#60a5fa" />
                  <h3 style={{ margin: 0, color: '#fff', fontSize: '1.18rem', fontWeight: 700 }}>
                    Career Application Dossier & Verified Credentials
                  </h3>
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', margin: 0, lineHeight: '1.6' }}>
                  A complete, professional portfolio dossier prepared for employment screening, technical assessments, and HR verification at leading technology companies and enterprise departments.
                </p>
              </div>

              {/* Checklist Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {careerDossierChecklist.map((req) => (
                  <div
                    key={req.id}
                    style={{
                      background: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '10px',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '1rem'
                    }}
                  >
                    <div style={{ maxWidth: '620px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span style={{
                          background: req.status === 'ready' ? 'rgba(74, 222, 128, 0.15)' : 'rgba(59, 130, 246, 0.15)',
                          color: req.status === 'ready' ? '#4ade80' : '#93c5fd',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          textTransform: 'uppercase'
                        }}>
                          {req.status === 'ready' ? 'Ready & Verified' : req.status === 'verified' ? 'Institutionally Verified' : 'Standard Document'}
                        </span>
                        <h4 style={{ margin: 0, color: '#fff', fontSize: '1.05rem', fontWeight: 600 }}>
                          {req.title}
                        </h4>
                      </div>
                      <p style={{ margin: '4px 0 8px', color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: '1.5' }}>
                        {req.description}
                      </p>
                      <span style={{ fontSize: '0.8rem', color: '#60a5fa' }}>
                        Source: {req.source}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {req.id === 'cv' && (
                        <button
                          type="button"
                          onClick={() => setActiveTab('cv')}
                          className="btn btn-outline"
                          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                        >
                          View CV
                        </button>
                      )}
                      {req.id === 'application-letter' && (
                        <button
                          type="button"
                          onClick={() => setActiveTab('letter')}
                          className="btn btn-outline"
                          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                        >
                          View Letter
                        </button>
                      )}
                      {req.id === 'projects' && (
                        <a
                          href="#projects"
                          className="btn btn-outline"
                          style={{ padding: '0.4rem 0.85rem', fontSize: '0.8rem' }}
                        >
                          View Work
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerSuite;
