/**
 * Created by Любомир on 25.06.2017.
 */
import React from "react";
import ReactDOM from "react-dom";

class Message extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            text3: 'version third'
        }

    }

    render() {
        return(
            <div>
                <h1>It's {this.props.children }</h1>
                <h2>It's { this.props.text2 }</h2>
                <h3>{ this.state.text3 }</h3>
            </div>
        );
    }
}

var mountNode = document.getElementById("message");

ReactDOM.render(
    <Message>version first</Message>,
    mountNode
);

// ReactDOM.render(
//     <Message text2="version second" />,
//     mountNode
// );


