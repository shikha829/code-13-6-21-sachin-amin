const path = require("path");

module.exports = {
    mode: 'development',
    entry: './index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: 'main.[hash].js'
        filename:'buildoutput.js'
    },
    target: 'node',
}