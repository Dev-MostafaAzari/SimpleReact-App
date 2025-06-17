import React,{useContext} from "react";
import { Button } from "react-bootstrap";
import {Link} from "react-router-dom"
import { OffcanvosCon } from "../contexts/OffcanvasContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"
import "../style/Navbar.css"

function Navbar(){
    var {Open}=useContext(OffcanvosCon);




    return(
        <nav className="navbar navbar-expand-lg bg-dark  border-bottom border-dark border-1">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-expanded="false" aria-controls="navbar1" aria-label="navbarBtn">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar1">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item"><Button className="rounded-pill btn-sm mt-2" onClick={Open}><FontAwesomeIcon icon={faUser}/></Button></li>
                    <li className="nav-item"><Link className="nav-link link-info fs-5" to="/" >Home</Link></li>
                    <li className="nav-item"><Link className="nav-link link-info fs-5" to="/products" >Products</Link></li>
                    <li className="nav-item"><Link className="nav-link link-info fs-5" to="/contact" >Contact</Link></li>
                </ul>
                <form className="d-flex me-2">
                    <input className="form-control" type="search" placeholder="Search in site...."/>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
            </div>
             
        </div>
    </nav>
    )
}
export default Navbar;