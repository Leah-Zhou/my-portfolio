import React from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import heroTeashop from './assect/imgs/hero-teashop.png';
import heroGreenP from './assect/imgs/green-hero.png';
import sunnyOp from './assect/imgs/sunnyop-hero.png';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import heroBranding from './assect/imgs/unicup-branding-hero.png';
import Header from './Header';
import {Grid, Cell}from 'react-mdl';
import weatherAppHero from './assect/imgs/weather-showcase.png';



const MyWork = () => {
  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"15px",
    textAlign:"center"
  }
  return (
    <>
    <Header />
    <div style={marginTopBottom}>
    <h4 className="line">UX AND UI DESIGN WORK</h4>
    <Grid>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/branding project">
      <div className="img-wrap">
       <img src={heroBranding} alt="tea shop branding project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>UX Design and Branding Project</h4>
           <p className="subtitle">Unicup Bubble Teashop</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/sunnyOp project">
      <div className="img-wrap">
       <img src={sunnyOp} alt="sunnyOp UI design project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>SunnyOp Branding and UI Design</h4>
           <p className="subtitle">
             GBC<span>	&#38;</span>SunnyBrook Science Center Cooperative project</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/green p project">
      <div className="img-wrap">
       <img src={heroGreenP} alt="Green P app redeign project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>UX Redesign Project</h4>
           <p className="subtitle">Green P Parking App</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/survey web design project">
      <div className="img-wrap">
       <img src={surveyHero} alt="Deaf Literacy survey web page design" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>UX Web Page Design Project</h4>
           <p className="subtitle">Survey web page design for Deaf Literacy Initiative</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    </Grid>
    <div className="top-margin">
      <h4 className="line">FRONT-END WORK</h4>
    </div>
    <Grid>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/unicup project">
      <div className="img-wrap">
       <img src={heroTeashop} alt="tea shop project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>Front-end Web Building Project</h4>
           <p className="subtitle">Unicup Bubble Teashop</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={6} phone={12} tablet={12}>
    <Link to="/weather app project">
      <div className="img-wrap">
       <img src={weatherAppHero} alt="weather REST api project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>REST API showcase</h4>
           <p className="subtitle">Current Weather APP</p>
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
 
export default MyWork;