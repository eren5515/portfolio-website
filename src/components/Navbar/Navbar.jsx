"use client"

import "@/components/Navbar/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";


export default function Navbar() {

  const [isOpen, setIsOpen]= useState(false);

  return (
    <>
    <nav>
        <div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        </div>


    </nav>
    

    <div className="mobile-nav">
    <FontAwesomeIcon onClick={() => setIsOpen(true)} icon={faBars} style={isOpen?{color: "#4831d4",display:"none"}:{color: "#4831d4",}} />

    <div className={isOpen?"mobile-nav-links":"passive"}>
    <FontAwesomeIcon onClick={() => setIsOpen(false)} icon={faXmark} style={{color: "black",}} />
        <a onClick={() => setIsOpen(false)} href="#home">Home</a>
        <a onClick={() => setIsOpen(false)} href="#about">About</a>
        <a onClick={() => setIsOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setIsOpen(false)} href="#contact">Contact</a>
    </div>
    
    </div>
    </>
  );
}
