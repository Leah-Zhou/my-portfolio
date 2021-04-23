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
        <section>
          <h2 className="long-line name"><span>&#128075;</span>HI, I AM LEAH</h2>
          <p style={{fontWeight:600}}>FRONT-END WEB DEVELOPER/UX DESIGNER</p>
        </section>
      </div>
      </Cell>
      <Cell col={12} className="intro"  data-aos="fade-up" data-aos-delay="500">
      <h4 className="line" >INTRO</h4>
      <div>
      <p>
      I am a front-end web developer with an interaction design and UX design education background. I have participated in different cooperation projects as a front-end web coder.I specialize in creating responsive and user-friendly websites. 
      </p>
      </div>
      </Cell>
    </Grid>
   );
}
 
export default Header;