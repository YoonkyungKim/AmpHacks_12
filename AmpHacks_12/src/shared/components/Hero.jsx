import React from "react";
// import styled from "styled-components";
import "./style.css";

function Hero(props){
    return (
        <div>    
            <div className="hero-container">
                <img className="hero-img" src={props.img} alt='hero 1' />
                <div className="text-container">
                    <h1 className="hero-text">{props.text}</h1>
                    {/* <button type="button" class="btn btn-dark btn-lg banner-btn">Order Now</button> */}
                    <button type="button" className="btn btn-dark btn-md" id="hero-btn">Start Now</button>
                {/* <button type="button" class="btn btn-outline-primary btn-lg hero-btn">BUILD YOUR ORDER</button> */}
                        {/* video component inside the hero */}
                </div>
            </div>
        </div>
    );
}
export default Hero;