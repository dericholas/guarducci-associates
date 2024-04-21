"use client"

import Link from "next/link";
import React from "react";

const NavBar = () => {

    const goToHome = () => {
        return window.location.href = "/";
    }

    return (
        <div className="navbar">
            <img className="navbar-logo" onClick={goToHome} src="/images/guarducci-logo.png"/>
            <ul className="navbar-menu">
                <li> <Link href="/about" className="navbar-link">About</Link> </li>
                <li> <Link href="/services" className="navbar-link">Services</Link> </li> 
                <li> <Link href="/projects" className="navbar-link">Projects</Link> </li>
                <li> <Link href="/contact" className="navbar-link">Contact Us</Link> </li>
            </ul>

        </div>
    )
}

export default NavBar;