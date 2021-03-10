import React from 'react';
import './Mywork.scss';
import {Link} from 'react-router-dom';
import heroTeashop from './assect/imgs/hero-teashop.png';
import heroGreenP from './assect/imgs/green-hero.png';
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
    <h4 className="line">MY WORK</h4>
    <Grid>
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
    <Link to="/unicup project">
      <div className="img-wrap">
       <img src={heroTeashop} alt="tea shop project" className="img" />
       <div className="overlay">
       <div className="text">
         <h4>UX Design and Front-end Web Building Project</h4>
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