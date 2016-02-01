var fs = require('fs');
var browserify = require('browserify');
var aliasify = require('aliasify');
var babelify = require('babelify');

var aliasifyConfig = {
    aliases: {}
};

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es6.js'],
        paths: ['.', 'node_modules']
    })
    .transform(babelify)
    .transform(aliasify, aliasifyConfig)
    .transform({
        global: true,
        ignore: [
            '**/node_modules/h.js/*'
        ]
    }, 'uglifyify')
    .bundle()
    .on('error', function(err) {
        console.log('Error : ' + err.message);
    })
    .pipe(fs.createWriteStream(outfile));
};

bundle([
    'app/index/index.es6.js'
], '../build/app/index/index-bundle.js');
