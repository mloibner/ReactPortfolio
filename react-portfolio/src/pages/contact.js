import React from "react";
import ContactPage from "../components/ContactMe";
import FooterPage from "../components/Footer"
import NavBar from "../components/Nav"



function Contact() {
    return (
        <div>
            <NavBar />
            <ContactPage />
            <FooterPage />
        </div>
    )
}

export default Contact;