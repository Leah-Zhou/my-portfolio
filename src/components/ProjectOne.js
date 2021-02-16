import React from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import './ProjectOne.scss'
import marketAnalysisOne from './assect/imgs/tea-analysis-one.png';
import marketAnalysisTwo from './assect/imgs/tea-analysis-two.png';
import persona from './assect/imgs/tea-persona.png';
import journey from './assect/imgs/tea-experience-map.png';
import mindMap from './assect/imgs/tea-mind-map.PNG';
import stickyNote from './assect/imgs/tea-note.jpg';
import designGuide from './assect/imgs/tea-design-guide.png';
import mockup from './assect/imgs/tea-mockup.png';
import display from './assect/imgs/tea-display.png';

// this is the unicup teashop project

const ProjectOne = () => {
  const projectIntro =teashopData.project;
  const uxResearch=teashopData.research;
  const branding =teashopData.branding;
  const uiDesign = teashopData.UI;
  const frontEnd =teashopData.frontEnd;
  return ( 
    <div style={{marginTop:"100px"}}>
      <div className="hero-wrap">
       <div></div>
       <section className="project-title">
         <h2>Unicup Bubble Teashop Project</h2>
         <p>UX design and Front-end Building</p>
         <a  href="#" target="_blank" className="btn-link">Website Link</a>
       </section>
      </div>
      <Grid className="side-margin">
        <Cell col={12}>
          <div className="text-center">
          <h4 className="line">Project Intro</h4>
          </div>
          <p>{projectIntro.intro}</p>
          <ul>
            {projectIntro.approach.map(app=>(
              <li><p>{app}</p></li>
            ))}
          </ul>
        </Cell>
      </Grid>

      <Grid className="side-margin">
      <Cell phone={12} tablet={12} col={12}>
        <div className="text-center">
        <h4 className="line">1. UX Research</h4>
        </div>
          <p>{uxResearch.intro}</p>
          <section>
            <h5>Approaches:</h5>
            <ul>
            {uxResearch.approach.map(app=>(
              <li><p>{app}</p></li>
            ))}
          </ul>
          </section>
           
           <section>
             <h5>Achievements:</h5>
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
        <Cell phone={12} tablet={12}>
          <img src={marketAnalysisOne}  alt="competitive analysis" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12}>
        <img src={marketAnalysisTwo}  alt="competitive analysis" className="img-size" />
        </Cell>

        <Cell phone={12} tablet={12}>
          <img src={persona}  alt="persona" className="img-size" />
          <img src={journey}  alt="experience map" className="img-size" />
        </Cell>
      </Grid>

      <Grid className="side-margin">
        <Cell phone={12} tablet={12}>
          <section className="text-center">
            <h4 className="line">Branding Ideation</h4>
          </section>
          <p>{branding.intro}</p>
          <section>
            <h5>Approaches:</h5>
            <p>{branding.approach}</p>
          </section>
          <section>
            <h5>Achievements:</h5>
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
        <Cell phone={12} tablet={12}>
        <img src={mindMap}  alt="mind map" className="img-size" />
        <img src={stickyNote}  alt="sticky note" className="img-size" />
        </Cell>
      </Grid>

      <Grid className="side-margin">
        <Cell phone={12} tablet={12}>
           <section className="text-center">
             <h4 className="line">UI Design</h4>
             <a href="#" target="_blank" className="btn-link">Figma Prototype</a>
           </section>
           <p>{uiDesign.intro}</p>
           <section>
             <h5>Approaches:</h5>
             <ul>
             {uiDesign.approach.map(each=>(
                <li><p>{each}</p></li>
                ))}
             </ul>
           </section>
           <section>
             <h5>Achievements:</h5>
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
        <Cell phone={12} tablet={12}>
        <img src={designGuide}  alt="design guide display" className="img-size" />
        <img src={mockup}  alt="mockup display" className="img-size" />
        </Cell>
      </Grid>

      <Grid className="side-margin">
        <Cell phone={12} tablet={12}>
        <section className="text-center">
             <h4 className="line">Front-end Development</h4>
             <a  href="#" target="_blank" className="btn-link">Website Link</a>
           </section>
           <p>{frontEnd.intro}</p>
        <section>
          <h5>Approaches:</h5>
          <ul>
            {frontEnd.approach.map(each=>(
              <li><p>{each}</p></li>
            ))}
          </ul>
        </section>
        <section>
          <h5>Achievements:</h5>
          <ul>
            {frontEnd.achievements.map(each=>(
              <li><p>{each}</p></li>
            ))}
          </ul>
        </section>
        </Cell>
        <Cell phont={12} tablet={12}>
        <img src={display}  alt="display" className="img-size" />
        </Cell>
      </Grid>
    </div>
   );
}
 
export default ProjectOne;