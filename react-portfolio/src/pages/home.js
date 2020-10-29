import React from "react";
import FooterPage from "../components/Footer"
import NavBar from "../components/Nav"
import HomePage from "../components/HomeBox"


function Home() {
    return (
        <div>
            <NavBar />
            <HomePage />
            <FooterPage />
        </div>
    )
}

export default Home;