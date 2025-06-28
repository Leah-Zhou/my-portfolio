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
import displayImg from './assect/imgs/tea-display.png';
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
import thumbnaila from './assect/imgs/TN-DS.png';
import thumbnailb from './assect/imgs/TN-LS.png';
import thumbnailc from './assect/imgs/TN-survey.png';
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
    <div style={{marginTop:"70px", backgroundColor:"white"}}>
      <div className="hero-wrap">
        <img src={heroImg} alt="hero" ref={bgImg}/>
       <div></div>
       <section className="project-title">
          <h2 style={{marginBottom:"20px"}}>UNICUP Bubble Teashop</h2>
         <p className="header-subtitle">Product design	&nbsp; |	&nbsp;Branding &nbsp;|	&nbsp;Front-end development 	&nbsp;</p>
         <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Visit Website</span></a>
       </section>
      </div>

      {/* INTRO SECTION */}
      <Grid className="side-margin" style={{justifyContent:"center", alignItems:"start"}}>
        <Cell phone={12} tablet={12} col={5}>
        <div style={{marginRight:"2em"}}> 
           <span>{teashopData.overview.title}</span>
           <p>{teashopData.overview.content}</p>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={4}>
           {
             teashopData.intro.map(each=>(
               <div  key={uuidv4()}>
                  <span>{each.title}</span>
                  {each.content.map(
                  item=>(<div key={uuidv4()}>
                            <p>{item}</p>
                        </div>))}                             
               </div>
             ))
           }
        </Cell>  

        <Cell phone={12} tablet={12} col={12}>
          <div>
            <img src={displayImg}  alt="showcase demo" className='large-img'/>
         </div>
        </Cell>     
      </Grid>

