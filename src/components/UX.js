import React, {useRef, useEffect} from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import sunnyOp from './assect/imgs/sunnyop-hero.png';
import KHhero from './assect/imgs/KH-hero.png';
import brandingHero from './assect/imgs/hero-teashop.jpg';
import LSHero from './assect/imgs/LS-hero.png';
import {Grid, Cell}from 'react-mdl';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import greenpHero from './assect/imgs/greenP-Prototype.png';






const DesignWork = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
  
  const uxProject =useRef(null);
  const uxTitle=useRef(null);

  useEffect(()=>{
    const projects=uxProject.current.querySelectorAll('.content-wrapper');
    const projectArray =gsap.utils.toArray(projects);
   projectArray.forEach((project)=>{
    //  const circle=project.querySelector('.bg-circle');
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
          trigger:imgHolder,
          start:"top center+=350",
          end:"bottom bottom",
          toggleActions:"play none none none"
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
        trigger:imgHolder,
        start:"top center+=350",
        end:"bottom bottom",
        toggleActions:"play none none none"
      }
     })
     gsap.fromTo(title, {
       yPercent:100
     },
     {
       yPercent:0, 
       duration:1,
       delay:1,
       ease:"Expo.out",
       scrollTrigger:{
        trigger:img,
        start:"top bottom-=100",
        end:"bottom bottom",
        toggleActions:"play none none none"
      }
     }
     )
    //  gsap.fromTo(circle, {scale:0},
    //   {
    //     scale:1,    
    //     duration:1.3,
    //     scrollTrigger:{
    //       trigger:img,
    //       start:"top center",
    //       scrub:2
    //     }
    //   })
   })
 
    const animateText =uxTitle.current.querySelector('.animate-text');    
    gsap.to(animateText,
      {y:2, x:2, opacity:1, duration:1.3, ease:"Expo.easeOut",
        scrollTrigger:{
          trigger:uxTitle.current,
          start: "bottom center",
          end: "bottom bottom",
          pin:true,
          toggleActions:"play none none none"
        }
    })
    
 }, [])



  return (
    <>
    <div ref={uxProject}>
    <Grid  style={{justifyContent:"center", position:"relative"}}>
    <Cell col={12} className="home-btn-group">
           <div className="link-content-ux" ref={uxTitle}>
            <h1 className="animate-text">Design Projects</h1>
           </div>
    </Cell>
    <Cell col={8} phone={12} tablet={12}>
    <Link to="/branding project">
      <div className="content-wrapper">
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={brandingHero} alt="tea shop branding project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Unicup Bubble Teashop</h6>
           <p className="subtitle">UX UI design | Branding | Front-end development</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={8} phone={12} tablet={12}>
    <Link to="/mobile app project">
      <div className="content-wrapper">
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={LSHero} alt=">Little Something Mobile App" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Little Something Mobile App</h6>
           <p className="subtitle">UX UI design | Branding </p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    
    <Cell col={8} phone={12} tablet={12}>
    <div className="content-wrapper secret-project">
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={KHhero} alt="KH showcase" className="ux-hero" />
         </div>
         <div className="overlay-hidden" > 
          <p>Please contact to access more design details</p>
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Knowledgehook Product Design Showcase</h6>
           <p className="subtitle">UX UI design | Accessible design</p>
         </div>
       </div>
      </div>
    </Cell>

    <Cell col={8} phone={12} tablet={12}>
    <Link to="/survey web design project">
      <div className="content-wrapper">
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={surveyHero} alt="Ontario Deaf Literacy Survey Web Design Project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Ontario Deaf Literacy<span>&#38;</span>GBC Cooperative project</h6>
         <p className="subtitle">Accessibility design | Front-end development</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
     
    <Cell col={8} phone={12} tablet={12}>
    <Link to="/green p project">
      <div className="content-wrapper">
      {/* <div className="bg-circle">
        02
      </div> */}
      <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={greenpHero} alt="Green P app redeign project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Green P Parking App Redesign</h6>
           <p className="subtitle">UX Research | UX design</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>

    {/* <Cell col={8} phone={12} tablet={12}>
    <Link to="/sunnyOp project">
      <div className="content-wrapper">
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
    </Cell> */}
    </Grid>

    </div>
    </>
   );
}
 
export default DesignWork;