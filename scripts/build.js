var fs = require('fs');
var browserify = require('browserify');
var babelify = require('babelify');
var uglifyify = require('uglifyify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: ['./src/']
    })
    .transform(babelify)
    .transform({
        global: true
    }, 'uglifyify')
    .bundle()
    .on('error', function(err) {
        console.log('Error : ' + err.message);
    })
    .pipe(fs.createWriteStream(outfile));
}

bundle(['./src/app/index/index.es6.js'], 'build/app/index/index-bundle.js');
