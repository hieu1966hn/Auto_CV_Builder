#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { access, copyFile, mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = process.cwd();
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const DOM_PORT = 4173;
const REACT_PORT = 3100;
const BROWSER_PATH =
  process.env.BROWSER_PATH ||
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser';
const DEFAULT_UI_CRITERIA = Math.max(
  1,
  Number.parseInt(process.env.DEFAULT_UI_CRITERIA || '3', 10) || 3,
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pad = (n) => String(n).padStart(2, '0');

const ensureExecutable = async (targetPath) => {
  try {
    await access(targetPath);
  } catch {
    throw new Error(`Browser not found at: ${targetPath}`);
  }
};

const startProcess = (cmd, args, name) => {
  const child = spawn(cmd, args, {
    cwd: ROOT,
    env: { ...process.env },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  child.stdout.on('data', (chunk) => {
    process.stdout.write(`[${name}] ${chunk}`);
  });
  child.stderr.on('data', (chunk) => {
    process.stderr.write(`[${name}] ${chunk}`);
  });

  return child;
};

const stopProcess = async (child) => {
  if (!child || child.killed) return;
  child.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => child.once('exit', resolve)),
    sleep(3000),
  ]);
  if (!child.killed) child.kill('SIGKILL');
};

const waitForUrl = async (url, timeoutMs = 120000) => {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, { method: 'GET' });
      if (res.ok) return;
    } catch {
      // Keep polling until timeout.
    }
    await sleep(500);
  }
  throw new Error(`Timeout waiting for: ${url}`);
};

const makePromptData = (promptNo, stage) => {
  const id = pad(promptNo);
  const role = [
    'Frontend Engineer',
    'Product Analyst',
    'QA Specialist',
    'UI Designer',
    'Data Assistant',
  ][promptNo % 5];
  return {
    fullName: `Hoc vien P${id}`,
    headline: `${role} P${id}`,
    summary: `Runtime replay cho prompt P${id} - stage ${stage}.`,
    email: `p${id}@example.com`,
    phone: `+84 90${id} 123 45${id[1]}`,
    location: `Ha Noi - P${id}`,
    skills: `html,css,javascript,prompt-${id}`,
    experience: `Role P${id} @ Team Alpha - 2024-2026`,
    education: `IT @ Demo University - ${2000 + promptNo}`,
    linkedin: `https://linkedin.com/in/prompt-${id}`,
    website: `https://prompt-${id}.example.com`,
  };
};

const ensurePromptFolder = async (promptNo) => {
  const folder = path.join(ROOT, 'docs', 'screenshots', `prompt-${pad(promptNo)}`);
  await mkdir(folder, { recursive: true });
  return folder;
};

