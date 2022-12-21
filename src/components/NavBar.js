import user from '../assets/images/user.png';
import logout from '../assets/images/logout.png';
import React from "react";
import {Image} from "./Image";
export const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg customNav">
            <a className="navbar-brand customBrand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item customItem">
                        <a className="nav-link customActive" href="#">Home</a>
                    </li>
                    <li className="nav-item customItem">
                        <a className="nav-link customLink" href="#">About</a>
                    </li>
                    <li className="nav-item customItem">
                        <a className="nav-link customLink" href="#">Categories</a>
                    </li>
                    <li className="nav-item customItem">
                        <a className="nav-link customLink" href="#">Categories</a>
                    </li>
                </ul>
                <form className="form-inline m-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0 customButton" type="submit">Search</button>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item m-2"><Image src={user} height={25} width={25}/></li>
                    <li className="nav-item m-2"><Image src={logout} height={25} width={25}/></li>
                </ul>
            </div>
        </nav>
    );
}