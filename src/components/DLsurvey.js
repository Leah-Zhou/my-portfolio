import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Grid, Cell} from 'react-mdl';
import './styleSheet/DLsurvey.scss';
import siteMap from './assect/imgs/DL-survey-sitemap.png';
import wireframe from './assect/imgs/DL-wireframe.png';
import mockups from './assect/imgs/DL-survey-mockup.png';
import HCIReport from './assect/files/HCI Report for DLI Video Survey Web Page Design.pdf';
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
       <h2 style={{fontWeight:"700",marginBottom:"20px"}}>Survey Web page design for Deaf Literacy Initiative</h2>
       <p className="header-subtitle">UX web design project</p>
       <a  href="https://deaf-literacy-survey.bitbucket.io/" target="_blank" className="btn-link">Web Test Link</a>
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
          <h4 className="line text-center">Front-end Web Development</h4>
        </div>
      </div>
      <ui>
        <li><h5 className="highlight-title">Features:</h5></li>
          {surveyContent.feature.map(
            fea=>(<li key={uuidv4()}>
             <p>{fea}</p>
            </li>)
          )}
        </ui>
        <ul>
        <li><h5 className="highlight-title">Challenges and Solutions:</h5></li>
        {surveyContent.challenge.map(
            item=>(<li key={uuidv4()} style={{marginTop:"20px"}}>
            <p style={{fontWeight:800}}>{item.title}</p>
             <p>{item.content}</p>
            </li>)
          )}
        </ul>
        <div>
        <h5 className="highlight-title">Improvements:</h5>
        <p>{surveyContent.improvement}</p>
        </div>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
        <div>
          <h4 className="line text-center">Design Process</h4>
        </div>
          <a href={HCIReport} target="_blank" className="btn-link">HCI Report</a>
          <a href="https://www.figma.com/file/79OtQmpJrBOrEK1PmYa9Wz/deaf-literacy-survey-design?node-id=0%3A1https://www.figma.com/file/79OtQmpJrBOrEK1PmYa9Wz/deaf-literacy-survey-design?node-id=0%3A1" target="_blank" className="btn-link">Mockups</a>
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