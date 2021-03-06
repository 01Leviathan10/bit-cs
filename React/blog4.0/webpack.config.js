module.exports = {
    entry: __dirname + "/src/index",
    target: "web",
    output: {
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        contentBase: __dirname + "/src"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"]
            },
            {
                test: /(\.css)$/,
                loaders: ["style", "css"]
            },
        ]
    }
};
