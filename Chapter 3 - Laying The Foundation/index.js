import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/react_logo.svg";
import avatar from "./assets/avatar.jpg"

const Header = () => {
    return (
        <div className="container">
            <div className="logo">
                <img src={logo} height={50} width={40} />
            </div>
            <div className="search">
                <input type="search" placeholder="Search..." />
            </div>
            <div className="userIcon">
                <img src={avatar} height={50} width={40} />
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />)