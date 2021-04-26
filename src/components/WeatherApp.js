import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './styleSheet/WeatherApp.scss';
import weatherAppContent from './localJson/WeatherApp.json';
// import showcase from './assect/imgs/weather-display.png';
import { v4 as uuidv4 } from 'uuid'


const WeatherApp = () => {
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap weather-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"700",marginBottom:"20px"}}>UX Redesign Project</h2>
         <p className="header-subtitle">Redesign Green P Parking App</p>
         <a  href="https://leah-zhou.github.io/weather-api-app/" target="_blank" className="btn-link">Test Link</a>
         <a href="https://github.com/Leah-Zhou/weather-api-app"  target="_blank" className="btn-link">Github Link</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
           <p>{weatherAppContent.intro}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">My Role</h5>
            <p className="role">Front-end developer</p>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phont={12} tablet={12} col={9}>
        <section>
          <h5 className="highlight-title">Approaches:</h5>
          <p>HTML, SASS, React, Axios, Swipe, Git</p>
        </section>
        <section>
          <h5 className="highlight-title">Features:</h5>
          <ul>
           {weatherAppContent.feature.map(each=>(
             <li key={uuidv4()}>
               <p>{each}</p>
             </li>
           ))}
          </ul>
        </section>
         <h5 className="highlight-title">Challenge and Solution</h5>
         <ul>
           {weatherAppContent.challenge.map(
             item=>(
              <li key={uuidv4()}>
              <p className="thick-font">{item.title}</p>
              <p>{item.solution}</p>
            </li>
             )
           )}
          </ul>
          <h5 className="highlight-title">Improvement</h5>
          <p>{weatherAppContent.improvement}</p>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default WeatherApp;