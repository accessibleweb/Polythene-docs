'use strict';
var sh = require('shelljs');

var fileRe = /\.md$/;
var origin = '../../../polythene/master/';
var destinations = ['app/docs/', '../build/app/docs/'];

destinations.forEach(function(dest) {
    sh.rm('-rf', dest);
    sh.mkdir('-p', dest);
});

var allFiles = sh.find(origin);

var files1 = allFiles.filter(function(file) {
    if (!file.match(/node_modules/)) {
        return file;
    }
});

var files2 = files1.filter(function(file) {
    if (!file.match(/README\.md/)) {
        return file;
    }
});

var files3 = files2.filter(function(file) {
    return file.match(fileRe);
});

files3.map(function(file) {
    destinations.forEach(function(dest) {
        sh.cp(file, dest);
    });
});
