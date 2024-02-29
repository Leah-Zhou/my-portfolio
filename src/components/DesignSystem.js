import React, { useEffect, useRef } from 'react';
import DSdata from './localJson/DesignSystem.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import {Link} from 'react-router-dom';
import heroImg from './assect/imgs/DS-cover.png';
import checkProcess from'./assect/imgs/LS-check-event.png';
import interview from './assect/imgs/LS-interview.png';
import empathyMap from './assect/imgs/LS-empathy-map.png';
import evaluationProcess from './assect/imgs/LS-evaluate process.png';
import experienceMap from './assect/imgs/LS-experience-mapping.png';
import findProcess from './assect/imgs/LS-find-planner-process.png';
import persona from './assect/imgs/LS-persona-male.png';
import journeyMap from './assect/imgs/LS-journey map.png';
import ideation from './assect/imgs/LS-Ideation.png';
import siteMap from './assect/imgs/LS-sitemap.png';
import userFlow from './assect/imgs/LS-user-flow.png';
import treeTesting from './assect/imgs/LS-tree-testing.png';
import cardStorting from './assect/imgs/LS-cardstorting.png';
import showCase from './assect/imgs/LS-showcase.png';
import kitDisplay from './assect/imgs/LS-kit-display.png';
import uiHierarchy from './assect/imgs/LS-hierarchy-display.png';
import arrowSm from './assect/icons/arrow-sm.svg';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const DesignSystem = () => {
  const bgImg=useRef(null);
  DSdata.solution.explaination[0].img= {src:findProcess, alt:"find process"};
  DSdata.solution.explaination[1].img= {src:checkProcess, alt:"check event process"};
  DSdata.solution.explaination[2].img= {src:evaluationProcess, alt:"review planner process"};
  DSdata.direction[0].img={src:ideation, alt:"ideation"};
  DSdata.UI.explaination[0].img= {src:kitDisplay, alt:"UI kit display"};
  DSdata.UI.explaination[1].img= {src:uiHierarchy, alt:"UI Hierarchy"};

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
         <h2 style={{marginBottom:"20px"}}>Knowledgehook Design system optimization</h2>
         <p className="header-subtitle">Design guidlines | Accessibility design | Research</p>
         <a href="mailto:leahzhoulz@gmail.com" target="_blank" className="btn-link animate-btn"><span>Contact for design review</span></a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">About The Project</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           {
             DSdata.intro.map(each=>(
               <div  key={uuidv4()}>
                  <h5 className="highlight-title">{each.title}</h5>
                  <p>{each.content}</p>
               </div>
             ))
           }
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
            <img src={showCase}  alt="showcase" className="large-img" />
        </Cell>
      </Grid>
      <Grid>
      <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Challenge and Approach</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <div className="add-gap">
            <h6 className="highlight-title">{DSdata.challenges.subtitle}</h6>
            <h3 className="strong">{DSdata.challenges.title}</h3>
            <p>{DSdata.challenges.content}</p>
          </div>
          <div className="add-gap">
           <h6 className="highlight-title">{DSdata.approach.subtitle}</h6>
            <h3 className="strong">{DSdata.approach.title}</h3>
            <p>{DSdata.approach.content}</p>
          </div>     
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
            <img src={interview}  alt="user interview" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
            <img src={empathyMap}  alt="empathy map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
            <img src={experienceMap}  alt="experience map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={7} className="add-gap">
          <h6 className="highlight-title">{DSdata.discovery.subtitle}</h6>
          {DSdata.discovery.explaination.map(each=>(
            <div key={uuidv4()}>
               <h3 className="strong">{each.title}</h3>
              <p>{each.content}</p>
            </div>
          ))}
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <img src={persona}  alt="persona" className="large-img" />   
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <img src={journeyMap}  alt="journey map" className="large-img" />   
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Product Direction</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           {DSdata.direction.map(each=>(
             <div key={uuidv4()} className="add-gap">
              <h6 className="highlight-title">{each.subtitle}</h6>
              <h3 className="strong">{each.title}</h3>
              <p>{each.content}</p>
              {each.img? <img src={each.img.src} alt={each.img.alt} className="large-img"/>: null }
             </div>
           ))}
        </Cell>
      </Grid>

      <Grid>
      <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">UX Approach To Build Information Architecture</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h6 className="highlight-title">{DSdata.design.subtitle}</h6>
          <div className="add-gap">
          <h3 className="strong">{DSdata.design.explaination[0].title}</h3>
              <p>{DSdata.design.explaination[0].content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
            <img src={treeTesting}  alt="tree testing" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
            <img src={siteMap}  alt="site map" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <div>
          <h3 className="strong">{DSdata.design.explaination[1].title}</h3>
              <p>{DSdata.design.explaination[1].content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
            <img src={userFlow}  alt="user flow" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Why Design like that</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h6 className="highlight-title">{DSdata.solution.subtitle}</h6>
          {DSdata.solution.explaination.map(each=>(
            <div style={{marginBottom:"100px"}}>
              <h3 className="strong">{each.title}</h3>
              <p>{each.content}</p>
              <img src={each.img.src}  alt={each.img.alt} className="large-img" />
            </div>
          ))}
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <div className="text-center">
           <h4 className="line">How UI serves the goal</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h6 className="highlight-title">{DSdata.UI.subtitle}</h6>
          {DSdata.UI.explaination.map(each=>(
            <div style={{marginBottom:"100px"}}>
              <h3 className="strong">{each.title}</h3>
              <p>{each.content}</p>
              <img src={each.img.src}  alt={each.img.alt} className="large-img" />
            </div>
          ))}
        </Cell>
      </Grid>

      <div className='btn-group-section'> 
          <section className='pre-section'>
            <Link to="/branding project">
              <img src={arrowSm}  alt="arrow previous"/>
              <span>Previous project</span>
              </Link>
            </section>
            <section>
            <a href="https://www.figma.com/proto/OPxzgQcz2o6HeYgX6r3W4H/App-design-Little-something?type=design&node-id=814-3900&t=tng1gYmzonvsJtve-0&scaling=scale-down&page-id=66%3A2250&starting-point-node-id=1531%3A4420" target="_blank" className="btn-link animate-btn"><span>Play Prototype</span></a>
            </section>
            <section className='next-section'>
            <Link to="/survey web design project">
              <span>Next project</span>
              <img src={arrowSm}  alt="arrow previous"/>
              </Link>
            </section>
          </div>

    </div>
   );
}
 
export default DesignSystem;