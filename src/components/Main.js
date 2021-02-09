import React from 'react';
import NavBar from './Nav';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Header from './Header.js';
import Background from './Background';
import MyWork from './Mywrok';



 const MainContent =()=>{

  return (

    <>
    <NavBar />
    <Header />
    <Background />
    <MyWork />
    </>
  )
}
 
export default MainContent;
