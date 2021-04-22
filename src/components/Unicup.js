import React from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss'
import componentDisplay from './assect/imgs/unicup-components.png';
import {Link} from 'react-router-dom';
import reportSnippet from './assect/imgs/unicup-lightHouse-report.png';
import { v4 as uuidv4 } from 'uuid'

// this is the unicup teashop project

const UnicupWeb = () => {
  const frontEnd =teashopData.frontEnd;
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap unicup-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"700",marginBottom:"20px"}}>Front-end Website Building Project</h2>
         <p className="header-subtitle">Unicup Bubble Teashop</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Website Link</a>
         <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-link">Github Link</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
        <div className="text-center">
           <h4 className="line text-center">Project Intro</h4>
        </div>
        <p>This showcase is an extended part of the branding project. More UX design portion of this project is <Link to="/branding project">here</Link>.The showcase aims to build up a one-page interactive website for a conceptual bubble teashop brand.The website is hosted and published on Github for public visits. In this project, I am playing the role of a front-end web developer.</p>
        </Cell>
        <Cell phont={12} tablet={12} col={5}>
          <h5 className="highlight-title">Languages and Library:</h5>
           <ul>
             <li key={uuidv4()}><p>HTML</p></li>
             <li key={uuidv4()}><p>SCSS</p></li>
             <li key={uuidv4()}><p>REACT</p></li>
             <li key={uuidv4()}><p>Framer Motion Library</p></li>
             <li key={uuidv4()}><p>AOS Library</p></li>
           </ul>
        </Cell>
        <Cell phont={12} tablet={12} col={4}>
        <section>
          <h5 className="highlight-title">Features:</h5>
          <ul>
            {frontEnd.achievements.map(each=>(
              <li key={uuidv4()}><p>{each}</p></li>
            ))}
          </ul>
        </section>
        </Cell>
        
        </Grid>
        <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
          <div className="text-center">
           <h4 className="line">Process and Approach</h4>
           <div style={{margin:"1.5em 0"}}>
              <h5>structuring &#10145; Building &#10145; Testing/debugging &#10145; Publish</h5>
           </div>
          </div>
           <p>
           This showcase uses the self-created web prototype on Figma as a blueprint. To begin with coding, I used the website prototype as a reference to create the structure of components. Based on the structure, I started building each component from mobile screen size, adding interactive functionality, creating the responsive layout, and transferring customized style into style sheets. After testing and debugging, I deployed and published the website on GitHub for the public.
           </p>
        </Cell>
        <Cell phont={12} tablet={12} col={9}>
          <div>
            <img src={componentDisplay} alt="component display" className="large-img" />
          </div>
        </Cell>
        </Grid>
        <Grid  className="side-margin" style={{justifyContent:"center"}}>
        <Cell phont={12} tablet={12} col={9}>
          <div className="text-center">
            <h4 className="line">Challenge and Solution</h4>
          </div>
          <ul>
            {teashopData.challenge.map(each=>(
              <li key={uuidv4()}>
                <p className="thick-font">{each.title}</p>
                <p>{each.solution}</p>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell phont={12} tablet={12} col={9}>
          <div className="text-center">
            <h4 className="line">Website Optimization</h4>
          </div>
            <img src={reportSnippet} alt="light house report snippet" className="large-img"/>
            <p>To test and improve the quality of the web page, I use the Google Lighthouse to generate a performance report.From the Google report, I learn which parts need to be improved to optimize the performance.The next step I could improve for this project is to optimize the SEO and performance based on the diagnoses.</p>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default UnicupWeb;