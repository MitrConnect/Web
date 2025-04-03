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
        './src/firebase/view_manager.js',
        './src/firebase/RTDB.js',
        './src/firebase/Auth.js',
        './src/firebase/CloudDB.js',

        './src/auth.js',
        './src/profile.js',
        './src/explore.js',
        './src/activity.js',
        './src/chat.js',

        './src/objects/_auth.js',
        './src/objects/_chat.js',
        './src/objects/_window.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: './bundle/main.js',
    },
    devtool: 'eval-source-map',
    watch: true,
    devServer: {
        allowedHosts: 'all',
    },
    optimization: {
        minimize: false, // Disable minification for testing
    },
};