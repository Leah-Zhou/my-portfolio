import React,{useEffect} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, NavLink } from 'react-router-dom';



const MyHome = () => {
  // const expandContent =document.querySelector('.expand-content');

  // function toggleContent(){
  //   expandContent.classList.toggle('expanded')
  // }
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return ( 
    <Grid className="side-margin"> 
      <Cell col={12}>
      <div className="title"  data-aos="fade-up">
        <section>
          <h1 className="name"><span>&#128075;</span>HI, I AM LEAH</h1>
          <div className="intro">
          <p>
          I am a front-end web developer who designs user-centered web products via applying UX design strategies.
        </p>
        <p>
         I will bring in responsibility, team-work spirit and smile into work :)
        </p>
          </div>
        </section>
        <div>
        <Link to="/frontEnd"><button className="btn-style">Front End Work</button></Link>
        <Link to="/design show case"><button className="btn-style">UX Work</button></Link>
        </div>
      </div>
      </Cell>
    </Grid>
   );
}
 
export default MyHome;