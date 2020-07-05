const path = require('path');

module.exports={
   target:'node',
    resolve:{
        extensions:['.js','.jsx']
    },
    entry:'./src/server/',
    output:{
        filename:'server.js',
        path:path.resolve(__dirname,'build')
    },
    module:{
        rules: [
            { test: /.jsx?$/,exclude: /node_modules/,use: 'babel-loader'},
            { test: /.scss?$/,exclude: /node_modules/,
              use: [
                // css-loader
                {
                  loader: 'css-loader',
                  options: {
                    modules: true
                  }
                },
                // sass-loader
                { loader: 'sass-loader' }
              ]}
        ]
    }
}