const getCriteriaCount = async (promptNo) => {
  const filePath = path.join(ROOT, 'docs', 'prompt-results', `P${pad(promptNo)}.md`);
  let content;
  try {
    content = await readFile(filePath, 'utf8');
  } catch {
    return DEFAULT_UI_CRITERIA;
  }

  const sections = content.split(/\n(?=##\s+)/g);
  for (const section of sections) {
    const lines = section.split('\n');
    const heading = (lines[0] || '').toLowerCase();
    const looksLikeTestSection =
      heading.startsWith('##') &&
      /(tieu chi test|checklist test|checklist|test|kiem thu|regression|smoke)/.test(heading);
    if (!looksLikeTestSection) continue;

    const count = (section.match(/^\s*\d+\.\s+/gm) || []).length;
    if (count > 0) return count;
  }

  return DEFAULT_UI_CRITERIA;
};

const buildCriterionOutput = (folder, promptNo, criterionNo) =>
  path.join(
    folder,
    `P${pad(promptNo)}-ui-${pad(criterionNo)}-runtime-test-criterion-${criterionNo}.png`,
  );

const fillDomBase = async (page, promptNo, variant = 0) => {
  const data = makePromptData(promptNo + variant, 'dom');
  await page.fill('input[name="fullName"]', data.fullName);
  await page.fill('input[name="headline"]', data.headline);
  await page.fill('textarea[name="summary"]', data.summary);
  await page.fill('input[name="email"]', data.email);
  await page.fill('input[name="phone"]', data.phone);
  await page.fill('input[name="location"]', data.location);
  await page.fill('input[name="skills"]', data.skills);
  await page.fill('textarea[name="experience"]', `${data.experience}\nProject P${pad(promptNo)} @ Team Beta`);
  await page.fill('textarea[name="education"]', data.education);
};

const clickIfVisible = async (page, selector) => {
  const loc = page.locator(selector);
  if ((await loc.count()) > 0) {
    await loc.first().click();
    return true;
  }
  return false;
};

const captureDomPrompt = async (browser, promptNo, criteriaCount) => {
  const folder = await ensurePromptFolder(promptNo);
  const legacyOutput = path.join(folder, `P${pad(promptNo)}-ui-01-runtime-after-prompt.png`);
  const page = await browser.newPage({ viewport: { width: 1720, height: 1080 } });

  try {
    await page.goto(`http://127.0.0.1:${DOM_PORT}/index.html`, {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
    await page.waitForSelector('#cv-form', { timeout: 30000 });

    for (let criterion = 1; criterion <= criteriaCount; criterion += 1) {
      if (criterion === 1) {
        await fillDomBase(page, promptNo, 0);
        await clickIfVisible(page, '#generate-btn');
      } else if (criterion === 2) {
        await fillDomBase(page, promptNo, 0);
        await page.fill('input[name="fullName"]', '');
        await page.fill('input[name="headline"]', '');
        await page.fill('input[name="email"]', `invalid-${promptNo}`);
        await clickIfVisible(page, '#generate-btn');
      } else if (criterion === 3) {
        await fillDomBase(page, promptNo, 0);
        await page.fill('input[name="skills"]', `html, css, js, prompt-${pad(promptNo)}, dom, replay`);
        await page.fill(
          'textarea[name="experience"]',
          `Role P${pad(promptNo)} @ Team Alpha - 2024-2026\nProject A\nProject B`,
        );
        await page.fill(
          'textarea[name="education"]',
          `IT @ Demo University - ${2000 + promptNo}\nFrontend Bootcamp`,
        );
        await clickIfVisible(page, '#generate-btn');
      } else if (criterion === 4) {
        await fillDomBase(page, promptNo, 1);
        await clickIfVisible(page, '#load-edge-data-btn');
        await clickIfVisible(page, '#generate-btn');
        await clickIfVisible(page, '.regression-panel summary');
      } else if (criterion === 5) {
        if (!(await clickIfVisible(page, '#reset-btn'))) {
          await fillDomBase(page, promptNo, 0);
          await page.fill('input[name="fullName"]', '');
          await page.fill('input[name="email"]', '');
          await clickIfVisible(page, '#generate-btn');
        }
      } else {
        await fillDomBase(page, promptNo, criterion);
        await clickIfVisible(page, '#generate-btn');
      }

      await clickIfVisible(page, '.report-panel summary');
      await page.waitForTimeout(250);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(120);

      const output = buildCriterionOutput(folder, promptNo, criterion);
      await page.screenshot({ path: output, fullPage: false });
      if (criterion === 1) {
        await copyFile(output, legacyOutput);
      }
      console.log(`saved ${output}`);
    }
  } finally {
    await page.close();
  }
};

const setReactTemplate = async (page, targetIndex) => {
  const pickerButton = page
    .locator('header button')
    .filter({ hasText: /(Smart Import)/i })
    .first();

  // The template picker sits between Smart Import and Download PDF in header.
  const templateToggle = pickerButton.locator('xpath=following-sibling::div[1]//button').first();
  await templateToggle.click({ timeout: 1200 });
  const normalizedIndex = ((targetIndex % 3) + 3) % 3;
  const option = page.locator('div.absolute.top-full button').nth(normalizedIndex);
  await option.click({ timeout: 1200 });
};

const trySetReactTemplate = async (page, targetIndex) => {
  try {
    await setReactTemplate(page, targetIndex);
  } catch {
    // Some historical checkpoints may not have the exact template dropdown behavior.
  }
};

const fillReactBase = async (page, promptNo, variant = 0, stage = 'react') => {
  const data = makePromptData(promptNo + variant, stage);
  await page.fill('#fullName', data.fullName);
  await page.fill('#email', data.email);
  await page.fill('#phone', data.phone);
  await page.fill('#address', data.location);
  await page.fill('#linkedin', data.linkedin);
  await page.fill('#website', data.website);
  await page.fill('#summary', data.summary);
};

const captureReactPrompt = async (browser, promptNo, criteriaCount) => {
  const folder = await ensurePromptFolder(promptNo);
  const legacyOutput = path.join(folder, `P${pad(promptNo)}-ui-01-runtime-after-prompt.png`);
  const stage = promptNo >= 53 ? 'pdf' : 'react';
  const baseTemplateIndex = promptNo - 36;
  const page = await browser.newPage({ viewport: { width: 1720, height: 1080 } });

  try {
    await page.goto(`http://127.0.0.1:${REACT_PORT}`, {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
    await page.waitForSelector('#fullName', { timeout: 120000 });

    for (let criterion = 1; criterion <= criteriaCount; criterion += 1) {
      if (criterion === 1) {
        await fillReactBase(page, promptNo, 0, stage);
        await trySetReactTemplate(page, baseTemplateIndex);
      } else if (criterion === 2) {
        await fillReactBase(page, promptNo, 0, stage);
        await page.fill('#fullName', '');
        await page.fill('#email', '');
        await page.fill('#summary', '');
        await trySetReactTemplate(page, baseTemplateIndex + 1);
      } else if (criterion === 3) {
        await fillReactBase(page, promptNo, 1, stage);
        await trySetReactTemplate(page, baseTemplateIndex + 2);
      } else {
        await fillReactBase(page, promptNo, criterion, stage);
        await trySetReactTemplate(page, baseTemplateIndex + criterion);
      }

      await page.waitForTimeout(700);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(120);

      const output = buildCriterionOutput(folder, promptNo, criterion);
      await page.screenshot({ path: output, fullPage: false });
      if (criterion === 1) {
        await copyFile(output, legacyOutput);
      }
      console.log(`saved ${output}`);
    }
  } finally {
    await page.close();
  }
};

const run = async () => {
  const startPrompt = Number(process.env.START_PROMPT || 1);
  const endPrompt = Number(process.env.END_PROMPT || 60);
  if (Number.isNaN(startPrompt) || Number.isNaN(endPrompt) || startPrompt < 1 || endPrompt > 60 || startPrompt > endPrompt) {
    throw new Error('Invalid START_PROMPT/END_PROMPT range');
  }

  await ensureExecutable(BROWSER_PATH);

  const needsDom = startPrompt <= 35;
  const needsReact = endPrompt >= 36;
  const nextBin = process.env.NEXT_BIN || path.join(SCRIPT_DIR, '..', 'node_modules', 'next', 'dist', 'bin', 'next');
  const nextArgString = process.env.NEXT_ARGS || 'dev -H 127.0.0.1 -p ' + String(REACT_PORT);
  const nextArgs = nextArgString.trim().split(/\s+/);

  const domServer = needsDom
    ? startProcess('python3', ['-m', 'http.server', String(DOM_PORT)], 'dom-server')
    : null;
  const reactServer = needsReact
    ? startProcess('node', [nextBin, ...nextArgs], 'react-server')
    : null;

  let browser;
  try {
    if (needsDom) await waitForUrl(`http://127.0.0.1:${DOM_PORT}/index.html`);
    if (needsReact) await waitForUrl(`http://127.0.0.1:${REACT_PORT}`);

    browser = await chromium.launch({
      executablePath: BROWSER_PATH,
      headless: true,
      args: ['--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage'],
    });

    for (let i = startPrompt; i <= endPrompt; i += 1) {
      const criteriaCount = await getCriteriaCount(i);
      if (i <= 35) {
        await captureDomPrompt(browser, i, criteriaCount);
      } else {
        await captureReactPrompt(browser, i, criteriaCount);
      }
    }
  } finally {
    if (browser) await browser.close();
    await stopProcess(domServer);
    await stopProcess(reactServer);
  }
};

run().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
