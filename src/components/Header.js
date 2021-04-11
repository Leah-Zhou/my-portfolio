import React,{useEffect} from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';
import AOS from "aos";
import "aos/dist/aos.css";


const Header = () => {
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
    <Grid className="side-margin" style={{textAlign:'center'}} > 
      <Cell col={12}>
      <div className="title"  data-aos="fade-up">
        <h2 className="long-line name">LEAH ZHOU</h2>
        <p style={{fontWeight:600}}>FRONT-END WEB DEVELOPER / UX DESIGNER</p>
      </div>
      </Cell>
      <Cell col={12} className="intro"  data-aos="fade-up" data-aos-delay="500">
      <h4 className="line" >INTRO</h4>
      <div>
      <p>
      Leah Zhou is graduated with an interaction design and UX design education background. She has a full passion for UX design and front-end development. She has participated in different projects and gained professional work experience with UX and UI design, and front-end web development and management. 
      </p>
      </div>
      </Cell>
    </Grid>
   );
}
 
export default Header;