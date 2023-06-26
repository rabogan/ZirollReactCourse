import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="./images/react-logo.png" className="nav-logo" alt="React Logo" />
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}