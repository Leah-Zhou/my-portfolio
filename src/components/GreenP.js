import React from 'react';
import green from './assect/imgs/green-hero.png';
import report from './assect/imgs/green-report.png';
import problemOne from './assect/imgs/green-problem-one.png';
import problemTwo from './assect/imgs/green-problem-two.png';
import './GreenP.scss';
import greenData from './localJson/greenp.json';
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
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Usability Test Plan</a>
         <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-link">Research Post</a>
         </div>
          <p>{uxResearch.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches:</h5>
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
             <h5 className="highlight-title">Problems:</h5>
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

        <Cell phone={12} tablet={12} col={10}>
          <img src={green}  alt="persona" className="img-size" />
          <img src={green}  alt="experience map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={8}>
          <h5  className="highlight-title">{uxResearch.persona.title}</h5>
          <p>{uxResearch.persona.content}</p>
        </Cell>
      </Grid>



      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
          <section className="text-center">
            <h4 className="line">Solutions and Process</h4>
          </section>
          <p>{solution.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches:</h5>
             <ul>
            {solution.approach.map(each=>(
              <li>
                <h5>{each.way}</h5>
                <p>{each.detail}</p>
              </li>
            ))}
             </ul>
          </section>
          <section>
            <h5 className="highlight-title">Solutions</h5>
            <ul>{solution.found.map(each=>(
              <li>
                <h5>{each.title}</h5>
                <div>{each.content.map(point=>(<p>{point}</p>))}</div></li>
            ))}</ul>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
        <img src={green}  alt="mind map" className="img-size" />
        <img src={green}  alt="sticky note" className="img-size" />
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
           <section>
             <h5 className="highlight-title">Approaches:</h5>
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
        <img src={green}  alt="design guide display" className="img-size" />
        {/* <img src={designGuideLogo}  alt="logo design guide display" className="img-size" /> */}
        <img src={green}  alt="mockup display" className="img-size" />
        </Cell>
      </Grid>
    </div>
   );
}
export default GreenP;