import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import{Grid, Cell}from 'react-mdl';
import {Link} from 'react-router-dom';
import './styleSheet/Unicup.scss';
import './styleSheet/DesignSystem.scss';
import './styleSheet/PCFDS.scss';
import pcdsHero from './assect/imgs/pcf-hero.png';
import pcdsOverview from './assect/imgs/pcf-ds-overview-img.png';
import tokensPlan from './assect/imgs/pcf-token-plan.png';
import tokensFoundation from './assect/imgs/pcf-token-foundation.png';
import tokenworkflow from './assect/imgs/pcf-token-workflow.png';
import tokensAccessibility from './assect/imgs/pcf-token-accessibility.png';
import tokenStructure from './assect/imgs/pcf-ds-token-structure.png';
import themeVideo from './assect/videos/pcf-ds-theme-video.mp4';
import crossPlatform from './assect/imgs/pcf-ds-cross-platform.png';
import compStrategy from './assect/imgs/pcf-comp-strategy.png';
import reuseComp from './assect/imgs/pcf-reuse-comp.png';
import crossPlatformAlignment from './assect/imgs/pcf-cross-platform-alignment.png';
import components from './assect/imgs/pcf-components.png';
import visualqa from './assect/imgs/pcf-qa.png';
import pcfdsQa from './assect/imgs/pcfds-qa.png';
import pcfdsOutcome from './assect/imgs/pcfds-outcome-display.png';
import thumbnailkh from './assect/imgs/TN-DS.png';
import thumbnaila from './assect/imgs/TN-tea.png';
import thumbnailb from './assect/imgs/TN-LS.png';
import thumbnailc from './assect/imgs/TN-survey.png';
import roleIconStructure from './assect/icons/pcf-ds-ic-structure.svg';
import roleIconCollaboration from './assect/icons/pcf-ds-ic-collaboration.svg';
import roleIconWorkflow from './assect/icons/pcf-ds-ic-workflow.svg';
import roleIconDoc from './assect/icons/pcf-ds-ic-doc.svg';
import checkIcon from './assect/icons/ic-circle-check.svg';
import PCFDesignSystemData from './localJson/PCFDesignSystem.json';

const roleIcons = {
  structure: roleIconStructure,
  collaboration: roleIconCollaboration,
  workflow: roleIconWorkflow,
  doc: roleIconDoc
};

const tokenArchitectureMedia = {
  tokenStructure,
  themeVideo,
  crossPlatform
};

const workflowMedia = {
  tokenWorkflow: tokenworkflow
};

const componentsMedia = {
  compStrategy,
  reuseComp,
  crossPlatformAlignment
};

const accessibilityMedia = {
  visualQa: pcfdsQa
};

const outcomeMedia = {
  outcomeDisplay: pcfdsOutcome
};

