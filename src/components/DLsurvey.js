import React, {useRef, useEffect}from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Grid, Cell} from 'react-mdl';
import {Link} from 'react-router-dom';
import siteMap from './assect/imgs/DL-survey-sitemap.png';
import wireframe from './assect/imgs/DL-wireframe.png';
import mockups from './assect/imgs/DL-survey-mockup.png';
import heroImg from './assect/imgs/DL-survey-hero.png';
import HCIreport from './assect/imgs/DL-report.png';
import interview from './assect/icons/persona.svg';
import report from './assect/icons/survey.svg';
import wireframeIcon from './assect/icons/prototype-icon.svg';
import fontGuide from './assect/imgs/DL-fontGuide.png';
import showcase from './assect/imgs/DL-showcaseOne.png';
import arrowSm from './assect/icons/arrow-sm.svg';
// import HCIReport from './assect/files/HCI Report for DLI Video Survey Web Page Design.pdf';
import surveyContent from './localJson/DLsurvey.json';
import gsap from 'gsap';

const DLsurvey = () => {
  surveyContent.approach[1].img=HCIreport;
   surveyContent.approach[2].img=siteMap;
   surveyContent.approach[3].img=wireframe;
   surveyContent.approach[4].img=mockups;
   const bgImg=useRef(null);
   useEffect(()=>{
     setTimeout(()=>{
       gsap.fromTo(bgImg.current, {scale:1.2}, {scale:1, duration:2.5, ease:"power4.easeOut"})
     }, 50);
   }, [])

   const methods=[
     {icon:interview, alt:"stakeholder interview"},
     {icon:report, alt:"HCI Report"},
     {icon:wireframeIcon, alt:"Sitemap and Wireframe"}
   ]

  return ( 
    <div style={{marginTop:"70px"}}>
    <div className="hero-wrap">
      <img src={heroImg} alt="hero" ref={bgImg} />
     <div></div>
     <section className="project-title">
       <h2 style={{fontWeight:"700",marginBottom:"20px"}}>Website Design for Ontario Deaf Literacy Initiative</h2>
       <p className="header-subtitle">UX Design <span>&#38;</span> Front-end Development</p>
       <a  href="https://deaf-literacy-survey.bitbucket.io/" target="_blank" className="btn-link animate-btn"><span>Web Test Link</span></a>
     </section>
    </div>
    <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
         <h4 className="line text-center">About The Project</h4>
      </div>
      <p>{surveyContent.intro}</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">Project Type</h5>
         <p>Client-based project</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">Project Time</h5>
         <p>3 months</p>
      </Cell>
      <Cell phont={12} tablet={12} col={9}>
        <h5 className="highlight-title">My Role</h5>
         <p className="role">UX designer, Front-end Web developer</p>
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
          <h4 className="line text-center">UX Design Process</h4>
        </div>
          {/* <a href={HCIReport} target="_blank" className="btn-link animate-btn"><span>HCI Report</span></a>
          <a href="https://www.figma.com/file/79OtQmpJrBOrEK1PmYa9Wz/deaf-literacy-survey-design?node-id=0%3A1https://www.figma.com/file/79OtQmpJrBOrEK1PmYa9Wz/deaf-literacy-survey-design?node-id=0%3A1" target="_blank" className="btn-link animate-btn"><span>Mockups</span></a> */}
      </div>
        <div>
          <h6 className="highlight-title">The Challenge</h6>
          <h3 className="strong">Achieve Accessibility in Website Design</h3>
          <p>As the target users for the website are students with hearing disabilities, the website design needs to be accessible for users in different health conditions. Since it is a fast-paced design and development project, our team decided to start from the stakeholder interview to understand our users' needs and client's goals.</p>
        </div>
        <div style={{margin:"3em 0"}}>
          <h6 className="highlight-title">My Approaches</h6>
          <h3 className="strong">Recognize The Functional Limitations and Analyze the HCI</h3>
          <ul  className="diagram">
            {methods.map(appr=>(
              <li key={uuidv4()}>
                <img src={appr.icon} alt={appr.alt} className="icon-size"/>
                <p>{appr.alt}</p>
              </li>
            ))}
          </ul>
        </div>
      <ul>
        {surveyContent.approach.map(each=>(
          <li key={uuidv4()} style={{marginBottom:"3.5em"}}>
          <h5 className="highlight-title">{each.title}</h5>
           <p>{each.content}</p>
           {each.img&&<img src={each.img} alt={each.title} className="large-img" />}
          </li>
        ))}
      </ul>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
        <div>
          <h4 className="line text-center">How Designs Support the Accessibility</h4>
        </div>
      </div>
      </Cell>

          <Cell  phone={12} tablet={12} col={5}>
            <div>
            <h6 className="highlight-title">Perceivable</h6>
              <h5 className="highlight-title">User Interface Components are Presentable to Users in Ways They Can Perceive</h5>
              <p>Non-text content such as videos is created with captions and text descriptions for different needs and preferences in accessing information. To make the content easier to read and see for users, design elements such as font sizing, visual contrast, groupings, symbols are applied to make the information stand out in multiple ways.</p>
            </div>

            <div>
              <h6 className="highlight-title">Operable</h6>
            <h5 className="highlight-title">Designs Provide Ways to Help Users Navigate and Determine Where They Are.</h5>
            <p>Side navigation is always available during the survey process to navigate users to the questions. Multiple ways are available to locate the webpage within a set of web pages. Focus and hover indicators are visible with colors and size changes of the buttons.</p>
          </div>
          </Cell>

          <Cell phone={12} tablet={12} col={5}>
           <img src={showcase} alt="design show case" className="img-size" />  
          </Cell>

          <Cell phone={12} tablet={12} col={5}>
          <div>
          <h6 className="highlight-title">Understanable</h6>
            <h5 className="highlight-title">Text Content Are Readable and Understandable.</h5>
            <p>All the questions and answers are written with understandable words and terms. Icons and symbols are applied to support visual communication in some questions. Text colors meet the recommend contrast ratio suggested by WCAG Guidelines.</p>
          </div>
          </Cell>
          <Cell  phone={12} tablet={12} col={5}>
          <img src={fontGuide} alt="font design guide" className="large-img" />
          </Cell>

          


      <Cell phone={12} tablet={12} col={9}>
      <div className="text-center">
        <div>
          <h4 className="line text-center">Front-end Web Development</h4>
        </div>
      </div>
        <div>
        <h5 className="highlight-title">Languages:</h5>
        <p>HTML, CSS, Javascript</p>
        </div>
        <ul>
        <li><h5 className="highlight-title">Features:</h5></li>
          {surveyContent.feature.map(
            fea=>(<li key={uuidv4()}>
             <p>{fea}</p>
            </li>)
          )}
        </ul>
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
      </Grid>   

      <div className='btn-group-section'> 
          <section className='pre-section'>
            <Link to="/mobile app project">
              <img src={arrowSm}  alt="arrow previous"/>
              <span>Previous project</span>
              </Link>
            </section>
            <section>
            <a  href="https://deaf-literacy-survey.bitbucket.io/" target="_blank" className="btn-link animate-btn"><span>Web Test Link</span></a>
            </section>
            <section className='next-section'>
            <Link to="/green p project">
              <span>Next project</span>
              <img src={arrowSm}  alt="arrow previous"/>
              </Link>
            </section>
          </div>

    </div>
  );
}
 
export default DLsurvey;