const path = require('path');
const fs = require('fs');

const SRC_DIR = 'src';
const DIST_DIR = 'dist';

/**
 * Recursively collect all .ts files from src/
 */
function getInputFiles(dir = SRC_DIR) {
  const files = [];
  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files.push(...getInputFiles(fullPath));
    } else if (stat.isFile() && fullPath.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  return files;
}
console.log(getInputFiles());

setTimeout(() => {}, 60_000);
