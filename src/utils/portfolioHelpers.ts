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
