import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import{Grid, Cell}from 'react-mdl';
import {Link} from 'react-router-dom';
import './styleSheet/Unicup.scss';
import './styleSheet/DesignSystem.scss';
import './styleSheet/PCFDS.scss';
import pcdsHero from './assect/imgs/pcf-hero.png';
import tokensPlan from './assect/imgs/pcf-token-plan.png';
import tokensFoundation from './assect/imgs/pcf-token-foundation.png';
import tokensAccessibility from './assect/imgs/pcf-token-accessibility.png';
import tokenStructure from './assect/imgs/pcf-token-structure.png';
import components from './assect/imgs/pcf-components.png';
import visualqa from './assect/imgs/pcf-qa.png';
import outcome from './assect/imgs/pcf-outcomes.png';
import thumbnailkh from './assect/imgs/TN-DS.png';
import thumbnaila from './assect/imgs/TN-tea.png';
import thumbnailb from './assect/imgs/TN-LS.png';
import thumbnailc from './assect/imgs/TN-survey.png';
import PCFDesignSystemData from './localJson/PCFDesignSystem.json';
import { v4 as uuidv4 } from 'uuid'

const PCFDS = () => {
  const bgImg = useRef(null);
  const DSdata = PCFDesignSystemData;

  useEffect(() => {
    setTimeout(() => {
      gsap.fromTo(
        bgImg.current,
        { scale: 1.2 },
        { scale: 1, duration: 2.5, ease: 'power4.easeOut' }
      );
    }, 50);
  }, []);

  return (
    <>
      <div style={{ marginTop: '70px', backgroundColor: 'white' }}>
        <div className="hero-wrap">
          <img src={pcdsHero} alt="PCF design system hero" ref={bgImg} />
          <div></div>
          <section className="project-title">
            <h1 style={{ marginBottom: '20px' }}>{DSdata.hero.header}</h1>
            <p className="header-subtitle">{DSdata.hero.subHeader}</p>
          </section>
        </div>
      </div>

      <Grid className="side-margin" style={{justifyContent:"center", alignItems:"start"}}>
        {/* INTRO */}
        <Cell phone={12} tablet={12} col={10}>
          <div>
            <section>
              <h2>{DSdata.intro.title}</h2>
              <p>{DSdata.intro.body}</p>
            </section>
          </div>
        </Cell>

       {/* MY ROLE */}
        <Cell phone={12} tablet={12} col={10} className="top-margin-md">
              <section>
                <h2>My role</h2>
                <div className="roles-grid">
                  {DSdata['my role'] && DSdata['my role'].map((role, idx) => (
                    <div key={idx} className="role-item">
                        <span>{role.title}</span>
                      <p>{role.body}</p>
                    </div>
                  ))}
                </div>
              </section>
        </Cell>


          {/* CHALLENGE */}
   
         <Cell phone={12} tablet={12} col={10} className="top-margin-md">
          <section className="two-cols">
            <h2>{DSdata.challenge.title}</h2>
            <section>
              <p>{DSdata.challenge.body}</p>
            </section>
          </section>
        </Cell>
   



        {/* ALIGN STAKEHOLDERS */}
        <Cell phone={12} tablet={12} col={10} className="top-margin">
          <section>
            <h2>{DSdata.tokens.title}</h2>
            <p>{DSdata.tokens.body}</p>
               <img src={tokensPlan} alt="PCF design system tokens plan" className="large-img"/>
          </section>

        </Cell>
          

          {/* Build scalable foundations */}
          <Cell phone={12} tablet={12} col={10} className="top-margin">
          <section>
            <h2>{DSdata.tokensSubOne.title}</h2>
            <p>{DSdata.tokensSubOne.body}</p>
          </section>
        </Cell>

            {/* Build scalable foundations through design tokens */}       
        <Cell phone={12} tablet={12} col={4} style={{marginRight:"2em"}} className="top-margin-md">
          <section>
            <h3>{DSdata.tokensSubTwo.title}</h3>
            <p>{DSdata.tokensSubTwo.body}</p>
          </section>
        </Cell>

        <Cell phone={12} tablet={12} col={6} className="top-margin-md">
          <section>
            <img src={tokensFoundation} alt="PCF design system tokens audit" className="large-img"/>
          </section>
        </Cell>


         {/* Design token architecture */}
       <Cell phone={12} tablet={12} col={6} style={{marginRight:"2em"}} className="top-margin-md">
          <section>
            <img src={tokenStructure} alt="PCF design system token structure" className="large-img"/>
          </section>
        </Cell>
         <Cell phone={12} tablet={12} col={4} className="top-margin-md">
          <section>
            <h3>{DSdata.tokensSubThree.title}</h3>
            <p>{DSdata.tokensSubThree.body}</p>
          {
             DSdata.tokensSubThree.list.map(item=>(
               <ul  key={uuidv4()} style={{marginLeft:"1em"}}>
                  <li>
                    <p>{item}</p>
                  </li>
               </ul>
             ))
           }
            <p>{DSdata.tokensSubThree.bodyTwo}</p>
          </section>
        </Cell>


        {/* Build accessibility into the foundation */}       
        <Cell phone={12} tablet={12} col={10} style={{marginRight:"2em"}} className="top-margin-md">
          <section>
            <h3>{DSdata.accessibility.title}</h3>
            <p>{DSdata.accessibility.body}</p>
            <img src={tokensAccessibility} alt="PCF design system accessibility" className="large-img"/>
          </section>
        </Cell>

           {/*PART 2: Build reusable components */}   
        <Cell phone={12} tablet={12} col={10} className="top-margin">
          <div>
            <section>   
              <h2>{DSdata.components.title}</h2>
               <p>{DSdata.components.body}</p>
              <img src={components} alt="PCF design system components" className="large-img"/>
            </section>
              <p>{DSdata.components.bodyTwo}</p>
               <img src={visualqa} alt="PCF design system visual QA" className="large-img"/>
          </div>
        </Cell>

           {/* PART 3: Outcome */}   
           <Cell phone={12} tablet={12} col={10} className="top-margin">
             <h2>{DSdata.outcome.title}</h2>
            </Cell>

          <Cell phone={12} tablet={12} col={5} style={{marginRight:"2em"}}>
            <img src={outcome} alt="PCF design system outcome" className="large-img"/>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
          <section>
            <p>{DSdata.outcome.body}</p>
          </section>
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

        <Cell phone={12} tablet={12} col={3}>
          <Link to="/design system project">
            <section className='thumb-wrapper'>
              <img src={thumbnailkh}  alt="project thumbnail" className='thumb-img'/>
              <span>Design system project</span>
            </section>
          </Link>
        </Cell>

        <Cell phone={12} tablet={12} col={3}>
              <Link to="/branding project">
            <section className='thumb-wrapper'>
              <img src={thumbnaila}  alt="project thumbnail" className='thumb-img'/>
              <span>Unicup project</span>
            </section>
              </Link>
        </Cell>

        <Cell phone={12} tablet={12} col={3}>
              <Link to="/mobile app project">
            <section className='thumb-wrapper'>
              <img src={thumbnailb}  alt="project thumbnail" className='thumb-img'/>
              <span>Litte Something app</span>
            </section>
              </Link>
        </Cell>

        <Cell phone={12} tablet={12} col={3}>
              <Link to="/survey web design project">
            <section className='thumb-wrapper'>
              <img src={thumbnailc}  alt="project thumbnail" className='thumb-img'/>
              <span>ODL survey design</span>
            </section>
              </Link>
        </Cell>
      </Grid>
    </>
  );
};

export default PCFDS;
