const fontSize = 15;
const mainSidePadding = 80;
const smallMainSidePadding = 24;
const mediumMainSidePadding = 40;
const largeMainSidePadding = 96;
const mainBackgroundColor = '#f3f3f5';
const mainTextColor = '#333';
const sideColor = '#00C853';
const drawerColor = '#263238';
const drawerHighlightColor = '#00C853';
const mainHeaderBackgroundColor = '#00E676';
const bodyBackgroundColor = '#37474F';
const linkColor = '#1E88E5';
const linkHoverColor = '#1565C0';
const lightBorderColor = '#eee';
const headerFontSize = 20;
const logoColor = 'rgba(0;0;0;.87)';
const mediumScreenDrawerWidth = 240;
const largeScreenDrawerWidth = 280;

const styles = [{
    ' html, body': {
        height: '100%',
        margin: 0,
        padding: 0
    },

    ' body': {
        'background-color': bodyBackgroundColor,
        position: 'relative',
        color: mainTextColor,
        'min-width': '320px'
    },
    ' .scaffold': {
        height: '100%'
    },
    ' .drawer, .drawer.dark-theme': {
        background: drawerColor,
        position: 'relative',
        height: '100%',

        ' .toolbar': {
            background: 'none'
        },

        ' .topBar': {
            padding: '0 12px',
            color: '#fff',

            ' .title': {
                color: logoColor
            }
        },

        ' .headerContainer': {
            'background-color': sideColor
        },

        ' .list-tile.subheader .list-tile-title': {
            'font-weight': 400,
            color: 'rgba(255,255,255,.45)'
        },
        ' .list-tile .list-tile-title': {
            'font-size': fontSize + 'px',
            color: 'rgba(255,255,255,.9)'
        },
        ' .highlight .list-tile-title, .list-tile a[href]:hover .list-tile-title': {
            color: 'rgba(255,255,255,.9)'
        }
    },

    ' .main': {
        height: '100%',
        'min-height': '100%',
        background: mainBackgroundColor,

        ' a': {
            color: linkColor,
            'text-decoration': 'underline',
            'font-weight': 400,

            '&:hover': {
                color: linkHoverColor,
            }
        },

        ' a.button, a.card': {
            color: mainTextColor,
            'text-decoration': 'none',
            '&:hover': {
                color: mainTextColor
            }
        },

        ' .toolbar': {
            background: 'none'
        },
        ' .headerContainer': {
            'background-color': mainHeaderBackgroundColor
        },

        ' .card': {
            'background-color': '#fff',
            margin: '24px 0 48px 0',
            width: '320px',

            '&:hover': {
                'background-color': '#f7f7f7'
            },
            ' .button .button-content': {
                color: linkColor
            },
            ' .button:hover .button-content': {
                color: linkHoverColor
            }
        },

        ' .btn-demo': {
            display: 'none'
        },
        ' code, pre': {
            'font-family': 'Inconsolata, courier, monospace'
        },

        ' h1:first-of-type': {
            display: 'none'
        },
        ' h2': {
            'font-size': '26px'
        },
        ' h3': {
            'font-size': '23px'
        },
        ' h4': {
            'font-size': '20px'
        },
        ' h1, h2, h3': {
            'font-weight': 400
        },
        ' h2, h3': {
            margin: '35px 0 15px 0'
        },
        ' pre, blockquote': {
            padding: '16px',
            background: '#fff',
            margin: '1em 0'
        },
        ' pre': {
            'white-space': 'pre-wrap'
        },
        ' blockquote': {
            'font-style': 'italic',
            ' p': {
                margin: 0
            }
        },
        ' table': {
            'border-collapse': 'collapse',
            'background-color': '#fff',

            ' tr': {
                'border-bottom': '1px solid ' + lightBorderColor
            },
            ' tbody tr:last-child': {
                border: 'none'
            },
            ' th, td': {
                padding: '8px 16px',
                border: 'none',
                'vertical-align': 'top'
            },
            ' td:last-child': {
                width: '40%'
            },
            ' th, th strong': {
                'font-weight': 'normal',
                color: '#aaa',
                'text-align': 'left'
            },
            ' td strong': {
                color: '#673AB7',
                'font-weight': 'normal'
            }
        },
        ' .hljs': {
            background: 'none !important',
            padding: '0 !important'
        }
    },

    ' .footer': {
        margin: '40px 16px 16px 16px',
        'font-size': '13px',
        color: '#999',

        ' a': {
            color: '#ddd',
            'text-decoration': 'none'
        }
    },

    '@media (max-width: 640px)': {
        ' .scaffold': {
            flex: 'none !important',
            '-webkit-flex': 'none !important',
            display: 'block !important',
            position: 'static !important',
            height: 'auto'
        },

        ' .drawer, .main': {
            ' .header-panel': {
                height: 'auto',

                ' .mainContainer, .outerContainer': {
                    position: 'static',
                    display: 'block !important',
                    'overflow-y': 'visible',
                    'overflow-x': 'visible'
                },
                ' .mainContainer.flex': {
                    flex: 'none',
                    '-webkit-flex': 'none'
                }
            }
        },

        ' .drawer': {
            width: '100%',
            ' .logo': {
                display: 'none'
            },
            ' .highlight': {
                'background-color': '#37474F'
            }
        },

        ' .main': {
            width: '100%',

            ' .topBar': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (smallMainSidePadding - 4) + 'px'
            },
            ' pre': {
                padding: '10px'
            },

            ' table': {
                width: '100%',

                ' thead': {
                    ' th': {
                        display: 'block',
                        width: '100%'
                    }
                },
                ' tbody': {
                    ' td, td:last-child': {
                        display: 'block',
                        width: '100%'
                    },
                    ' td:empty': {
                        '&:before': {
                            content: '-',
                            height: '20px',
                            color: '#aaa'
                        }
                    }
                }
            },

            ' .doc-content': {
                padding: '16px ' + smallMainSidePadding + 'px'
            }
        }
    },

    '@media (max-width: 960px)': {
        ' .main': {
            ' table': {
                width: '100%',

                ' thead': {
                    ' th': {
                        display: 'block',
                        width: '100%'
                    }
                },
                ' tbody': {
                    ' tr': {
                        'border-bottom': 'none'
                    },
                    ' tr:not(:first-child)': {
                        'border-top': '1px solid #ccc'
                    },
                    ' td:first-child': {
                        background: mainBackgroundColor,

                        ' strong': {
                            color: mainTextColor
                        }
                    },
                    ' td, td:last-child': {
                        display: 'block',
                        width: '100%'
                    },
                    ' td:empty:before': {
                        content: '"-"',
                        height: '20px',
                        color: '#aaa'
                    }
                }
            }
        }
    },

    '@media (min-width: 640px) and (max-width: 960px)': {
        ' .drawer': {
            width: mediumScreenDrawerWidth + 'px'
        },

        ' .main': {
            ' .topBar': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (mediumMainSidePadding - 4) + 'px'
            },

            ' .doc-content': {
                padding: '16px ' + mediumMainSidePadding + 'px'
            }
        }
    },

    '@media (min-width: 960px)': {
        ' .drawer': {
            'min-width': largeScreenDrawerWidth + 'px',

            ' .topBar': {
                'font-size': headerFontSize + 'px',
                'line-height': headerFontSize + 'px'
            },

            ' .logo': {
                width: '40px',
                height: '40px'
            }
        },
        ' .main': {
            ' .topBar': {
                'font-size': headerFontSize + 'px',
                padding: '0 ' + (largeMainSidePadding - 4) + 'px'
            },
            ' .doc-content': {
                padding: '16px ' + largeMainSidePadding + 'px'
            }
        }
    }
}];

export default styles;
