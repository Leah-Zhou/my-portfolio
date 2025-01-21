import React, { useEffect, useRef } from 'react';
import teashopData from './localJson/teashop.json';
import{Grid, Cell}from 'react-mdl';
import {Link} from 'react-router-dom';
import './styleSheet/Unicup.scss';
import analysisIcon from './assect/icons/analysis.svg';
import surveyIcon from './assect/icons/survey.svg';
import personaIcon from './assect/icons/persona.svg';
import mindIcon from './assect/icons/mindmap.svg';
import moodboardIcon from './assect/icons/moodboard-icon.svg';
import guidelineIcon from './assect/icons/guideline-icon.svg';
import prototypeIcon from './assect/icons/prototype-icon.svg';
import competitorReport from './assect/imgs/tea-competitor-report.png';
import userResearch from './assect/imgs/tea-user-research.png';
import heroImg from './assect/imgs/hero-teashop.jpg';
import guideline from './assect/imgs/unicup-guideline.png';
import surveyReport from './assect/imgs/tea-survey-report.png';
import persona from './assect/imgs/tea-persona.png';
import journey from './assect/imgs/tea-experience-map.png';
import mindMap from './assect/imgs/tea-mind-map.PNG';
import stickyNote from './assect/imgs/tea-note.jpg';
import mockup from './assect/imgs/tea-mockup.png';
import logoSketch from './assect/imgs/unicup-website-sketch.jpeg';
import moodboard from './assect/imgs/tea-moodboard.png';
import logoDesign from './assect/imgs/unicup-logo-design.png';
import designProcess from './assect/imgs/tea-parallel-design.png';
import colorPallet from './assect/imgs/unicup-color-font.png';
import responsiveDisplay from './assect/imgs/unicup-responsive-display.png';
import lightHouseReport from './assect/imgs/unicup-lightHouse-report.png';
import arrowSm from './assect/icons/arrow-sm.svg';
// import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'
import {gsap} from 'gsap';


// this is the unicup teashop project

