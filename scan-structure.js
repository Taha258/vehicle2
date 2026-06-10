#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * HARD BLOCK LIST
 * — yeh folders/files kabhi scan nahi honge
 */
const IGNORE_NAMES = new Set([
  // Node
  'node_modules',
  '.next',
  'dist',
  'build',
  'coverage',

  // Git
  '.git',

  // Python (IMPORTANT)
  '__pycache__',
  '.venv',
  'venv',
  'Lib',
  'Include',
  'Scripts',
  'site-packages',

  // Env / lock
  '.env',
  '.env.local',
  '.env.production',
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',

  // OS
  '.DS_Store'
]);

/**
 * Decide whether to ignore an item
 */
function shouldIgnore(name, fullPath) {
  // Exact name ignore
  if (IGNORE_NAMES.has(name)) return true;

  // Python compiled files
  if (name.endsWith('.pyc')) return true;

  // Any python internal path (extra safety)
  if (fullPath.includes('site-packages')) return true;
  if (fullPath.includes('__pycache__')) return true;

  return false;
}

/**
 * Human-readable file size
 */
function getFileSize(filePath) {
  try {
    const bytes = fs.statSync(filePath).size;
    if (bytes === 0) return '(empty)';
    if (bytes < 1024) return `(${bytes}B)`;
    if (bytes < 1024 * 1024) return `(${(bytes / 1024).toFixed(1)}KB)`;
    return `(${(bytes / (1024 * 1024)).toFixed(1)}MB)`;
  } catch {
    return '';
  }
}

/**
 * Recursively scan directory
 */
function scanDirectory(dirPath) {
  const structure = {};

  let items;
  try {
    items = fs.readdirSync(dirPath);
  } catch {
    return structure;
  }

  for (const item of items) {
    const fullPath = path.join(dirPath, item);

    if (shouldIgnore(item, fullPath)) continue;

    let stats;
    try {
      stats = fs.statSync(fullPath);
    } catch {
      continue;
    }

    if (stats.isDirectory()) {
      const child = scanDirectory(fullPath);

      // ❌ empty folders skip
      if (Object.keys(child).length > 0) {
        structure[item] = child;
      }
    } else {
      structure[item] = getFileSize(fullPath);
    }
  }

  return structure;
}

/**
 * Pretty tree output
 */
function displayTree(struct, prefix = '') {
  const entries = Object.entries(struct);

  entries.forEach(([name, value], index) => {
    const isLast = index === entries.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const nextPrefix = prefix + (isLast ? '    ' : '│   ');

    if (typeof value === 'string') {
      console.log(`${prefix}${connector}📄 ${name} ${value}`);
    } else {
      console.log(`${prefix}${connector}📁 ${name}/`);
      displayTree(value, nextPrefix);
    }
  });
}

/**
 * MAIN
 */
const targetDir = process.argv[2];

if (!targetDir) {
  console.error('\n❌ ERROR: folder name do');
  console.error('👉 Example: node scan-structure.js backend\n');
  process.exit(1);
}

const absPath = path.resolve(targetDir);

if (!fs.existsSync(absPath)) {
  console.error('\n❌ ERROR: folder exist nahi karta\n');
  process.exit(1);
}

console.log('\n📂 PROJECT STRUCTURE\n');
console.log(`${path.basename(absPath)}/`);

const tree = scanDirectory(absPath);
displayTree(tree);

console.log('\n✅ Scan complete\n');
