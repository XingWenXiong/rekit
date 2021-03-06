/* Run sanity tests all installed from npm */

const path = require('path');
const shell = require('shelljs');

const ws = path.join(__dirname, '../../../');

shell.exec('npm run build -- --dist', { cwd: path.join(ws, 'rekit-portal') });
shell.exec('node ./rekit.js --local-portal --local-core');
shell.exec('node ./rekit.js --sass --local-portal --local-core');
shell.exec('node ./plugin.js');
