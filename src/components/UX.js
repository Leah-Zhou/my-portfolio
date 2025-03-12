import React, {useRef, useEffect} from 'react';
import './styleSheet/Mywork.scss';
import {Link} from 'react-router-dom';
import surveyHero from './assect/imgs/DL-survey-hero.png';
import brandingHero from './assect/imgs/hero-teashop-nobg.png';
import LSHero from './assect/imgs/LS-hero.png';
import logoResili from './assect/imgs/logo-resili.png';
import logoSunnybrook from './assect/imgs/logo-sunnybrook.png';
import logoDL from './assect/imgs/logo-deaf-literacy.png';
import khlogo from './assect/imgs/kh-logo.png';
import arrowSm from './assect/icons/arrow-sm.svg';
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
          markers:true,
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
   })
 

    
 }, [])



  return (
    <>
    <div ref={uxProject}>
    <Grid style={{justifyItems:"center", position:"relative"}}>

    <Link to="/branding project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}> 
    <div className="content-wrapper bg-a">
    <div className="overlay">
       <div className="description">
         <h6>UNICUP</h6>
         <p>A strategic marketing web page design to promote local teashop and its branding</p>   
         <p className="subtitle">Product design	&nbsp; |	&nbsp;Branding &nbsp;|	&nbsp;Front-end development 	&nbsp;</p> 

         </div>
       </div>
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={brandingHero} alt="tea shop branding project" className="ux-hero" />
         </div>
       </div>
      </div>
    </Cell>
    </Link>

 <div>
    <Cell col={12} phone={12} tablet={12}>
    <a href='https://www.figma.com/deck/42RfczVUTUJblR2JWDv404' target='_blank'>
      <div className="content-wrapper bg-b" >
      <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={DSHero} alt="KH design system project" className="ux-hero" />
         </div>
       </div>
      <div className="overlay">
       <div className="description">
         <h6>Design System</h6>
         <p>Optimize, scale and document the internal design system, and improve design efficiency.</p>
         <p className="subtitle">Component design &nbsp; |&nbsp; Token structure &nbsp; |&nbsp; Accessibility design &nbsp;|&nbsp; Design guidelines &nbsp;</p>
         </div>
       </div>
      </div>
      </a>
    </Cell>
    </div>

    <Link to="/mobile app project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}>
      <div className="content-wrapper bg-c">
       <div className="overlay">
       <div className="description">
         <h6>Little Something</h6>
           <p>The app helps to connect their ideal event planners fast and easy!</p>
           <p className="subtitle">UX UI design  &nbsp; | &nbsp; Branding &nbsp;  |  &nbsp; Prototyping  &nbsp; </p>
         </div>
       </div>
       <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={LSHero} alt=">Little Something Mobile App" className="ux-hero" />
         </div>
       </div>
      </div>
    </Cell>
    </Link>



    <Link to="/survey web design project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}>
      <div className="content-wrapper bg-d">
        <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={surveyHero} alt="Ontario Deaf Literacy Survey Web Design Project" className="ux-hero" />
         </div>
       </div>
       <div className="overlay">
       <div className="description">
         <h6>Ontario Deaf Literacy survey web page design</h6>
         <p>A B2B web design project to support my client and their users with hearing lost to complete a survey task.</p>
         <p className="subtitle">Accessibility design  &nbsp; |  &nbsp; Front-end development &nbsp; |  &nbsp;Branding design &nbsp;</p>
         </div>
       </div>
      </div>
    </Cell>
    </Link>

    <Cell col={12} style={{margin:"100px"}}>
          <div className='mentions-wrap'>
          <h2>MENTIONS</h2>
          <p  style={{margin:"2em"}}>I feel honored and grateful that the following organizations featured my work.</p>
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