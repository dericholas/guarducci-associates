"use client"

import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {

    const goToHome = () => {
        return window.location.href = "/";
    }

    const [displayMenu, setDisplayMenu] = useState(false)
    const toggleMenu = () => {
        setDisplayMenu(!displayMenu)
    }
    return (
        <div className="navbar">
            <img className="navbar__logo" onClick={goToHome} src="/images/guarducci-logo.png"/>
            <ul className="navbar__menu">
                <li> <Link href="/about" className="navbar__menu__link">About</Link> </li>
                <li> <Link href="/projects" className="navbar__menu__link">Projects</Link> </li>
                <li> <Link href="/services" className="navbar__menu__link">Services</Link> </li> 
                <li> <Link href="/contact" className="navbar__menu__link">Contact Us</Link> </li>
            </ul>
            <div className="mobile">
                <button onClick={toggleMenu} className="mobile__toggle-button">{displayMenu ? "\u2573" : "\u2630"}</button>
                {displayMenu && <ul className="mobile__menu">
                    <li> <Link href="/about" className="mobile__menu__link">About</Link> </li>
                    <li> <Link href="/projects" className="mobile__menu__link">Projects</Link> </li>
                    <li> <Link href="/services" className="mobile__menu__link">Services</Link> </li> 
                    <li> <Link href="/contact" className="mobile__menu__link">Contact Us</Link> </li>
                </ul>}
            </div>
        </div>
    )
}

export default NavBar;