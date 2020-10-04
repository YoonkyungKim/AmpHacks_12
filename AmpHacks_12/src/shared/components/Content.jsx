import React from "react";
import "./style.css";

function Content(props){
    return (
        <div className="col content-box">
            <h5>{props.header}</h5>
            <div className="content">{props.content}</div>
        </div>
    );
}

export default Content;