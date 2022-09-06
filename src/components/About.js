import React from "react";

function About({ imageURL = "https://via.placeholder.com/215", aboutText }) {
    return (
    <aside id="about">
        <img alt="blog logo" src ={imageURL}></img>
        <p>{aboutText}</p>
    </aside>
    )
}

export default About;