const PCFDS = () => {
  const bgImg = useRef(null);
  const themeVideoRef = useRef(null);
  const [isThemeVideoPlaying, setIsThemeVideoPlaying] = useState(true);
  const DSdata = PCFDesignSystemData;

  const toggleThemeVideo = () => {
    const video = themeVideoRef.current;
    if (!video) {
      return;
    }
    if (video.paused) {
      video.play();
      setIsThemeVideoPlaying(true);
    } else {
      video.pause();
      setIsThemeVideoPlaying(false);
    }
  };

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
                     <a href="https://leah-zhou.github.io/design-system-showcase/" target="_blank" className="btn-link animate-btn"><span>View Showcase</span></a>
          </section>
        </div>
      </div>

      <Grid className="side-margin" style={{justifyContent:"center", alignItems:"start"}}>
        {/* INTRO */}
        <Cell phone={12} tablet={12} col={10}>
              <h2>{DSdata.intro.title}</h2>
        </Cell>

        <Cell phone={12} tablet={12} col={5}>
          <div>
              <p>{DSdata.intro.body}</p>
          </div>
        </Cell>

       <Cell phone={12} tablet={12} col={5}>
          <div>
              <p>{DSdata.intro.bodyTwo}</p>
          </div>
        </Cell>
          <Cell phone={12} tablet={12} col={12}>
          <section>
            <img src={pcdsOverview} alt="PCF design system overview" className="large-img"/>
          </section>
        </Cell>

        {/* CHALLENGE */}
   
         <Cell phone={12} tablet={12} col={8} className="top-margin">
          <section>
            <h2>{DSdata.challenge.title}</h2>
            <section>
              <p>{DSdata.challenge.body}</p>
              <p className="top-margin-sm highlight-title">{DSdata.challenge.bodyTwo}</p>
            </section>
          </section>
        </Cell>
          

       {/* MY ROLE */}
        <Cell phone={12} tablet={12} col={8} className="top-margin">
              <section>
                <h2>{DSdata['my role'].title}</h2>
                <div className="roles-grid">
                  {DSdata['my role'].columns.map((column, colIdx) => (
                    <div key={colIdx} className="role-column">
                      {column.cards.map((role, idx) => (
                        <div key={idx} className="role-item">
                          <img src={roleIcons[role.icon]} alt="" className="role-icon" />
                          <span>{role.title}</span>
                          <p>{role.body}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
        </Cell>



   

          

          {/* Design to code workflow */}
          <Cell phone={12} tablet={12} col={8} className="top-margin">
          <section className="token-architecture-intro">
            <h2>{DSdata.tokensSubOne.title}</h2>
            <p>{DSdata.tokensSubOne.body}</p>
          </section>
          </Cell>
          <Cell phone={12} tablet={12} col={10}>
          {DSdata.tokensSubOne.groups.filter((group) => group.id === 'hierarchy').map((group) => (
            <section key={group.id} className="token-architecture-hierarchy top-margin-md">
              <div className="token-architecture-principles">
                {group.columns.map((column, idx) => (
                  <div key={idx} className="token-architecture-principle">
                    <h4>{column.title}</h4>
                    <p>{column.body}</p>
                  </div>
                ))}
              </div>
              {group.media && group.media.type === 'image' && (
                <img
                  src={tokenArchitectureMedia[group.media.src]}
                  alt={group.media.alt}
                  className="token-architecture-diagram"
                />
              )}
            </section>
          ))}
          {DSdata.tokensSubOne.groups.filter((group) => group.id === 'theming').map((group) => (
            <section key={group.id} className="token-architecture-theming top-margin-md">
              {group.columns.map((column, idx) => (
                <div key={idx} className="token-architecture-theme-col">
                  <div className="token-architecture-principle">
                    <h4>{column.title}</h4>
                    <p>{column.body}</p>
                  </div>
                  {column.media && column.media.type === 'image' && (
                    <img
                      src={tokenArchitectureMedia[column.media.src]}
                      alt={column.media.alt}
                      className="token-architecture-diagram"
                    />
                  )}
                  {column.media && column.media.type === 'video' && (
                    <div className="token-architecture-video-wrap">
                      <video
                        ref={themeVideoRef}
                        src={tokenArchitectureMedia[column.media.src]}
                        autoPlay
                        muted
                        loop
                        playsInline
                        aria-label={column.media.alt}
                      />
                      <button
                        type="button"
                        className="token-architecture-video-toggle"
                        onClick={toggleThemeVideo}
                        aria-label={isThemeVideoPlaying ? 'Pause theme video' : 'Play theme video'}
                      >
                        {isThemeVideoPlaying ? (
                          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <rect x="3" y="2" width="3.5" height="12" rx="0.5" fill="currentColor" />
                            <rect x="9.5" y="2" width="3.5" height="12" rx="0.5" fill="currentColor" />
                          </svg>
                        ) : (
                          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M4 2.5v11L14 8 4 2.5z" fill="currentColor" />
                          </svg>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </section>
          ))}
        </Cell>


          {/* Establish workflow from design to code */}
          <Cell phone={12} tablet={12} col={8} className="top-margin">
          <section className="token-workflow">
            <div className="token-workflow-intro">
              <h2>{DSdata.workflow.title}</h2>
              <div>
                <p>{DSdata.workflow.body}</p>
                <p>{DSdata.workflow.bodyTwoStart}</p>
                <p className="token-workflow-path">{DSdata.workflow.workflowPath}</p>
              </div>
              <p>{DSdata.workflow.bodyThree}</p>
              <ul className="token-workflow-list">
                {DSdata.workflow.list.map((item, index) => (
                  <li key={index}>
                    <img src={checkIcon} alt="" className="token-workflow-check" />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <p>{DSdata.workflow.bodyFour}</p>
            </div>
            </section>
            </Cell>
            <Cell phone={12} tablet={12} col={10}>
            {DSdata.workflow.media && DSdata.workflow.media.type === 'image' && (
              <img
                src={workflowMedia[DSdata.workflow.media.src]}
                alt={DSdata.workflow.media.alt}
                className="token-workflow-diagram"
              />
            )}
        </Cell>

          {/* Build reusable components */}
          <Cell phone={12} tablet={12} col={8} className="top-margin">
            <section className="token-workflow-intro">
              <h2>{DSdata.components.title}</h2>
              <div>
                <p>{DSdata.components.body}</p>
                <p>{DSdata.components.bodyTwo}</p>
              </div>
            </section>
          </Cell>
          <Cell phone={12} tablet={12} col={10}>
            <section className="components-focus">
              <h3>{DSdata.components.subtitle}</h3>
              <div className="components-focus-list">
                {DSdata.components.items.map((item) => (
                  <div key={item.id} className="components-focus-card">
                    {item.media && item.media.type === 'image' && (
                      <img
                        src={componentsMedia[item.media.src]}
                        alt={item.media.alt}
                        className="components-focus-media"
                      />
                    )}
                    <div className="components-focus-copy">
                      <h4>{item.title}</h4>
                      {item.body ? (
                        <p>{item.body}</p>
                      ) : (
                        <p>
                          {item.bodyStart}
                          <em>{item.bodyEmphasis}</em>
                          {item.bodyEnd}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Cell>

          {/* Accessibility and visual QA */}
          <Cell phone={12} tablet={12} col={5} className="top-margin accessibility-qa">
            <div className="accessibility-qa-copy">
              <h2>{DSdata.accessibility.title}</h2>
              <p>{DSdata.accessibility.body}</p>
              <p>{DSdata.accessibility.bodyTwo}</p>
            </div>
          </Cell>
          <Cell phone={12} tablet={12} col={6} className="top-margin accessibility-qa">
            {DSdata.accessibility.media && DSdata.accessibility.media.type === 'image' && (
              <img
                src={accessibilityMedia[DSdata.accessibility.media.src]}
                alt={DSdata.accessibility.media.alt}
                className="accessibility-qa-media"
              />
            )}
          </Cell>

          {/* Outcome */}
          <Cell phone={12} tablet={12} col={10} className="top-margin">
            <h2>{DSdata.outcome.title}</h2>
          </Cell>
          <Cell phone={12} tablet={12} col={10} className="outcome-impact">
            <Grid style={{ alignItems: 'start', width: '100%', padding: 0 }}>
              {DSdata.outcome.items.map((item) => (
                <Cell phone={12} tablet={12} col={4} key={item.id}>
                  <p className="outcome-label">{item.title}</p>
                  <p className="outcome-stat">{item.stat}</p>
                  <p className="outcome-body">{item.body}</p>
                </Cell>
              ))}
              {DSdata.outcome.media && DSdata.outcome.media.type === 'image' && (
                <Cell phone={12} tablet={12} col={12}>
                  <img
                    src={outcomeMedia[DSdata.outcome.media.src]}
                    alt={DSdata.outcome.media.alt}
                    className="outcome-impact-media"
                  />
                </Cell>
              )}
            </Grid>
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
              <span>Knowledgehook design system</span>
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
