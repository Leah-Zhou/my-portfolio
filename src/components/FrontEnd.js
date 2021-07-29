import React, { useRef, useEffect } from 'react';
import { useLocation} from 'react-router';
import './styleSheet/Mywork.scss';
import musicHero from './assect/imgs/musicAppHero.png';
import heroTeashop from './assect/imgs/hero-teashop-nobg.png';
import weatherHero from './assect/imgs/weather-hero.png';
import dataHero from './assect/imgs/ttcHero.png';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const FrontEnd = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);
 
  const projects =useRef([]);
  const projectContainer=useRef(null);
  const frontEndTitle=useRef(null);
  projects.current=[];

  useEffect(()=>{
    setTimeout(()=>{
      ScrollTrigger.refresh(true);
    }, 2000)
    const animateText =frontEndTitle.current.querySelector('.animate-text');
      gsap.to(animateText,
        { opacity:1, y:5, x:20, duration:1.3, ease:"Expo.easeOut",
          scrollTrigger:{
            trigger:frontEndTitle.current,
            start: "bottom bottom-=150",
            end: "bottom bottom",
            pin:true,
            toggleActions:"restart none reverse none"
          }
      })
       const container=projectContainer.current;    
      const allProjects=gsap.utils.toArray(projects.current);
      const imgs=container.querySelectorAll('.img');
      const imgsArray=gsap.utils.toArray(imgs);

        imgsArray.forEach(img=>{
          gsap.from(img, {opacity:0, y:100, duration:0.6, ease:"power4.easeOut",
            scrollTrigger:{
              trigger:img,
              start:'top center+=100'
            }
          })
        })


       return ()=>{
        ScrollTrigger.getAll().forEach(t => t.kill());
       }
  },[])

  const addRef =(el)=>{
    if(el &&!projects.current.includes(el)){
      projects.current.push(el)
    }
  }


  return (
    <>
    <div style={{marginBottom:"3em"}}>
    <section className="home-btn-group" ref={frontEndTitle}>
           <div className="link-content">
            <h1 className="animate-text">FRONT END PROJECTS</h1>
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
          <h3>MUSIC BOX</h3>
          <p>Html, Scss, Bootstrap, JS, Firebase, Gsap, Webpack, Babel, AJAX</p>
          <p>Test Login Account: leahzhoulz@gmail.com (password:999999)</p>
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
            <h3>Unicup</h3>
            <p>Html, Scss, React, Gsap, Framer Motion</p>
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
            <h3>Real-time Weather</h3>
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
            <h3>TTC Subway Delay Time Visualization</h3>
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