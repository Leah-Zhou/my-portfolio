import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import{Grid, Cell}from 'react-mdl';
import {Link} from 'react-router-dom';
import './styleSheet/Unicup.scss';
import './styleSheet/DesignSystem.scss';
import './styleSheet/PCFDS.scss';
import pcdsHero from './assect/imgs/pcds-hero.png';
import tokensPlan from './assect/imgs/pcf-token-plan.png';
import tokensFoundation from './assect/imgs/pcf-token-foundation.png';
import tokensAccessibility from './assect/imgs/pcf-token-accessibility.png';
import components from './assect/imgs/pcf-components.png';
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
            <h2 style={{ marginBottom: '20px' }}>{DSdata.hero.header}</h2>
            <p className="header-subtitle">{DSdata.hero.subHeader}</p>
          </section>
        </div>
      </div>

      <Grid className="side-margin">
        {/* INTRO */}
        <Cell phone={12} tablet={12} col={8}>
          <div className="add-gap">
            <section className='line-width'>
              <h3>{DSdata.intro.title}</h3>
              <p>{DSdata.intro.body}</p>
            </section>
              {/* MY ROLE */}
              <section className="line-width my-role">
                <h3>My role</h3>
                <div className="roles-grid">
                  {DSdata['my role'] && DSdata['my role'].map((role, idx) => (
                    <div key={idx} className="role-item">
                        <span>{role.title}</span>
                      <p>{role.body}</p>
                    </div>
                  ))}
                </div>
              </section>
          </div>
        </Cell>


          {/* CHALLENGE */}
        <Cell phone={12} tablet={12} col={5}>
          <section>
            <h3>{DSdata.challenge.title}</h3>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
          <section>
            <p>{DSdata.challenge.body}</p>
          </section>
        </Cell>


        {/* ALIGN STAKEHOLDERS */}
        <Cell phone={12} tablet={12} col={10}>
          <section>
            <h3>{DSdata.tokens.title}</h3>
            <p>{DSdata.tokens.body}</p>
               <img src={tokensPlan} alt="PCF design system tokens plan" className="large-img"/>
          </section>
          

          {/* Build scalable foundations */}
          <section>
            <h3>{DSdata.tokensSubOne.title}</h3>
            <p>{DSdata.tokensSubOne.body}</p>
          </section>
        </Cell>

            {/* Build scalable foundations through design tokens */}       
        <Cell phone={12} tablet={12} col={4} style={{marginRight:"2em"}}>
          <section>
            <h3>{DSdata.tokensSubTwo.title}</h3>
            <p>{DSdata.tokensSubTwo.body}</p>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <section>
            <img src={tokensFoundation} alt="PCF design system tokens audit" className="large-img"/>
          </section>
        </Cell>


         {/* Design token architecture */}
       <Cell phone={12} tablet={12} col={6} style={{marginRight:"2em"}}>
          <section>
            <img src={tokensFoundation} alt="PCF design system tokens audit" className="large-img"/>
          </section>
        </Cell>
         <Cell phone={12} tablet={12} col={4}>
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
        <Cell phone={12} tablet={12} col={10} style={{marginRight:"2em"}}>
          <section>
            <h3>{DSdata.accessibility.title}</h3>
            <p>{DSdata.accessibility.body}</p>
            <img src={tokensAccessibility} alt="PCF design system accessibility" className="large-img"/>
          </section>
        </Cell>

           {/* Build reusable components */}   
        <Cell phone={12} tablet={12} col={10}>
          <div>
            <section>   
              <h3>{DSdata.components.title}</h3>
               <p>{DSdata.components.body}</p>
              <img src={components} alt="PCF design system components" className="large-img"/>
            </section>
              <p>{DSdata.components.bodyTwo}</p>
               <img src={components} alt="PCF design system components" className="large-img"/>
          </div>
        </Cell>

           {/* Outcome */}   
          <Cell phone={12} tablet={12} col={5}>
          <section>
            <h3>{DSdata.outcome.title}</h3>
            <img src={components} alt="PCF design system components" className="large-img"/>
          </section>
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
              <Link to="/design system project">
            <section className='thumb-wrapper'>
              <img src={thumbnaila}  alt="project thumbnail" className='thumb-img'/>
              <span>Design system project</span>
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
