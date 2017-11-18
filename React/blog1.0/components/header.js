import React from "react";
import Timer from "./timer";
import About from "./about";
import Authors from "./authors";
import { Link } from "react-router-dom";

const Header = function(){
    return (
        <header>
            <nav>
                <span>
                    <Link to="/">Home</Link>
                </span>
                <span>
                    <Link to="/authors"> | Authors |</Link>
                </span>
                <span>
                    <Link to="/about">About</Link>
                </span>
            </nav>
            {/* <Timer/>  */}
        </header>
    );
};



export default Header;

