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
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
    </Layout>
</div>
   );
}
 
export default NavBar;
