import React,{useEffect, useRef} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import selfImg from './assect/imgs/profile-only.png';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FrontEnd from './FrontEnd';
import DesignWork from './UX';




const MyHome = () => {
  const greeting =useRef(null);
  const profile=useRef(null);

  const tl=gsap.timeline({defaults:{duration:0.2,opacity:1, ease: "power2.out"}});  
  gsap.registerPlugin(ScrollTrigger);
  gsap.core.globals('ScrollTrigger', ScrollTrigger);

  const pageVariant={
    init:{
      opacity:0,
      y:-50
    },
    in:{
      opacity:1,
      y:0
    },
    out:{
      opacity:0,
      y:-50
    }
  }
  const pageTransition ={
    type: "spring", stiffness: 100,
    // type:"tween",
    // ease: "anticipate",
    duration:3
  }

  useEffect(() => {
    const items= greeting.current.querySelectorAll('.float-up');
  
     setTimeout(()=>{
       tl.to(items, {opacity:1, y:0, duration:1.2, stagger:0.4, ease:"Expo.easeOut"})
         .to(profile.current, {opacity:1, duration:1, ease:"power2.out"})
     },1000);
  }, []);

  return ( 
    <motion.div variants={pageVariant} initial="init" animate="in" exit="out" transition={pageTransition}>
    <Grid className="side-margin" style={{height:"100vh"}}> 
     <Cell phone={12} tablet={12} col={4}>
       <div className="profile-img">
       <img src={selfImg} alt="profile" ref={profile}/>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 632.15 702.35"  id="two-rings">
        <g>
          <path id="ring-two" className="ring" stroke="black" strokeWidth="3" d="M623,359.46c30.49,198.81-177.6,365.81-323.39,330C112.88,643.65,58.37,531,58.37,335.6S138.61,28.1,334.06,28.1,593.37,166.27,623,359.46Z" pathLength="1"/>
          <path id="ring-one" className="ring" stroke="black" strokeWidth="2" d="M589.86,359.46c0,195.44-181.63,326.11-323.4,330C74.28,694.78,73.2,525.07,25.24,335.6c-53-209.42,98.08-270.39,275.68-307.5C492.23-11.87,589.86,164,589.86,359.46Z" pathLength="1"/>
          </g>
        </svg>
       </div>
     </Cell>
      <Cell phone={12} tablet={12} col={8}>
      <div className="title"  ref={greeting}>
        <section>
          <h1 className="name">
            <span className="float-up">HI, I am Leah</span>
            </h1>
          <div className="intro">
          <p>
          <span className="float-up">I am a front-end web developer who designs and builds user-centered web products via applying UX design strategies.</span>
        </p>
        <p>
         <span className="float-up">I will bring in responsibility, team-work spirit and smile into work :)</span>
        </p>
          </div>
        </section>
      </div>
      </Cell>
    </Grid>
    <FrontEnd />
    <DesignWork />
    </motion.div>
   );
  }
 
export default MyHome;