import React,{useEffect, useRef} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import gsap from 'gsap';




const MyHome = () => {
  const name=useRef(null);
  const intro=useRef(null);
  const btns=useRef(null);
  const tl=gsap.timeline();

  useEffect(() => {
   tl.to(name.current, {opacity:1, y:0, duration:1, ease:"back.out"})
    .to(intro.current, {opacity:1, y:0, duration:1, ease:"back.out"}, "-=0.3")
   .to(btns.current, {opacity:1, y:0, duration:1, ease:"back.out"}, "-=0.3")
  }, [name, intro, btns]);

  return ( 
    <Grid className="side-margin"> 
      <Cell col={12}>
      <div className="title">
        <section>
          <h1 className="name" ref={name}><span>&#128075;</span>HI, I AM LEAH</h1>
          <div className="intro" ref={intro}>
          <p>
          I am a front-end web developer who designs and builds user-centered web products via applying UX design strategies.
        </p>
        <p>
         I will bring in responsibility, team-work spirit and smile into work :)
        </p>
          </div>
        </section>
        <div className="home-btn-group" ref={btns}>
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