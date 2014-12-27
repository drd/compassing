var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './client.js'
    ],
    output: {
        filename: 'compassing.js',
        path: __dirname + '/dist',
        publicPath: 'http://localhost:3000/'
    },
//    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        // Look directly in app dir for modules
        root: __dirname + '/app',
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['react-hot', 'jsx'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
