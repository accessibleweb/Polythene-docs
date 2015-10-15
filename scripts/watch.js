var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

function bundle(entries, outfile) {
    var w, b;
    b = browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: ['./src/'],
        verbose: true
    });
    w = watchify(b, {})
        .transform(babelify);

    // Without the line, update events won't be fired
    w.bundle()
        .on('data', function() {})
        .pipe(fs.createWriteStream(outfile));
}

bundle(['./src/app/index/index.es6.js'], 'build/app/index/index-bundle.js');
