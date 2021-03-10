import React from 'react';
import {Grid, Cell} from 'react-mdl';
import './WeatherApp.scss';


const WeatherApp = () => {
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap weather-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>UX Redesign Project</h2>
         <p>Redesign Green P Parking App</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Prototype</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
           <p>This is a front-end showcase that uses REST API to get current weather data, and print them to the users with design. The showcase presents the function of fetching real time weather information of the weather app. The goal of the showcase is to fetch and display dynamic data from the server.</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5 className="highlight-title">My Role</h5>
            <p className="role">Front-end developer</p>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell  phont={12} tablet={12} col={8}>
        <section>
          <h5 className="highlight-title">Approaches:</h5>
          <p>HTML, SCSS, React, Axios, Swipe, Git</p>
        </section>
        </Cell>
        <Cell phont={12} tablet={12} col={8}>
        <section>
          <h5 className="highlight-title">Achievements:</h5>
          <ul>
             <li><p>-Fetching real time data.</p></li>
             <li><p>-Displaying Real time data with design.</p></li>
             <li><p>-Switching dynamic weather data via swipping.</p></li>
             <li><p>-Animation of the weather icons.</p></li>
          </ul>
        </section>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default WeatherApp;