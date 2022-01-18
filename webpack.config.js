const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'; //variavel ambiente que vai ser usada para configurar o ambiente entre desenvolvimento e produção.

module.exports ={
    mode: isDevelopment ? 'development' : 'production', 
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
    entry:path.resolve(__dirname,'src','index.jsx'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions:['.js','.jsx']
    },
    devServer: {
        static:{
        directory: path.resolve(__dirname, 'public'),
        }
        },

    plugins:[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ],
    module: {
        rules:[
            {
                test: /\.jsx$/,
                use:'babel-loader'
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    }
}