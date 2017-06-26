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
j| create webpack.config.js /* const webpack = require('webpack');
                            const path = require('path');

                            const config = {
                                entry: './src/index.js',
                                output: {
                                    path: path.resolve(__dirname, 'public'),
                                    filename: 'bundle.js'
                                },
                                module: {
                                    rules: [
                                        {
                                            test: /\.(js|jsx)$/,
                                            exclude: /node_modules/,
                                            use: 'babel-loader'
                                        }
                                    ]
                                }
                            };
                            module.exports = config;
                            */
k| create .babelrc /* { "presets": ["es2015", "react"] } */
l| package.json /* "scripts": {
                      "build": "webpack"
                    },
                     */
m| terminal: npm run build
n| open index.html in browser