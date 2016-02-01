'use strict';
var sh = require('shelljs');

// move released dirs to tmp folder
var releasedDirs = ['node_modules/polythene'];
var releasedDest = 'tmp-npm/';

releasedDirs.forEach(function(dir) {
    sh.mv(dir, releasedDest);
});


// move symlinked working dirs to node_modules folder
var workingDirs = ['tmp/polythene'];
var workingDest = 'node_modules/';

workingDirs.forEach(function(dir) {
    sh.mv(dir, workingDest);
});
