import React, { useRef, useEffect } from 'react';
import './styleSheet/Mywork.scss';
import musicHero from './assect/imgs/musicAppHero.png';
import heroTeashop from './assect/imgs/hero-teashop.jpg';
import weatherHero from './assect/imgs/weather-hero.png';
import dataHero from './assect/imgs/ttcHero.png';
// import {Grid, Cell}from 'react-mdl';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


// import "aos/dist/aos.css";




const FrontEnd = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
 
  const projects =useRef([]);
  const projectContainer=useRef(null);
  const frontEndTitle=useRef(null);
  projects.current=[];

  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"50px",
    textAlign:"center"
  }
  
  const callback=(entries)=>{
    entries.forEach((entry, index)=>{
      if(entry.isIntersecting){
        console.log(entry.target)
        entry.target.classList.add('img-animation')
        // console.log(index, entry.target)
      }else{
        console.log(index, entry.isIntersecting)
        entry.target.classList.remove('img-animation')
      }
    })
  }
  const options={
    root:null,
    rootMargin:'10px',
    threshold:0.3
  }

  useEffect(()=>{
    const animateText =frontEndTitle.current.querySelector('.animate-text');
    const tl=gsap.timeline();

      gsap.to(animateText,
        {y:10, x:10, opacity:1, duration:1.3, ease:"Expo.easeOut",
          scrollTrigger:{
            trigger:frontEndTitle.current,
            start: "bottom bottom-=100",
            end: "top center",
            pin:true,
            // markers:true,
            toggleActions:"restart none reverse none"
          }
      })
       const container=projectContainer.current;
       const imgs=container.querySelectorAll('.img');
       const imgsArray=gsap.utils.toArray(imgs)
       console.log(imgsArray)

       const allProjects=gsap.utils.toArray(projects.current);
       tl.to(allProjects, {
         xPercent:-100 * (allProjects.length- 1),
         ease:"none",
         scrollTrigger:{
           trigger:projectContainer.current,
           start:"top top+=100",
           end:() => "+="+(projectContainer.current.offsetWidth-window.innerWidth),
           pin:projectContainer.current,
          //  pinSpacing:"true",
           pinType:"fixed",
           scrub:1,
          //  markers:true,
           toggleActions:"restart pause resume pause",
           snap:{
             snapTo:1/(allProjects.length-1),
             duration:{min:0.05, max:0.05}
           }
         }
       })

       const observer =new IntersectionObserver(callback, options);
       imgsArray.forEach(img=>{
         observer.observe(img)
       })
  }, [])

  const addRef =(el)=>{
    if(el &&!projects.current.includes(el)){
      projects.current.push(el)
    }
  }

  return (
    <>
    <div style={marginTopBottom}>
    <section className="home-btn-group" ref={frontEndTitle}>
           <div className="link-content">
           <h1>FRONT END PROJECTS</h1>
            <h1  className="animate-text">FRONT END PROJECTS</h1>
           </div>
    </section>
    <div className="all-wrapper" ref={projectContainer}>
      <div ref={addRef} className="project-wrapper">
      <div className="img-container">
        <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank">
           <img src={musicHero} alt="music web app project" className="img" />
        </a>
      </div>
      <div className="content-wrapper">
          <div className="text">
          <h3>Single Page Web Application - Mini Music Web App</h3>
          <p>HTML, SCSS, BOOTSTRAP, JS,FIREBASE, WEBPACK, BABEL</p>
          <p>TEST LOGIN ACCOUNT: leahzhoulz@gmail.com (password:999999)</p>
          </div>
          <div className="btn-group">
          <a href="https://leah-zhou.github.io/music-box/dist/#home" target="_blank" className="btn-style animate-btn">
          <span>Vist Site</span></a>
        <a href="https://github.com/Leah-Zhou/music-box" target="_blank" className="btn-style animate-btn"><span>
        Vist Code</span></a>
        </div>
    </div>
    </div>

      <div ref={addRef} className="project-wrapper">
      <div className="img-container">
        <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" >
           <img src={heroTeashop} alt="tea shop project" className="img" />
        </a>
      </div>
      <div className="content-wrapper">
          <div className="text">
            <h3>Commercial Website - Unicup Bubble Teashop</h3>
            <p>HTML SCSS REACT</p>
          </div>
          <div className="btn-group">
          <a href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
          <a href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
        </div>
      </div>
    </div>


      <div ref={addRef} className="project-wrapper">
      <div className="img-container">
          <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank">
            <img src={weatherHero} alt="Data Visualization Show Case" className="img" />
          </a>
      </div>
      <div className="content-wrapper">
          <div className="text">
            <h3>Real-time Weather web app showcase</h3>
            <p>HTML, SCSS, REACT, REST API</p>
          </div>
          <div className="btn-group">
          <a href="https://leah-zhou.github.io/weather-api-app/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
          <a href="https://github.com/Leah-Zhou/weather-api-app" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
        </div>
      </div>
    </div>


      <div ref={addRef} className="project-wrapper">
        <div className="img-container">
          <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank">
            <img src={dataHero} alt="Data Visualization Show Case" className="img" />
          </a>
        </div>
      <div className="content-wrapper">
          <div className="text">
            <h3>Data Visualization Show Case- Subway Delay Time Data</h3>
            <p>HTML CSS JS D3.JS BABEL</p>
          </div>
          <div className="btn-group">
          <a href="https://leah-zhou.github.io/TTC-Subway-Time-Delay-Data-Visualization/" target="_blank" className="btn-style animate-btn"><span>Vist Site</span></a>
          <a href="https://github.com/Leah-Zhou/TTC-Subway-Time-Delay-Data-Visualization" target="_blank" className="btn-style animate-btn"><span>Vist Code</span></a>
        </div>
      </div>
      </div>
    </div>
    </div>
    </>
   );
}
 
export default FrontEnd;