import React from "react";
import Image from "./assets/pic.png";


function HomePage() {
    return (
        <div>
            <img src={Image} alt="image of background"></img>
            <p>
                <h2>Hello, I'm Monique</h2>
                <p>I am a Web Developer in the making and this is my Responsive Portfolio. I have a passion for design, coding and making people happy. I love sharing my work with others and I take immense pride in what I do. Trust me when I say, you're going to want me on your side of the fence. Take a look inside...</p>
            </p>
        </div>
    )
}

export default HomePage()