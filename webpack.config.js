const path=require("path");
module.exports={
    entry: "./src/app.js",
    output:{
        path: path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },{
            test:/\.s?css$/,
            use: [
                {loader:"style-loader"},
                {loader: "css-loader"},
                {loader :"sass-loader"}
            ]
        }]
    },
    resolve: {
        alias: {
          react: path.resolve('./node_modules/react'),
        }
    },
    devtool:'cheap-module-source-map', // check other options from the documentation of webpack
    devServer:{
        contentBase: path.join(__dirname,'public'),
        historyApiFallback: true
    }
}