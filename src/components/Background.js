import React from 'react';
import {Grid, Cell,List,ListItem,ListItemContent, ProgressBar} from 'react-mdl';

const Background = () => {

  const education =[
    {achievement:'Diploma', school: 'George Brown College', program:'Interaction design and development'}, {achievement:'Certificate',school:'OCAD Univserity',program:'UX design and development'}, {achievement:'Degree',school:'South China Normal University',program:'Educating and Teaching'}];

    const workExperience =[
      {time:'Jan 2021 - Apr 2021', company:'Resili', position:'front end developer',occupation:'Internship'}, 
      {time:'Oct 2020 - Apr 2021', company:'SunnyBrook and GBC',position:'UI and UX designer',occupation:'Part-time'}, 
      {time:'Sep 2020 - Dec 2020', company:'Deaf Literacy Initiative and GBC',position:'Front-end web developer',occupation:'Part-time'},
      {time:'Sep 2018 - Now', company:'Donald Optical',position:'Sales associate',occupation:'Part-time'},
    ]

    const skills =[
      {name:'HTML',level:'80'},
      {name:'CSS/SCSS',level:'75'},
      {name:'JS',level:'75'},
      {name:'REACT',level:'70'},
      {name:'BOOTSTRAP',level:'60'},
      {name:'AXURE',level:'60'},
      {name:'AI',level:'78'},
      {name:'FIGMA',level:'80'},
      {name:'XD',level:'75'},
      {name:'PS',level:'70'},
    ]

  console.log(education.achievement)
  return ( 
    <div style={{width:'90%'}}>
    <Grid style={{alignItems:"start"}}>
      <Cell col={6} phone={12} tablet={12}>      
        <h4>EDUCATION</h4>
        <div>
        {education.map(item=>(
          <List>
        <ListItem threeLine>
          <ListItemContent subtitle={item.school}>{item.achievement}</ListItemContent>
          <ListItemContent >{item.program}</ListItemContent>
        </ListItem>
        </List>
        ))}
          </div>
        <h4>SKILLS</h4>
        <List>
          {
            skills.map(skill=>(
              <ListItem>
              <ListItemContent>
                {skill.name}
              </ListItemContent>
              <div style={{backgroundColor:"black"}}>
                <div style={{width:skill.level,backgroundColor:"pink",height:"20px"}}></div>
              </div>
            </ListItem>
            ))
          }
        </List>
      </Cell>

      <Cell col={6} phone={12} tablet={12}>
        <h4>WORK EXPERIENCE</h4>
        <div>
        {workExperience.map(item=>(
        <List>
          <ListItem twoLine>
          <ListItemContent>{item.time}</ListItemContent>
          <ListItemContent subtitle={item.occupation}>{item.company}
          <br>
          </br>{item.position}
          </ListItemContent>
          </ListItem>
        </List>
        ))}
          </div>

      </Cell>
    </Grid>
    </div>
   );
}
 
export default Background;