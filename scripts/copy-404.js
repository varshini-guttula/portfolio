const fs = require('fs');
const path = require('path');

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
