import React, { useEffect, useRef } from 'react';
import DSdata from './localJson/DesignSystem.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import {Link} from 'react-router-dom';
import heroImg from './assect/imgs/DS-cover.png';
import displayImg from './assect/imgs/DS-display-1.png';
import researchImg from './assect/imgs/DS-content-img-1.png';
import achievementImg from './assect/imgs/DS-content-img-2.png';
import problema from './assect/imgs/DS-promble-color.png';
import problemb from './assect/imgs/DS-problem-fonts.png';
import problemc from './assect/imgs/DS-problem-shadow.png';
import problemd from './assect/imgs/DS-problem-comps.png';
import researchDisplay from './assect/imgs/DS-research-display.png';
import solutiona1 from './assect/imgs/DS-solution-a1.png';
import solutiona2 from './assect/imgs/DS-solution-a2.png';
import solutiona3 from './assect/imgs/DS-solution-a3.png';
import solutionb1 from './assect/imgs/DS-solution-b1.png';
import solutionb2 from './assect/imgs/DS-solution-b2.png';
import solutionc1 from './assect/imgs/DS-solution-c1.png';
import solutionc2 from './assect/imgs/DS-solution-c2.png';
import solutionc3 from './assect/imgs/DS-solution-c3.png';
import arrowSm from './assect/icons/arrow-sm.svg';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const DesignSystem = () => {
  const bgImg=useRef(null);
  DSdata.problem[0].img= {src:problema, alt:"color problem"};
  DSdata.problem[1].img= {src:problemb, alt:"typography problem"};
  DSdata.problem[2].img= {src:problemc, alt:"style problem"};
  DSdata.problem[3].img= {src:problemd, alt:"components problem"};

  DSdata.solutionC.breakdowns[0].img= {src:solutionc1, alt:"solution c 1"};
  DSdata.solutionC.breakdowns[1].img= {src:solutionc2, alt:"solution c 2"};
  DSdata.solutionC.breakdowns[2].img= {src:solutionc3, alt:"solution c 3"};


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

        {/* INTRO SECTION */}
        <Cell phone={12} tablet={12} col={5}>
        <div className="text-center">
           <span>{DSdata.overview.title}</span>
           <p>{DSdata.overview.content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
           {
             DSdata.intro.map(each=>(
               <div  key={uuidv4()}>
                  <span className="highlight-title">{each.title}</span>
                  {each.content.map(
                  item=>(<ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>))}                             
               </div>
             ))
           }
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
            <img src={displayImg}  alt="showcase demo" className='large-img'/>
        </Cell>
      </Grid>
      <Grid>
      <Cell phone={12} tablet={12} col={12}>
        <div className="text-center">
          <span>The problem</span>
           <h5 className="line">How can I optimize, build and scale the design system to improve usability for designers & developers?</h5>
          </div>
        </Cell>

        {/* SDISCOVERY SECTION */}
        <Cell phone={12} tablet={12} col={7}>
           <div className="add-gap">
            <section>
              <span>🔍Discovery</span>
            <h5 className="strong">{DSdata.discovery.title}</h5>
            <p>{DSdata.discovery.content}</p>
            </section>
           </div>
        </Cell>

        <Cell phone={12} tablet={12} col={10}>
           {
             DSdata.problem.map(each=>(
               <div className='two-cols' key={uuidv4()}>
                <section>
                  {each.img? <img src={each.img.src} alt={each.img.alt}/>: null }  
                </section>
                <section>
                   <p className="highlight-title">{each.title}</p>
                  {each.content.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
                   </section>    
               </div>
             ))
           }
        </Cell>

{/* APPROACH */}
        <Cell phone={12} tablet={12} col={7}>
        <span>My approach</span>
          <h5>{DSdata.approach.title}</h5>
          <p>{DSdata.approach.content}</p>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <div>
           <span>Here is a quick peak at how I reorganized the system inspired by the research</span>
          <img src={researchDisplay} alt="research display"/>
          </div>
        </Cell>

{/* SOLUTION A SECTION */}
        <Cell  phone={12} tablet={12} col={6}>
          <section>
            <span>{DSdata.solutionA.sub}</span>
            <h5>{DSdata.solutionA.title}</h5>
          </section>
          <section>
          {DSdata.solutionA.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
        </Cell>

        <Cell phone={12} tablet={12} col={10}>
          <div className='two-cols'>
            <section>
            <img src={solutiona1} alt="solution A display"/>
            </section>
            <section>
              <h5>{DSdata.solutionA.breakdowns[0].heading}</h5>
              <p>{DSdata.solutionA.breakdowns[0].content}</p>
              {DSdata.solutionA.breakdowns[0].list.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
            </section>
          </div>

          <div className='two-cols'>
            <section>
              <h5>{DSdata.solutionA.breakdowns[1].heading}</h5>
              <p>{DSdata.solutionA.breakdowns[1].content}</p>
              {DSdata.solutionA.breakdowns[1].list.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
            </section>
            <section>
            <img src={solutiona2} alt="solution A display"/>
            </section>
          </div>

          <div className='two-cols'>
            <section>
            <img src={solutiona3} alt="solution A display"/>
            </section>
            <section>
              <h5>{DSdata.solutionA.breakdowns[2].heading}</h5>
              <p>{DSdata.solutionA.breakdowns[2].content}</p>
              {DSdata.solutionA.breakdowns[2].list.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
            </section>
          </div>
        </Cell>

        {/* SOLUTION B SECTION */}
        <Cell  phone={12} tablet={12} col={6}>
          <section>
            <span>{DSdata.solutionB.sub}</span>
            <h5>{DSdata.solutionB.title}</h5>
          </section>
          <section>
          {DSdata.solutionB.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
        </Cell>

        <Cell phone={12} tablet={12} col={10}>
          <div className='two-cols'>
            <section>
            <img src={solutionb1} alt="solution b display"/>
            </section>
            <section>
              <h5>{DSdata.solutionB.breakdowns[0].heading}</h5>
              <p>{DSdata.solutionB.breakdowns[0].content}</p>
            </section>
          </div>

          <div>
            <section>
              <h5>{DSdata.solutionB.breakdowns[1].heading}</h5>
              <p>{DSdata.solutionB.breakdowns[1].content}</p>
              {DSdata.solutionB.breakdowns[1].list.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
            </section>
            <section>
            <img src={solutionb2} alt="solution b display"/>
            </section>
          </div>
        </Cell>

        {/* SOLUTION C SECTION */}
        <Cell  phone={12} tablet={12} col={6}>
          <section>
            <span>{DSdata.solutionC.sub}</span>
            <h5>{DSdata.solutionC.title}</h5>
          </section>
          <section>
          {DSdata.solutionC.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
        </Cell>
        
        <Cell phone={12} tablet={12} col={10}>
           {
             DSdata.solutionC.breakdowns.map(each=>(
               <div className='two-cols' key={uuidv4()}>
                <section>
                  {each.img? <img src={each.img.src} alt={each.img.alt}/>: null }  
                </section>
                <section>
                   <p className="highlight-title">{each.heading}</p>
                   {each.content.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))} 
                  {each.list.map(
                  item=>(        
                  <ul key={uuidv4()}>
                          <li>
                            <p>{item}</p>
                          </li>
                        </ul>
                        ))}    
                   </section>    
               </div>
             ))
           }
        </Cell>

{/* IMPACT SECTION */}

        <Cell phone={12} tablet={12} col={6}>
        <section>
            <span>{DSdata.impact.sub}</span>
            <h5>{DSdata.impact.title}</h5>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           {DSdata.impactBreakdowns.map(each=>(
             <div key={uuidv4()} className="add-gap">
              <h5 className="strong">{each.heading}</h5>
              {each.details.map(item=>(
                <div key={uuidv4()}>
                  {item}
                  </div>
              ))}
             </div>
           ))}
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
            <a href="mailto:leahzhoulz@gmail.com" target="_blank" className="btn-link animate-btn"><span>Contact for design review</span></a>
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