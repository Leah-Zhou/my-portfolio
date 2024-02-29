import React, {useEffect, useRef} from 'react';
import greenData from './localJson/greenp.json';
import usabilityPlan from './assect/files/GreenP-usability-plan.pdf';
import researchReport from './assect/files/GreenP-research-poster.pdf';
import testIcon from './assect/icons/test.svg';
import surveyIcon from './assect/icons/survey.svg';
import analysisIcon from './assect/icons/analysis.svg';
import report from './assect/imgs/GreenP-poster.png';
import guidelineIcon from './assect/icons/guideline-icon.svg';
import prototypeIcon from './assect/icons/prototype-icon.svg';
import problemOne from './assect/imgs/green-problem-one.png';
import problemTwo from './assect/imgs/green-problem-two.png';
import personaJenny from './assect/imgs/green-persona-jenny.png';
import journeyJenny from './assect/imgs/green-journey-jenny.png';
import personaSteve from './assect/imgs/green-persona-steve.png';
import journeySteve from './assect/imgs/green-journey-steve.png';
import testPlan from './assect/imgs/greenP-testPlan.png';
import sitemap from './assect/imgs/greenp-sitemap.png';
import prototye from './assect/imgs/greenP-Prototype.png';
import ReactPlayer from 'react-player/youtube';
import {Grid, Cell} from 'react-mdl';
import { v4 as uuidv4 } from 'uuid'
import gsap from 'gsap';


const GreenP = () => {
  const projectIntro =greenData.project;
  const uxResearch=greenData.research;
  uxResearch.approach[0].icon=testIcon;
  uxResearch.approach[1].icon=surveyIcon;
  uxResearch.approach[2].icon=analysisIcon;
  uxResearch.approach[0].img=testPlan;
  uxResearch.approach[0].link=usabilityPlan;
  uxResearch.approach[2].link=researchReport;
  uxResearch.approach[0].linkName='Usability Plan';
  uxResearch.approach[2].linkName='Research Report';
  const solution =greenData.solution;
  solution.approach[0].icon=guidelineIcon;
  solution.approach[0].img=sitemap;
  solution.approach[1].icon=prototypeIcon;
  const uiDesign = greenData.UI;
  const frontEnd =greenData.frontEnd;
  const roles=['UX designer'];

  const bgImg=useRef(null);
  useEffect(()=>{
    setTimeout(()=>{
      gsap.fromTo(bgImg.current, {scale:1.2}, {scale:1, duration:2.5, ease:"power4.easeOut"})
    }, 50);
  }, [])

  return ( 
    <div style={{marginTop:"70px"}}>
      <div className="hero-wrap">
        <img src={prototye} alt="hero" ref={bgImg} />
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"700",marginBottom:"20px"}}>UX Redesign Project</h2>
         <p className="header-subtitle">Green P Application</p>
         <a  href="https://www.figma.com/file/g3fHejV5d4Qpz1FTSQYSDt/Green-P-redesign-prototype?node-id=0%3A1" target="_blank" className="btn-link animate-btn"><span>Test Prototype</span></a>
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
             {roles.map(each=>(<p className="list-style">{each}</p>))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5 className="highlight-title">Tools</h5>
           <ul>
             <li><p>Figma,  Excel,  Doc,  Illustrator,  After Effect</p></li>
           </ul>
        </Cell>

      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={9}>
        <div className="text-center">
           <div>
           <h4 className="line">What are the pain points?</h4>
          </div>
         </div>
          <section>
            <h5 className="highlight-title">Approaches</h5>
            <ul>
            {uxResearch.approach.map(appr=>(
              <li key={uuidv4()}>
                <div className="text-center">
                  <img src={appr.icon} alt={appr.alt} className="icon-size" />
                  <h5>{appr.way}</h5>
                   { appr.link? <a href={appr.link} target="_blank" className="btn-link animate-btn"><span>{appr.linkName}</span></a>:null}
                </div>
                <p>{appr.detail}</p>
                {appr.img? <img src={appr.img} alt="reference" className="large-img" />:null}
                </li>
            ))}
          </ul>
         </section>
         <section>
         <img src={report}  alt="research report" className="large-img" />
         </section>   
           <section style={{marginTop:"4em"}}>
             <h5 className="highlight-title">Existing Problems</h5>
             <ul>
            {uxResearch.problems.map(each=>(
              <li key={uuidv4()}>
              <h5>{each.title}</h5>
              <div>{each.content.map(point=>(
              <div key={uuidv4()}>
                 <p>{point}</p>
              </div>
              ))}</div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
          <img src={problemOne}  alt="display problem" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
          <img src={problemTwo}  alt="display problem" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
          <h5  className="highlight-title top-margin">{uxResearch.persona.title}</h5>
          <p>{uxResearch.persona.content}</p>
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <img src={personaJenny}  alt="persona" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <img src={journeyJenny}  alt="journey map" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <img src={personaSteve}  alt="persona" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <img src={journeySteve}  alt="journey map" className="large-img" />
        </Cell>
      </Grid>



      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
          <section className="text-center">
            <h4 className="line">How to simplify the user flow</h4>
          </section>
          <section>
            <h5 className="highlight-title">Approaches</h5>
             <ul>
            {solution.approach.map(each=>(
              <li key={uuidv4()}>
                <div className="text-center">
                 <img src={each.icon} alt={each.alt} className="icon-size" />
                  <h5>{each.way}</h5>
                </div>
                <p>{each.detail}</p>
                {each.img&&<img src={each.img} alt={each.way} className="large-img" />}
              </li>
            ))}
             </ul>
          </section>
          <section>
            <h5 className="highlight-title">Solutions</h5>
            <ul>{solution.found.map(each=>(
              <li key={uuidv4()}>
                <h5>{each.title}</h5>
                <div>{each.content.map(point=>(<p key={uuidv4()}>{point}</p>))}</div>
                <img src={each.img} alt="compare" className="large-img" />
                </li>
            ))}
            </ul>                
          </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
           <section className="text-center">
             <div>
             <h4 className="line">Final Prototype Design</h4>
             </div>
             <a href="https://www.figma.com/file/g3fHejV5d4Qpz1FTSQYSDt/Green-P-redesign-prototype?node-id=0%3A1" target="_blank" className="btn-link animate-btn"><span>Test Prototype</span></a>
           </section>
           <p>{uiDesign.intro}</p>
           <img src={prototye} alt="prototye" className="large-img" />
           <section>
             <h5 className="highlight-title">Approaches</h5>
             <ul>
             {uiDesign.approach.map(each=>(
                <li key={uuidv4()}>
                  <h5>{each.title}</h5>
                  <p>{each.content}</p>
                </li>
                ))}
             </ul>
           </section>
        </Cell>
        <Cell phone={12} tablet={12} col={9}>
            <div className="video-wrapper">
               <ReactPlayer className="video" url='https://youtu.be/jgZ0DMxPxjM' width="100%" height="100%" controls /> 
           </div>
        </Cell>
      </Grid>
    </div>
   );
}
export default GreenP;