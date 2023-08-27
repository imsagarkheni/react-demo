import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='navbar'>
            
                            <Link to='/' class="active">Home</Link>
                        
                            <Link to='/about' class="#">About</Link>
                        
                            <Link to='/product' class="#">Product</Link>
                      
        </div>
    )
}

export default Navbar
