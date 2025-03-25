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
        './src/home.js',
        './src/firebase/auth.js',
        './src/objects/_auth.js',
        './src/firebase/screen_manager.js'
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