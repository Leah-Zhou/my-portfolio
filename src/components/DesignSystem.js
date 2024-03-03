import React, { useEffect, useRef } from 'react';
import DSdata from './localJson/DesignSystem.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import {Link} from 'react-router-dom';
import heroImg from './assect/imgs/DS-cover.png';
import researchImg from './assect/imgs/DS-content-img-1.png';
import achievementImg from './assect/imgs/DS-content-img-2.png';
import arrowSm from './assect/icons/arrow-sm.svg';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const DesignSystem = () => {
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
      </Grid>
      <Grid>
      <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Approaches and Implementation</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           <div className="add-gap">
            <section>
            <h5 className="strong">{DSdata.firstApproach.title}</h5>
            <p>{DSdata.firstApproach.content}</p>
            </section>
            <section>
            <h6 className="strong">{DSdata.firstApproach.subtitleA}</h6>
            <p>{DSdata.firstApproach.subContentA}</p>
            </section>
           <section>
           <h6 className="strong">{DSdata.firstApproach.subtitleB}</h6>
            <p>{DSdata.firstApproach.subContentB}</p>
           </section>
           </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
            <img src={researchImg}  alt="research demo" className='large-img'/>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          {DSdata.approach.map(each=>(
          <div className="add-gap">
          {/* <h6 className="highlight-title">{each.title}</h6> */}
           <h5 className="strong">{each.title}</h5>
           <p>{each.content}</p>
         </div> 
          ))}    
        </Cell>

        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Achievements</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
            <img src={achievementImg}  alt="achievement demo" className='large-img'/>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           {DSdata.achievement.map(each=>(
             <div key={uuidv4()} className="add-gap">
              <h5 className="strong">{each.title}</h5>
              <p>{each.content}</p>
             </div>
           ))}
        </Cell>
      </Grid>


      <div className='btn-group-section'> 
          <section className='pre-section'>
            <Link to="/notification page project">
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