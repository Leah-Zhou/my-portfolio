import React,{useEffect, useRef} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';




const MyHome = () => {
  const greeting =useRef(null);
  const tl=gsap.timeline({defaults:{duration:0.2,opacity:1, ease: "power2.out"}});

  useEffect(() => {
    const items= greeting.current.querySelectorAll('.float-up');
     setTimeout(()=>{
      items.forEach(item=>{
        tl.to(item, {y:0, duration:1}, "-=0.5");
        item.parentElement.style.background="transparent"
      })
     }, 1800)
  }, []);

  return ( 
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
   );
  }
 
export default MyHome;