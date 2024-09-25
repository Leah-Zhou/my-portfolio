import React, {useRef, useEffect} from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import brandingHero from './assect/imgs/hero-teashop.png';
import LSHero from './assect/imgs/LS-hero.png';
import logoResili from './assect/imgs/logo-resili.png';
import logoSunnybrook from './assect/imgs/logo-sunnybrook.png';
import logoDL from './assect/imgs/logo-deaf-literacy.png';
import khlogo from './assect/imgs/kh-logo.png';
import {Grid, Cell}from 'react-mdl';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import sunnyOp from './assect/imgs/sunnyop-hero.png';
// import KHhero from './assect/imgs/KH-hero.png';
// import greenpHero from './assect/imgs/greenP-Prototype.png';
//import NotiHero from './assect/imgs/KH-noti-cover.png';
import DSHero from './assect/imgs/DS-cover.png';
import Footer from './Footer';






const DesignWork = () => {

  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
  
  const uxProject =useRef(null);


  useEffect(()=>{
    const projects=uxProject.current.querySelectorAll('.content-wrapper');
    const projectArray =gsap.utils.toArray(projects);
   projectArray.forEach((project)=>{
   
     const title=project.querySelector('.description');
     const imgHolder=project.querySelector('.ux-hero-holder')
     const img=project.querySelector('img');

    //  gsap.fromTo(imgHolder, 
    //   {
    //     xPercent:-100
    //   },
    //   {
    //     xPercent:0,
    //     duration:1.5,
    //     ease:"Power2.out",  
    //     scrollTrigger:{
    //       trigger:imgHolder,
    //       start:"top center+=350",
    //       end:"bottom bottom",
    //       markers:true,
    //       toggleActions:"play none none none"
    //     }
    //   }
    //   )
    //  gsap.fromTo(img,
    //    {
    //     xPercent:100,
    //     scale: 1.3,
    //   }, 
    //   {
    //   xPercent:0,
    //   scale:1,
    //   duration:1.5,
    //   ease:"Power2.out", 
    //    transformOrigin:"left",
    //    scrollTrigger:{
    //     trigger:imgHolder,
    //     start:"top center+=350",
    //     end:"bottom bottom",
    //     toggleActions:"play none none none"
    //   }
    //  })
    //  gsap.fromTo(title, {
    //    yPercent:100
    //  },
    //  {
    //    yPercent:0, 
    //    duration:1,
    //    delay:1,
    //    ease:"Expo.out",
    //    scrollTrigger:{
    //     trigger:img,
    //     start:"top bottom-=100",
    //     end:"bottom bottom",
    //     toggleActions:"play none none none"
    //   }
    //  }
    //  )
   })
 

    
 }, [])



  return (
    <>
    <div ref={uxProject}>
    <Grid  style={{justifyContent:"center", position:"relative"}}>
    <Cell col={11} phone={12} tablet={12}>
    <Link to="/branding project" target="_blank">
      <div className="content-wrapper">
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={brandingHero} alt="tea shop branding project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Tea shop marketing home page</h6>
           <p className="subtitle">Product design | Branding | Front-end development</p>
           <p>A strategic marketing web page design to promote a local tea shop’s products and its branding.</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={11} phone={12} tablet={12}>
    <Link to="/mobile app project" target="_blank">
      <div className="content-wrapper">
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={LSHero} alt=">Little Something Mobile App" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Event planners connection app</h6>
           <p className="subtitle">UX UI design | Branding | Prototyping </p>
           <p>Little something app helps users to connect their ideal event planners fast and easy!</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>

 
    <Cell col={11} phone={12} tablet={12}>
    <Link to="/design system project" target="_blank">
      <div className="content-wrapper">
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={DSHero} alt="KH design system project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Knowledgehook design system</h6>
         <p className="subtitle">Design guidlines | Accessibility design | Research</p>
         <p>A long-term task to optimize, develop and document the internal design system, and improve design efficiency.</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>

  
    <Cell col={11} phone={12} tablet={12}>
    <Link to="/survey web design project" target="_blank">
      <div className="content-wrapper">
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={surveyHero} alt="Ontario Deaf Literacy Survey Web Design Project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Ontario Deaf Literacy survey web page design</h6>
         <p className="subtitle">Accessibility design | Front-end development</p>
         <p>A B2B web design project to support my client and their users with hearing lost to complete a survey task.</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>

    <Cell col={12} style={{marginTop:"100px"}}>
          <div className='mentions-wrap'>
          <h2>MENTIONS</h2>
          <p>I feel honored and grateful that the following organizations featured my work. </p>
          </div>
          <div className="companies">
          <img src={logoSunnybrook} alt="Sunnybrook health science center" />
          <img src={logoDL} alt="Ontario Deaf Literacy" />
          <img src={khlogo} alt="Knowledgehook Inc" />
          <img src={logoResili} alt="Resili team" />
          </div>
    </Cell>


     
    {/* <Cell col={5} phone={12} tablet={12}>
    <Link to="/notification page project">
      <div className="content-wrapper">
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={NotiHero} alt="KH Notification page redesign" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Knowledgehook Notification page redesign</h6>
         <p className="subtitle">UX research | UI redesign | Mockups</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell> */}

    {/* <Cell col={8} phone={12} tablet={12}>
    <Link to="/green p project">
      <div className="content-wrapper">
       <div className="bg-circle">
        02
      </div>
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

     <Cell col={8} phone={12} tablet={12}>
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
    </Cell>  */}
    </Grid>

    <Footer />

    </div>
    </>
   );
}
 
export default DesignWork;