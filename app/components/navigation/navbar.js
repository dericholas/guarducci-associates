import Link from "next/link";
import React from "react";


const NavBar = () => {

    return (
        <div className="navbar">
            <ul>
                <li> <Link href="/about">About</Link> </li>
                <li> <Link href="/expertise">Expertise</Link> </li> 
                <li> <Link href="/projects">Projects</Link> </li>
                <li> <Link href="/contact">Contact Us</Link> </li>
            </ul>

        </div>
    )
}