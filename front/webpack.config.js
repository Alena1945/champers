const FileIncludeWebpackPlugin = require('file-include-webpack-plugin')

module.exports = {
    plugins: [
        new FileIncludeWebpackPlugin(
          {
            source: './src/templates',
            destination: '../../dist/html', // relative path to your templates
            replace: [{
              regex: /\[\[FILE_VERSION]]/, // additional things to replace
              to: 'v=1.0.0',
            }],
          },
        )
    ],
    entry: './src/js/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                }]
            }
        ]
    },

    watch: true,

}