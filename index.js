#!/usr/bin/env node
const { spawn } = require('child_process');
const { resolve } = require('path');
const { readFileSync, existsSync } = require('fs');
const yesno = require('yesno');

const pkgJsonPath = resolve(process.cwd(), 'package.json');
if (!existsSync(pkgJsonPath)) {
  console.error("Can't find package.json in", process.cwd());
  process.exit(1);
}

const { version } = JSON.parse(readFileSync(pkgJsonPath).toString());

(async () => {
  const ok = await yesno({
    question: `Are you sure you want to publish v${version}?`,
    defaultValue: null,
  });
  if (!ok) process.exit();
  spawn(`git push && git push origin v${version}`, {
    shell: true,
    stdio: 'inherit',
  });
})();
