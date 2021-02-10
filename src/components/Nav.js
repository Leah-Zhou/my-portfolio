import React from 'react';
import Logo from './assect/imgs/logo.svg';
import './Nav.scss';
import {Link} from 'react-router-dom'
import {Layout, Header, Navigation, Drawer, } from 'react-mdl';



const NavBar = () => {
  return ( 
  <div className='nav-container'>
    <img src={Logo} alt='logo' />
    <div>
      <Link to="/"><span>PROJECT</span></Link>
      <Link to="/about me"><span>ABOUT ME</span></Link>
      <a href="https://www.linkedin.com/in/leah-zhou-853ba8174/" rel="noopener noreferrer" target="_blank">
        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
     </a>
     <a href="https://github.com/Leah-Zhou/" rel="noopener noreferrer" target="_blank">
       <i className="fa fa-github-square fa-2x" aria-hidden="true" />
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
