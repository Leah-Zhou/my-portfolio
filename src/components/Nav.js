import React, { useEffect, useRef, useState } from 'react';
import Logo from './assect/imgs/logo2.svg';
import './styleSheet/Nav.scss';
import {Link, NavLink} from 'react-router-dom';
import gsap from 'gsap';




const NavBar = () => {
    const [display, setDisplay]=useState(false);
    const toggleMenu =()=>{
      setDisplay(!display);
    }
    // const tl=gsap.timeline();
    const navItem =useRef();
    useEffect(()=>{
    const navopts=navItem.current.querySelectorAll('.nav-item');

     
      gsap.fromTo(navopts, {y:-100, opacity:0,},
        {y:0, duration:1,opacity:1, stagger:0.2})  
    }, [])

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
    <div className={display? "show-menu":"hide-menu"} ref={navItem}>
      <NavLink to="/" activeClassName="is-active" exact={true}><span className="nav-item"  onClick={toggleMenu}>HOME</span></NavLink>
      <NavLink to="/gallery" activeClassName="is-active"><span className="nav-item"  onClick={toggleMenu}>2D AND 3D WORK</span></NavLink>
      <NavLink to="/about me" activeClassName="is-active"><span className="nav-item" onClick={toggleMenu}>ABOUT ME</span></NavLink>
      <a href="mailto:leahzhoulz@gmail.com"><span className="nav-item">CONTACT ME</span></a>
    </div>
</div>
   );
}
 
export default NavBar;
