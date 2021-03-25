import React from 'react';
import NavBar from './Nav';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
// import Header from './Header.js';
// import Background from './Background';
// import MyWork from './Mywrok';
import {BrowserRouter as Router}from 'react-router-dom';
import AllProjects from './AllProjects';
import ToTop from './ToTop';



 const MainContent =()=>{

  return (

    <>
    <Router>
      <NavBar />
      <ToTop />
      <AllProjects />
    </Router>
    </>
  )
}
 
export default MainContent;
