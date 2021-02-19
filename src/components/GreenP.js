import React from 'react';
import green from './assect/imgs/greenPshowcase.png';
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
      <div className="hero-wrap">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>Green P App Redesign Project</h2>
         <p>UX project</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Redesign prototype</a>
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
        <h4 className="line">1. UX Research</h4>
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
          <img src={green}  alt="competitive analysis" className="img-size" />
          <img src={green}  alt="survey report" className="img-size" />
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
            <h4 className="line">Process and Solutions</h4>
          </section>
          <p>{solution.intro}</p>
          <section>
            <h5 className="highlight-title">{solution.found.title}</h5>
            <ul>{solution.found.content.map(each=>(
              <li>{each}</li>
            ))}</ul>
          </section>
          <section>
            <h5 className="highlight-title">Achievements:</h5>
             <ul>
            {solution.achievements.map(each=>(
              <li>
                <h5>{each.title}</h5>
                <p>{each.content}</p>
              </li>
            ))}
             </ul>
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
             <h4 className="line">UI Design</h4>
             </div>
             <a href="#" target="_blank" className="btn-link">Figma Prototype</a>
           </section>
           <p>{uiDesign.intro}</p>
           <section>
             <h5 className="highlight-title">Approaches:</h5>
             <ul>
             {uiDesign.approach.map(each=>(
                <li><p>{each}</p></li>
                ))}
             </ul>
           </section>
           <section>
             <h5 className="highlight-title">Achievements:</h5>
              <ul>
               {uiDesign.achievements.map(each=>(
                  <div>
                    <h5>{each.title}</h5>
                    <p>{each.content}</p>
                  </div>
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

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={9}>
        <section className="text-center">
          <div>
          <h4 className="line">Front-end Development</h4>
          </div>
             <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Website Link</a>
             <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="btn-link">Github Link</a>
           </section>

           <p>{frontEnd.intro}</p>
        </Cell>
        <Cell  phont={12} tablet={12} col={4}>
        <section>
          <h5 className="highlight-title">Approaches:</h5>
          <ul>
            {frontEnd.approach.map(each=>(
              <li><p>{each}</p></li>
            ))}
          </ul>
        </section>
        <section>
          <h5 className="highlight-title">Achievements:</h5>
          <ul>
            {frontEnd.achievements.map(each=>(
              <li><p>{each}</p></li>
            ))}
          </ul>
        </section>
        </Cell>
        <Cell phont={12} tablet={12} col={5}>
        <img src={green}  alt="display" className="img-size" />
        </Cell>
      </Grid>
    </div>
   );
}
export default GreenP;