import React from 'react';
import './styleSheet/Background.scss';
import {Grid, Cell} from 'react-mdl';

const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}, {achievement:'Degree',school:'South China Normal University',program:'Educating and Teaching'}];

    const workExperience =[
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'Front-end developer',occupation:'Internship'}, 
      {time:'Oct 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time'}, 
      {time:'Sep 2020 - Dec 2020', company:'Deaf Literacy Initiative and GBC',position:'Front-end web developer',occupation:'Part-time'},
      {time:'Sep 2018 - Now', company:'Donald Optical',position:'Sales associate',occupation:'Part-time'},
    ]

    const devSkills =[
      {name:'HTML',level:'80%'},
      {name:'CSS/SCSS',level:'75%'},
      {name:'JS',level:'70%'},
      {name:'React',level:'70%'},
      {name:'Bootstrap',level:'70%'},
      {name:'TypeScript',level:'40%'},
    ]
    const designSkill=[
      {name:'Figma',level:'80%'},
      {name:'Xd',level:'75%'},
      {name:'Ai',level:'65%'},
      {name:'Ps',level:'60%'},
      {name:'Ae',level:'60%'},
    ]
    const marginTopBottom={
      marginBottom:"20px",
      marginTop:"20px",
      justifyContent:"center",
    }
    const smallFont={
      fontSize:"16px",
      color:"#dddddd",
    }

  return ( 
    <div style={{margin:"6em 2em"}}>
      <Grid style={marginTopBottom}>
      <Cell col={12} style={{margin:"50px 0", textAlign:"center"}}>
          <h4 className="line">HI, I AM LEAH.NICE TO MEET YOU!</h4>
        </Cell>
        <Cell col={12} tablet={12}  col={5}>
          <section className="greet">
            <i className="fas fa-file-code fa-3x greet_icon"></i>
            <h5 className="greet_subtitle">I could sit all day for coding!</h5>
          <p>Coding makes my life distinctive.I love to dive into the coding world and explore any possibilities in interaction design. With the professional skills of HTML, CSS, SCSS, JS, REACT, BOOTSTRAP, other frameworks, and libraries, I have hands-on experience in building a user-friendly and responsive webpage for clients.</p>
          </section>
        </Cell>
        <Cell col={12} tablet={12} col={5}>
          <section className="greet">
          <i class="fas fa-hand-holding-heart fa-3x greet_icon"></i>
          <h5 className="greet_subtitle">I am a UX designer with user empathy</h5>
          <p>I believe that a good design can not ignore user experience. I am good at applying professional communication skills, user research, and analytical skills in UX research. Proficiency in Figma, Adobe XD and other design tools allow me to create intuitive Persona, user journey, wireframe, and interactive prototype, which support me in visual communication with clients.</p>
          </section>
        </Cell>
      </Grid>
       <Grid style={marginTopBottom}>
        <Cell col={12} style={{margin:"50px 0", textAlign:"center"}}>
          <h4 className="line">PROFESSIONAL SKILLS</h4>
        </Cell>
        <Cell col={5} phone={8} tablet={8}>
          <h5 className="text-center">Development Skills</h5>
          {devSkills.map(skill=>(
           <div className="progress">
             <div className="progress_bottom">
                <div className="progress_top" style={{width:skill.level}}>{skill.level}</div>
             </div>
             <p className="skill-name">{skill.name}</p>
           </div>
          ))}
        </Cell>
        <Cell col={5} phone={8} tablet={8}>
          <h5  className="text-center">Design Skills</h5>
          {designSkill.map(skill=>(
           <div className="progress">
             <div className="progress_bottom">
                <div className="progress_top" style={{width:skill.level}}>
                  {skill.level}
                </div>
             </div>
             <p className="skill-name">{skill.name}</p>
           </div>
          ))}
        </Cell>
      </Grid> 
    <Grid style={{textAlign:'center', marginTop:"50px"}}> 
    <Cell col={6} phone={12}  tablet ={12}>
      <h4 className="line">WORK EXPERIENCE</h4>
        <div style={{marginTop:"30px"}}>
        {workExperience.map(item=>(
        <Grid style={marginTopBottom}> 
          <Cell phone={12}  style={{margin:0}}>
            <p style={{fontWeight:"500"}}>{item.time}</p>
          </Cell>
          <Cell phone={12} style={{margin:0}}>
            <p style={{fontWeight:"500"}}>{item.company}</p>
            <p style={{fontWeight:"800"}}>{item.position}</p>
            <p style={smallFont}>{item.occupation}</p>
         </Cell>
        </Grid>
        ))}</div>
      </Cell>

      <Cell phone={12} tablet ={12} className="side-bar">      
        <h4 className="line">EDUCATION</h4>
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