import React, { useState } from 'react';
import Logo from './assect/imgs/logo.svg';
import './styleSheet/Nav.scss';
import {Link, NavLink} from 'react-router-dom'




const NavBar = () => {
    const [display, setDisplay]=useState(false);
    const toggleMenu =()=>{
      setDisplay(!display);
    }

  return ( 
  <div className='nav-container'>
    <NavLink to="/">
      <img src={Logo} alt='logo' />
    </NavLink>
    <div className="menu" onClick={toggleMenu}>
      <div className={display? "close-positive":"open"}></div>
      <div className={display? "close-negative":"open"}></div>
    </div>
    <div className={display? "show-menu":"hide-menu"}>
      <NavLink to="/" activeClassName="is-active" exact={true}><span className="nav-item"  onClick={toggleMenu}>PROJECT</span></NavLink>
      <NavLink to="/about me" activeClassName="is-active"><span className="nav-item" onClick={toggleMenu}>ABOUT ME</span></NavLink>
      <a href="mailto:leahzhoulz@gmail.com" className="nav-item">CONTACT ME</a>
      <a href="https://www.linkedin.com/in/leah-zhou-853ba8174/" target="_blank" onClick={toggleMenu}>
        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
     </a>
     <a href="https://github.com/Leah-Zhou/" target="_blank" onClick={toggleMenu}>
       <i className="fa fa-github-square fa-3x" aria-hidden="true" />
    </a>
    <a href="https://codepen.io/leah-zhou" target="_blank" onClick={toggleMenu}>
    <i class="fab fa-codepen fa-3x"></i>
    </a>
    </div>
</div>
   );
}
 
export default NavBar;
