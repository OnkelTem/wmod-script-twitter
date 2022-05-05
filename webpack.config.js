const path = require("path");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    hack: path.resolve(__dirname, "src/index.ts"),
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-typescript", { jsxPragma: "h" }],
            ],
            plugins: [
              "@babel/transform-runtime",
              ["@babel/plugin-transform-react-jsx", { pragma: "h" }],
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: /node_modules/,
        type: "asset/resource",
      },
    ],
  },
  watch: process.env.NODE_ENV === "development",
  watchOptions: {
    aggregateTimeout: 600,
    ignored: "**/node_modules",
  },
  devtool: "source-map",
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        configFile: "tsconfig.web.json",
        mode: "write-references",
      },
    }),
  ],
};
