import React, { useEffect } from "react";
import Nav from 'react-bootstrap/Nav'
import {useHistory} from "react-router-dom"
import "../style.css"

function NavBar() {


    return (
    
        <Nav className="navClass">
        <Nav.Item >
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
)};


export default NavBar;