const Branding = () => {
  const projectIntro =teashopData.project;
  const uxResearch=teashopData.research;
  uxResearch.approach[0].icon=analysisIcon;
  uxResearch.approach[1].icon=surveyIcon;
  uxResearch.approach[2].icon=personaIcon;
  uxResearch.approach[0].img=[{src:competitorReport, alt:"competitive report"}];
  uxResearch.approach[1].img=[{src:surveyReport, alt:"survey report"}];
  uxResearch.approach[2].img=[{src:persona, alt:"persona"}, {src:journey, alt:"journey map"}];
  const branding =teashopData.branding;
  const uiDesign = teashopData.UI;
  uiDesign.approach[0].icon=moodboardIcon;
  uiDesign.approach[1].icon=guidelineIcon;
  uiDesign.approach[2].icon=prototypeIcon;
  uiDesign.achievements[0].img=colorPallet;
  uiDesign.achievements[1].img=logoDesign;
  // uiDesign.achievements[2].img=mockup;
  const frontEnd =teashopData.frontEnd;
  const roles=['UX researcher', 'UI designer','Front-end developer'];
  // const tools=['Figma', 'Adobe Illustrator', 'After Effect', 'Html', 'CSS', 'React']
  const bgImg=useRef(null);

  useEffect(()=>{
    setTimeout(()=>{
      gsap.fromTo(bgImg.current, {scale:1.2}, {scale:1, duration:2.5, ease:"power4.easeOut"})
    }, 50);
  }, [])
  
  return ( 
    <div style={{marginTop:"70px"}}>
      <div className="hero-wrap">
        <img src={heroImg} alt="hero" ref={bgImg}/>
       <div></div>
       <section className="project-title">
          <h2 style={{marginBottom:"20px"}}>Unicup bubble teashop</h2>
         <p className="header-subtitle">UX UI design | Branding | Front-end development</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Website Link</span></a>
       </section>
      </div>
      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
           <h4 className="line">Project Intro</h4>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h5 className="highlight-title">Statement</h5>
          <p>{projectIntro.intro}</p>
          <ul className="process-list">
            {projectIntro.approach.map(appr=>(
              <li key={uuidv4()}><p>{appr}</p></li>
            ))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h5 className="highlight-title">Goal</h5>
          <ul>
            {projectIntro.goal.map(item=>(
              <li key={uuidv4()}><p className='list-style'>{item}</p></li>
            ))}
          </ul>
        </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <h5 className="highlight-title">My Role</h5>
          <ul>
             {roles.map(each=>(<li key={uuidv4()}><p className="list-style">{each}</p></li>))}
          </ul>
        </Cell>
                <Cell phone={12} tablet={12} col={7}>
          <h5 className="highlight-title">Tools</h5>
          <ul>
             <li><p>Figma,  Adobe Illustrator,  After Effect, VScode, Google Lighthouse</p></li>
          </ul>
        </Cell>

      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={7}>
        <div className="text-center">
        <h4 className="line">Apply UX research for opportunity discovery</h4>
        </div>
          <p>{uxResearch.intro}</p>
          <section>
            {/* <h5 className="highlight-title">Approaches:</h5> */}
            <ul  className="diagram">
            {uxResearch.approach.map(appr=>(
              <li key={uuidv4()}>
                <img src={appr.icon} alt={appr.alt} className="icon-size"/>
                <p>{appr.title}</p>
              </li>
            ))}
          </ul>
          </section>
      </Cell>
      <Cell phone={12} tablet={12} col={9}>
          <section style={{marginBottom:"40px"}}>
            {uxResearch.approach.map(item=>(
              <div key={uuidv4()}>
                 <div className="description-content">
                    <h4 style={{marginTop:"40px"}}>{item.title}</h4>
                    <p>{item.content}</p>
                 </div>
                 <div>
                {
                  item.img.map(each=>(
                    <div>
                      <img src={each.src}  alt={each.alt} className="large-img" />
                  </div>
                  ))
                }
                </div>
              </div>
            ))}
          </section>
          </Cell>
          </Grid>


        <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={10}>
           <section>
             <h4 className='sub-title'>Insights:</h4>
             <ul className='two-grid-content'>
            {uxResearch.achievements.map(each=>(
              <li key={uuidv4()}>
              <h6 style={{fontWeight:"600"}}>{each.title}</h6>
              <div>{each.content.map(each=>(<ul>
                <li key={uuidv4()}><p className="list-style">{each}</p></li>
                </ul>))}</div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"start"}}>
      <Cell phone={12} tablet={12} col={8}>
          <section className="text-center">
            <h4 className="line">Create an innovative brand for audience</h4>
          </section>
      </Cell>
        <Cell phone={12} tablet={12} col={7}>
          <p>{branding.intro}</p>
          </Cell>
        <Cell phone={12} tablet={12} col={6}>
        <img src={mindMap}  alt="mind map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
        <img src={stickyNote}  alt="sticky note" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={11}>
           <section style={{margin:"40px"}}>
            <h4 className='sub-title'>Brand positioning statement</h4>
             <ul className='three-grid-content'>
            {branding.achievements.map(each=>(
              <li key={uuidv4()} className='frame-style'>
                <h6>{each.title}</h6>
                <p>{each.content}</p>
              </li>
            ))}
             </ul>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={11}>
           <section style={{margin:"40px"}}>
             <h4 className="sub-title">Achievements</h4>
               {uiDesign.achievements.map(each=>(
                  <div className="two-cols" key={uuidv4()}>
                    <section>
                      <h5>{each.title}</h5>
                      <p>{each.content}</p>
                    </section>
                    <section>
                      <img src={each.img} alt="show case" className="large-img" />
                    </section>
                  </div>
               ))}
           </section>
        </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>

          <Cell phone={12} tablet={12} col={11}>
          <section className="text-center">
            <h4 className="line">UI design process</h4>
          </section>
            <div className="two-cols">
              <div>
              <h4>Ideation with moodboards</h4>
              <p>These moodboards served as visual representations of potential design directions, incorporating elements such as color schemes, typography, imagery, and design styles. By curating these mood boards, I ensured that the UI designs resonated with the brand's identity and communicated its values effectively.</p>
              </div>
              <div>
              <img src={moodboard}  alt="mood board" className="img-size" />
              <div><p style={{textAlign:"center"}}>Moodboards</p></div>
              </div>
            </div>
          </Cell>
          <Cell phone={12} tablet={12} col={11}>
            <div className="two-cols">
              <div>
              <h4>Create design guideline</h4>
              <p>TThis guideline outlined key principles, specifications, and standards to maintain visual harmony across all aspects of the user interface, reinforcing the brand's identity and enhancing user experience.</p>
              </div>
              <div>
              <img src={guideline}  alt="design guideline" className="img-size" />
              <div><p style={{textAlign:"center"}}>Design Guidelines</p></div>
              </div>
            </div>
          </Cell>
          <Cell phone={12} tablet={12} col={11}>
            <div className="two-cols">
              <div>
              <h4>Sketch and Prototype</h4>
              <p>I started the website design by ketching the logo and website layout on paper. It provides a fast way to draw down ideas. Sketching will be polished into different website design versions for parallel design process.</p>
              </div>
              <div>
              <img src={logoSketch}  alt="sketch" className="img-size" />
              <div><p style={{textAlign:"center"}}>Ideas Sketching</p></div>
              </div>
            </div>
          </Cell>
          <Cell phone={12} tablet={12} col={11}>
            <div className="two-cols">
              <div>
              <h4>Parallel and iterative design</h4>
              <p>To generate the best user-centered website layout, I adopted the parallel design and iterative design methods. I designed three design alternatives and sent the prototypes to target users. With the feedback gained from users, I created a single merged design that takes the best ideas from each of the parallel versions. Finally, I proceed with iterative design to further refine the merged design.</p>
              </div>
              <div>
              <img src={designProcess}  alt="design process" className="img-size" />
              <div><p style={{textAlign:"center"}}>Design Process</p></div>
              </div>
            </div>
          </Cell>
      </Grid>

      <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={7}>
          <section className="text-center">
          <h4 className="line">{frontEnd.title}</h4>
          </section>
           <section>
           <p>{frontEnd.intro}</p>
           </section>
           <section>
             <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className=" next-section">
             <p>View website</p>
             <img src={arrowSm}  alt="arrow previous"/>
             </a>
             <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="next-section">
             <p>View code</p>
             <img src={arrowSm}  alt="arrow previous"/>
             </a>
           </section>
           <img src={lightHouseReport}  alt="light house report" className="large-img" />
        </Cell>
      </Grid>

      <div className='btn-group-section'> 
            <section>
            <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Website Link</span></a>
            </section>
            <section className='next-section'>
            <Link to="/mobile app project">
              <span>Next project</span>
              <img src={arrowSm}  alt="arrow previous"/>
              
              </Link>
            </section>
          </div>

    </div>
   );
}
 
export default Branding;