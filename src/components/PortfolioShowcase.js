import React from 'react';
import './styleSheet/PortfolioShowcase.scss';
import{Grid, Cell}from 'react-mdl';
import portfolioContent from './localJson/PortfolioShowcase.json';
// import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'


const PortfolioShowcase = () => {
  return ( 
    <div style={{marginTop:"100px"}}>
    <div className="portfolio-bg">
     <div></div>
     <section className="project-title">
       <h2 style={{fontWeight:"800"}}>Personal Portfolio Showcase</h2>
       <p className="header-subtitle">React Front-end Web Development</p>
       <a  href="https://github.com/Leah-Zhou/my-portfolio" target="_blank" className="btn-link">Github Link</a>
     </section>
    </div>
    <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Project Intro</h4>
      </div>
      <p>{portfolioContent.intro}</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Role</h5>
         <p className="role">Front-end Web developer and UI designer</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">Features</h5>
         <ul>
           {portfolioContent.feature.map(
             item=>(<li key={uuidv4()}>
               <p>{item}</p>
             </li>)
           )}
         </ul>
         <h5 className="highlight-title">Challenges and Solutions</h5>
         <ul>
           {portfolioContent.challenge.map(
             item=>(<li key={uuidv4()}>
               <p className="thick-font">{item.title}</p>
               <p>{item.content}</p>
             </li>)
           )}
         </ul>
         <h5 className="highlight-title">Improvements</h5>
         <p>{portfolioContent.improvement}</p>
         <ul>
           {
             portfolioContent.details.map(
               each=>(<li key={uuidv4()}>
                 <p>{each}</p>
               </li>)
             )
           }
         </ul>
      </Cell>
    </Grid>
    </div>
   );
}
 
export default PortfolioShowcase;