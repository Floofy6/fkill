import process from 'node:process';
import childProcess from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const child = childProcess.spawn(process.execPath, ['fixture.js', '0'], {
	stdio: 'ignore',
});

const readyFile = path.join(os.tmpdir(), `fkill-tree-ready-${process.pid}`);
fs.writeFileSync(readyFile, String(child.pid));

setInterval(() => {}, 10_000);
