import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            <NavLink to='/' activeClassName="active">Home</NavLink>
            <NavLink to='/about' activeClassName="active">About</NavLink>
            <NavLink to='/product' activeClassName="active">Product</NavLink>
        </div>
    )
}

export default Navbar
