import React from 'react';
import greenData from './localJson/greenp.json';
import usabilityPlan from './assect/files/GreenP-usability-plan.pdf';
import researchReport from './assect/files/GreenP-research-poster.pdf';
// import green from './assect/imgs/green-hero.png';
import report from './assect/imgs/GreenP-poster.png';
import problemOne from './assect/imgs/green-problem-one.png';
import problemTwo from './assect/imgs/green-problem-two.png';
import personaJenny from './assect/imgs/green-persona-jenny.png';
import journeyJenny from './assect/imgs/green-journey-jenny.png';
import personaSteve from './assect/imgs/green-persona-steve.png';
import journeySteve from './assect/imgs/green-journey-steve.png';
import compareThree from './assect/imgs/green-compare-three.png';
import prototye from './assect/imgs/greenP-Prototye.png';
import './GreenP.scss';
import ReactPlayer from 'react-player/youtube';
import {Grid, Cell} from 'react-mdl';


const GreenP = () => {
  const projectIntro =greenData.project;
  const uxResearch=greenData.research;
  const solution =greenData.solution;
  const uiDesign = greenData.UI;
  const frontEnd =greenData.frontEnd;
  const roles=['UX designer']
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap green-bg">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>Green P App Redesign Project</h2>
         <p>UX project</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Prototype</a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5 className="highlight-title">Statement</h5>
          <p>{projectIntro.intro}</p>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5 className="highlight-title">Goal</h5>
          <ul>
            {projectIntro.goal.map(item=>(
              <li><p>{item}</p></li>
            ))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5 className="highlight-title">My Role</h5>
          <ul>
             {roles.map(each=>(<p className="role">{each}</p>))}
          </ul>
        </Cell>

      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={8}>
        <div className="text-center">
           <div>
           <h4 className="line">1.UX Research</h4>
          </div>
         <a href={usabilityPlan} download className="btn-link">Usability Test Plan</a>
         <a href={researchReport} download className="btn-link">Research Report</a>
         </div>
          <p>{uxResearch.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches</h5>
            <ul>
            {uxResearch.approach.map(appr=>(
              <li>
                <h5>{appr.way}</h5>
                <p>{appr.detail}</p></li>
            ))}
          </ul>
         </section>
         <section>
         <img src={report}  alt="research report" className="large-img" />
         </section>   
           <section>
             <h5 className="highlight-title">Problems</h5>
             <ul>
            {uxResearch.problems.map(each=>(
              <li>
              <h5>{each.title}</h5>
              <div>{each.content.map(point=>(
              <div>
                 <p>{point}</p>
              </div>
              ))}</div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <img src={problemOne}  alt="display problem" className="img-size" />
          <img src={problemTwo}  alt="display problem" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5  className="highlight-title top-margin">{uxResearch.persona.title}</h5>
          <p>{uxResearch.persona.content}</p>
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <img src={personaJenny}  alt="persona" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <img src={journeyJenny}  alt="journey map" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <img src={personaSteve}  alt="persona" className="large-img" />
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <img src={journeySteve}  alt="journey map" className="large-img" />
        </Cell>
      </Grid>



      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
          <section className="text-center">
            <h4 className="line">Solutions and Process</h4>
          </section>
          <section>
            <h5 className="highlight-title">Approaches</h5>
             <ul>
            {solution.approach.map(each=>(
              <li>
                <h5>{each.way}</h5>
                <p>{each.detail}</p>
                {/* <img src={each.img} alt="description" className="large-img"/> */}
              </li>
            ))}
             </ul>
          </section>
          <section>
            <h5 className="highlight-title">Solutions</h5>
            <ul>{solution.found.map(each=>(
              <li>
                <h5>{each.title}</h5>
                <div>{each.content.map(point=>(<p>{point}</p>))}</div>
                <img src={each.img} alt="compare" className="large-img" />
                </li>
            ))}</ul>
                 <img src={compareThree} alt="comapre" className="large-img" />
          </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
           <section className="text-center">
             <div>
             <h4 className="line">Final Prototype Design</h4>
             </div>
             <a href="#" target="_blank" className="btn-link">Figma Prototype</a>
           </section>
           <p>{uiDesign.intro}</p>
           <img src={prototye} alt="prototye" className="large-img" />
           <section>
             <h5 className="highlight-title">Approaches</h5>
             <ul>
             {uiDesign.approach.map(each=>(
                <li>
                  <h5>{each.title}</h5>
                  <p>{each.content}</p>
                </li>
                ))}
             </ul>
           </section>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
            <div className="video-wrapper">
               <ReactPlayer className="video" url='https://youtu.be/jgZ0DMxPxjM' width="100%" height="100%" controls /> 
           </div>
        </Cell>
      </Grid>
    </div>
   );
}
export default GreenP;