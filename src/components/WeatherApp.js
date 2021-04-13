import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './styleSheet/WeatherApp.scss';
import showcase from './assect/imgs/weather-display.png';
import { v4 as uuidv4 } from 'uuid'


const WeatherApp = () => {
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap weather-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>UX Redesign Project</h2>
         <p className="header-subtitle">Redesign Green P Parking App</p>
         <a  href="https://leah-zhou.github.io/weather-api-app/" target="_blank" className="btn-link">Test Link</a>
         <a href="https://github.com/Leah-Zhou/weather-api-app"  target="_blank" className="btn-link">Github Link</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={10}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
           <p>This is a front-end showcase that uses REST API to get current weather data, and print them to the users with design. The showcase presents the function of fetching real time weather information of the weather app. The goal of the showcase is to fetch and display dynamic data from the server.</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <h5 className="highlight-title">My Role</h5>
            <p className="role">Front-end developer</p>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phont={12} tablet={12} col={5}>
        <section>
          <h5 className="highlight-title">Approaches:</h5>
          <p>HTML, SASS, React, Axios, Swipe, Git</p>
        </section>
        <section>
          <h5 className="highlight-title">Achievements:</h5>
          <ul>
             <li key={uuidv4()}><p>-Fetching real time data.</p></li>
             <li key={uuidv4()}><p>-Displaying Real time data with design.</p></li>
             <li key={uuidv4()}><p>-Switching dynamic weather data via swipping.</p></li>
             <li key={uuidv4()}><p>-Animation of the weather icons.</p></li>
          </ul>
        </section>
        
        </Cell>
        <Cell phont={12} tablet={12} col={5}>
          <img src={showcase} alt="display showcase" width="95%"/>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default WeatherApp;