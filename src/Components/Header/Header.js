import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
         <Link to="/shop"><a href="/shop">Shop</a></Link>     
         <Link to="/review"><a href="/order">Order Review</a></Link>   
    <Link to="/inventory"><a href="inventory">Inventory</a></Link>
              
          </nav>
        </div>
    );
};

export default Header;