import React from 'react';
import './styleSheet/Background.scss';
import {Grid, Cell} from 'react-mdl';
import { v4 as uuidv4 } from 'uuid';
// import "aos/dist/aos.css";
// import AOS from "aos";
import { motion } from 'framer-motion';
import Footer  from './Footer';


const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}];

    const workExperience =[
      {time:'Nov 2021 - Jan 2024', company:'Knowledgehook', position:'UI/Product designer',occupation:'Full-time'}, 
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'Front-end developer',occupation:'Internship'}, 
      {time:'Sep 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time Contract'}, 
      {time:'Sep 2019 - Dec 2019', company:'Deaf Literacy Initiative and GBC',position:'UX designer and Front-end web developer',occupation:'Part-time Contract'},
    ]

    const devSkills =[
      'HTML', 'CSS', 'SCSS','React', 'JS', 'Bootstrap','Babel', 'Webpack'
    ];
    const devTech=[
      'Develop inventive and responsive design solutions for both mobile and desktop', 'creating animation for design components','efficient debugging'
    ];
      
    const designTool=[
      'Figma','Adobe Illustrator', 'Adobe XD','Photoshop','After Effect','Maya'];
    
      const designSkills=['Conduct UX research and data analysis to improve UX experience', 'Develop design solution with interactive wireframe and prototypes',"Conduct professional usabiltiy test"];

    const marginTopBottom={
      marginBottom:"20px",
      marginTop:"20px",
      justifyContent:"center",
    }
    const smallFont={
      fontSize:"14px",
    }


    const pageAnimation={
      in:{
        opacity:1,
        y:0,
        delay:1
      },
      out:{
        opacity:0,
        y:"-20vh"
      }
    }
    const pageTransition ={
      // type: "spring", stiffness: 100,
      type:"tween",
      ease: "anticipate",
      duration:1
    }
  return ( 
    <motion.div style={{margin:"6em 2em"}} variants={pageAnimation} initial="out" animate="in" exit="out" transition={pageTransition}>
      <Grid style={marginTopBottom}>
        <Cell phone={12} tablet={12} col={3} style={{alignSelf:"center"}} offsetDesktop={1}> 
          <section className="greet profile">
          <h2 className="section-title">WHO AM I</h2>
          </section>
        </Cell>
        <Cell phone={12} tablet={12}  col={5}>
          <section className="greet">
          <div>
          <h5 className="greet_subtitle">As a UX and UI designer...</h5>
           <p>I specializes in creating intuitive interfaces and engaging experiences that delight users and drive results</p>
          </div>
          <div>
             <h5 className="greet_subtitle">As a coding enthusiast...</h5>
              <p>I'm committed to exploring the full spectrum of design possibilities and constraints as I enhance my front-end coding skills</p>
          </div>
          </section>
        </Cell>
      </Grid>
      <Grid style={marginTopBottom}>

      </Grid>
      <Grid style={{textAlign:'center', marginTop:"100px", justifyContent:"center"}}> 
    <Cell col={5} phone={12}  tablet ={12}>
      <h2>WORK EXPERIENCE</h2>
        <div style={{marginTop:"30px"}}>
        {workExperience.map(item=>(
        <Grid style={marginTopBottom} key={uuidv4()}> 
          <Cell phone={12}  col={6} tablet={12} style={{margin:"0 1em 0 0"}} offsetDesktop={1}>
            <p style={{fontWeight:"500", marginBottom:"0"}}>{item.company}</p>
            <p style={smallFont}>{item.time}</p>
          </Cell>
          <Cell phone={12} col={6} tablet={12} style={{margin:0}}>
            <p style={{fontWeight:"500", marginBottom:"0"}}>{item.position}</p>
            <p style={smallFont}>{item.occupation}</p>
         </Cell>
        </Grid>
        ))}</div>
      </Cell>

      <Cell phone={12} tablet ={12} col={5} className="side-bar">      
        <h2>EDUCATION</h2>
        <div>
        {education.map(item=>(
          <Grid style={marginTopBottom} key={uuidv4()}>
            <Cell phone={12} col={4} tablet={12} style={{margin:0}}>
              <p style={{fontWeight:"500"}}>{item.achievement}</p>
            </Cell>
            <Cell phone={12} col={7} tablet={12} style={{margin:0}}>
              <p style={{margin:0,fontWeight:"500"}}>{item.program}</p>
              <p style={smallFont}>{item.school}</p>
            </Cell>
          </Grid>  

        ))}</div>
      </Cell>
    </Grid>
       <Grid style={marginTopBottom}>
        <Cell col={10} className="skill">
          <h2>PROFESSIONAL SKILLS</h2>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box">
          <h5>UX and UI Strengths</h5>
          <ul>
          {designSkills.map(skill=>(
           <li key={uuidv4()}><p style={{marginBottom:"20px"}}>{skill}</p></li>
          ))}
          </ul>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box" >
            <h5>Design Tools</h5>
            <ul>
          {designTool.map(skill=>(
           <li key={uuidv4()}><p>{skill}</p></li>
          ))}
          </ul>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box" >
            <h5>Development Tools</h5>
            <ul>
          {devSkills.map(skill=>(
           <li key={uuidv4()}><p>{skill}</p></li>
          ))}
          </ul>
        </Cell>
      </Grid> 

      <Footer />

    </motion.div>
   );
}
 
export default Background;