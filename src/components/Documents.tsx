import React, { useState } from 'react';
import { FileText, Award, Mail, Download, Eye, Briefcase, Printer, Check } from 'lucide-react';
import { documentsList } from '../data/portfolioData';
import { DocumentItem } from '../types';
import { DocumentModal } from './DocumentModal';
import {
  getDocumentDownloadFilename,
  normalizeRelativeAssetUrl,
  triggerPdfDownload,
} from '../utils/portfolioHelpers';

export const Documents: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentItem | null>(null);
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedId, setDownloadedId] = useState<string | null>(null);

  const handleDownloadClick = async (
    e: React.MouseEvent<HTMLAnchorElement>,
    doc: DocumentItem,
    safeUrl: string,
    downloadFilename: string
  ) => {
    e.preventDefault();
    setDownloadingId(doc.id);
    await triggerPdfDownload(safeUrl, downloadFilename);
    setDownloadingId(null);
    setDownloadedId(doc.id);
    setTimeout(() => setDownloadedId((prev) => (prev === doc.id ? null : prev)), 2500);
  };

  const getDocIcon = (type: DocumentItem['iconType']) => {
    switch (type) {
      case 'cv':
        return <FileText size={32} />;
      case 'resume':
        return <Award size={32} />;
      case 'letter':
        return <Mail size={32} />;
      default:
        return <FileText size={32} />;
    }
  };

  return (
    <section id="documents" className="section">
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h2>Official Credentials & Documents</h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
          Certified application records, up-to-date resume (GPA 3.42), and verified documents prepared for employer and recruiter evaluation.
        </p>
      </div>

      {/* Featured Career Pack Banner */}
      <div className="glass-card" style={{
        padding: '1.5rem 1.75rem',
        marginBottom: '2rem',
        background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.45) 0%, rgba(15, 23, 42, 0.7) 100%)',
        border: '1px solid rgba(59, 130, 246, 0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.25rem'
      }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#93c5fd', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
            <Briefcase size={15} />
            <span>Professional Career Dossier & Verified Credentials</span>
          </div>
          <h3 style={{ fontSize: '1.25rem', color: '#fff', margin: '0 0 6px', fontWeight: 700 }}>
            Curriculum Vitae & Job Application Suite
          </h3>
          <p style={{ color: '#cbd5e1', fontSize: '0.9rem', margin: 0, lineHeight: '1.6' }}>
            Formatted according to modern tech employer guidelines (GPA 3.42, verified grades: Web Design A, HCI A, Network Design A, Java A-, SQL A-, Systems Analysis A-; PC assembly/cabling competencies).
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href="#career-suite"
            className="btn btn-primary"
            style={{ padding: '0.6rem 1.25rem', fontSize: '0.9rem' }}
          >
            <Printer size={16} />
            Open Career & Application Suite
          </a>
        </div>
      </div>

      <div className="docs-grid">
        {documentsList.map((doc) => {
          const safeUrl = normalizeRelativeAssetUrl(doc.fileUrl);
          const downloadFilename = getDocumentDownloadFilename(doc);

          return (
            <div key={doc.id} className="doc-card">
              <div className="doc-icon-wrapper">
                {getDocIcon(doc.iconType)}
              </div>

              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#fff' }}>
                {doc.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', margin: '0.5rem 0 1.5rem', flexGrow: 1 }}>
                {doc.description}
              </p>

              <div style={{ display: 'flex', gap: '0.5rem', width: '100%', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setSelectedDoc(doc)}
                  className="btn btn-outline"
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.82rem',
                    justifyContent: 'center'
                  }}
                >
                  <Eye size={14} />
                  Preview & Copy
                </button>
                <a
                  href={safeUrl}
                  download={downloadFilename}
                  onClick={(e) => handleDownloadClick(e, doc, safeUrl, downloadFilename)}
                  className="btn btn-primary"
                  style={{
                    flex: 1,
                    padding: '0.5rem 0.75rem',
                    fontSize: '0.82rem',
                    justifyContent: 'center'
                  }}
                >
                  {downloadedId === doc.id ? <Check size={14} /> : <Download size={14} />}
                  {downloadingId === doc.id
                    ? 'Downloading...'
                    : downloadedId === doc.id
                    ? 'Downloaded!'
                    : 'Download PDF'}
                </a>
              </div>
            </div>
          );
        })}
      </div>

      <DocumentModal
        document={selectedDoc}
        onClose={() => setSelectedDoc(null)}
      />
    </section>
  );
};
