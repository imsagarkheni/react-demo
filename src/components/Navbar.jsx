import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to='/' class="nav-link">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/about' class="nav-link">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link to='/product' class="nav-link">Product</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
