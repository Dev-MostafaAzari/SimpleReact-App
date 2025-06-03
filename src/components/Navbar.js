import React from "react";


function Navbar(){
    return(
        <nav class="navbar navbar-expand-lg bg-light  border-bottom border-primary border-1">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar1" aria-expanded="false" aria-controls="navbar1" aria-label="navbarBtn">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav me-auto">
                    
                    
                    <li class="nav-item"><a class="nav-link link-primary fs-5" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link link-primary fs-5" href="products.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link link-primary fs-5" href="#">Contact</a></li>
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