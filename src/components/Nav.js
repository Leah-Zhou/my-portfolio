import React, { useState } from 'react';
import Logo from './assect/imgs/logo2.svg';
import './styleSheet/Nav.scss';
import {Link, NavLink} from 'react-router-dom'




const NavBar = () => {
    const [display, setDisplay]=useState(false);
    const toggleMenu =()=>{
      setDisplay(!display);
    }

  return ( 
  <div className='nav-container'>
    {/* <NavLink to="/">
      <img src={Logo} alt='logo' />
    </NavLink> */}
    <div className="menu" onClick={toggleMenu}>
      <div className={display? "close-positive":"open"}></div>
      <div className={display? "close-negative":"open"}></div>
    </div>
    <div className={display? "expand-circle nav-circle":"nav-circle shrink-circle"}></div>
    <div className={display? "show-menu":"hide-menu"}>
      <NavLink to="/" activeClassName="is-active" exact={true}><span className="nav-item"  onClick={toggleMenu}>HOME</span></NavLink>
      <NavLink to="/about me" activeClassName="is-active"><span className="nav-item" onClick={toggleMenu}>ABOUT ME</span></NavLink>
      <a href="mailto:leahzhoulz@gmail.com" className="nav-item">CONTACT ME</a>
    </div>
</div>
   );
}
 
export default NavBar;
