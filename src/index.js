/**
 * Created by Любомир on 25.06.2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text: 'variant c'
        }

    }

    render() {
        return(
            {/*<div>Hello developer {this.props.name}</div>*/},
            {/*<h1>{ this.props.children }</h1>*/},
            <h1>{ this.state.text }</h1>

        );
    }
}

var mountNode = document.getElementById("message");

ReactDOM.render(

        <Message/>,
    mountNode
);

