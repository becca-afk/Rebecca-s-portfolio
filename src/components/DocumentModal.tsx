import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Briefcase } from 'lucide-react';
import { DocumentItem } from '../types';
import { personalInfo } from '../data/portfolioData';
import {
  getDocumentDownloadFilename,
  normalizeRelativeAssetUrl,
  triggerPdfDownload,
} from '../utils/portfolioHelpers';

interface DocumentModalProps {
  document: DocumentItem | null;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ document, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [viewMode, setViewMode] = useState<'formatted' | 'pdf'>('formatted');

  useEffect(() => {
    setViewMode('formatted');
    setCopied(false);
    setDownloaded(false);
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
      return `REBECCA NABUSAMBYA MANYASI
Nairobi, Kenya | 0116968755 | rnabusambya@gmail.com
GitHub: github.com/becca-afk | Portfolio: ${personalInfo.portfolioUrl}

Date: ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}

To: The Hiring Manager,
Nairobi, Kenya.

Dear Hiring Manager,

RE: APPLICATION FOR IT SUPPORT SPECIALIST / JUNIOR SOFTWARE DEVELOPER POSITION

I am writing to express my strong interest in an IT Support, Technical Operations, or Junior Software Development role within your organization. As an adaptable Information Technology student at KCA University (Cumulative GPA: 3.42, B+ Average) with hands-on training in hardware maintenance, network configuration, web development, and desktop publishing, I am prepared to contribute reliable value to your team.

My academic coursework and practical training align directly with modern IT operational needs:
• IT Support & Hardware Maintenance: Trained in PC assembly/disassembly, hardware diagnostics (RAM, SSD/HDD, PSU), clean OS installation/formatting (Windows & Ubuntu Linux), and remote technical support.
• Networking & Infrastructure: Hands-on experience in Network Design and Setup (Grade A), Structured Cabling (Grade B+), and TCP/IP fundamentals.
• Software, Web & Databases: Strong foundation in Java OOP (Grade A-), Database Systems & SQL (Grade A-), C Programming (Grade B+), HTML/CSS (Grade A), Git, GitHub, Vercel, and VirtualBox.
• Design & Business Systems: Independently built and deployed a live e-commerce website (First Class Perfume) integrating a WhatsApp ordering system to solve payment bottlenecks, alongside coursework in Desktop Publishing (DTP), Electronic Business Systems, and Financial Management.

Additionally, I am fluent in English and Swahili and placed 2nd Nationally at the Junior Achievers Kenya competition in Mombasa, demonstrating strong teamwork, business acumen, and communication under pressure.

I have attached my updated CV for your review and welcome the opportunity to discuss how my skills can support your team.

Thank you for your time and consideration.

Sincerely,
Rebecca Nabusambya Manyasi
0116968755 | rnabusambya@gmail.com`;
    }

    return `REBECCA NABUSAMBYA MANYASI
Nairobi, Kenya | 0116968755 | rnabusambya@gmail.com
GitHub: github.com/becca-afk

PROFESSIONAL SUMMARY
Highly adaptable IT student at KCA University (GPA: 3.42) with a strong foundation in hardware maintenance, network configuration, and software development. Trained to assemble/disassemble PCs, format operating systems (Windows/Linux), and troubleshoot technical issues. Proven ability to bridge technical and business environments, having independently built and deployed a live e-commerce website. Fluent in English and Swahili, with a proven track record of teamwork as a national competition runner-up.

TECHNICAL SKILLS
• IT Support & Hardware: PC assembly/disassembly, hardware troubleshooting, OS installation/formatting (Windows, Ubuntu), remote support.
• Programming Languages: Java (OOP), C (Pointers/Memory Management), HTML, CSS.
• Operating Systems: Linux (Ubuntu Command Line), Windows Administration.
• Networking: Network Design and Setup, Structured Cabling, TCP/IP basics.
• Data & Databases: SQL, Relational Database Design, Data Entry.
• Design & Business Tools: Desktop Publishing (DTP), Electronic Business Systems, Financial Management, MS Office, Google Workspace.
• Other Tools: Git, GitHub, Vercel, VirtualBox.

PROJECTS
First Class Perfume (Live E-Commerce Website)
• Consulted with a business owner to solve a payment bottleneck.
• Built and deployed a responsive website using HTML, CSS, and Vercel.
• Integrated a WhatsApp ordering system to facilitate direct customer chats and M-Pesa payments.
• Live Link: first-class-perfume.vercel.app

Car Showcase Website
• Designed and deployed responsive web layouts to practice front-end development.
• Live Link: becca-afk.github.io/car-website

EDUCATION
Diploma in Information Technology | KCA University (Expected 2027)
• Cumulative GPA: 3.42 (B+ Average)
• Key Grades: Computer Organization (A), Network Design (A), Human-Computer Interaction (A), Web Design (A), Java Programming (A-), Database Systems (A-).
• Relevant Coursework: Principles of Computer Support & Maintenance, Operating Systems, Systems Analysis & Design, Electronic Business Systems, Financial Management, Desktop Publishing (DTP).

Kenya Certificate of Secondary Education (KCSE)
• Riara High School (2019 – 2022)
• Aga Khan High School (2023 – 2024)

ACHIEVEMENTS
• Junior Achievers Kenya: 2nd Place Nationally (Mombasa). Demonstrated teamwork, business acumen, and presentation skills under pressure.
• Languages: Native Swahili, Fluent English.

REFERENCES
Available upon request.`;
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
                <p style={{ textAlign: 'center', color: '#1e3a8a', fontWeight: 700, margin: '4px 0 0', fontSize: '0.96rem' }}>
                  Nairobi, Kenya | {personalInfo.phone} | {personalInfo.personalEmail}
                </p>
                <div style={{ textAlign: 'center', fontSize: '0.85rem', color: '#475569', marginTop: '4px' }}>
                  GitHub: github.com/becca-afk • KCA University IT Student (GPA: 3.42)
                </div>
              </div>

              {/* Professional Summary */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Professional Summary
                </h3>
                <p style={{ fontSize: '0.92rem', margin: 0, textAlign: 'justify' }}>
                  Highly adaptable IT student at KCA University (GPA: 3.42) with a strong foundation in hardware maintenance, network configuration, and software development. Trained to assemble/disassemble PCs, format operating systems (Windows/Linux), and troubleshoot technical issues. Proven ability to bridge technical and business environments, having independently built and deployed a live e-commerce website. Fluent in English and Swahili, with a proven track record of teamwork as a national competition runner-up.
                </p>
              </div>

              {/* Technical Skills */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Technical Skills
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '6px 12px', fontSize: '0.86rem' }}>
                  <div>• <strong>IT Support & Hardware:</strong> PC assembly/disassembly, hardware troubleshooting, OS installation/formatting (Windows, Ubuntu), remote support</div>
                  <div>• <strong>Programming Languages:</strong> Java (OOP), C (Pointers/Memory Management), HTML, CSS</div>
                  <div>• <strong>Operating Systems & Networking:</strong> Linux (Ubuntu CLI), Windows Admin, Network Design & Setup, Structured Cabling, TCP/IP basics</div>
                  <div>• <strong>Data, Design & Tools:</strong> SQL, Relational DB Design, DTP, Electronic Business Systems, Financial Management, MS Office, Google Workspace, Git, GitHub, Vercel, VirtualBox</div>
                </div>
              </div>

              {/* Projects */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Projects
                </h3>
                <div style={{ fontSize: '0.86rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div>
                    <strong>First Class Perfume (Live E-Commerce Website)</strong> — <em>first-class-perfume.vercel.app</em>
                    <div>Consulted with a business owner to solve a payment bottleneck; built and deployed a responsive HTML/CSS site on Vercel with WhatsApp ordering for direct chats and M-Pesa payments.</div>
                  </div>
                  <div>
                    <strong>Car Showcase Website</strong> — <em>becca-afk.github.io/car-website</em>
                    <div>Designed and deployed responsive web layouts to practice front-end development.</div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Education
                </h3>
                <div style={{ marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, fontSize: '0.94rem' }}>
                    <span>Diploma in Information Technology | KCA University</span>
                    <span>Expected 2027</span>
                  </div>
                  <div style={{ color: '#1e3a8a', fontWeight: 600, fontSize: '0.88rem' }}>Cumulative GPA: {personalInfo.gpa}</div>
                  <div style={{ fontSize: '0.85rem', marginTop: '2px' }}>
                    <strong>Key Grades:</strong> Computer Organization (A), Network Design (A), Human-Computer Interaction (A), Web Design (A), Java Programming (A-), Database Systems (A-).
                  </div>
                  <div style={{ fontSize: '0.84rem', marginTop: '2px', color: '#475569' }}>
                    <strong>Relevant Coursework:</strong> Principles of Computer Support & Maintenance, Operating Systems, Systems Analysis & Design, Electronic Business Systems, Financial Management, Desktop Publishing (DTP).
                  </div>
                </div>

                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>
                    Kenya Certificate of Secondary Education (KCSE)
                  </div>
                  <div style={{ color: '#334155', fontSize: '0.86rem' }}>• Riara High School (2019 – 2022)</div>
                  <div style={{ color: '#334155', fontSize: '0.86rem' }}>• Aga Khan High School (2023 – 2024)</div>
                </div>
              </div>

              {/* Achievements & References */}
              <div>
                <h3 style={{ fontSize: '1.05rem', color: '#1e3a8a', borderBottom: '1px solid #cbd5e1', paddingBottom: '3px', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Achievements & References
                </h3>
                <div style={{ fontSize: '0.86rem', color: '#334155', marginBottom: '6px' }}>
                  • <strong>Junior Achievers Kenya:</strong> 2nd Place Nationally (Mombasa). Demonstrated teamwork, business acumen, and presentation skills under pressure.<br />
                  • <strong>Languages:</strong> Native Swahili, Fluent English.
                </div>
                <div style={{ fontSize: '0.85rem', color: '#475569' }}>
                  <strong>References:</strong> Available upon request (KCA University faculty & referee details also accessible in Career Suite).
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
              onClick={async (e) => {
                e.preventDefault();
                await triggerPdfDownload(document.fileUrl, getDocumentDownloadFilename(document));
                setDownloaded(true);
                setTimeout(() => setDownloaded(false), 2500);
              }}
              className="btn btn-primary"
              style={{ padding: '0.45rem 1rem', fontSize: '0.85rem' }}
            >
              {downloaded ? <Check size={14} /> : <Download size={14} />}
              {downloaded ? 'Downloaded!' : 'Download PDF'}
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
