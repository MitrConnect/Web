const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    entry: [
        './src/firebase/config.js',
        './src/firebase/Auth.js',
        './src/Objects/OAuth.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle/main.js',
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
        allowedHosts: 'all',
    }
};