import React from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import musicHero from './assect/imgs/musicAppHero.png';
import heroTeashop from './assect/imgs/hero-teashop.jpg';
import heroGreenP from './assect/imgs/green-hero.png';
import dataHero from './assect/imgs/ttcHero.png';
import sunnyOp from './assect/imgs/sunnyop-hero.png';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import heroBranding from './assect/imgs/unicup-branding-hero.png';
import portfolioHero from './assect/imgs/portfolio-hero.png';
import Header from './MyHome';
import {Grid, Cell}from 'react-mdl';
import "aos/dist/aos.css";
import weatherAppHero from './assect/imgs/weather-showcase.png';



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
       <img src={musicHero} alt="music web app project" className="img" />
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank" className="btn-style">Vist Site</a>
        <a href="https://github.com/Leah-Zhou/music-box" target="_blank" className="btn-style">Vist Code</a>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Commercial Website - Unicup Bubble Teashop</h3>
          <p>HTML SCSS REACT</p>
        </div>
        <img src={heroTeashop} alt="tea shop project" className="img" />
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-style">Vist Site</a>
        <a href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-style">Vist Code</a>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div className="img-wrap">
        <div className="text">
          <h3>Data Visualization Show Case- Subway Delay Time Data</h3>
          <p>HTML CSS JS D3.JS BABEL</p>
        </div>
        <img src={dataHero} alt="Data Visualization Show Case" className="img" />
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-style">Vist Site</a>
        <a href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-style">Vist Code</a>
      </div>
    </Cell>
    
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/weather app project">
      <div className="img-wrap">
       <img src={weatherAppHero} alt="weather REST api project" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>Real-time Weather API showcase</h5>
           <p className="subtitle">HTML, SCSS, REACT, REST API</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    </Grid>
    </div>
    </>
   );
}
 
export default FrontEnd;