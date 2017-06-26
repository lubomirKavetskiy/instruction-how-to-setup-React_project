# instruction-how-to-setup-React_project
a| create GitHub repository and clone it using https
b| open in IDE project (using GIT Versoion control)
c| terminal: npm init => package.json
d| add package.json to Git* (open package.json in Notepad++ IDE =>edit =>EOL Conversion => Convert to Windows* Format)
e| create two directories: public and src
f| create public/index.html /* <!DOCTYPE html>
                               <html>
                                   <head>
                                       <meta charset="UTF-8">
                                       <title>Title</title>
                                   </head>
                                   <body>
                                       <div id="message"></div>

                                       <script src="bundle.js"></script>
                                   </body>
                               </html>
                               */
                               and
                               src/index.js /* import React from "react";
                                               import ReactDOM from "react-dom";

                                               class Message extends React.Component {
                                                   render() {
                                                       return(
                                                           <div>Hello {this.props.name}</div>
                                                       );
                                                   }
                                               }

                                               var mountNode = document.getElementById("message");

                                               ReactDOM.render(
                                                   <Message name="Jane" />,
                                                   mountNode
                                               );
                                               */
g| terminal: npm install --save-dev webpack babel-loader babel-core babel-preset-es2015 babel-preset-react
h| terminal: npm install --save react react-dom
i| create .gitignore file
j| create webpack.config.js /* const path = require('path');

                               module.exports = {
                                   entry: path.join(__dirname, 'src', 'index.js'),
                                   output: {
                                       path: 'public',
                                       filename: 'bundle.js',
                                   },
                                   module: {
                                       loaders: [
                                           {
                                               test: /\.(js|jsx)$/,
                                               exclude: /node_modules/,
                                               loaders: ["babel-loader"]
                                           },
                                       ],
                                   },
                               };
                            */
k| create .babelrc /* { "presets": ["es2015", "react"] } */
m| terminal: npm install webpack-dev-server --save-dev
n| add to package.json: /*"build":"webpack-dev-server --content-base ./public --inline --hot"*/
o| terminal: npm install --save-dev react-hot-loader
p| add to webpack.config.js: loaders: ["react-hot-loader",
r| terminal: npm run build
s| localhost:8080