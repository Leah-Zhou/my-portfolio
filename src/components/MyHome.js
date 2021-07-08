import React,{useEffect, useRef} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { motion } from 'framer-motion';




const MyHome = () => {
  const greeting =useRef(null);
  const tl=gsap.timeline({defaults:{duration:0.2,opacity:1, ease: "power2.out"}});  

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
      items.forEach(item=>{
        tl.to(item, {y:0, opacity:1, duration:1}, "-=0.5");
      })
     },1000)
  }, []);

  return ( 
    <motion.div variants={pageVariant} initial="init" animate="in" exit="out" transition={pageTransition}>
    <Grid className="side-margin"> 
      <Cell col={12}>
      <div className="title"  ref={greeting}>
        <section>
          <h1 className="name">
            <span className="float-up">HI, I AM LEAH</span>
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
        <div className="home-btn-group float-up">
        <Link to="/frontEnd"><button className="btn-style animate-btn">
          <span>Front End Work</span></button></Link>
        <Link to="/design show case"><button className="btn-style animate-btn">
          <span>UX Work</span></button></Link>
        </div>
      </div>
      </Cell>
    </Grid>
    </motion.div>
   );
  }
 
export default MyHome;