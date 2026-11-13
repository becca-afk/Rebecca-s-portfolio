import test from 'node:test';
import assert from 'node:assert/strict';
import { getDocumentDownloadFilename, normalizeRelativeAssetUrl } from './portfolioHelpers';

test('getDocumentDownloadFilename prefers explicit downloadName', () => {
  const name = getDocumentDownloadFilename({
    id: 'resume',
    title: 'Professional Resume',
    fileUrl: './assets/aistudio/REBECCA_NABUSAMBYA_MANYASI_6c673a02.pdf',
    downloadName: 'Rebecca_Nabusambya_Manyasi_Resume.pdf',
  });
  assert.equal(name, 'Rebecca_Nabusambya_Manyasi_Resume.pdf');
});

test('getDocumentDownloadFilename derives clean filename when downloadName omitted', () => {
  const name = getDocumentDownloadFilename({
    id: 'cv',
    title: 'Curriculum Vitae',
    fileUrl: './assets/aistudio/REBECCA_NABUSAMBYA_MANYASI_6c673a02.pdf',
  });
  assert.equal(name, 'Curriculum_Vitae.pdf');
});

test('normalizeRelativeAssetUrl converts leading slashes to relative paths for GitHub Pages compatibility', () => {
  assert.equal(
    normalizeRelativeAssetUrl('/assets/aistudio/cover_letter_21a661d7.pdf'),
    './assets/aistudio/cover_letter_21a661d7.pdf'
  );
  assert.equal(
    normalizeRelativeAssetUrl('./Resume.pdf'),
    './Resume.pdf'
  );
  assert.equal(
    normalizeRelativeAssetUrl('CV.pdf'),
    './CV.pdf'
  );
  assert.equal(
    normalizeRelativeAssetUrl('https://example.com/doc.pdf'),
    'https://example.com/doc.pdf'
  );
});
