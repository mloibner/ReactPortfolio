import React from "react";
import Nav from 'react-bootstrap/Nav'
import {useHistory} from "react-router-dom"
import "../style.css"

function NavBar() {
    
    const history = useHistory();

    function aboutMe() {
        history.push("/about")
    };
    function myPortfolio() {
        history.push("/portfolio")
    };
    function contactMe() {
        history.push("/contact")
    }
    function takeHome() {
        history.push("/")
    }

    return (
    
        <Nav className="navClass">
        <Nav.Item >
          <Nav.Link onSelect={takeHome}>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onSelect={aboutMe}>About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onSelect={myPortfolio}>Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onSelect={contactMe}>Contact</Nav.Link>
        </Nav.Item>
      </Nav>
)};


export default NavBar;