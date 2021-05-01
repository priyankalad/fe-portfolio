import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="nav_bar">
                <ul className="nav_bar__ul">
                    <li className="nav_bar__li"><a className="nav_bar__a" href="#">Home</a></li>
                    <li className="nav_bar__li"><a className="nav_bar__a" href="#">About</a></li>
                    <li className="nav_bar__li"><a className="nav_bar__a" href="#">Portfolio</a></li>
                    <li className="nav_bar__li"><a  className="nav_bar__a"href="#">Services</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
