import React, { useEffect, useRef } from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import analysisIcon from './assect/icons/analysis.svg';
import surveyIcon from './assect/icons/survey.svg';
import personaIcon from './assect/icons/persona.svg';
import mindIcon from './assect/icons/mindmap.svg';
import moodboardIcon from './assect/icons/moodboard-icon.svg';
import guidelineIcon from './assect/icons/guideline-icon.svg';
import prototypeIcon from './assect/icons/prototype-icon.svg';
import competitorReport from './assect/imgs/tea-competitor-report.png';
import userResearch from './assect/imgs/tea-user-research.png';
import heroImg from './assect/imgs/hero-teashop.jpg';
import surveyReport from './assect/imgs/tea-survey-report.png';
import persona from './assect/imgs/tea-persona.png';
import journey from './assect/imgs/tea-experience-map.png';
import mindMap from './assect/imgs/tea-mind-map.PNG';
import stickyNote from './assect/imgs/tea-note.jpg';
import mockup from './assect/imgs/tea-mockup.png';
import logoSketch from './assect/imgs/tea-logo-sketch.png';
import moodboard from './assect/imgs/tea-moodboard.png';
import logoDesign from './assect/imgs/unicup-logo-design.png';
import colorPallet from './assect/imgs/unicup-color-font.png';
// import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const Branding = () => {
  const projectIntro =teashopData.project;
  const uxResearch=teashopData.research;
  uxResearch.approach[0].icon=analysisIcon;
  uxResearch.approach[1].icon=surveyIcon;
  uxResearch.approach[2].icon=personaIcon;
  uxResearch.approach[0].img=[{src:userResearch, alt:"user reviews"},{src:competitorReport, alt:"competitive report"}];
  uxResearch.approach[1].img=[{src:surveyReport, alt:"survey report"}];
  uxResearch.approach[2].img=[{src:persona, alt:"persona"}, {src:journey, alt:"journey map"}];
  const branding =teashopData.branding;
  const uiDesign = teashopData.UI;
  uiDesign.approach[0].icon=moodboardIcon;
  uiDesign.approach[1].icon=guidelineIcon;
  uiDesign.approach[2].icon=prototypeIcon;
  uiDesign.achievements[0].img=logoDesign;
  uiDesign.achievements[1].img=colorPallet;
  uiDesign.achievements[2].img=mockup;
  const frontEnd =teashopData.frontEnd;
  const roles=['UX researcher', 'UI designer','Front-end developer'];
  // const tools=['Figma', 'Adobe Illustrator', 'After Effect', 'Html', 'CSS', 'React']
  const bgImg=useRef(null);

  useEffect(()=>{
    setTimeout(()=>{
      gsap.fromTo(bgImg.current, {scale:1.2}, {scale:1, duration:2.5, ease:"power4.easeOut"})
    }, 50);
  }, [])
  
  return ( 
    <div style={{marginTop:"70px"}}>
      <div className="hero-wrap">
        <img src={heroImg} alt="hero" ref={bgImg}/>
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"700",marginBottom:"20px"}}>UX Design and Branding Project</h2>
         <p className="header-subtitle">Unicup Bubble Teashop</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Website Link</span></a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Statement</h5>
          <p>{projectIntro.intro}</p>
          <ul className="process-list">
            {projectIntro.approach.map(appr=>(
              <li key={uuidv4()}><p>{appr}</p></li>
            ))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Goal</h5>
          <ul>
            {projectIntro.goal.map(item=>(
              <li key={uuidv4()}><p>{item}</p></li>
            ))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">My Role</h5>
          <ul>
             {roles.map(each=>(<li key={uuidv4()}><p className="role">{each}</p></li>))}
          </ul>
        </Cell>
                <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Applied Tools and Skills</h5>
          <ul>
             <li><p>Figma,  Adobe Illustrator,  After Effect,  Html,  CSS,  React</p></li>
          </ul>
        </Cell>

      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={10}>
        <div className="text-center">
        <h4 className="line">1. UX Research</h4>
        </div>
          <p>{uxResearch.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches:</h5>
            <ul  className="diagram">
            {uxResearch.approach.map(appr=>(
              <li key={uuidv4()}>
                <img src={appr.icon} alt={appr.alt} className="icon-size"/>
                <p>{appr.title}</p>
              </li>
            ))}
          </ul>
          </section>

          <section>
            {uxResearch.approach.map(item=>(
              <div key={uuidv4()} className="two-cols">
                 <div className="description-content">
                    <h5>{item.title}</h5>
                    <p>{item.content}</p>
                 </div>
                 <div>
                {
                  item.img.map(each=>(
                    <div>
                      <img src={each.src}  alt={each.alt} className="large-img" />
                      </div>
                  ))
                }
                </div>
              </div>
            ))}
          </section>
           
           <section>
             <h5 className="highlight-title">Achievements:</h5>
             <ul>
            {uxResearch.achievements.map(each=>(
              <li key={uuidv4()}>
              <h5 className="role">{each.title}</h5>
              <div>{each.content.map(each=>(<p key={uuidv4()}>{each}</p>))}</div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"start"}}>
      <Cell phone={12} tablet={12} col={10}>
          <section className="text-center">
            <h4 className="line">2. Branding</h4>
          </section>
      </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <p>{branding.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches:</h5>
            <div style={{display:"flex",alignItems:"flex-end"}}>
                <img src={mindIcon} alt="ideation" className="icon-size"/>
                <p>{branding.approach}</p>
            </div>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
        <img src={mindMap}  alt="mind map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
        <img src={stickyNote}  alt="sticky note" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
           <section>
            <h5 className="highlight-title">Achievements:</h5>
             <ul>
            {branding.achievements.map(each=>(
              <li key={uuidv4()}>
                <h5 className="role">{each.title}</h5>
                <p>{each.content}</p>
              </li>
            ))}
             </ul>
          </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={10}>
           <section className="text-center">
             <div>
             <h4 className="line">3. UI Design</h4>
             </div>
             <a href="https://www.figma.com/file/JgNZH9vIw5f8JXktjQYqE8/Unicup-Branding-Website?node-id=0%3A1" target="_blank" className="btn-link animate-btn"><span>Design Packpage</span></a>
           </section>
           <p>{uiDesign.intro}</p>
           <section>
             <h5 className="highlight-title">Approaches:</h5>
             <ul className="diagram">
             {uiDesign.approach.map(each=>(
                <li key={uuidv4()}>
                  <img src={each.icon} alt={each.alt} className="icon-size" />
                  <p>{each.title}</p>
                </li>
                ))}
             </ul>
           </section>
          </Cell>
              <Cell phone={12} tablet={12} col={5}>
              <img src={logoSketch}  alt="logo sketch" className="img-size" />
              <div><p style={{textAlign:"center"}}>Logo Sketch</p></div>
            </Cell>
            <Cell phone={12} tablet={12} col={5}>
              <img src={moodboard}  alt="mood board" className="img-size" />
              <div><p style={{textAlign:"center"}}>Mood boards</p></div>
            </Cell>
            <Cell phone={12} tablet={12} col={10}>
           <section>
             <h5 className="highlight-title">Achievements:</h5>
              <ul>
               {uiDesign.achievements.map(each=>(
                  <div key={uuidv4()}>
                    <h5 className="role">{each.title}</h5>
                    <p>{each.content}</p>
                    <img src={each.img} alt="show case" className="large-img" />
                  </div>
               ))}
             </ul>
           </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
        <section className="text-center">
          <div>
          <h4 className="line">4. Front-end Development</h4>
          </div>
             <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Website Link</span></a>
             <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-link animate-btn"><span>Github Link</span></a>
           </section>

           <p>{frontEnd.intro}</p>
        </Cell>
      </Grid>
    </div>
   );
}
 
export default Branding;