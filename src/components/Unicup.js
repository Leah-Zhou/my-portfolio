import React from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import './Unicup.scss'
import competitorReport from './assect/imgs/tea-competitor-report.png';
import surveyReport from './assect/imgs/tea-survey-report.png';
import persona from './assect/imgs/tea-persona.png';
import journey from './assect/imgs/tea-experience-map.png';
import mindMap from './assect/imgs/tea-mind-map.PNG';
import stickyNote from './assect/imgs/tea-note.jpg';
import designGuide from './assect/imgs/tea-design-guide.png';
// import designGuideLogo from './assect/imgs/tea-logo-design.png';
import mockup from './assect/imgs/tea-mockup.png';
import display from './assect/imgs/tea-display.png';

// this is the unicup teashop project

const ProjectOne = () => {
  const projectIntro =teashopData.project;
  const uxResearch=teashopData.research;
  const branding =teashopData.branding;
  const uiDesign = teashopData.UI;
  const frontEnd =teashopData.frontEnd;
  const roles=['UX researcher', 'UI designer','Front-end developer']
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap">
       <div></div>
       <section className="project-title">
         <h2 style={{fontWeight:"800"}}>Unicup Bubble Teashop Project</h2>
         <p>UX design and Front-end Building</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link">Website Link</a>
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
          <ul>
            {projectIntro.approach.map(appr=>(
              <li><p>{appr}</p></li>
            ))}
          </ul>
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
            {uxResearch.approach.map(app=>(
              <li><p>{app}</p></li>
            ))}
          </ul>
          </section>
           
           <section>
             <h5 className="highlight-title">Achievements:</h5>
             <ul>
            {uxResearch.achievements.map(each=>(
              <li>
              <h5>{each.title}</h5>
              <div>{each.content.map(each=>(<p>{each}</p>))}</div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
          <img src={competitorReport}  alt="competitive analysis" className="img-size" />
          <img src={surveyReport}  alt="survey report" className="img-size" />
        </Cell>

        <Cell phone={12} tablet={12} col={10}>
          <img src={persona}  alt="persona" className="img-size" />
          <img src={journey}  alt="experience map" className="img-size" />
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={8}>
          <section className="text-center">
            <h4 className="line">Branding Ideation</h4>
          </section>
          <p>{branding.intro}</p>
          <section>
            <h5 className="highlight-title">Approaches:</h5>
            <p>{branding.approach}</p>
          </section>
          <section>
            <h5 className="highlight-title">Achievements:</h5>
             <ul>
            {branding.achievements.map(each=>(
              <li>
                <h5>{each.title}</h5>
                <p>{each.content}</p>
              </li>
            ))}
             </ul>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={10}>
        <img src={mindMap}  alt="mind map" className="img-size" />
        <img src={stickyNote}  alt="sticky note" className="img-size" />
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
        <img src={designGuide}  alt="design guide display" className="img-size" />
        {/* <img src={designGuideLogo}  alt="logo design guide display" className="img-size" /> */}
        <img src={mockup}  alt="mockup display" className="img-size" />
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
        <img src={display}  alt="display" className="img-size" />
        </Cell>
      </Grid>
    </div>
   );
}
 
export default ProjectOne;