#!/usr/bin/env node
/**
 * Build release AAB (Android App Bundle) using release.keystore and .env credentials.
 * Run from project root: node scripts/build-aab.js  OR  npm run build:aab
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const envPath = path.join(rootDir, '.env');
const keystorePath = path.join(rootDir, 'release.keystore');

if (!fs.existsSync(envPath)) {
  console.error('Error: .env file not found in project root.');
  process.exit(1);
}

if (!fs.existsSync(keystorePath)) {
  console.error('Error: release.keystore not found in project root.');
  process.exit(1);
}

// Load .env (no extra dependency)
const env = { ...process.env };
const lines = fs.readFileSync(envPath, 'utf8').split('\n');
for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith('#')) continue;
  const eq = trimmed.indexOf('=');
  if (eq === -1) continue;
  const key = trimmed.slice(0, eq).trim();
  const value = trimmed.slice(eq + 1).trim();
  if (key) env[key] = value;
}

console.log('Building release AAB (credentials from .env)...\n');
const gradleCmd = process.platform === 'win32' ? 'gradlew.bat' : './gradlew';
const androidDir = path.join(rootDir, 'android');

if (!fs.existsSync(androidDir)) {
  console.error('Error: android/ folder not found. Run: npx expo prebuild --platform android --clean');
  process.exit(1);
}

execSync(`${gradleCmd} bundleRelease`, {
  cwd: androidDir,
  env,
  stdio: 'inherit',
});

const aabPath = path.join(androidDir, 'app', 'build', 'outputs', 'bundle', 'release', 'app-release.aab');
console.log('\nDone. AAB output:', aabPath);
console.log('Upload this file to Play Console → Release → Create new release → Upload.');
