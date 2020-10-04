import React from "react";
import "./style.css";

function CategoryCard(props){
    return (
        <div id="category" className="col-md-3 col-sm-6 category-box">
            <div className="category">{props.text}</div>
        </div>
    );
}

export default CategoryCard;