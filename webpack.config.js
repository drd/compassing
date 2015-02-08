var webpack = require('webpack');

module.exports = {
    context: __dirname + '/app',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/dev-server',
        './client.jsx'
    ],
    output: {
        filename: 'compassing.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
//    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    server: {
	port: 3000
    },
    resolve: {
        // Look directly in app dir for modules
        root: __dirname + '/app',
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['6to5?source-maps&experimental'] },
            // Pass *.jsx files through jsx-loader transform
            { test: /\.jsx$/, loaders: ['6to5?source-maps&experimental', 'react-hot', 'jsx'] },
            { test: /\.css$/, loaders: ['style', 'css'] }
        ]
    }
}
