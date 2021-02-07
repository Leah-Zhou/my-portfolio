import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/Nav';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Header from './components/Header.js';
import Background from './components/Background';
import MyWork from './components/Mywrok';


const HomePage =()=>{
  return (
    <>
    <NavBar />
    <Header />
    <Background />
    <MyWork />
    </>
  )
}

ReactDOM.render(
 <HomePage />,
  document.getElementById('root')
);

