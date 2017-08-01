const webpack = require('webpack');
const path = require('path');
const inProduction = (process.env.NODE_ENV === 'production'); //npm command 
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //compiles scss into new css file and puts into dist folder
const PurifyCSSPlugin = require('purifycss-webpack'); //only uses styles that the webpage uses
const CleanWebpackPlugin = require('clean-webpack-plugin'); //deletes every file is dist folder on npm run dev and replaces with fresh files 
const HtmlWebpackPlugin = require('html-webpack-plugin'); //genereates html file with proper hashed files in script tags (because hashing the file changes the hash each time if there was an update, updating the script src by hand every time would be time consuming.)
const glob = require('glob');
/*************
 Clean Path Plugin code
 ***********/
// the path(s) that should be cleaned
let pathsToClean = ['dist'];
// the clean options to use
let cleanOptions = {
  root : __dirname,
  exclude: '',
  verbose: true,
  dry: false,
  watch: true
};
/*************
 End Clean Path Plugin code
 ***********/


module.exports = {
  entry: {
    app: [ //this entry point with a name of app is what the bundled code with be named. In the output [name] refers to "app". Change [name] to *filename if you want a specific name. [name] is a wildcard/placeholder
    './src/main.js',
    './src/main.scss'
    ],
    vendor: ['ramda']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[chunkhash].js' //name will refer to the entry point: eg "app"
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/, //when ran look for sass/scss files. the USE ExtractTextPlugin 
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: { url: true} //setting this to false webpack will ignore image urls and not export them to dist folder! Ran into error keeping this to false
            },
            'sass-loader'
          ],
          fallback: 'style-loader'
        })
      },
      {
        test : /\.(svg|eot|ttf|woff|woff2)$/, //when ran look for fonts. when there are some use the file-loader to condense/reduce them 
        use: 'file-loader'
      },
      {
        test : /\.(png|jpe?g|gif)$/, //images 
        loaders: [
          {
              loader : 'file-loader',
              options : { //loaders may have options. find read the docs for what loader/module you are using to figure out
                name: 'images/[name].[hash].[ext]' //remember [] wildcards
              }
          },
          'img-loader' //this automatically reduces size of images::keep in mind this only works for relative paths
        ],

      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [ //webpack has pulgins. reference docs to see how to import and use them here
  new CleanWebpackPlugin(pathsToClean, cleanOptions),
  new ExtractTextPlugin('[name].css'), //SPENT FOREVER ON ERROR ! Thing is, you need to "require('./style.css')" in [name].js for this command to actually export and make a css file. 
  new PurifyCSSPlugin({
    // Give paths to parse for rules. These should be absolute!
    paths: glob.sync(path.join(__dirname, 'index.html')), //this would probably be a some sort of 'views' folder MVC
    minimize: inProduction
  }),
  new HtmlWebpackPlugin({title: 'App', filename: 'index.html'})
  ]
};

//if npm run production then minify the code
if (inProduction) {
  module.exports.plugins.push(
new webpack
  .optimize
  .UglifyJsPlugin()
  );
}


