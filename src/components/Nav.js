import React from 'react';
import Logo from './assect/imgs/logo.svg';
import './Nav.scss';
import {Layout, Header, Navigation, Drawer, } from 'react-mdl';



const NavBar = () => {
  return ( 
  <div className='nav-container'>
    <Layout fixedHeader>
        <img src={Logo} alt='logo' style={{width:'100%%', maxWidth:"50px"}}/>
        <Header transparent>
            <Navigation style={{position:'absolute', top:'0',right:'20px'}}>
                <a href="#" style={{color:'#EFCF48'}}>HOME</a>
                <a href="#" style={{color:'#EFCF48'}}>CONTACT ME</a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square fa-2x" aria-hidden="true" />
            </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square fa-2x" aria-hidden="true" />
            </a>
            </Navigation>
        </Header>
    </Layout>
</div>
   );
}
 
export default NavBar;
