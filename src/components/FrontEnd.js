import React from 'react';
import './styleSheet/Mywork.scss';
import musicHero from './assect/imgs/musicAppHero.png';
import heroTeashop from './assect/imgs/hero-teashop.jpg';
import weatherHero from './assect/imgs/weather-hero.png';
import dataHero from './assect/imgs/ttcHero.png';
import {Grid, Cell}from 'react-mdl';
import "aos/dist/aos.css";




const FrontEnd = () => {
  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"15px",
    textAlign:"center"
  }
  return (
    <>
    <div style={marginTopBottom}>
    <div className="top-margin" data-aos="fade-up">
      <h4 className="line">FRONT-END WORK</h4>
    </div>
    <Grid style={{justifyContent:"center"}} data-aos="fade-up">
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Single Page Web Application - Mini Music Web App</h3>
          <p>HTML, SCSS, BOOTSTRAP, JS,FIREBASE, WEBPACK, BABEL</p>
        </div>
       <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank">
        <img src={musicHero} alt="music web app project" className="img" />
       </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank" className="btn-style animate-btn">
          <span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/music-box" target="_blank" className="btn-style animate-btn"><span>
        Vist Code</span></a>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Commercial Website - Unicup Bubble Teashop</h3>
          <p>HTML SCSS REACT</p>
        </div>
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" >
         <img src={heroTeashop} alt="tea shop project" className="img" />
        </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Real-time Weather web app showcase</h3>
          <p>HTML, SCSS, REACT, REST API</p>
        </div>
        <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank">
          <img src={weatherHero} alt="Data Visualization Show Case" className="img" />
        </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/weather-api-app" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Data Visualization Show Case- Subway Delay Time Data</h3>
          <p>HTML CSS JS D3.JS BABEL</p>
        </div>
         <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank">
           <img src={dataHero} alt="Data Visualization Show Case" className="img" />
         </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/TTC-Subway-Time-Delay-Data-Visualization" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
    </Cell>
    </Grid>
    </div>
    </>
   );
}
 
export default FrontEnd;