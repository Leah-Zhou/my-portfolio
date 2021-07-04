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




const DesignWork = () => {
  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"50px",
    textAlign:"center"
  }
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
  
  const projects =useRef([]);
  projects.current=[];

  useEffect(()=>{
    projects.current.forEach((el,index)=>{
       gsap.fromTo(
         el, {
           autoAlpha: 0,
           y:50,
         },
         {
           duration:1.5,
           autoAlpha: 1,
           y:0,
           ease:"power3", 
           scrollTrigger:{
             id:`section-${index+1}`,
             trigger: el,
             start:"top center-=100",
             toggleActions:"play none resume none"
           }
         }
         );
    });
 }, [])

 const addRef =(el)=>{
   if(el &&!projects.current.includes(el)){
     projects.current.push(el)
     // console.log(el)
   }
 }

  return (
    <>
    <div style={marginTopBottom}>
    <Grid  style={{justifyContent:"center"}}>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/branding project">
      <div className="content-wrapper" ref={addRef}>
       <img src={brandingHero} alt="tea shop branding project" className="ux-hero" />
       <div className="overlay">
       <div className="text">
         <h6>UX Design and Branding Project</h6>
           <p className="subtitle">Unicup Bubble Teashop</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/sunnyOp project">
      <div className="content-wrapper" ref={addRef}>
       <img src={sunnyOp} alt="sunnyOp UI design project" className="ux-hero" />
       <div className="overlay">
       <div className="text">
         <h6>SunnyOp Branding and UI Design</h6>
           <p className="subtitle">
             GBC<span>	&#38;</span>SunnyBrook Science Center Cooperative project</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/green p project">
      <div className="content-wrapper" ref={addRef}>
       <img src={heroGreenP} alt="Green P app redeign project" className="ux-hero" />
       <div className="overlay">
       <div className="text">
         <h6>UX Redesign Project</h6>
           <p className="subtitle">Green P Parking App</p>
         </div>
       </div>
      </div>
    </Link>
    </Cell>
    <Cell col={9} phone={12} tablet={12}>
    <Link to="/survey web design project">
      <div className="content-wrapper" ref={addRef}>
       <img src={surveyHero} alt="Deaf literacy survey web design projecgt" className="ux-hero" />
       <div className="overlay">
       <div className="text">
         <h6>UX website design and building project</h6>
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