{/* PROBLEM STATEMENT */}
      <Grid>
      <Cell phone={12} tablet={12} col={12}>
        <div className="text-center banner-text bg-a">
          <span>The problem</span>
           <h3>How can I promote the brand for its target customers?</h3>
          </div>
        </Cell>
      </Grid>

      {/* DISCOVERY SECTION */}



      <Grid className="side-margin" style={{justifyContent:"center"}}>
      <Cell phone={12} tablet={12} col={10}>
        <div className="line-width center-margin">
            <span>Discovery</span>
            <h3>Where Is The Opportunity?</h3>
        </div>
          <section style={{marginBottom:"40px"}}>
            {uxResearch.approach.map(item=>(
              <div key={uuidv4()}>
                 <div className="line-width center-margin">
                    <h4 style={{margin:"40px 0 8px 0"}}>{item.title}</h4>
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

          {/* INSIGHT SECTION */}


        {/* <Grid className="side-margin" style={{justifyContent:"center"}}>
        <Cell phone={12} tablet={12} col={10}>
           <section className='frame-content'>
             <h4 className='sub-title'>Insights:</h4>
             <ul className='two-grid-content'>
            {uxResearch.achievements.map(each=>(
              <li key={uuidv4()}>
                <h6 style={{fontWeight:"600", marginBottom:"1em"}}>{each.title}</h6>
                <div>{each.content.map(each=>(<ul>
                 <li key={uuidv4()}>
                   <p>{each}</p>
                   </li>
                </ul>))}
                </div>
              </li>
            ))}
          </ul>
           </section>
        </Cell>
      </Grid> */}

      <Grid className="side-margin" style={{justifyContent:"start"}}>
      <Cell  phone={12} tablet={12} col={3}>
          <h1>BRANDING</h1>
          </Cell>
      <Cell phone={12} tablet={12} col={8}>
          <section className="line-width center-margin">
            <span>Branding Exploration</span>
            <h3 style={{marginBottom:"8px"}}>🎨How to Create a Popular Brand for Audiences</h3>
            <p>{branding.intro}</p>
          </section>
      </Cell>

        <Cell phone={12} tablet={12} col={6}>
        <img src={mindMap}  alt="mind map" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
        <img src={stickyNote}  alt="sticky note" className="img-size" />
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
           <section className='top-margin-md'>
            <h4 className='sub-title'>📍Position the Brand</h4>
             <section className='rows-group top-margin-md'>
            {branding.achievements.map(each=>(
              <div key={uuidv4()} className='frame-content'>
                <h6 className='strong'>{each.title}</h6>
                <p>{each.content}</p>
              </div>
            ))}
             </section>
          </section>
        </Cell>

        {/* UI ACHIEVEMENTS */}
        <Cell phone={12} tablet={12} col={12}>
           <section style={{margin:"40px"}}>
            <h4 className='sub-title' style={{marginBottom:"24px"}}>🎀Establish the Brand in Visuals</h4>
               {uiDesign.achievements.map(each=>(
                  <div key={uuidv4()}>
                   <section className='line-width center-margin' style={{padding:"2em 0 1em 0"}}>
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

          <Cell phone={12} tablet={12} col={12}>
          <section className="text-center">
            <h1 className="line">Intergrate Branding in UI Design</h1>
          </section>
            <div className="two-cols">
                            <div>
              <img src={moodboard}  alt="mood board" className="large-img" />
              <div style={{textAlign:"center"}}><span>Moodboards</span></div>
              </div>
              <div className='line-width-sm'>
              <h4>Ideation with moodboards</h4>
              <p>These moodboards served as visual representations of potential design directions, incorporating elements such as color schemes, typography, imagery, and design styles. 
                By curating these mood boards, I ensured that the UI designs resonated with the brand's identity and communicated its values effectively.
                </p>
              </div>
            </div>
          </Cell>
          <Cell phone={12} tablet={12} col={12}>
            <div className="two-cols">
                <div>
              <img src={guideline}  alt="design guideline" className="large-img" />
              <div style={{textAlign:"center"}}><span>Design Guidelines</span></div>
              </div>
              <div className='line-width-sm'>
              <h4>Create design guideline</h4>
              <p>This guideline outlined key principles, specifications, and standards to maintain visual harmony across all aspects of the user interface, reinforcing the brand's identity and enhancing user experience.</p>
              </div>
            </div>
          </Cell>
          {/* <Cell phone={12} tablet={12} col={11}>
            <div className="discovery-section">
              <div className='line-width-sm'>
              <h4>Sketch and Prototype</h4>
              <p>I started the website design by ketching the logo and website layout on paper. It provides a fast way to draw down ideas. Sketching will be polished into different website design versions for parallel design process.</p>
              </div>
              <div>
              <img src={logoSketch}  alt="sketch" className="img-size" />
              <div><p style={{textAlign:"center"}}>Ideas Sketching</p></div>
              </div>
            </div>
          </Cell> */}
          <Cell phone={12} tablet={12} col={11}>
            <div className="two-cols">
               <div>
                <img src={designProcess}  alt="design process" className="large-img" />
                <div style={{textAlign:"center"}}><span >Design Process</span></div>
                </div>
              <div className='line-width-sm'>
               <h4>Parallel and iterative design</h4>
                <p>To generate the best user-centered website layout, I adopted the parallel design and iterative design methods. I designed three design alternatives and sent the prototypes to target users. With the feedback gained from users, I created a single merged design that takes the best ideas from each of the parallel versions. Finally, I proceed with iterative design to further refine the merged design.</p>
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
              <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Visit Website</span></a>
             <a  href="https://github.com/Leah-Zhou/unicupTeaShop" target="_blank" className="next-section">
             <p>View code</p>
             <img src={arrowSm}  alt="arrow previous"/>
             </a>
           </section>
           <img src={lightHouseReport}  alt="light house report" className="large-img" />
        </Cell>
      </Grid>


{/* NEW FOOTER */}
      <Grid>   
      <Cell phone={12} tablet={12} col={10}>
          <div className='top-margin'>
            <h3>Other Projects</h3>
            <div className='divider'></div>
         </div>
        </Cell>

        <Cell phone={12} tablet={12} col={4}>
              <Link to="/design system project">
            <section className='thumb-wrapper'>
              <img src={thumbnaila}  alt="project thumbnail" className='thumb-img'/>
              <span>Design system project</span>
            </section>
              </Link>
        </Cell>

        <Cell phone={12} tablet={12} col={4}>
              <Link to="/mobile app project">
            <section className='thumb-wrapper'>
              <img src={thumbnailb}  alt="project thumbnail" className='thumb-img'/>
              <span>Litte Something app</span>
            </section>
              </Link>
        </Cell>

        <Cell phone={12} tablet={12} col={4}>
              <Link to="/survey web design project">
            <section className='thumb-wrapper'>
              <img src={thumbnailc}  alt="project thumbnail" className='thumb-img'/>
              <span>ODL survey design</span>
            </section>
              </Link>
        </Cell>
      </Grid>

      {/* <div className='btn-group-section'> 
            <section>
            <a  href="https://leah-zhou.github.io/unicupTeaShop/" target="_blank" className="btn-link animate-btn"><span>Visit Website</span></a>
            </section>
            <section className='next-section'>
            <Link to="/mobile app project">
              <span>Next project</span>
              <img src={arrowSm}  alt="arrow previous"/>        
              </Link>
            </section>
          </div> */}

    </div> 
   );
}
 
export default Branding;