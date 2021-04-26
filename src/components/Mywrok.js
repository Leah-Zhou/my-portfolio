import React from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import heroTeashop from './assect/imgs/hero-teashop.jpg';
import heroGreenP from './assect/imgs/green-hero.png';
import sunnyOp from './assect/imgs/sunnyop-hero.png';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import heroBranding from './assect/imgs/unicup-branding-hero.png';
import portfolioHero from './assect/imgs/portfolio-hero.png';
import Header from './Header';
import {Grid, Cell}from 'react-mdl';
import "aos/dist/aos.css";
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
    <div className="top-margin" data-aos="fade-up">
      <h4 className="line">FRONT-END WORK</h4>
    </div>
    <Grid style={{justifyContent:"center"}} data-aos="fade-up">
    <Cell col={5} phone={12} tablet={12} >
    <Link to="/unicup project">
      <div className="img-wrap">
       <img src={heroTeashop} alt="tea shop project" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>Unicup Bubble Teashop</h5>
           <p className="subtitle">HTML, SCSS, React</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={5} phone={12} tablet={12}>
    <Link to="/survey web design project">
      <div className="img-wrap">
       <img src={surveyHero} alt="Deaf Literacy survey web page design" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>Deaf Literacy Initiative online survey Webpages</h5>
           <p className="subtitle">HTML, CSS, Vanilla JS</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={5} phone={12} tablet={12}>
    <Link to="/portfolio showcase">
      <div className="img-wrap">
       <img src={portfolioHero} alt="portfolio showcase" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>Personal Portfolio Showcase</h5>
           <p className="subtitle">HTML, SCSS, React-mdl, REACT</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={5} phone={12} tablet={12}>
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
    <h4 className="line" style={marginTopBottom} data-aos="fade-up">UX AND UI DESIGN WORK</h4>
    <Grid  style={{justifyContent:"center"}} data-aos="fade-up">
    <Cell col={5} phone={12} tablet={12}>
    <Link to="/branding project">
      <div className="img-wrap">
       <img src={heroBranding} alt="tea shop branding project" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>UX Design and Branding Project</h5>
           <p className="subtitle">Unicup Bubble Teashop</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={5} phone={12} tablet={12}>
    <Link to="/sunnyOp project">
      <div className="img-wrap">
       <img src={sunnyOp} alt="sunnyOp UI design project" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>SunnyOp Branding and UI Design</h5>
           <p className="subtitle">
             GBC<span>	&#38;</span>SunnyBrook Science Center Cooperative project</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    </Grid>
    <Grid data-aos="fade-up">
    <Cell col={5} phone={12} tablet={12} offsetDesktop={1}>
    <Link to="/green p project">
      <div className="img-wrap">
       <img src={heroGreenP} alt="Green P app redeign project" className="img" />
       <div className="overlay">
       <div className="text">
         <h5>UX Redesign Project</h5>
           <p className="subtitle">Green P Parking App</p>
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