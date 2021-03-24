import React from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import './Unicup.scss'
import componentDisplay from './assect/imgs/unicup-components.png';

// this is the unicup teashop project

const UnicupWeb = () => {
  const frontEnd =teashopData.frontEnd;
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap unicup-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>Front-end Website Building Project</h2>
         <p className="header-subtitle">Unicup Bubble Teashop</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Website Link</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
        <div className="text-center">
           <h4 className="line text-center">Project Intro</h4>
        </div>
        <p>This project aims to build up a one-page interactive website for a conceptual bubble teashop brand. The website is built with Html, SCSS, and React. The website is hosted and published on Github for public visits.</p>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5 className="highlight-title">My Role</h5>
            <p>Front-end Web Developer</p>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <div className="text-center">
           <h4 className="line">Process and Approach</h4>
           <div style={{margin:"1.5em 0"}}>
              <h5>structuring &#10145; Building &#10145; Testing/debugging &#10145; Publish</h5>
           </div>
          </div>
           <p>
           This show case uses the self-created web prototype on Figma as a blueprint. To beign with coding, I used the website prototype as a reference to create the structure of components. Based on the structure, I started building each component in mobile screen size, adding interactive functionality, creating the responsive layout, and transfering customized style into style sheets. After testing and debugging, I published the website on github for public.
           </p>
        </Cell>
        <Cell phont={12} tablet={12} col={8}>
          <div>
            <img src={componentDisplay} alt="component display" className="img-size" />
          </div>
        </Cell>
        <Cell phont={12} tablet={12} col={8}>
        <section>
          <h5 className="highlight-title">Features:</h5>
          <ul>
            {frontEnd.achievements.map(each=>(
              <li><p>{each}</p></li>
            ))}
          </ul>
        </section>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default UnicupWeb;