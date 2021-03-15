import React from 'react';
import Logo from './assect/imgs/logo.svg';
import './Nav.scss';
import {Link, NavLink} from 'react-router-dom'
import {Layout, Header, Navigation, Drawer, } from 'react-mdl';



const NavBar = () => {
    //   const projectOpt = document.querySelector(".project-opt")
    //  function controlMenu(){
    //    projectOpt.style.textDecoration="line-through"
    //  }
  return ( 
  <div className='nav-container'>
    <img src={Logo} alt='logo' />
    <div>
      <NavLink to="/" activeClassName="is-active" exact={true}><span className="nav-item">PROJECT</span></NavLink>
      <NavLink to="/about me" activeClassName="is-active"><span className="nav-item">ABOUT ME</span></NavLink>
      <a href="https://www.linkedin.com/in/leah-zhou-853ba8174/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square fa-3x" aria-hidden="true" />
     </a>
     <a href="https://github.com/Leah-Zhou/" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square fa-3x" aria-hidden="true" />
    </a>
    </div>
    {/* <Layout fixedHeader>
        <img src={Logo} alt='logo' className="logo"/>
        <Header transparent>
            <Navigation style={{position:'absolute', top:'0',right:'20px'}}>
                <a href="#" style={{color:'#EFCF48', fontSize:"clamp(16px, 2.5vw,17px)"}}>HOME</a>
                <a href="#" style={{color:'#EFCF48', fontSize:"clamp(16px, 2.5vw,17px)"}}>CONTACT ME</a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square fa-2x" aria-hidden="true" />
            </a>
            </Navigation>
        </Header>
    </Layout> */}
</div>
   );
}
 
export default NavBar;
