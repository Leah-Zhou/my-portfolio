import React, { useRef, useEffect } from 'react';
import './styleSheet/Mywork.scss';
import musicHero from './assect/imgs/musicAppHero.png';
import heroTeashop from './assect/imgs/hero-teashop.jpg';
import weatherHero from './assect/imgs/weather-hero.png';
import dataHero from './assect/imgs/ttcHero.png';
import {Grid, Cell}from 'react-mdl';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// import "aos/dist/aos.css";




const FrontEnd = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
  
  const projects =useRef([]);
  projects.current=[];

  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"80px",
    textAlign:"center"
  }
  
  useEffect(()=>{

     projects.current.forEach((el,index)=>{
        gsap.fromTo(
          el.querySelector('.img'), {
            autoAlpha: 0,
            x:400,
          },
          {
            duration:1.3,
            autoAlpha: 1,
            x:0,
            ease:"power3", 
            scrollTrigger:{
              id:`imgs-${index+1}`,
              trigger: el,
              start:"top center-=150",
              toggleActions:"play none resume none"
            }
          }
          );
        gsap.fromTo(
          el.querySelector('.text'), {
            autoAlpha: 0,
            x:-400
          },
          {
            duration:1,
            autoAlpha: 1.3,
            x:0,
            ease:"back.out", 
            delay:0.3,
            scrollTrigger:{
              id:`text-${index+1}`,
              trigger: el,
              start:"top center-=150",
              toggleActions:"play none resume none"
            }
          }
        );
        gsap.fromTo(
          el.querySelector('.btn-group'), {
            autoAlpha:0,
            y:50
          },
          {
            y:0,
            autoAlpha:1,
            scrollTrigger:{
              id:`btns-${index+1}`,
              trigger: el,
              start:"top center-=150",
              toggleActions:"play none resume none"
            }
            
          }
        )
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
    <Grid style={{justifyContent:"center"}}>
    <Cell col={10} phone={10} tablet={10}>
      <div ref={addRef} className="project-wrapper">
      <div className="img-wrap">
        <div className="text">     
          <h3>Single Page Web Application - Mini Music Web App</h3>
          <p>HTML, SCSS, BOOTSTRAP, JS,FIREBASE, WEBPACK, BABEL</p>
        </div>
        <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank">
          <img src={musicHero} alt="music web app project" className="img" />
        </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank" className="btn-style animate-btn">
          <span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/music-box" target="_blank" className="btn-style animate-btn"><span>
        Vist Code</span></a>
      </div>
    </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10}>
      <div ref={addRef} className="project-wrapper">
      <div className="img-wrap">
        <div className="text">
          <h3>Commercial Website - Unicup Bubble Teashop</h3>
          <p>HTML SCSS REACT</p>
        </div>
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" >
         <img src={heroTeashop} alt="tea shop project" className="img" />
        </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10}>
      <div ref={addRef} className="project-wrapper">
      <div className="img-wrap">
        <div className="text">
          <h3>Real-time Weather web app showcase</h3>
          <p>HTML, SCSS, REACT, REST API</p>
        </div>
        <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank">
          <img src={weatherHero} alt="Data Visualization Show Case" className="img" />
        </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/weather-api-app" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
      </div>
    </Cell>
    <Cell col={10} phone={10} tablet={10} >
      <div ref={addRef} className="project-wrapper">
      <div className="img-wrap">
        <div className="text">
          <h3>Data Visualization Show Case- Subway Delay Time Data</h3>
          <p>HTML CSS JS D3.JS BABEL</p>
        </div>
         <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank">
           <img src={dataHero} alt="Data Visualization Show Case" className="img" />
         </a>
      </div>
      <div className="btn-group">
        <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/TTC-Subway-Time-Delay-Data-Visualization" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
      </div>
      </div>
    </Cell>
    </Grid>
    </div>
    </>
   );
}
 
export default FrontEnd;