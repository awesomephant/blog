const path = require('path');
module.exports = {
    entry: {
        main: './js/index.js',
        cmsDemo: './js/cms-demo.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '_site/js/'),
    },
};