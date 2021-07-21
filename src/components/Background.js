import React,{useEffect} from 'react';
import './styleSheet/Background.scss';
import {Grid, Cell} from 'react-mdl';
import { v4 as uuidv4 } from 'uuid';
// import "aos/dist/aos.css";
// import AOS from "aos";
import logoResili from './assect/imgs/logo-resili.png';
import logoSunnybrook from './assect/imgs/logo-sunnybrook.png';
import logoDL from './assect/imgs/logo-deaf-literacy.png';
import { motion } from 'framer-motion';


const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}];

    const workExperience =[
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'Front-end developer',occupation:'Internship'}, 
      {time:'Oct 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time Contract'}, 
      {time:'Sep 2020 - Dec 2020', company:'Deaf Literacy Initiative and GBC',position:'Front-end web developer',occupation:'Part-time Contract'},
    ]

    const devSkills =[
      'HTML', 'CSS', 'SCSS','React', 'JS', 'Bootstrap','Babel', 'Webpack'
    ];
    const devTech=[
      'integrating mockups into responsive webpage', 'creating animation for design components','efficient debugging'
    ];
      
    const designTool=[
      'Figma','Xd', 'Ai','Ps','Ae','Maya'];
    
      const designSkills=['UX Research and data analysis', ' User analysis with Persona', 'Product design with wireframe and prototypes',"Usabiltiy test"];

    const marginTopBottom={
      marginBottom:"20px",
      marginTop:"20px",
      justifyContent:"center",
    }
    const smallFont={
      fontSize:"16px",
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
        <Cell col={12} tablet={12} col={3} style={{alignSelf:"center"}} offsetDesktop={1}> 
          <section className="greet profile">
          <h2 className="section-title">WHO AM I</h2>
          </section>
        </Cell>
        <Cell col={12} tablet={12}  col={5}>
          <section className="greet">
          <div>
          <h5 className="greet_subtitle">I love to explore any design ideas with coding!</h5>
           <p>I love to dive into the coding world and explore any possibilities in interaction design.I have hands-on experience in building a user-friendly and responsive webpage for clients.</p>
          </div>
          <div>
             <h5 className="greet_subtitle">I am a UX designer with user empathy</h5>
              <p>I believe that a good design can not ignore user experience. I am good at applying professional communication skills, user research, and analytical skills in UX research and design.</p>
          </div>
          </section>
        </Cell>
      </Grid>
       <Grid style={marginTopBottom}>
        <Cell col={10} className="skill">
          <h2>PROFESSIONAL SKILLS</h2>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box">
          <h5>UX Design Strengths</h5>
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
    <Grid style={{textAlign:'center', marginTop:"100px", justifyContent:"center"}}> 
    <Cell col={5} phone={12}  tablet ={12}>
      <h2>WORK EXPERIENCE</h2>
        <div style={{marginTop:"30px"}}>
        {workExperience.map(item=>(
        <Grid style={marginTopBottom} key={uuidv4()}> 
          <Cell phone={12}  col={4} tablet={12} style={{margin:0}}>
            <p style={{fontWeight:"500"}}>{item.time}</p>
          </Cell>
          <Cell phone={12} col={6} tablet={12} style={{margin:0}}>
            <p style={{fontWeight:"500"}}>{item.position}</p>
            <p style={{fontWeight:"500"}}>{item.company}</p>
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
            <Cell phone={12} col={6} tablet={12} style={{margin:0}}>
              <p style={{margin:0,fontWeight:"500"}}>{item.program}</p>
              <p style={smallFont}>{item.school}</p>
            </Cell>
          </Grid>  

        ))}</div>
      </Cell>

      <Cell col={12} style={{marginTop:"100px"}}>
          <h2 style={{textAlign:"center", fontSize:"26px"}}>I'm proud to have collaborated with some awesome companies:</h2>
          <div className="companies">
          <img src={logoSunnybrook} alt="Sunnybrook health science center" />
          <img src={logoDL} alt="Ontario Deaf Literacy" />
          <img src={logoResili} alt="Resili team" />
          </div>
        </Cell>
    </Grid>
    </motion.div>
   );
}
 
export default Background;