var sh = require('shelljs');
sh.rm('-rf', '../gh-pages/app');
sh.rm('-rf', '../gh-pages/index.html');
sh.cp('-r', 'build/*', '../gh-pages/');
