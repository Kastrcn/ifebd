/**
 * Created by 赵天 on 2017/2/18.
 */
module.exports = {
    entry: './main.js',
    output: {
        filename: './bundle.js'
    },
    module: {
        loaders:[
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
            },
        ]
    }
};