import React, { useState } from 'react';
import { X, Download, ExternalLink, FileText, Printer, Copy, Check, Sparkles, Building2 } from 'lucide-react';
import { DocumentItem } from '../types';
import { personalInfo, completedCoursework, defaultReferees } from '../data/portfolioData';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');
  const [copied, setCopied] = useState(false);

  if (!document) return null;

  const isCV = document.iconType === 'cv' || document.iconType === 'resume';
  const isLetter = document.iconType === 'letter';

  const handlePrint = () => {
    window.print();
  };

  const getDocText = () => {
    if (isLetter) {
      return `${personalInfo.fullName}
Student Reg. No: ${personalInfo.studentId}
School of Technology, KCA University
${personalInfo.postalAddress}
Email: ${personalInfo.email} | Phone: ${personalInfo.formattedPhone}

Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}

The Director, Directorate of ICT Services
KCA University
Main Campus, Off Thika Road, Ruaraka
P.O. Box 56808-00200, Nairobi, Kenya

Dear Sir/Madam,

RE: APPLICATION FOR A 3-MONTH INDUSTRIAL ATTACHMENT IN THE ICT SERVICES DEPARTMENT (${personalInfo.attachmentPeriod.toUpperCase()})

I am writing to formally submit my application for a three-month industrial attachment opportunity in the Directorate of ICT Services at KCA University, scheduled for ${personalInfo.attachmentPeriod}. I am a dedicated second-year student at KCA University currently pursuing a Diploma in Information Technology (Student Reg. No: ${personalInfo.studentId}).

Throughout my coursework at KCA University, I have maintained exemplary academic performance in core technical disciplines, including Web Development (Grade A), Computer Architecture (Grade A), Database Systems (Grade A-), and Operating Systems (Grade B). Furthermore, as an active self-taught cloud enthusiast, I regularly work with Linux environments, AWS cloud principles, and SQL database management.

As a proud KCA University student, I am intimately familiar with our campus digital ecosystem and passionate about serving our academic community. During this attachment, I aim to add immediate value by assisting your technical team with workstation diagnostics, LAN/WLAN troubleshooting, end-user support, and web application upkeep.

Attached herewith are my Curriculum Vitae and academic course records.

Yours faithfully,
${personalInfo.fullName}
Student Reg No: ${personalInfo.studentId}
Diploma in Information Technology, KCA University`;
    }

    return `CURRICULUM VITAE - ${personalInfo.fullName.toUpperCase()}
Student Reg. No: ${personalInfo.studentId} | KCA University (School of Technology)
Phone: ${personalInfo.formattedPhone} | Email: ${personalInfo.email} | Personal: ${personalInfo.personalEmail}
Postal: ${personalInfo.postalAddress} | Location: ${personalInfo.location}

1. CAREER OBJECTIVE
A proactive, dedicated second-year Diploma in Information Technology student at KCA University seeking a 3-month industrial attachment (${personalInfo.attachmentPeriod}) in the Directorate of ICT Services. Eager to apply strong theoretical foundations in Computer Architecture (Grade A), Web Development (Grade A), Database Systems (Grade A-), and Operating Systems (Grade B), alongside self-taught Linux administration and AWS cloud skills, to support computer hardware maintenance, local network (LAN/WLAN) connectivity, and user technical support.

2. EDUCATION BACKGROUND
• 2025 – 2027 (Expected): Diploma in Information Technology
  KCA University, School of Technology, Nairobi, Kenya
  Grades: Web Dev (Grade A), Computer Architecture (Grade A), Database Systems (Grade A-), Operating Systems (Grade B)
• 2020 – 2024: Kenya Certificate of Secondary Education (KCSE)
  The Aga Khan High School, Nairobi (Mean Grade: C)

3. TECHNICAL PROFICIENCIES
• Hardware & PC Maintenance: Component diagnostics, assembly, printer setup, lab maintenance.
• Networking: LAN/WLAN troubleshooting, RJ45 cabling (T568A/B), IPv4 addressing, DHCP, DNS.
• Linux & Systems: Ubuntu/Debian CLI commands, user rights, bash basics, Windows 10/11 admin.
• Database Systems: SQL queries (MySQL, PostgreSQL), relational schema design, backups.
• Web Development: HTML5, CSS3, JavaScript, React 19, TypeScript, Java (OOP), Git/GitHub.

4. HONORS & LEADERSHIP
• National Runner-Up (2nd Place in Kenya): Junior Achievers Kenya
• Active Member, KCA University Tech Community

5. REFEREES
1. Dr. Simon M. Ndung'u, Dean, School of Technology, KCA University. Email: technology@kcau.ac.ke | Tel: +254 710 888 022
2. Industrial Attachment Coordinator, Directorate of Career Services, KCA University. Email: attachment@kcau.ac.ke | Tel: +254 710 888 022
3. Head of Computing & Informatics, School of Technology, KCA University. Email: ictfaculty@kcau.ac.ke | Tel: +254 710 888 022`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(getDocText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '850px', maxHeight: '90vh' }}
      >
        {/* Modal Header */}
        <div style={{
          padding: '1.25rem 1.5rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'rgba(15, 23, 42, 0.95)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FileText size={22} color="var(--accent-blue)" />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#fff', fontWeight: 700 }}>
                {document.title}
              </h3>
              <span style={{ fontSize: '0.8rem', color: '#93c5fd' }}>
                Kenyan Standard Industrial Attachment Document
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* View Switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.6)', padding: '3px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <button
                type="button"
                onClick={() => setViewMode('formatted')}
                style={{
                  background: viewMode === 'formatted' ? 'var(--accent-blue)' : 'transparent',
                  color: viewMode === 'formatted' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                Print / Copy View
              </button>
              <button
                type="button"
                onClick={() => setViewMode('pdf')}
                style={{
                  background: viewMode === 'pdf' ? 'var(--accent-blue)' : 'transparent',
                  color: viewMode === 'pdf' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.82rem',
                  fontWeight: 600
                }}
              >
                PDF Reader
              </button>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                padding: '6px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s'
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, minHeight: '480px', overflowY: 'auto', background: '#0a0f1d', padding: '1.25rem' }}>
          {viewMode === 'formatted' ? (
            <div style={{
              background: '#ffffff',
              color: '#1e293b',
              padding: '2.5rem 3rem',
              borderRadius: '6px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
              fontFamily: "'Times New Roman', Times, serif",
              lineHeight: '1.6',
              maxWidth: '750px',
              margin: '0 auto'
            }}>
              {/* Header */}
              <div style={{ borderBottom: '2px solid #1e3a8a', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
                <h1 style={{ fontSize: '1.7rem', color: '#0f172a', margin: 0, fontWeight: 800, textAlign: 'center', textTransform: 'uppercase' }}>
                  {personalInfo.fullName}
                </h1>
                <p style={{ textAlign: 'center', color: '#1e3a8a', fontWeight: 700, margin: '4px 0 0', fontSize: '0.98rem' }}>
                  Candidate for Industrial Attachment • Diploma in Information Technology
                </p>
                <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.88rem', margin: '2px 0 0' }}>
                  Student Reg. No: <strong>{personalInfo.studentId}</strong> • KCA University (School of Technology)
                </p>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#475569', marginTop: '6px' }}>
                  Phone: {personalInfo.formattedPhone} | Email: {personalInfo.email} | Location: {personalInfo.location}
                </div>
              </div>

              {/* Objective */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Career Objective (Attachment)
                </h3>
                <p style={{ fontSize: '0.92rem', margin: 0, textAlign: 'justify' }}>
                  A driven, high-achieving 2nd-year Diploma in Information Technology student at KCA University seeking a 3-month industrial attachment ({personalInfo.attachmentPeriod}) in the Directorate of ICT Services. Dedicated to applying academic knowledge in computer architecture (Grade A), web development (Grade A), database systems (Grade A-), and networking to maintain campus digital services, troubleshoot hardware/software, and deliver dependable support.
                </p>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Education Background
                </h3>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.94rem' }}>
                    <span>Diploma in Information Technology</span>
                    <span>2025 – 2027 (Expected)</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.88rem' }}>KCA University, Nairobi, Kenya</div>
                  <div style={{ fontSize: '0.86rem', marginTop: '2px' }}>
                    <strong>Key Performance:</strong> Web Development (Grade A), Computer Architecture (Grade A), Database Systems (Grade A-), Operating Systems (Grade B).
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem' }}>
                    <span>Kenya Certificate of Secondary Education (KCSE)</span>
                    <span>Completed</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontSize: '0.86rem' }}>The Aga Khan High School, Nairobi (Grade: C)</div>
                </div>
              </div>

              {/* Technical Competencies */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Key Technical Competencies
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', fontSize: '0.88rem' }}>
                  <div>• <strong>Hardware Support:</strong> PC diagnostics, assembly, printer & lab maintenance</div>
                  <div>• <strong>Networking:</strong> LAN/WLAN troubleshooting, RJ45 cabling, IPv4, DHCP</div>
                  <div>• <strong>Systems:</strong> Linux CLI (Ubuntu), Windows 10/11 admin, security patches</div>
                  <div>• <strong>Databases:</strong> SQL queries (MySQL/PostgreSQL), relational schema design</div>
                </div>
              </div>

              {/* Referees */}
              <div>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Referees
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px', fontSize: '0.82rem' }}>
                  {defaultReferees.map((ref, i) => (
                    <div key={i} style={{ background: '#f8fafc', padding: '6px 8px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                      <strong style={{ display: 'block', color: '#0f172a' }}>{ref.name}</strong>
                      <span>{ref.title}</span><br />
                      <span>{ref.institution}</span><br />
                      <span style={{ color: '#2563eb' }}>{ref.email}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={document.fileUrl}
              title={document.title}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '480px',
                border: 'none',
                borderRadius: '8px'
              }}
            />
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.95)',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            {document.description}
          </p>
          <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              onClick={handleCopy}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              {copied ? <Check size={14} color="#4ade80" /> : <Copy size={14} />}
              {copied ? 'Copied Text!' : 'Copy Text'}
            </button>
            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Printer size={14} />
              Print / Save PDF
            </button>
            <a
              href="#kca-application"
              onClick={onClose}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Building2 size={14} />
              Open Attachment Suite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
