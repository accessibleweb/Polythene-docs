System.config({
    baseURL: '.',
    defaultJSExtensions: true,
    transpiler: 'babel',
    babelOptions: {
        'optional': [
            'runtime',
            'optimisation.modules.system'
        ]
    },
    map: {
        'fastclick': 'node_modules/fastclick/lib/fastclick',
        'highlight.js': 'node_modules/highlight.js/lib/highlight',
        'j2c': 'node_modules/j2c/dist/j2c.global.min',
        'lodash': 'node_modules/lodash',
        'marked': 'node_modules/marked/lib/marked',
        'mithril': 'node_modules/mithril/mithril.min',
        'mmsvg': 'node_modules/mmsvg',
        'polythene-theme': 'node_modules/polythene-theme',
        'polythene': 'node_modules/polythene',
        'verge': 'node_modules/verge/verge.min'
    }
});
