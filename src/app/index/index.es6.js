import 'polythene/common/no-tap-delay';

import m from 'mithril';
import marked from 'marked';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import headerPanel from 'polythene/header-panel/header-panel';
import button from 'polythene/button/button';
import h from 'h.js';

import webfontLoader from 'polythene/common/webfontloader';
webfontLoader.add('google', 'Inconsolata:400,700:latin');

import 'polythene/theme/theme';
import 'polythene/layout/theme/theme';

import styler from 'polythene/common/styler';
import appStyle from 'app/app/app-style';
import syntaxStyle from 'app/app/syntax';
styler.add('polythene-docs-app', appStyle, syntaxStyle);

const defaultTitle = 'Polythene Documentation';

const links = [{
    label: null,
    links: [{
        url: '/polythene',
        name: 'Introduction',
        title: defaultTitle,
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html',
        label: 'View examples'
    }]
}, {
    label: 'Components',
    links: [{
        url: '/checkbox',
        name: 'Checkbox',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/checkbox'
    }, {
        url: '/radio-button',
        name: 'Radio button',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/radio-button'
    }, {
        url: '/switch',
        name: 'Switch',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/switch'
    }, {
        url: '/spinner',
        name: 'Spinner',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/spinner'
    }, {
        url: '/textfield',
        name: 'Textfield',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/textfield'
    }, {
        url: '/search',
        name: 'Search',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/search'
    }, {
        url: '/header-panel',
        name: 'Header Panel',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/header-panel'
    }, {
        url: '/toolbar',
        name: 'Toolbar',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/toolbar'
    }, {
        url: '/list',
        name: 'List',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/list'
    }, {
        url: '/dialog',
        name: 'Dialog',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/dialog'
    }, {
        url: '/selection-control',
        name: 'Selection control'
    }, {
        url: '/menu',
        name: 'Menu',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/menu'
    }, {
        url: '/tabs',
        name: 'Tabs',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/tabs'
    }, {
        url: '/card',
        name: 'Card',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/card'
    }, {
        url: '/notification',
        name: 'Notification and Snackbar',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/notification'
    }, {
        url: '/button',
        name: 'Button',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/button'
    }, {
        url: '/icon-button',
        name: 'Icon Button',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/icon-button'
    }, {
        url: '/fab',
        name: 'Floating Action Button',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/fab'
    }, {
        url: '/slider',
        name: 'Slider',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/slider'
    }, {
        url: '/list-tile',
        name: 'List Tile',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/list-tile'
    }, {
        url: '/svg',
        name: 'SVG',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/svg'
    }, {
        url: '/icon',
        name: 'Icon',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/icon'
    }, {
        url: '/ripple',
        name: 'Ripple',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/ripple'
    }, {
        url: '/shadow',
        name: 'Shadow',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/shadow'
    }, {
        url: '/font-roboto',
        name: 'Roboto Font',
        demo: null
    }]
}, {
    label: 'Styling',
    links: [{
        url: '/theme',
        name: 'Theming',
        demo: null
    }, {
        url: '/layout',
        name: 'Layout',
        demo: 'http://arthurclemens.github.io/Polythene-examples/index.html#/layout'
    }]
}];

const linkMap = {};
links.forEach((group) => {
    group.links.forEach((linkData) => {
        linkMap[linkData.url] = linkData;
    });
});

const sortLinkData = ((a, b) => {
    const a1 = a.name.toLowerCase();
    const b1 = b.name.toLowerCase();
    return (a1 > b1) ? 1 : (a1 < b1 ? -1 : 0);
});

const baseUrl = links[0].links[0].url;

const navItem = (title, url, selected) => {
    return m.component(listTile, {
        title: title,
        url: {
            href: url,
            config: m.route
        },
        class: selected ? 'highlight' : ''
    });
};

const navigation = {};
navigation.view = () => {
    let selected;
    return m('.drawer.pe-dark-theme', m.component(headerPanel, {
        header: {
            toolbar: {
                topBar: m('.title', 'Polythene')
            }
        },
        mode: 'waterfall',
        fixed: true,
        content: [
            links.map((linkGroup) => {
                return m.component(list, {
                    header: linkGroup.label ? {
                        title: linkGroup.label
                    } : null,
                    tiles: linkGroup.links.sort(sortLinkData).map((link) => {
                        selected = (m.route() === link.url);
                        return navItem(link.name, link.url, selected);
                    })
                });
            }),
            m('.footer', m.trust('Polythene by Arthur Clemens 2015. Project page on <a href="https://github.com/ArthurClemens/Polythene">Github</a>.')) // Logo icon design by <a href="https://thenounproject.com/acider/">Miguel C Balandrano</a>
        ],
        restoreScrollPositionId: 'drawer',
        updateContentOnScroll: false
    }));
};

const main = {};
main.view = (ctrl, opts) => {
    const currentLink = opts.currentLink;
    const content = opts.content;
    const title = currentLink.name;
    const parsed = content ? marked(content) : '';

    const url = {
        href: currentLink.demo,
        target: '_blank'
    };

    const demoLink = currentLink.demo ? m.component(button, {
        label: currentLink.label || 'Demo',
        url
    }) : null;

    const mainContent = parsed ? m.trust(parsed) : m('div', 'Nothing here');

    return m('.main.flex',
        m.component(headerPanel, {
            header: {
                toolbar: {
                    topBar: [
                        m('.title', [m('span', title), demoLink])
                    ]
                }
            },
            mode: 'waterfall',
            content: m('.doc-content', {
                config: (el, inited) => {
                    if (inited) return;

                    // Syntax coloring
                    Array.from(el.querySelectorAll('pre code')).forEach((code) => {
                        code.innerHTML = h(code.textContent);
                    });

                    // Handle links
                    const links = [].slice.call(el.querySelectorAll('a'));
                    links.forEach((ln) => {
                        const lnHref = ln.getAttribute('href');
                        if (!lnHref.match(/^http/)) {
                            ln.onclick = (e) => {
                                e.preventDefault();
                                m.route(lnHref.replace('#', '/'));
                            };
                        }
                    });

                    // Handle javascript
                    Array.from(el.querySelectorAll('script')).forEach((script) => {
                        const js = document.createElement('script');
                        js.src = script.src;
                        const scriptNode = script.parentNode.insertBefore(js, script);
                        const content = document.createElement('div');
                        content.innerHTML = script.innerHTML;
                        scriptNode.parentNode.insertBefore(content, scriptNode);
                    });
                }
            }, mainContent)
        })
    );
};

const app = {};
app.controller = () => {
    const docs = m.request({
        method: 'GET',
        url: 'app/docs/' + m.route() + '.md',
        background: false,
        deserialize: (value) => {
            return value;
        }
    });

    const currentLink = () => {
        return linkMap[m.route()];
    };

    return {
        docs,
        currentLink
    };
};

app.view = (ctrl) => {
    const content = ctrl.docs();
    const currentLink = ctrl.currentLink() || {
        title: '',
        url: '/'
    };
    return [
        m('.scaffold.layout.horizontal.reverse', [
            m.component(main, {currentLink, content}),
            m.component(navigation, {currentLink})
        ])
    ];
};

m.route.mode = 'hash';
m.route(document.body, baseUrl, {
    '/:any': app
});

// When going to another page and then hitting the back button
// on Safari 9.0.x, the scrollable panes are frozen.
// This script reloads the view.
window.addEventListener('pageshow', (e) => {
    if (e.persisted) {
        setTimeout(() => {
            window.location.reload();
        }, 0);
    }
}, false);
