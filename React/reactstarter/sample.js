import React from "react";
import ReactDOM from "react-dom";

const myComponent = (props) => {
    return (
        <div>
            <h1 title={props.title}>{props.name}</h1>
            <p>{new Date().toString()}</p>            
            <p>Some random text.</p>
            <p>{Math.floor(Math.random()*10)}</p>
            <p>Some random text.</p>
            <p>Some random text.</p>
            <p>Some random text.</p>
        </div>
    );
};

ReactDOM.render(myComponent({ name: "Nenad" }), document.getElementById("app"));