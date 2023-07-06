import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="menu flex ">

            <Link to={'/'}><button className="btns">Home</button></Link>
            <Link to={'/about'}><button className="btns">About</button></Link>
            <Link to={'/signin'}><button className="btns">Sign In</button></Link>

            <hr />
        </div>
    )
}
