import React from "react";
import {Link} from "react-router-dom"

function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-light  border-bottom border-primary border-1">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-expanded="false" aria-controls="navbar1" aria-label="navbarBtn">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item"><Link class="nav-link link-primary fs-5" to="/" >Home</Link></li>
                    <li class="nav-item"><Link class="nav-link link-primary fs-5" to="/products" >Products</Link></li>
                    <li class="nav-item"><Link class="nav-link link-primary fs-5" to="/contact" >Contact</Link></li>
                </ul>
            
                <form class="d-flex me-2">
                    <input class="form-control" type="search" placeholder="Search in site...."/>
                    <button type="submit" class="btn btn-primary">Search</button>
                </form>
            </div>
             
        </div>
    </nav>
    )
}
export default Navbar;