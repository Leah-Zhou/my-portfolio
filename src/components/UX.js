import React, {useRef, useEffect} from 'react';
import './styleSheet/Mywork.scss';
import {Link,NavLink} from 'react-router-dom';
import pcdsHero from './assect/imgs/pcf-hero.png';
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
          markers:false,
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
     ScrollTrigger.refresh(true);
   })
 

    
 }, [])



  return (
    <>
    <div ref={uxProject}>
    <Grid style={{justifyItems:"center", position:"relative"}}>

{/* HIDE THIS RPOJECT FOR NOW TILL NEXT JOB SEARCHING */}

       <Link to="/PCF design system" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}>
      <div className="content-wrapper bg-e" >
      <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={pcdsHero} alt="PCF design system project" className="ux-hero" />
         </div>
       </div>
      <div className="overlay">
       <div className="description">
         <h6>PC Financial Design System</h6>
         <p>Built and scaled PC Financial’s design system to create a consistent, accessible, and responsive foundation across web and mobile experiences.</p>
         <p className="subtitle">Token structure &nbsp; |&nbsp; App and Web component design &nbsp; |&nbsp; Design to development &nbsp;|&nbsp; Design guidelines and Documentation&nbsp;</p>
         </div>
       </div>
      </div>
    </Cell>
    </Link>

       <Link to="/design system project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}>
      <div className="content-wrapper bg-b" >
      <div className="ux-hero-wrapper">
         <div className="ux-hero-holder">
         <img src={DSHero} alt="KH design system project" className="ux-hero" />
         </div>
       </div>
      <div className="overlay">
       <div className="description">
         <h6>Knowledgehook Design System</h6>
         <p>Optimize, develop, scale, and document the in-house design system, and improve design efficiency.</p>
         <p className="subtitle">Component design &nbsp; |&nbsp; Token structure &nbsp; |&nbsp; Accessibility design &nbsp;|&nbsp; Design guidelines and Documentation&nbsp;</p>
         </div>
       </div>
      </div>
    </Cell>
    </Link>

    <Link to="/branding project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}> 
    <div className="content-wrapper bg-a">
    <div className="overlay">
       <div className="description">
         <h6>UNICUP</h6>
         <p>A strategic marketing web page design to promote local teashop and its branding</p>   
         <p className="subtitle">UI/UX design	&nbsp; |	&nbsp;Branding &nbsp;|	&nbsp;Front-end development 	&nbsp;</p> 

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




    <Link to="/mobile app project" preventScrollReset={true}>
    <Cell col={12} phone={12} tablet={12}>
      <div className="content-wrapper bg-c">
       <div className="overlay">
       <div className="description">
         <h6>Little Something</h6>
           <p>The app helps to connect their ideal event planners fast and easy!</p>
           <p className="subtitle">Interactive design  &nbsp; | &nbsp; Prototyping &nbsp;  |  &nbsp; Mobile app design  &nbsp; </p>
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
         <p className="subtitle">Accessibility design  &nbsp; |  &nbsp; Front-end development &nbsp; |  &nbsp;Responsive design &nbsp;</p>
         </div>
       </div>
      </div>
    </Cell>
    </Link>
{/* 
    <Cell col={6} phone={12} tablet={4}>
        <div className='outter-link thumb-wrapper'>
               <a href="https://www.figma.com/proto/JWEc9D1GvI1XxKey67s3Lk/Design-Work-Gallery?node-id=0-1&t=H9THlt5THPHmtn1s-1" target='blank'>
                <h4>VIEW UI GALLERY</h4>
                <img src={arrowSm}  alt="arrow previous"/>      
            </a>
        </div>
    </Cell>
    <Cell col={6} phone={12} tablet={4}>
        <div className='outter-link thumb-wrapper'>
          <NavLink to="/gallery">
            <h4>VIEW ILLUSTRATION</h4>
            <img src={arrowSm}  alt="arrow previous"/>      
          </NavLink>
        </div>
    </Cell>

    <Cell col={10} phone={10} tablet={10}>
       <div className='divider' style={{margin:"0"}}></div>
    </Cell> */}

    <Cell col={12} style={{margin:"150px 100px"}}>
          <div className='mentions-wrap'>
          <h2>MENTIONS</h2>
          <h5 style={{margin:"2em"}}>I feel honored and grateful that the following organizations featured my work.</h5>
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