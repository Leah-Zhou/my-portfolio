import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Grid, Cell} from 'react-mdl';
import './styleSheet/DLsurvey.scss';
import siteMap from './assect/imgs/DL-survey-sitemap.png';
import wireframe from './assect/imgs/DL-wireframe.png';
import mockups from './assect/imgs/DL-survey-mockup.png';
import surveyContent from './localJson/DLsurvey.json';

const DLsurvey = () => {
   surveyContent.approach[2].img=siteMap;
   surveyContent.approach[3].img=wireframe;
   surveyContent.approach[4].img=mockups;
  return ( 
    <div style={{marginTop:"100px"}}>
    <div className="survey-bg">
     <div></div>
     <section className="project-title">
       <h2 style={{fontWeight:"800"}}>Survey Web page design for Deaf Literacy Initiative</h2>
       <p className="header-subtitle">UX web design project</p>
       <a  href="https://deaf-literacy-survey.bitbucket.io/" target="_blank" className="btn-link">Ptototype Link</a>
     </section>
    </div>
    <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">Project Intro</h4>
      </div>
      <p>{surveyContent.intro}</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Role</h5>
         <p className="role">UX designer and Front-end Web designer</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Tasks</h5>
        <ul>
          {surveyContent.task.map(each=>(
            <li key={uuidv4()}>
            <p className="role">{each}</p>
            </li>
          ))}
        </ul>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
        <div>
          <h4 className="line text-center">Design Process</h4>
        </div>
          <a href="#" target="_blank" className="btn-link">HCI Report</a>
          <a href="#" target="_blank" className="btn-link">Mockups</a>
      </div>
      <ul>
        {surveyContent.approach.map(each=>(
          <li key={uuidv4()} style={{marginBottom:"1.5em"}}>
          <h5 className="highlight-title">{each.title}</h5>
          {each.img&&<img src={each.img} alt={each.title} className="large-img" />}
           <p>{each.content}</p>
          </li>
        ))}
      </ul>
      </Cell>
      </Grid>   
    </div>
  );
}
 
export default DLsurvey;