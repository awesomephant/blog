const path = require('path');
module.exports = {
    entry: {
        main: './js/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '_site/js/'),
    },
};