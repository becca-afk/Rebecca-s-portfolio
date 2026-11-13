import { DocumentItem } from '../types';

/**
 * Resolves a safe download filename for a document item.
 */
export function getDocumentDownloadFilename(doc: Pick<DocumentItem, 'id' | 'title' | 'fileUrl' | 'downloadName'>): string {
  if (doc.downloadName && doc.downloadName.trim().length > 0) {
    return doc.downloadName.trim();
  }
  const cleanTitle = doc.title
    .trim()
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
  const extMatch = doc.fileUrl.match(/\.([a-zA-Z0-9]+)(?:\?.*)?$/);
  const ext = extMatch ? extMatch[1].toLowerCase() : 'pdf';
  return `${cleanTitle || doc.id}.${ext}`;
}

/**
 * Ensures relative asset URLs work cleanly on both root paths and GitHub Pages subpaths.
 */
export function normalizeRelativeAssetUrl(url: string): string {
  if (!url) return './';
  if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }
  if (url.startsWith('./')) {
    return url;
  }
  if (url.startsWith('/')) {
    return `.${url}`;
  }
  return `./${url}`;
}

export function getCareerSuitePdfTarget(activeTab: 'cv' | 'letter' | 'checklist'): {
  fileUrl: string;
  downloadName: string;
} {
  if (activeTab === 'letter') {
    return {
      fileUrl: './Cover_Letter.pdf',
      downloadName: 'Rebecca_Nabusambya_Manyasi_Cover_Letter.pdf',
    };
  }
  return {
    fileUrl: './Resume.pdf',
    downloadName: 'Rebecca_Nabusambya_Manyasi_Resume.pdf',
  };
}

/**
 * Forces a reliable client-side PDF download using fetch + Blob URL so downloads work
 * consistently across desktop, mobile browsers, and GitHub Pages subpaths.
 */
export async function triggerPdfDownload(fileUrl: string, filename: string): Promise<boolean> {
  const safeUrl = normalizeRelativeAssetUrl(fileUrl);
  try {
    const response = await fetch(safeUrl, { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    const blob = new Blob([buffer], { type: 'application/pdf' });
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2500);
    return true;
  } catch {
    window.location.assign(safeUrl);
    return false;
  }
}

