"use client"

import "@/components/Navbar/Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";


export default function Navbar() {

  const [isOpen, setIsOpen]= useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  }) 

  const changeBackground = () => {

    if (window.scrollY >= 800) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  return (
    <>
    <nav className={isScrolled?"nav-scrolled":""}>
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
