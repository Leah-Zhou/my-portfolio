import React from 'react';
import './Background.scss';
import {Grid, Cell,List,ListItem,ListItemContent, ProgressBar} from 'react-mdl';

const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}, {achievement:'Degree',school:'South China Normal University',program:'Educating and Teaching'}];

    const workExperience =[
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'Front-end developer',occupation:'Internship'}, 
      {time:'Oct 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time'}, 
      {time:'Sep 2020 - Dec 2020', company:'Deaf Literacy Initiative and GBC',position:'Front-end web developer',occupation:'Part-time'},
      {time:'Sep 2018 - Now', company:'Donald Optical',position:'Sales associate',occupation:'Part-time'},
    ]

    // const skills =[
    //   {name:'HTML',level:'80'},
    //   {name:'CSS/SCSS',level:'75'},
    //   {name:'JS',level:'75'},
    //   {name:'REACT',level:'70'},
    //   {name:'BOOTSTRAP',level:'60'},
    //   {name:'AXURE',level:'60'},
    //   {name:'AI',level:'78'},
    //   {name:'FIGMA',level:'80'},
    //   {name:'XD',level:'75'},
    //   {name:'PS',level:'70'},
    // ]
    const marginTopBottom={
      marginBottom:"20px",
      marginTop:"15px",
      justifyContent:"center"
    }
    const smallFont={
      fontSize:"16px",
      color:"#dddddd",
    }

  return ( 
    <div className="side-margin">
    <Grid style={{textAlign:'center'}}>
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