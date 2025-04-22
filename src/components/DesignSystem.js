import React, { useEffect, useRef } from 'react';
import DSdata from './localJson/DesignSystem.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import './styleSheet/DesignSystem.scss';
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
import impactImg1 from './assect/imgs/DS-impact-1.png';
import impactImg2 from './assect/imgs/DS-impact-2.png';
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
    <div style={{marginTop:"70px", backgroundColor:"white"}}>
      <div className="hero-wrap">
        <img src={heroImg} alt="hero" ref={bgImg}/>
       <div></div>
       <section className="project-title">
         <h2 style={{marginBottom:"20px"}}>Knowledgehook Design system optimization</h2>
         <p className="header-subtitle">Design guidlines | Accessibility design | Research</p>
         <a href="mailto:leahzhoulz@gmail.com" target="_blank" className="btn-link animate-btn"><span>View Design System</span></a>
       </section>
      </div>


      <Grid className="side-margin" style={{justifyContent:"center", alignItems:"start"}}>

        {/* INTRO SECTION */}
        <Cell phone={12} tablet={12} col={5}>
        <div style={{marginRight:"2em"}}> 
           <span>{DSdata.overview.title}</span>
           <p>{DSdata.overview.content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={4}>
           {
             DSdata.intro.map(each=>(
               <div  key={uuidv4()}>
                  <span>{each.title}</span>
                  {each.content.map(
                  item=>(<div key={uuidv4()}>
                            <p>{item}</p>
                        </div>))}                             
               </div>
             ))
           }
        </Cell>
        
        <Cell phone={12} tablet={12} col={12}>
          <div>
            <img src={displayImg}  alt="showcase demo" className='large-img'/>
         </div>
        </Cell>
      </Grid>
      <Grid>
      <Cell phone={12} tablet={12} col={12}>
        <div className="text-center banner-text">
          <span>The problem</span>
           <h3>How can I optimize, build and scale the design system to improve usability for designers & developers?</h3>
          </div>
        </Cell>

        {/* DISCOVERY SECTION */}
        <Cell phone={12} tablet={12} col={6}>
           <div className="add-gap">
            <section className='line-width'>
              <span>Discovery</span>
            <h3>{DSdata.discovery.title}</h3>
            <p>{DSdata.discovery.content}</p>
            </section>
           </div>
        </Cell>

        {/* DISCOVERY BREAKDOWNS */}

        <Cell phone={12} tablet={12} col={10}>
           {
             DSdata.problem.map(each=>(
               <div className='two-cols discovery-section' key={uuidv4()}>
                <section>
                  {each.img? <img src={each.img.src} alt={each.img.alt}/>: null }  
                </section>
                <section className='text-box add-bg'>
                   <p style={{fontWeight:"600"}}>{each.title}</p>
                   <ul>
                  {each.content.map(
                  item=>(        
                  <li key={uuidv4()}>
                            {item}
                        </li>
                        ))}   
                  </ul> 
                   </section>    
               </div>
             ))
           }
        </Cell>

{/* APPROACH */}
        <Cell phone={12} tablet={12} col={6}>
          <div className='line-width top-margin'>
            <span>My approach</span>
            <h3>{DSdata.approach.title}</h3>
            <p>{DSdata.approach.content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <div className='img-wrapper'>
           <span>Here is a quick peak at how I reorganized the system inspired by the research</span>
          <img src={researchDisplay} alt="research display"/>
          </div>
        </Cell>

{/* SOLUTION A SECTION */}
        <Cell  phone={12} tablet={12} col={6}>
          <div className='line-width top-margin'>
          <section>
            <span>{DSdata.solutionA.sub}</span>
            <h3>{DSdata.solutionA.title}</h3>
          </section>
          <section>
          {DSdata.solutionA.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
          </div>
        </Cell>

{/* SOUTION A BREAKDOWNS */}
        <Cell phone={12} tablet={12} col={12}>
          <div className='img-content-wrapper add-bg top-margin-md'>
            <section>
            <img src={solutiona1} alt="solution A display"/>
            </section>
            <section className='text-box'>
              <p style={{fontWeight:"600"}}>{DSdata.solutionA.breakdowns[0].heading}</p>
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

          <div className='img-content-wrapper add-bg top-margin-md'>
            <section className='text-box'>
              <p style={{fontWeight:"600"}}>{DSdata.solutionA.breakdowns[1].heading}</p>
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

          <div className='img-content-wrapper add-bg top-margin-md'>
            <section>
            <img src={solutiona3} alt="solution A display"/>
            </section>
            <section className='text-box'>
              <p style={{fontWeight:"600"}}>{DSdata.solutionA.breakdowns[2].heading}</p>
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
        <div className='line-width top-margin'>
          <section>
            <span>{DSdata.solutionB.sub}</span>
            <h3>{DSdata.solutionB.title}</h3>
          </section>
          <section>
          {DSdata.solutionB.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
        </div>
        </Cell>

  {/* SOUTION B BREAKDOWNS */}

        <Cell phone={12} tablet={12} col={12}>
          <div className='add-bg'>
          <div className='img-content-wrapper'>
            <section>
            <img src={solutionb1} alt="solution b display"/>
            </section>
            <section className='text-box'>
              <p style={{fontWeight:"600"}}>{DSdata.solutionB.breakdowns[0].heading}</p>
              <p>{DSdata.solutionB.breakdowns[0].content}</p>
            </section>
          </div>

          <div className='center-content'>
            <section>
              <p style={{fontWeight:"600"}}>{DSdata.solutionB.breakdowns[1].heading}</p>
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
            <img src={solutionb2} alt="solution b display" className="large-img" />
            </section>
          </div>
          </div>
        </Cell>

        {/* SOLUTION C SECTION */}
        <Cell  phone={12} tablet={12} col={6}>
          <div className='line-width top-margin'>
          <section>
            <span>{DSdata.solutionC.sub}</span>
            <h3>{DSdata.solutionC.title}</h3>
          </section>
          <section>
          {DSdata.solutionC.content.map(item=>(
             <div key={uuidv4()}>
              <p>{item}</p>
             </div>
           ))}
          </section>
          </div>
        </Cell>

        {/* SOLUTION C BREAKDOWNS */}
        
        <Cell phone={12} tablet={12} col={12}>
           {
             DSdata.solutionC.breakdowns.map(each=>(
               <div className='img-content-wrapper' key={uuidv4()}>
                <section>
                  {each.img? <img src={each.img.src} alt={each.img.alt}/>: null }  
                </section>
                <section className='text-box'>
                   <p style={{fontWeight:"600"}}>{each.heading}</p>
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

        <Cell phone={12} tablet={12} col={10}>
        <section className='line-width top-margin'>
            <span>{DSdata.impact.sub}</span>
            <h3>{DSdata.impact.title}</h3>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
          <section className='rows-group'>
           {DSdata.impactBreakdowns.map(each=>(
             <div key={uuidv4()} className="add-gap">
              <p style={{fontWeight:"600"}}>{each.heading}</p>
              {each.details.map(item=>(
                <div key={uuidv4()}>
                  <p>{item}</p>
                  </div>
              ))}
             </div>
           ))}
          </section>
        </Cell>

        <Cell phone={12} tablet={12} col={10}>
          <div className='center-content'>
            <span>A showcase of old design (left) and new UI (right) after applying optimized design system</span>
            <img src={impactImg1}  alt="impact demo" className='large-img'/>
            <img src={impactImg2}  alt="impact demo" className='large-img'/>
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