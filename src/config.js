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
        'h.js': 'node_modules/h.js/h',
        'j2c': 'node_modules/j2c/dist/j2c.global.min',
        'marked': 'node_modules/marked/lib/marked',
        'mithril': 'node_modules/mithril/mithril.min',
        'mmsvg': 'node_modules/mmsvg',
        'polythene': 'node_modules/polythene'
    }
});
