import React,{useEffect} from 'react';
import './styleSheet/Background.scss';
import {Grid, Cell} from 'react-mdl';
import { v4 as uuidv4 } from 'uuid';
import "aos/dist/aos.css";
import AOS from "aos";


const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}, {achievement:'Degree',school:'South China Normal University',program:'Educating and Teaching'}];

    const workExperience =[
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'Front-end developer',occupation:'Internship'}, 
      {time:'Oct 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time Contract'}, 
      {time:'Sep 2020 - Dec 2020', company:'Deaf Literacy Initiative and GBC',position:'Front-end web developer',occupation:'Part-time Contract'},
    ]

    const devSkills =[
      'HTML', 'CSS', 'SCSS','React', 'JS', 'TypeScript', 'Bootstrap','Reat-mdl', 'Webpack'
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
      color:"#dddddd",
    }
    useEffect(() => {
      AOS.init({
        duration: 1500,
        once: true,
      });
    }, []);
  return ( 
    <div style={{margin:"6em 2em"}}>
      <Grid style={marginTopBottom}>
        <Cell col={12} tablet={12} col={3} style={{alignSelf:"center"}} offsetDesktop={1} data-aos="fade-left"> 
          <section className="greet profile">
          <h2 className="section-title">WHO AM I</h2>
          </section>
        </Cell>
        <Cell col={12} tablet={12}  col={5} data-aos="fade-right">
          <section className="greet">
          <div>
             <h5 className="greet_subtitle">I am a UX designer with user empathy</h5>
              <p>I believe that a good design can not ignore user experience. I am good at applying professional communication skills, user research, and analytical skills in UX research.</p>
          </div>
          <div>
          <h5 className="greet_subtitle">I love to explore any design ideas with coding!</h5>
           <p>I love to dive into the coding world and explore any possibilities in interaction design.I have hands-on experience in building a user-friendly and responsive webpage for clients.</p>
          </div>
          </section>
        </Cell>
      </Grid>
       <Grid style={marginTopBottom} data-aos="fade-up" data-aos-placeholder="bottom-bottom">
        <Cell col={10} className="skill">
          <h2>PROFESSIONAL SKILLS</h2>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box" >
            <h5>Design Tools</h5>
            <ul>
          {designTool.map(skill=>(
           <li key={uuidv4()}><p>{skill}</p></li>
          ))}
          </ul>
        </Cell>
        <Cell col={3} phone={8} tablet={8} className="skill-box">
          <h5>Design Skills</h5>
          <ul>
          {designSkills.map(skill=>(
           <li key={uuidv4()}><p style={{marginBottom:"20px"}}>{skill}</p></li>
          ))}
          </ul>
        </Cell>
        <Cell col={3} phone={8} tablet={8}  className="skill-box">
          <h5>Development Skills</h5>
          <ul>
          {devSkills.map(skill=>(
           <li key={uuidv4()}><p>{skill}</p></li>
          ))}
          </ul>
        </Cell>

      </Grid> 
    <Grid style={{textAlign:'center', marginTop:"100px"}} data-aos="fade-up" data-aos-placeholder="bottom-bottom"> 
    <Cell col={6} phone={12}  tablet ={12}>
      <h2>WORK EXPERIENCE</h2>
        <div style={{marginTop:"30px"}}>
        {workExperience.map(item=>(
        <Grid style={marginTopBottom}> 
          <Cell phone={12}  style={{margin:0}}>
            <p style={{fontWeight:"400"}}>{item.time}</p>
          </Cell>
          <Cell phone={12} style={{margin:0}}>
             <p style={{fontWeight:"500"}}>{item.position}</p>
            <p style={{fontWeight:"400"}}>{item.company}</p>
            <p style={smallFont}>{item.occupation}</p>
         </Cell>
        </Grid>
        ))}</div>
      </Cell>

      <Cell phone={12} tablet ={12} className="side-bar">      
        <h2>EDUCATION</h2>
        <div>
        {education.map(item=>(
          <Grid style={marginTopBottom}>
            <Cell phone={12} col={6} style={{margin:0}}>
              <h5>{item.achievement}</h5>
            </Cell>
            <Cell phone={12} col={6} style={{margin:0}}>
              <p style={{margin:0,fontWeight:"500"}}>{item.program}</p>
              <p style={smallFont}>{item.school}</p>
            </Cell>
          </Grid>  

        ))}</div>
      </Cell>
    </Grid>
    </div>
   );
}
 
export default Background;