import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Briefcase } from 'lucide-react';
import { DocumentItem } from '../types';
import { personalInfo, defaultReferees } from '../data/portfolioData';
import { getDocumentDownloadFilename, normalizeRelativeAssetUrl } from '../utils/portfolioHelpers';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');

  useEffect(() => {
    setViewMode('formatted');
    setCopied(false);
  }, [document?.id]);

  if (!document) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const textContent = getPlainTextContent();
    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getPlainTextContent = () => {
    if (document.id === 'cover-letter') {
      return `${personalInfo.fullName.toUpperCase()}
P.O. Box 56808-00200, Nairobi, Kenya
Phone: ${personalInfo.formattedPhone} | Email: ${personalInfo.personalEmail}
LinkedIn: ${personalInfo.linkedin} | Portfolio: ${personalInfo.portfolioUrl}

Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}

To: The Hiring Team / Directorate of Technology,
Nairobi, Kenya.

Dear Sir/Madam,

RE: APPLICATION FOR IT SUPPORT SPECIALIST / JUNIOR SOFTWARE DEVELOPER POSITION

I am writing to formally submit my application for an IT Support Specialist or Junior Software Developer position within your esteemed organization. I am a dedicated, high-achieving Information Technology professional completing my Diploma at KCA University (Student Reg. No: ${personalInfo.studentId}), available for immediate full-time or flexible employment.

Throughout my academic coursework and practical laboratory sessions at KCA University, I have maintained exemplary performance in core computing disciplines, achieving:
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

In addition to strong academic foundations, I bring hands-on competencies in physical PC assembly & disassembly, hardware component troubleshooting (RAM, SSD/HDD, PSU), clean operating system formatting (Windows & Linux Ubuntu CLI), and RJ45 structured cabling (T568A/T568B). Furthermore, I have built and deployed live commercial systems, including an e-commerce platform with automated WhatsApp integration deployed on Vercel.

Recognized as a National Runner-Up (2nd Place in Kenya) in the Junior Achievers competition in Mombasa, I take pride in clear technical documentation, bilingual communication (Native Swahili, Fluent English), fast trainability, and a dedicated work ethic.

Attached herewith are my Curriculum Vitae and certified academic course records. I would welcome the opportunity to discuss how my technical skills can support your organizational operations.

Yours faithfully,
${personalInfo.fullName}
${personalInfo.formattedPhone} | ${personalInfo.personalEmail}`;
    }

    return `CURRICULUM VITAE - ${personalInfo.fullName.toUpperCase()}
Student Reg. No: ${personalInfo.studentId} | KCA University (School of Technology)
Phone: ${personalInfo.formattedPhone} | Email: ${personalInfo.personalEmail} | Academic: ${personalInfo.email}
Postal: ${personalInfo.postalAddress} | Location: ${personalInfo.location}
Portfolio: ${personalInfo.portfolioUrl} | GitHub: ${personalInfo.github}

1. CAREER OBJECTIVE
A proactive, dedicated Information Technology professional completing a Diploma in IT at KCA University, seeking full-time or flexible tech employment in IT Support, Network Operations, or Software Development. Eager to apply strong theoretical foundations in Network Design (Grade A), Web Systems (Grade A), Java Programming (Grade A-), Database Systems (Grade A-), and Computer Architecture (Grade A), alongside hands-on PC assembly/disassembly, structured cabling, and remote IT troubleshooting skills to deliver dependable technical operations.

2. EDUCATION BACKGROUND
• 2025 – 2027 (Expected): Diploma in Information Technology
  KCA University, School of Technology, Nairobi, Kenya
  Verified Coursework Grades:
  - Web Development: Grade A
  - Human-Computer Interaction: Grade A
  - Network Design & Setup: Grade A
  - Computer Architecture: Grade A
  - Java Programming: Grade A-
  - Database Systems (SQL): Grade A-
  - Systems Analysis & Design: Grade A-
  - Structured Cabling: Grade B+
  - C Language & Systems: Grade B+
  - Data Structures & Algorithms: Grade B
  - Operating Systems: Grade B
• 2020 – 2024: Kenya Certificate of Secondary Education (KCSE)
  The Aga Khan High School, Nairobi (Mean Grade: C)

3. TECHNICAL PROFICIENCIES
• Programming & Development: Java (OOP, Grade A-), C Language (Systems & Pointers, Grade B+), SQL (Relational, Grade A-), HTML5 & Responsive CSS (Grade A), Data Structures (Grade B).
• IT Support & Hardware: PC assembly & disassembly, hardware component diagnostics (RAM, HDD/SSD, PSU), OS formatting & installation (Windows & Linux), remote technical support.
• Networking & Infrastructure: Network design (Grade A), structured cabling & RJ45 crimping (T568A/B, Grade B+), TCP/IP & routing (Grade B), IPv4 addressing, LAN/WLAN troubleshooting.
• Systems & Business: Systems analysis & design (SDLC, Grade A-), Human-Computer Interaction (HCI, Grade A), Electronic Business Systems (e-commerce & M-Pesa), Desktop Publishing (DTP), financial budgeting.
• Systems Administration: Linux (Ubuntu CLI & shell), Windows 10/11 administration, user management.

4. HONORS & LEADERSHIP
• National Runner-Up (2nd Place in Kenya): Junior Achievers Kenya (Mombasa national competition)
• Active Member, KCA University Technology & Computing Community
• Self-driven live deployment of web applications (Vercel & GitHub Pages)

5. REFEREES
1. Dr. Simon M. Ndung'u, Dean, School of Technology, KCA University. Email: technology@kcau.ac.ke | Tel: +254 710 888 022
2. Head of Computing & Informatics, Senior Lecturer, School of Technology, KCA University. Email: ictfaculty@kcau.ac.ke | Tel: +254 710 888 022
3. Director of Career Development, Head of Corporate Partnerships, KCA University. Email: careers@kcau.ac.ke | Tel: +254 710 888 022`;
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(5, 5, 5, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '1rem'
    }}>
      <div style={{
        background: 'rgba(15, 23, 42, 0.95)',
        border: '1px solid var(--glass-border)',
        borderRadius: '16px',
        width: '100%',
        maxWidth: '900px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '1rem 1.25rem',
          borderBottom: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          background: 'rgba(5, 5, 5, 0.6)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
            <FileText size={22} color="var(--accent-blue)" style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '1.1rem', color: '#fff', fontWeight: 700 }}>
                {document.title}
              </h3>
              <span style={{ fontSize: '0.78rem', color: '#93c5fd', display: 'block' }}>
                Professional Tech Employment & Credentials Dossier
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginLeft: 'auto' }}>
            {/* View Switcher */}
            <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.6)', padding: '3px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
              <button
                type="button"
                onClick={() => setViewMode('formatted')}
                style={{
                  background: viewMode === 'formatted' ? 'var(--accent-blue)' : 'transparent',
                  color: viewMode === 'formatted' ? '#fff' : 'var(--text-secondary)',
                  border: 'none',
                  padding: '5px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
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
                  padding: '5px 10px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap'
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
                transition: 'color 0.2s',
                flexShrink: 0
              }}
              aria-label="Close modal"
            >
              <X size={22} />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ flex: '1 1 auto', minHeight: '220px', overflowY: 'auto', background: '#0a0f1d', padding: '1rem' }}>
          {viewMode === 'formatted' ? (
            document.id === 'cover-letter' ? (
              <div style={{
                background: '#ffffff',
                color: '#1e293b',
                padding: 'clamp(1.25rem, 4vw, 2.5rem)',
                borderRadius: '6px',
                boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
                fontFamily: "'Times New Roman', Times, serif",
                lineHeight: '1.65',
                maxWidth: '750px',
                margin: '0 auto',
                fontSize: '0.94rem',
                whiteSpace: 'pre-wrap'
              }}>
                {getPlainTextContent()}
              </div>
            ) : (
            <div style={{
              background: '#ffffff',
              color: '#1e293b',
              padding: 'clamp(1.25rem, 4vw, 2.5rem)',
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
                  IT Support Specialist & Software Developer • Diploma in Information Technology
                </p>
                <p style={{ textAlign: 'center', color: '#475569', fontSize: '0.88rem', margin: '2px 0 0' }}>
                  Student Reg. No: <strong>{personalInfo.studentId}</strong> • KCA University (School of Technology)
                </p>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#475569', marginTop: '6px' }}>
                  Phone: {personalInfo.formattedPhone} | Email: {personalInfo.personalEmail} | Location: {personalInfo.location}
                </div>
              </div>

              {/* Objective */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Career Objective
                </h3>
                <p style={{ fontSize: '0.92rem', margin: 0, textAlign: 'justify' }}>
                  A proactive, dedicated Information Technology professional completing a Diploma in IT at KCA University, seeking full-time or flexible employment opportunities in IT Support, Network Operations, or Software Development. Dedicated to applying verified technical proficiencies in Network Design (Grade A), Web Systems (Grade A), Java Programming (Grade A-), SQL Database Modeling (Grade A-), and Systems Analysis (Grade A-) alongside practical experience in PC assembly/diagnostics, structured cabling, and Linux administration.
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
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.88rem' }}>KCA University, Nairobi, Kenya • Cumulative GPA: {personalInfo.gpa}</div>
                  <div style={{ fontSize: '0.86rem', marginTop: '2px' }}>
                    <strong>Verified Coursework Grades:</strong> Web Development (Grade A), HCI (Grade A), Network Design (Grade A), Computer Architecture (Grade A), Java Programming (Grade A-), Database Systems (Grade A-), Systems Analysis (Grade A-), Structured Cabling (Grade B+), C Language (Grade B+).
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.92rem' }}>
                    <span>Kenya Certificate of Secondary Education (KCSE)</span>
                    <span>2020 – 2024</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontSize: '0.86rem' }}>The Aga Khan High School, Nairobi (Mean Grade: C)</div>
                </div>
              </div>

              {/* Technical Competencies */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Key Technical Competencies
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '6px 12px', fontSize: '0.88rem' }}>
                  <div>• <strong>Hardware Support:</strong> PC assembly, disassembly, diagnostics (RAM, SSD, PSU)</div>
                  <div>• <strong>Networking:</strong> Network design (A), structured cabling (B+), RJ45 crimping</div>
                  <div>• <strong>Software & DB:</strong> Java (OOP, A-), C (B+), SQL & relational schema (A-)</div>
                  <div>• <strong>Systems:</strong> Linux CLI (Ubuntu), Windows admin, user technical support</div>
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
            )
          ) : (
            <iframe
              src={normalizeRelativeAssetUrl(document.fileUrl)}
              title={document.title}
              style={{
                width: '100%',
                height: '100%',
                minHeight: '360px',
                border: 'none',
                borderRadius: '8px'
              }}
            />
          )}
        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '0.85rem 1.25rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(15, 23, 42, 0.95)',
          flexWrap: 'wrap',
          gap: '0.75rem',
          flexShrink: 0
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
            <a
              href={normalizeRelativeAssetUrl(document.fileUrl)}
              download={getDocumentDownloadFilename(document)}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Download size={14} />
              Download PDF
            </a>
            <button
              onClick={handlePrint}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Printer size={14} />
              Print / Save PDF
            </button>
            <a
              href="#career-suite"
              onClick={onClose}
              className="btn btn-outline"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              <Briefcase size={14} />
              Open Career Suite
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
