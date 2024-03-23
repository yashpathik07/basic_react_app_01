import React from "react";
import headerImg from "../../assets/data.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={headerImg} alt="" />
            <h1>PROGRAMMING</h1>
            <p>
                Programming is the process of designing, writing, testing and
                maintaining source code to create computer programs.
            </p>
        </header>
    );
}
