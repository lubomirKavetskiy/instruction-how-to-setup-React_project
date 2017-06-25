/**
 * Created by Любомир on 25.06.2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
    render() {
        return(
            <div>Hello developer {this.props.name}</div>
        );
    }
}

var mountNode = document.getElementById("message");

ReactDOM.render(
    <Message name="Lubomir" />,
    mountNode
);

