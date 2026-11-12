import React, { useState } from 'react';
import {
  FileText,
  Printer,
  Copy,
  Check,
  Building2,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Edit3,
  Calendar,
  Send,
  Download,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  Award,
  Layers,
  FileCheck
} from 'lucide-react';
import {
  personalInfo,
  completedCoursework,
  currentStudies,
  defaultReferees,
  attachmentChecklist,
  AttachmentRequirement
} from '../data/portfolioData';

export const KcaAttachmentSuite: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cv' | 'letter' | 'checklist'>('cv');
  const [copied, setCopied] = useState(false);
  const [copiedType, setCopiedType] = useState<string>('');
  const [isEditing, setIsEditing] = useState(false);
  const [fontStyle, setFontStyle] = useState<'traditional' | 'modern'>('traditional');
  const [targetPreset, setTargetPreset] = useState<'kca' | 'external'>('kca');

  // Custom user fields
  const [fullName, setFullName] = useState(personalInfo.fullName);
  const [studentId, setStudentId] = useState(personalInfo.studentId);
  const [phone, setPhone] = useState(personalInfo.formattedPhone);
  const [email, setEmail] = useState(personalInfo.email);
  const [personalEmail, setPersonalEmail] = useState(personalInfo.personalEmail);
  const [attachmentDates, setAttachmentDates] = useState(personalInfo.attachmentPeriod);
  const [location, setLocation] = useState(personalInfo.location);
  const [postalAddress, setPostalAddress] = useState(personalInfo.postalAddress);

  // Recipient info
  const [recipientTitle, setRecipientTitle] = useState('The Director, Directorate of ICT Services');
  const [recipientOrg, setRecipientOrg] = useState('KCA University');
  const [recipientAddress, setRecipientAddress] = useState('Main Campus, Off Thika Road, Ruaraka, P.O. Box 56808-00200, Nairobi, Kenya');

  // Checklist state tracking
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'cv': true,
    'application-letter': true,
  });

  const toggleChecklist = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleTargetChange = (preset: 'kca' | 'external') => {
    setTargetPreset(preset);
    if (preset === 'kca') {
      setRecipientTitle('The Director, Directorate of ICT Services');
      setRecipientOrg('KCA University');
      setRecipientAddress('Main Campus, Off Thika Road, Ruaraka, P.O. Box 56808-00200, Nairobi, Kenya');
    } else {
      setRecipientTitle('The Human Resource Manager / Head of ICT');
      setRecipientOrg('Targeted Organization / Institution');
      setRecipientAddress('P.O. Box [Organization Box], Nairobi, Kenya');
    }
  };

  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Generate plain text CV formatted to Kenyan standard
  const getCvText = () => {
    return `================================================================================
CURRICULUM VITAE
================================================================================

1. PERSONAL DETAILS
--------------------------------------------------------------------------------
Full Name:           ${fullName}
Nationality:         Kenyan
Student Reg. No:     ${studentId}
Institution:         KCA University (School of Technology)
Course:              Diploma in Information Technology
Phone:               ${phone} / ${personalInfo.phone}
Institutional Email: ${email}
Personal Email:      ${personalEmail}
Postal Address:      ${postalAddress}
Location:            ${location}
GitHub Profile:      ${personalInfo.github}
LinkedIn Profile:    ${personalInfo.linkedin}
Portfolio Website:   ${personalInfo.portfolioUrl}


2. CAREER OBJECTIVE (INDUSTRIAL ATTACHMENT)
--------------------------------------------------------------------------------
A proactive, dedicated second-year Diploma in Information Technology student at 
KCA University (Student Reg. No: ${studentId}) seeking a 3-month industrial 
attachment (${attachmentDates}) in ${targetPreset === 'kca' ? "KCA University's Directorate of ICT Services" : "an established IT department"}. 
Eager to apply strong theoretical foundations in Computer Architecture (Grade A), 
Web Development (Grade A), Database Systems (Grade A-), and Operating Systems (Grade B), 
together with self-taught Linux administration and AWS cloud fundamentals, to 
support computer hardware maintenance, local network (LAN/WLAN) connectivity, 
user technical support, and institutional database administration.


3. EDUCATIONAL BACKGROUND (REVERSE CHRONOLOGICAL)
--------------------------------------------------------------------------------
• 2025 – 2027 (Expected): Diploma in Information Technology
  Institution: KCA University, School of Technology, Nairobi, Kenya
  Student Registration No: ${studentId}
  Core Coursework Results:
    - Web Development: Grade A
    - Computer Architecture & Organization: Grade A
    - Database Management Systems: Grade A-
    - Operating Systems: Grade B
  Current Units in Progress:
    - Java Programming, Network Design, Application Programming, Data Structures, Discrete Mathematics

• 2020 – 2024: Kenya Certificate of Secondary Education (KCSE)
  Institution: The Aga Khan High School, Nairobi
  Attainment: KCSE Certificate (Mean Grade: C)

• 2012 – 2019: Kenya Certificate of Primary Education (KCPE)
  Institution: Primary Education, Nairobi, Kenya
  Attainment: KCPE Certificate


4. TECHNICAL COMPETENCIES & PRACTICAL SKILLS
--------------------------------------------------------------------------------
• IT Hardware & Lab Maintenance:
  - Computer hardware diagnostics, assembly, component upgrades (RAM, HDD/SSD, PSU).
  - Operating system formatting, clean installation (Windows 10/11 & Linux distributions).
  - Printer configuration, network scanner setup, and campus laboratory maintenance.
  - Basic motherboard diagnostics and BIOS/UEFI firmware configuration.

• Network Support & Cabling:
  - Local Area Network (LAN) and Wireless Network (WLAN) connectivity troubleshooting.
  - Ethernet cable termination and crimping using RJ45 connectors (T568A/T568B standards).
  - Understanding of TCP/IP suite, IPv4 addressing, subnet masks, default gateways, and DNS.
  - Basic Wi-Fi access point deployment and user authentication onboarding.

• Operating Systems & Systems Administration:
  - Linux command line proficiency (Ubuntu, Debian): user permissions, shell commands, file hierarchy.
  - Windows Server and client OS troubleshooting.
  - Antivirus deployment, security patch updates, and desktop maintenance.

• Database Systems:
  - Relational Database Management Systems (RDBMS): MySQL, PostgreSQL.
  - SQL querying (SELECT, INSERT, UPDATE, DELETE, multi-table JOINs, schema design, DDL/DML).
  - Database normalization (1NF, 2NF, 3NF), backups, and data integrity safeguards.

• Software & Web Development:
  - Front-end technologies: HTML5, CSS3, JavaScript (ES6+), responsive design principles.
  - Programming: Java (Object-Oriented Programming principles: encapsulation, inheritance, polymorphism).
  - API Integration: WhatsApp Business API integration for automated customer ordering.
  - Version Control: Git and GitHub repository management.

• Cloud & Cyber Security Awareness:
  - AWS Cloud Practitioner foundational concepts (EC2, S3 storage, IAM roles).
  - Data protection, password hygiene, access control, and confidentiality compliance.


5. PRACTICAL PROJECTS & APPLIED SYSTEMS
--------------------------------------------------------------------------------
1. First-Class Perfume E-Commerce Platform
   - Live URL: https://first-class-perfume.vercel.app
   - Developed a responsive commercial product portal featuring an automated WhatsApp 
     order processing flow to streamline customer checkout and communication.
   - Technologies: HTML5, CSS3, JavaScript, WhatsApp API, Vercel deployment.

2. Automotive Inventory & Showcase Gallery
   - Live URL: https://becca-afk.github.io/car-website/index.html
   - Designed a modern, responsive showcase displaying vehicle inventory across 
     mobile, tablet, and desktop viewports.
   - Technologies: HTML5, CSS3, Flexbox/Grid, GitHub Pages.

3. Interactive Cloud & IT Portfolio
   - Designed and built a high-performance modern web app using React 19 and 
     TypeScript to showcase coursework, practical projects, and printable document suites.


6. LEADERSHIP, HONORS & AWARDS
--------------------------------------------------------------------------------
• National Runner-Up (2nd Place, Kenya): Junior Achievers Kenya
  - Recognized nationally for teamwork, innovation, business acumen, and presentation skills.
• Active Member, KCA University Tech Community
  - Engaging in peer tech workshops, code reviews, and student developer groups.


7. KEY ATTRIBUTES & SOFT SKILLS
--------------------------------------------------------------------------------
• Diagnostic mindset with systematic approach to hardware and network troubleshooting.
• Rapid learner eager to receive training on proprietary institutional software and tools.
• High personal integrity, punctuality, and strict respect for confidential student/staff data.
• Strong written and oral communication skills.
• Collaborative team player with positive attitude under pressure.


8. REFEREES
--------------------------------------------------------------------------------
1. Dr. Simon M. Ndung'u
   Dean, School of Technology
   KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: technology@kcau.ac.ke | Tel: +254 710 888 022

2. Industrial Attachment Coordinator
   Directorate of Career Services & Attachment
   KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: attachment@kcau.ac.ke | Tel: +254 710 888 022

3. Head of Computing & Informatics
   Senior Lecturer, School of Technology
   KCA University
   P.O. Box 56808-00200, Nairobi, Kenya
   Email: ictfaculty@kcau.ac.ke | Tel: +254 710 888 022
================================================================================`;
  };

  // Generate plain text formal application letter
  const getApplicationLetterText = () => {
    return `${fullName}
Student Reg. No: ${studentId}
School of Technology, KCA University
${postalAddress}
Email: ${email} | Phone: ${phone}

Date: ${currentDate}

${recipientTitle}
${recipientOrg}
${recipientAddress}

Dear Sir/Madam,

RE: APPLICATION FOR A 3-MONTH INDUSTRIAL ATTACHMENT IN THE ICT DEPARTMENT (${attachmentDates.toUpperCase()})

I am writing to formally submit my application to undertake my mandatory three-month industrial attachment in the ${targetPreset === 'kca' ? 'Directorate of ICT Services at KCA University' : 'ICT / Technology Department at ' + recipientOrg}, scheduled for ${attachmentDates}. I am a dedicated second-year student at KCA University currently pursuing a Diploma in Information Technology under student registration number ${studentId}.

As part of my curriculum at KCA University, students are required to undertake an industrial attachment to apply theoretical computing principles to real-world operational environments. In my academic coursework, I have consistently maintained exemplary performance in core technical disciplines:
• Web Development (Grade A)
• Computer Architecture & Hardware (Grade A)
• Database Management Systems (Grade A-)
• Operating Systems & Linux Foundations (Grade B)

I am currently undertaking advanced units in Java Programming, Network Design, Application Programming, and Data Structures. Complementing my university coursework, I am an active self-driven technology practitioner with practical skills in Linux command-line administration, SQL querying (MySQL/PostgreSQL), and cloud architecture basics (AWS).

${targetPreset === 'kca' 
  ? "As a bona fide KCA University student, I am intimately familiar with our campus computing facilities, student labs, and administrative digital services. I am enthusiastic about contributing immediate practical support to the ICT Services team in:" 
  : "I am eager to contribute practical, disciplined value to your esteemed organization by assisting your IT team with:"}
1. PC hardware assembly, diagnostics, preventive maintenance, and workstation support.
2. Local Area Network (LAN/WLAN) connectivity, Ethernet cabling (RJ-45 crimping), and IP configuration.
3. Operating system formatting, software installation, driver updates, and end-user technical assistance.
4. Database upkeep, web application maintenance, and institutional digital systems support.

In addition to technical competence, my selection as a National Runner-Up (2nd Place in Kenya) in the Junior Achievers competition attests to my strong work ethic, interpersonal communication, teamwork, and accountability. I hold confidentiality and data protection in the highest regard.

Enclosed herewith are my Curriculum Vitae, academic result slips, and copies of credentials for your review. I would be honoured to attend an interview at your convenience.

Thank you very much for your time and consideration.

Yours faithfully,

${fullName}
Student Registration No: ${studentId}
Diploma in Information Technology, KCA University`;
  };

  const handleCopy = (type: 'cv' | 'letter') => {
    const text = type === 'cv' ? getCvText() : getApplicationLetterText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setCopiedType(type);
    setTimeout(() => {
      setCopied(false);
      setCopiedType('');
    }, 2800);
  };

  const handleDownloadTxt = (type: 'cv' | 'letter') => {
    const text = type === 'cv' ? getCvText() : getApplicationLetterText();
    const filename = type === 'cv'
      ? `${fullName.replace(/\s+/g, '_')}_KCA_Attachment_CV.txt`
      : `${fullName.replace(/\s+/g, '_')}_Attachment_Application_Letter.txt`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="kca-application" className="section">
      {/* Header Banner */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          background: 'rgba(59, 130, 246, 0.15)',
          border: '1px solid rgba(59, 130, 246, 0.35)',
          padding: '6px 16px',
          borderRadius: '9999px',
          color: '#93c5fd',
          fontSize: '0.88rem',
          fontWeight: 600,
          marginBottom: '1rem',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.2)'
        }}>
          <Building2 size={16} color="#60a5fa" />
          <span>Kenyan Employer & KCA Industrial Attachment Suite</span>
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800 }}>
          Attachment CV & Formal Application Documents
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '780px', margin: '0 auto', fontSize: '1.02rem', lineHeight: '1.7' }}>
          Crafted to meet the strict standards required by <strong>KCA University</strong> and <strong>Kenyan employers</strong>. Highlighting academic coursework grades, hardware & network troubleshooting proficiencies, Junior Achievers leadership, and accredited KCA referees. Ready to print, export to PDF, or copy directly for Word.
        </p>
      </div>

      {/* Control & Customization Toolbar */}
      <div className="glass-card" style={{ padding: '1.25rem 1.75rem', marginBottom: '1.75rem' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          {/* Main Navigation Tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('cv')}
              style={{
                background: activeTab === 'cv' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid ' + (activeTab === 'cv' ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <GraduationCap size={17} />
              Attachment CV (Kenyan Standard)
            </button>

            <button
              onClick={() => setActiveTab('letter')}
              style={{
                background: activeTab === 'letter' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid ' + (activeTab === 'letter' ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <FileText size={17} />
              Formal Application Letter
            </button>

            <button
              onClick={() => setActiveTab('checklist')}
              style={{
                background: activeTab === 'checklist' ? 'var(--accent-blue)' : 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                border: '1px solid ' + (activeTab === 'checklist' ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.6rem 1.25rem',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.92rem',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'all 0.2s ease'
              }}
            >
              <FileCheck size={17} />
              Attachment Document Checklist
            </button>
          </div>

          {/* Quick Actions (Print, Copy, Download, Customize) */}
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => setIsEditing(!isEditing)}
              style={{
                background: isEditing ? 'rgba(59, 130, 246, 0.25)' : 'rgba(255, 255, 255, 0.06)',
                color: isEditing ? '#93c5fd' : '#e2e8f0',
                border: '1px solid ' + (isEditing ? 'var(--accent-blue)' : 'var(--glass-border)'),
                padding: '0.55rem 1rem',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.88rem',
                fontWeight: 500
              }}
            >
              <Edit3 size={15} />
              {isEditing ? 'Hide Editor' : 'Customize Details'}
            </button>

            {activeTab !== 'checklist' && (
              <>
                <button
                  onClick={() => handleCopy(activeTab)}
                  className="btn btn-outline"
                  style={{ padding: '0.55rem 1.1rem', fontSize: '0.88rem' }}
                  title="Copies clean text formatted with proper headings and bullets"
                >
                  {copied && copiedType === activeTab ? <Check size={15} color="#4ade80" /> : <Copy size={15} />}
                  {copied && copiedType === activeTab ? 'Copied to Clipboard!' : 'Copy Text'}
                </button>

                <button
                  onClick={() => handleDownloadTxt(activeTab)}
                  className="btn btn-outline"
                  style={{ padding: '0.55rem 1rem', fontSize: '0.88rem' }}
                  title="Download plain-text file ready for Microsoft Word or Google Docs"
                >
                  <Download size={15} />
                  Download .TXT
                </button>

                <button
                  onClick={handlePrint}
                  className="btn btn-primary"
                  style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem', fontWeight: 600 }}
                  title="Prints document cleanly on A4 paper or saves as PDF"
                >
                  <Printer size={16} />
                  Print / Save PDF
                </button>
              </>
            )}
          </div>
        </div>

        {/* Target Destination Switcher */}
        <div style={{
          marginTop: '1rem',
          paddingTop: '0.9rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
          fontSize: '0.88rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Target Employer Preset:</span>
            <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.5)', padding: '3px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <button
                type="button"
                onClick={() => handleTargetChange('kca')}
                style={{
                  background: targetPreset === 'kca' ? 'var(--accent-blue)' : 'transparent',
                  color: targetPreset === 'kca' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: targetPreset === 'kca' ? 600 : 400
                }}
              >
                KCA University ICT Services
              </button>
              <button
                type="button"
                onClick={() => handleTargetChange('external')}
                style={{
                  background: targetPreset === 'external' ? 'var(--accent-blue)' : 'transparent',
                  color: targetPreset === 'external' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: targetPreset === 'external' ? 600 : 400
                }}
              >
                External Kenyan Employer / Company
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: 'var(--text-secondary)' }}>Document Font:</span>
            <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.5)', padding: '3px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <button
                type="button"
                onClick={() => setFontStyle('traditional')}
                style={{
                  background: fontStyle === 'traditional' ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                  color: fontStyle === 'traditional' ? '#93c5fd' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontFamily: 'serif'
                }}
              >
                Times New Roman (Formal)
              </button>
              <button
                type="button"
                onClick={() => setFontStyle('modern')}
                style={{
                  background: fontStyle === 'modern' ? 'rgba(59, 130, 246, 0.3)' : 'transparent',
                  color: fontStyle === 'modern' ? '#93c5fd' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontFamily: 'sans-serif'
                }}
              >
                Inter / Clean Sans
              </button>
            </div>
          </div>
        </div>

        {/* Notification Toast for Copy */}
        {copied && (
          <div style={{
            marginTop: '0.9rem',
            padding: '0.65rem 1rem',
            background: 'rgba(34, 197, 94, 0.15)',
            border: '1px solid rgba(34, 197, 94, 0.4)',
            borderRadius: '8px',
            color: '#86efac',
            fontSize: '0.88rem',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            animation: 'fadeIn 0.2s ease-out'
          }}>
            <CheckCircle2 size={16} />
            <span>
              <strong>Successfully copied!</strong> Formatted text is now on your clipboard — you can paste directly into Microsoft Word, Google Docs, or your email.
            </span>
          </div>
        )}

        {/* Customization Drawer */}
        {isEditing && (
          <div style={{
            marginTop: '1.25rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--glass-border)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
            gap: '1rem',
            background: 'rgba(0, 0, 0, 0.25)',
            padding: '1.25rem',
            borderRadius: '12px'
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Full Name (Official Kenyan ID Name)
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                KCA Student Registration Number
              </label>
              <input
                type="text"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Phone Number (Safaricom / Airtel)
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                KCA Student Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Personal Email
              </label>
              <input
                type="email"
                value={personalEmail}
                onChange={(e) => setPersonalEmail(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Attachment Period
              </label>
              <input
                type="text"
                value={attachmentDates}
                onChange={(e) => setAttachmentDates(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Recipient Title (Cover Letter)
              </label>
              <input
                type="text"
                value={recipientTitle}
                onChange={(e) => setRecipientTitle(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Recipient Organization
              </label>
              <input
                type="text"
                value={recipientOrg}
                onChange={(e) => setRecipientOrg(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(5, 5, 5, 0.85)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontSize: '0.9rem'
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Main Document Display */}
      <div className="printable-document-container">
        {/* TAB 1: CURRICULUM VITAE */}
        {activeTab === 'cv' && (
          <div
            className="formal-paper cv-paper"
            style={{ fontFamily: fontStyle === 'traditional' ? "'Times New Roman', Times, serif" : "'Inter', -apple-system, sans-serif" }}
          >
            {/* Header / Personal Details */}
            <div className="cv-header" style={{ borderBottom: '2.5px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.25rem' }}>
              <div style={{ textAlign: 'center', marginBottom: '0.75rem' }}>
                <h1 style={{
                  fontSize: '1.95rem',
                  letterSpacing: '1px',
                  color: '#0f172a',
                  margin: 0,
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  {fullName}
                </h1>
                <p style={{
                  fontSize: '1.02rem',
                  color: '#1e3a8a',
                  fontWeight: 700,
                  margin: '4px 0 0'
                }}>
                  Candidate for Industrial Attachment • Diploma in Information Technology
                </p>
                <p style={{
                  fontSize: '0.92rem',
                  color: '#334155',
                  fontWeight: 600,
                  margin: '2px 0 0'
                }}>
                  Student Reg. No: <strong>{studentId}</strong> • KCA University (School of Technology)
                </p>
              </div>

              {/* Contact Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px 16px',
                fontSize: '0.88rem',
                color: '#475569',
                borderTop: '1px solid #e2e8f0',
                paddingTop: '8px'
              }}>
                <span><strong>Phone:</strong> {phone} / {personalInfo.phone}</span>
                <span>•</span>
                <span><strong>Email:</strong> {email}</span>
                <span>•</span>
                <span><strong>Personal:</strong> {personalEmail}</span>
                <span>•</span>
                <span><strong>Location:</strong> {location}</span>
                <span>•</span>
                <span><strong>Nationality:</strong> Kenyan</span>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px 16px',
                fontSize: '0.85rem',
                color: '#1e3a8a',
                marginTop: '4px'
              }}>
                <span>GitHub: <u>github.com/becca-afk</u></span>
                <span>•</span>
                <span>LinkedIn: <u>linkedin.com/in/becca-afk</u></span>
                <span>•</span>
                <span>Portfolio: <u>{personalInfo.portfolioUrl}</u></span>
              </div>
            </div>

            {/* Section 1: Career Objective */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                1. Career Objective (Industrial Attachment)
              </h2>
              <p style={{ margin: 0, fontSize: '0.94rem', lineHeight: '1.6', color: '#1e293b', textAlign: 'justify' }}>
                A disciplined, proactive second-year student at KCA University pursuing a <strong>Diploma in Information Technology (Student Reg. No: {studentId})</strong>, seeking a 3-month industrial attachment placement (<strong>{attachmentDates}</strong>) in {targetPreset === 'kca' ? "KCA University's Directorate of ICT Services" : "an established Information Technology department"}. 
                Combines high academic achievement in computer architecture, web systems development, relational database modeling, and operating systems with hands-on practice in Linux CLI troubleshooting and AWS cloud fundamentals. Dedicated to delivering reliable hardware maintenance, LAN/WLAN support, software installation, and end-user customer care while satisfying institutional curriculum requirements.
              </p>
            </div>

            {/* Section 2: Education Background */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                2. Educational Background
              </h2>

              {/* Tertiary */}
              <div style={{ marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, color: '#0f172a', fontSize: '0.98rem' }}>
                  <span>Diploma in Information Technology</span>
                  <span>2025 – 2027 (Expected)</span>
                </div>
                <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.92rem' }}>
                  KCA University, School of Technology, Nairobi, Kenya
                </div>
                <div style={{ marginTop: '4px', fontSize: '0.9rem', color: '#1e293b' }}>
                  <strong>Key Academic Performance & Relevant Coursework:</strong>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '4px 12px',
                  fontSize: '0.88rem',
                  marginTop: '4px',
                  background: '#f8fafc',
                  padding: '6px 10px',
                  borderRadius: '4px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div>• <strong>Web Development:</strong> Grade A (Top Grade)</div>
                  <div>• <strong>Computer Architecture:</strong> Grade A (Hardware & Systems)</div>
                  <div>• <strong>Database Systems:</strong> Grade A- (Relational SQL)</div>
                  <div>• <strong>Operating Systems:</strong> Grade B (Linux & Process Mgmt)</div>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#475569', marginTop: '4px' }}>
                  <strong>Current Units in Progress:</strong> Java Programming, Network Design, Application Programming, Data Structures, Discrete Mathematics.
                </div>
              </div>

              {/* Secondary */}
              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
                  <span>Kenya Certificate of Secondary Education (KCSE)</span>
                  <span>Completed (2020 – 2024)</span>
                </div>
                <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.9rem' }}>
                  The Aga Khan High School, Nairobi, Kenya
                </div>
                <div style={{ fontSize: '0.88rem', color: '#334155' }}>
                  Attainment: KCSE Certificate (Mean Grade: C)
                </div>
              </div>

              {/* Primary */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 700, color: '#0f172a', fontSize: '0.92rem' }}>
                  <span>Kenya Certificate of Primary Education (KCPE)</span>
                  <span>Completed</span>
                </div>
                <div style={{ color: '#475569', fontSize: '0.88rem' }}>
                  Primary School Certificate, Nairobi, Kenya
                </div>
              </div>
            </div>

            {/* Section 3: Technical Competencies */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                3. Technical Proficiencies & IT Support Competencies
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px 16px', fontSize: '0.9rem', color: '#1e293b' }}>
                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Hardware & Desktop Maintenance:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    PC assembly, diagnostics, RAM/HDD replacement, printer setup, BIOS/UEFI setup, computer lab preventive upkeep.
                  </span>
                </div>

                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Networking & Infrastructure Support:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    LAN/WLAN connectivity, RJ45 Ethernet termination (T568A/B), IPv4 addressing, subnetting, DHCP, router/switch basics.
                  </span>
                </div>

                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Operating Systems & Linux CLI:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    Linux terminal (Ubuntu/Debian user permissions, package management, shell basics), Windows 10/11 & Windows Server admin.
                  </span>
                </div>

                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Database Systems & SQL:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    Relational database design (MySQL, PostgreSQL), SQL data querying, schema normalization, table relationships, and backups.
                  </span>
                </div>

                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Web & Software Development:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    HTML5, CSS3, JavaScript (ES6+), React 19, TypeScript, Java (OOP principles), WhatsApp Business API, Git & GitHub.
                  </span>
                </div>

                <div>
                  <strong style={{ color: '#0f172a', display: 'block' }}>• Cloud & Cybersecurity Fundamentals:</strong>
                  <span style={{ fontSize: '0.88rem', color: '#334155' }}>
                    AWS foundational services (EC2, S3, IAM), password hygiene, access control, user privilege separation, data protection.
                  </span>
                </div>
              </div>
            </div>

            {/* Section 4: Practical Applied Projects */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                4. Practical Projects & Software Implementations
              </h2>

              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                  <span>1. First-Class Perfume E-Commerce System (Live Deployment)</span>
                  <span style={{ fontSize: '0.85rem', color: '#2563eb' }}>first-class-perfume.vercel.app</span>
                </div>
                <p style={{ margin: '2px 0 0', fontSize: '0.88rem', color: '#334155' }}>
                  Engineered and launched an active commercial storefront deployed on Vercel featuring an automated WhatsApp API checkout flow to streamline orders and customer notifications.
                </p>
              </div>

              <div style={{ marginBottom: '0.65rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                  <span>2. Automotive Inventory Showcase Gallery</span>
                  <span style={{ fontSize: '0.85rem', color: '#2563eb' }}>becca-afk.github.io/car-website</span>
                </div>
                <p style={{ margin: '2px 0 0', fontSize: '0.88rem', color: '#334155' }}>
                  Built a responsive, mobile-first automotive catalog with optimized asset loading, CSS Grid layouts, and cross-browser support.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0f172a', fontSize: '0.94rem' }}>
                  <span>3. Interactive Cloud & IT Profile Portfolio</span>
                  <span style={{ fontSize: '0.85rem', color: '#2563eb' }}>github.com/becca-afk/portfolio</span>
                </div>
                <p style={{ margin: '2px 0 0', fontSize: '0.88rem', color: '#334155' }}>
                  Built a modern web application in React 19 and TypeScript showcasing coursework, live projects, and printable attachment document suites.
                </p>
              </div>
            </div>

            {/* Section 5: Honors, Awards & Extracurriculars */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                5. Honors, Leadership & Extracurricular Activities
              </h2>
              <ul style={{ paddingLeft: '1.25rem', margin: 0, fontSize: '0.9rem', color: '#1e293b' }}>
                <li style={{ marginBottom: '4px' }}>
                  <strong>Junior Achievers Kenya — 2nd Place National Runner-Up:</strong> Commended nationwide for outstanding teamwork, presentation of viable digital enterprise concepts, and disciplined business execution.
                </li>
                <li style={{ marginBottom: '4px' }}>
                  <strong>Active Member, KCA University Tech Community:</strong> Regular participation in campus coding meetups, peer hardware troubleshooting, and open-source learning labs.
                </li>
              </ul>
            </div>

            {/* Section 6: Soft Skills / Attributes */}
            <div className="cv-section" style={{ marginBottom: '1.25rem' }}>
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                6. Core Personal Attributes & Work Ethic
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '6px 12px', fontSize: '0.88rem', color: '#334155' }}>
                <div>• Systematic problem-solving mindset</div>
                <div>• Rapid learner eager for mentorship</div>
                <div>• Strict confidentiality & data ethics</div>
                <div>• Clear written & verbal communication</div>
                <div>• Punctual, disciplined, and reliable</div>
                <div>• Positive, collaborative team player</div>
              </div>
            </div>

            {/* Section 7: Referees */}
            <div className="cv-section">
              <h2 style={{
                fontSize: '1.08rem',
                color: '#1e3a8a',
                borderBottom: '1.5px solid #cbd5e1',
                paddingBottom: '3px',
                marginBottom: '8px',
                fontWeight: 700,
                textTransform: 'uppercase'
              }}>
                7. Referees (Academic & Professional References)
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '12px',
                fontSize: '0.86rem',
                color: '#334155'
              }}>
                {defaultReferees.map((ref, idx) => (
                  <div key={idx} style={{ background: '#f8fafc', padding: '8px 10px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                    <strong style={{ color: '#0f172a', display: 'block', fontSize: '0.92rem' }}>
                      {ref.name}
                    </strong>
                    <span style={{ display: 'block', color: '#1e3a8a', fontWeight: 600 }}>{ref.title}</span>
                    <span style={{ display: 'block' }}>{ref.department}</span>
                    <span style={{ display: 'block' }}>{ref.institution}</span>
                    <span style={{ display: 'block' }}>{ref.postal}</span>
                    <span style={{ display: 'block', color: '#2563eb' }}>Email: {ref.email}</span>
                    <span>Tel: {ref.phone}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: APPLICATION LETTER */}
        {activeTab === 'letter' && (
          <div
            className="formal-paper letter-paper"
            style={{ fontFamily: fontStyle === 'traditional' ? "'Times New Roman', Times, serif" : "'Inter', -apple-system, sans-serif" }}
          >
            {/* Header / Sender */}
            <div className="paper-header" style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h1 style={{ fontSize: '1.6rem', color: '#0f172a', margin: 0, fontWeight: 800 }}>
                    {fullName.toUpperCase()}
                  </h1>
                  <p style={{ margin: '4px 0 0', color: '#1e3a8a', fontWeight: 700, fontSize: '0.95rem' }}>
                    Diploma in Information Technology • Student Reg. No: {studentId}
                  </p>
                  <p style={{ margin: '2px 0 0', color: '#475569', fontSize: '0.88rem' }}>
                    School of Technology, KCA University
                  </p>
                </div>
                <div style={{ textAlign: 'right', color: '#475569', fontSize: '0.88rem', lineHeight: '1.5' }}>
                  <p style={{ margin: 0 }}>{postalAddress}</p>
                  <p style={{ margin: 0 }}>Email: <strong>{email}</strong></p>
                  <p style={{ margin: 0 }}>Phone: <strong>{phone}</strong></p>
                </div>
              </div>
            </div>

            {/* Date */}
            <p style={{ color: '#334155', fontWeight: 600, marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Date: {currentDate}
            </p>

            {/* Recipient */}
            <div style={{ marginBottom: '1.5rem', color: '#1e293b', lineHeight: '1.5', fontSize: '0.95rem' }}>
              <p style={{ margin: 0, fontWeight: 700 }}>{recipientTitle}</p>
              <p style={{ margin: 0 }}>{recipientOrg}</p>
              <p style={{ margin: 0 }}>{recipientAddress}</p>
            </div>

            {/* Salutation */}
            <p style={{ color: '#1e293b', fontWeight: 600, marginBottom: '1.25rem' }}>
              Dear Sir/Madam,
            </p>

            {/* Subject Reference */}
            <div style={{
              background: '#eff6ff',
              borderLeft: '4px solid #2563eb',
              padding: '0.75rem 1rem',
              marginBottom: '1.5rem',
              color: '#1e3a8a',
              fontWeight: 700,
              fontSize: '0.96rem'
            }}>
              RE: APPLICATION FOR A 3-MONTH INDUSTRIAL ATTACHMENT IN THE ICT DEPARTMENT ({attachmentDates.toUpperCase()})
            </div>

            {/* Letter Body */}
            <div className="paper-body" style={{ color: '#334155', fontSize: '0.98rem', lineHeight: '1.75' }}>
              <p style={{ marginBottom: '1.25rem', textAlign: 'justify' }}>
                I am writing to formally submit my application to undertake my mandatory three-month industrial attachment in the <strong>{targetPreset === 'kca' ? 'Directorate of ICT Services at KCA University' : 'ICT Department at ' + recipientOrg}</strong>, scheduled for <strong>{attachmentDates}</strong>. I am currently an ongoing second-year student at KCA University pursuing a <strong>Diploma in Information Technology</strong> under student registration number <strong>{studentId}</strong>.
              </p>

              <p style={{ marginBottom: '1.25rem', textAlign: 'justify' }}>
                As part of my diploma requirements, students must undertake an industrial attachment to integrate classroom computing theories with practical operations. Throughout my academic study at KCA University, I have maintained strong performance in core computing disciplines, achieving <strong>Grade A in Web Development</strong>, <strong>Grade A in Computer Architecture</strong>, <strong>Grade A- in Database Systems</strong>, and <strong>Grade B in Operating Systems</strong>. I am currently taking advanced coursework in Java Programming, Network Design, and Data Structures. Furthermore, I actively practice Linux command-line administration and AWS cloud computing principles.
              </p>

              <p style={{ marginBottom: '1.25rem', textAlign: 'justify' }}>
                {targetPreset === 'kca' 
                  ? "As a bona fide student of KCA University, I am intimately familiar with our campus computing labs, student management portals, and community requirements. I am enthusiastic about providing dependable, energetic assistance to the university's technical staff in:" 
                  : "I am confident in my capacity to add immediate practical value to your department by assisting your IT team with:"}
              </p>

              <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>
                  <strong>Workstation & Hardware Maintenance:</strong> Diagnosing desktop/laptop hardware faults, PC installation, RAM/drive upgrades, and maintaining laboratory computers.
                </li>
                <li>
                  <strong>Networking & Connectivity:</strong> Assisting in monitoring LAN/WLAN access points, RJ45 Ethernet termination/crimping, cable management, and IP troubleshooting.
                </li>
                <li>
                  <strong>End-User Technical Support:</strong> Assisting staff and students with Wi-Fi onboarding, login credentials, operating system updates, and peripheral configuration.
                </li>
                <li>
                  <strong>Database & Web Administration:</strong> Supporting digital portal maintenance, data integrity queries in SQL, and routine system backups.
                </li>
              </ul>

              <p style={{ marginBottom: '1.25rem', textAlign: 'justify' }}>
                Beyond my technical capabilities, my experience as a <strong>National Runner-Up (2nd place in Kenya) in the Junior Achievers competition</strong> has instilled in me a strong sense of personal integrity, discipline, team collaboration, and accountability. I hold data protection and institutional confidentiality in highest esteem.
              </p>

              <p style={{ marginBottom: '1.5rem', textAlign: 'justify' }}>
                Enclosed herewith are my Curriculum Vitae, academic results slip, and credentials. I would appreciate the opportunity to attend an interview at your convenience.
              </p>

              <p style={{ marginBottom: '2rem' }}>
                Thank you very much for your time and kind consideration.
              </p>

              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ margin: 0 }}>Yours faithfully,</p>
                <div style={{ height: '35px' }}></div>
                <p style={{ margin: 0, fontWeight: 700, color: '#0f172a' }}>{fullName}</p>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
                  Student Registration No: {studentId}
                </p>
                <p style={{ margin: 0, color: '#475569', fontSize: '0.9rem' }}>
                  Diploma in Information Technology, KCA University
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: DOCUMENT CHECKLIST FOR ATTACHMENT */}
        {activeTab === 'checklist' && (
          <div style={{
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid var(--glass-border)',
            borderRadius: '16px',
            padding: '2rem',
            color: '#e2e8f0'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <FileCheck size={24} color="#60a5fa" />
              <h3 style={{ fontSize: '1.4rem', color: '#fff', margin: 0 }}>
                Kenyan Industrial Attachment Document & Compliance Checklist
              </h3>
            </div>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
              Kenyan employers (and the KCA University Attachment Office) require students to assemble a complete attachment application bundle. Use this checklist to verify you have every required item printed and prepared before submission:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {attachmentChecklist.map((req) => {
                const isDone = checkedItems[req.id];
                return (
                  <div
                    key={req.id}
                    onClick={() => toggleChecklist(req.id)}
                    style={{
                      background: isDone ? 'rgba(34, 197, 94, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid ' + (isDone ? 'rgba(34, 197, 94, 0.35)' : 'rgba(255, 255, 255, 0.08)'),
                      borderRadius: '12px',
                      padding: '1.25rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '14px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ marginTop: '2px' }}>
                      <input
                        type="checkbox"
                        checked={!!isDone}
                        onChange={() => toggleChecklist(req.id)}
                        style={{
                          width: '18px',
                          height: '18px',
                          accentColor: 'var(--accent-blue)',
                          cursor: 'pointer'
                        }}
                      />
                    </div>

                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
                        <h4 style={{
                          margin: 0,
                          fontSize: '1.05rem',
                          color: isDone ? '#86efac' : '#fff',
                          fontWeight: 600,
                          textDecoration: isDone ? 'none' : 'none'
                        }}>
                          {req.title}
                        </h4>
                        <span style={{
                          fontSize: '0.75rem',
                          textTransform: 'uppercase',
                          fontWeight: 700,
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: req.category === 'mandatory' ? 'rgba(239, 68, 68, 0.18)' : 'rgba(59, 130, 246, 0.18)',
                          color: req.category === 'mandatory' ? '#fca5a5' : '#93c5fd',
                          border: '1px solid ' + (req.category === 'mandatory' ? 'rgba(239, 68, 68, 0.3)' : 'rgba(59, 130, 246, 0.3)')
                        }}>
                          {req.category}
                        </span>
                      </div>

                      <p style={{ margin: '6px 0 8px', fontSize: '0.9rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                        {req.description}
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#94a3b8' }}>
                        <Sparkles size={13} color="#60a5fa" />
                        <span><strong>Source / Action:</strong> {req.source}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Helpful tip box */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.3)',
              borderRadius: '12px',
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              <AlertCircle size={22} color="#60a5fa" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                <strong style={{ color: '#93c5fd', display: 'block', marginBottom: '4px' }}>
                  Kenyan Industrial Attachment Submission Procedure:
                </strong>
                <ol style={{ paddingLeft: '1.25rem', margin: 0, color: '#e2e8f0' }}>
                  <li>Print 2 physical copies of your <strong>Attachment CV</strong> and sign your <strong>Formal Application Letter</strong> in blue or black pen.</li>
                  <li>Visit the <strong>KCA University School of Technology / Career Services Office</strong> to request your official university introductory letter and confirm your student insurance coverage.</li>
                  <li>Attach clear photocopies of your National ID and Student ID card.</li>
                  <li>Place the documents in a clean document folder or envelope and deliver them to the Directorate of ICT Services or submit via email with your PDF copy attached!</li>
                </ol>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Embedded CSS for Clean Screen & Print Rendering */}
      <style>{`
        .printable-document-container {
          background: #020617;
          padding: 2.5rem 1rem;
          border-radius: 20px;
          border: 1px solid var(--glass-border);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.6);
        }

        .formal-paper {
          background: #ffffff;
          color: #1e293b;
          max-width: 820px;
          margin: 0 auto;
          padding: 3.25rem 3.5rem;
          border-radius: 4px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
          position: relative;
        }

        @media (max-width: 768px) {
          .formal-paper {
            padding: 2rem 1.25rem;
          }
        }

        /* Standard Print Rules for Kenyan Documents */
        @media print {
          @page {
            margin: 12mm 15mm;
            size: A4 portrait;
          }

          body * {
            visibility: hidden !important;
          }

          header, footer, nav, .hero, .cta-container, #profile, #education, #projects, #documents, #skills, #contact, .glass-card, .mobile-toggle, .mobile-menu {
            display: none !important;
          }

          .printable-document-container, .printable-document-container * {
            visibility: visible !important;
          }

          .printable-document-container {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            background: #ffffff !important;
            padding: 0 !important;
            border: none !important;
            box-shadow: none !important;
          }

          .formal-paper {
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
            max-width: 100% !important;
            color: #000000 !important;
            background: #ffffff !important;
          }

          .formal-paper h1,
          .formal-paper h2,
          .formal-paper h3,
          .formal-paper strong {
            color: #000000 !important;
          }

          .cv-paper {
            font-size: 10pt !important;
            line-height: 1.4 !important;
          }

          .letter-paper {
            font-size: 11pt !important;
            line-height: 1.6 !important;
          }

          /* Prevent awkward page break inside sections */
          .cv-section, .paper-header, .referees-grid {
            page-break-inside: avoid;
            break-inside: avoid;
          }
        }
      `}</style>
    </section>
  );
};
