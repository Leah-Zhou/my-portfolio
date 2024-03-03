import React, { useEffect, useRef } from 'react';
import KHNotiData from './localJson/KHNoti.json';
import{Grid, Cell}from 'react-mdl';
import './styleSheet/Unicup.scss';
import {Link} from 'react-router-dom';
import heroImg from './assect/imgs/KH-noti-cover.png';
import timelineImg from './assect/imgs/KH-noti-content-1.png';
import achievementImg from './assect/imgs/KH-noti-content-2.png';
import arrowSm from './assect/icons/arrow-sm.svg';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const KHNoti = () => {
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
         <h2 style={{marginBottom:"20px"}}>Knowledgehook notification page redesign</h2>
         <p className="header-subtitle">Research| UI redesign | Mockups</p>
         <a href="https://app.knowledgehook.com/app/student/login" target="_blank" className="btn-link animate-btn"><span>Live design</span></a>
         <p className="strong">Design login access: Username: studentb | Passwords: abcd</p>
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
             KHNotiData.intro.map(each=>(
               <div  key={uuidv4()}>
                  <h5 className="highlight-title">{each.title}</h5>
                  {each.content.map(
                  item=>(<ul key={uuidv4()}>
                          <p>{item}</p>
                              </ul>))}                             
               </div>
             ))
           }
        </Cell>
      </Grid>
      <Grid>
      <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Timeline and Milestones</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
            <img src={timelineImg}  alt="timeline" className='large-img'/>
        </Cell>
        
        <Cell phone={12} tablet={12} col={7}>
          {KHNotiData.approach.map(each=>(
          <div className="add-gap">
           <h5 className="strong">{each.title}</h5>
           <p>{each.content}</p>
           {each.list.map(
                  item=>(<ul key={uuidv4()}>
                          <li>
                            <p className='list-style'>{item}</p></li>
                              </ul>))}   
         </div> 
          ))}    
        </Cell>

        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Achievements</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
           {KHNotiData.achievement.map(each=>(
             <div key={uuidv4()} className="add-gap">
              <h5 className="strong">{each.title}</h5>
              <p>{each.content}</p>
             </div>
           ))}
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
            <img src={achievementImg}  alt="achievement demo" className='large-img'/>
            <h5 className='strong'>Design login access: </h5>
            <p className='strong'>Username: studentb  /  Passwords: abcd</p>
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
            <a href="https://app.knowledgehook.com/app/student/login" target="_blank" className="btn-link animate-btn"><span>Live design</span></a>
            </section>
            <section className='next-section'>
            <Link to="/design system project">
              <span>Next project</span>
              <img src={arrowSm}  alt="arrow previous"/>
              </Link>
            </section>
          </div>

    </div>
   );
}
 
export default KHNoti;