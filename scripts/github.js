var sh = require('shelljs');
sh.rm('-rf', '../gh-pages/app/*');
sh.cp('-r', 'build/app/*', '../gh-pages/app/');
