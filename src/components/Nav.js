import React from 'react';
import Logo from './assect/imgs/logo.svg';
import {Layout, Header, Navigation, Drawer, } from 'react-mdl';



const NavBar = () => {
  return ( 
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header>
        <img src={Logo} alt="logo"  style={{width:"50px"}}/>
            <Navigation>
                <a href="#">HOME</a>
                <a href="#">CONTACT ME</a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            </Navigation>
        </Header>
    </Layout>
</div>
   );
}
 
export default NavBar;
