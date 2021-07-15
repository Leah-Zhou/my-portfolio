import React, {useRef, useEffect} from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import heroGreenP from './assect/imgs/green-hero.png';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import sunnyOp from './assect/imgs/sunnyop-hero.png';
import brandingHero from './assect/imgs/hero-teashop.jpg';
import {Grid, Cell}from 'react-mdl';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsapCore from 'gsap/gsap-core';





const DesignWork = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
  
  const uxProject =useRef(null);
  const uxTitle=useRef(null);

  useEffect(()=>{
    const projects=uxProject.current.querySelectorAll('.content-wrapper');
    const projectArray =gsap.utils.toArray(projects);
   projectArray.forEach((project)=>{
     const circle=project.querySelector('.bg-circle');
     const title=project.querySelector('.description');
     const imgHolder=project.querySelector('.ux-hero-holder')
     const img=project.querySelector('img');
     gsap.fromTo(imgHolder, 
      {
        xPercent:-100
      },
      {
        xPercent:0,
        duration:1.5,
        ease:"Power2.out",  
        scrollTrigger:{
          trigger:img,
          start:"top center",
          end:"bottom center",
          markers:true,
          toggleActions:"restart none none reset"
        }
      }
      )
     gsap.fromTo(img,
       {
        xPercent:100,
        scale: 1.3,
      }, 
      {
      xPercent:0,
      scale:1,
      duration:1.5,
      ease:"Power2.out", 
       transformOrigin:"left",
       scrollTrigger:{
        trigger:img,
        start:"top center",
        end:"bottom center",
        markers:true,
        toggleActions:"restart none none reset"
      }
     })
     gsap.fromTo(title, {
       yPercent:100
     },
     {
       yPercent:0, 
       duration:1,
       delay:0.6,
       ease:"Expo.out",
       scrollTrigger:{
        trigger:img,
        start:"top bottom-=100",
        end:"bottom center",
        toggleActions:"restart none none none"
      }
     }
     )
     gsap.fromTo(circle, {scale:0},
      {
        scale:1,    
        duration:1.3,
        scrollTrigger:{
          trigger:img,
          start:"top center",
          scrub:2
        }
      })
   })


    
    const animateText =uxTitle.current.querySelector('.animate-text');    
    gsap.to(animateText,
      {y:10, x:10, opacity:1, duration:1.3, ease:"Expo.easeOut",
        scrollTrigger:{
          trigger:uxTitle.current,
          start: "bottom center",
          end: "bottom center",
          pin:true,
          toggleActions:"restart none reverse none"
        }
    })
    
 }, [])

//  const addRef =(el)=>{
//    if(el &&!projects.current.includes(el)){
//      projects.current.push(el)
//      // console.log(el)
//    }
//  }

  return (
    <>
    <div ref={uxProject}>
    <Grid  style={{justifyContent:"center", position:"relative"}}>
    <Cell col={10} className="home-btn-group">
           <div className="link-content-ux" ref={uxTitle}>
            <h1>UX PROJECTS</h1>
            <h1 className="animate-text">UX PROJECTS</h1>
           </div>
    </Cell>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/branding project">
      <div className="content-wrapper">
      <div className="bg-circle">
        01
      </div>
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={brandingHero} alt="tea shop branding project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>UX &amp; Branding</h6>
           <p className="subtitle">Unicup Bubble Teashop</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12} offsetDesktop={2}>
    <Link to="/green p project">
      <div className="content-wrapper">
      <div className="bg-circle">
        02
      </div>
      <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={heroGreenP} alt="Green P app redeign project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>UX Redesign</h6>
           <p className="subtitle">Green P Parking App</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/sunnyOp project">
      <div className="content-wrapper">
      <div className="bg-circle">
        03
        </div>
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={sunnyOp} alt="sunnyOp UI design project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>UI Design 	&amp; Branding</h6>
           <p className="subtitle">
             GBC<span>	&#38;</span>SunnyBrook Science Center Cooperative project</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12} offsetDesktop={2}>
    <Link to="/survey web design project">
      <div className="content-wrapper">
      <div className="bg-circle">
        04
        </div>
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={surveyHero} alt="Deaf literacy survey web design projecgt" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>UX website design</h6>
         <p className="subtitle">
             GBC<span>	&#38;</span>Deaf Literacy Cooperative project</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    </Grid>

    </div>
    </>
   );
}
 
export default DesignWork;