import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '..', 'dist');
const indexHtml = path.join(distDir, 'index.html');
const fallback404 = path.join(distDir, '404.html');

fs.copyFile(indexHtml, fallback404, (err) => {
  if (err) {
    console.error('Failed to copy index.html to 404.html:', err);
    process.exit(1);
  }
  console.log('Copied index.html to 404.html');
});
