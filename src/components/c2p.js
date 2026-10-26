import React, { useEffect, useRef } from 'react';
import { Grid, Cell } from 'react-mdl';
import {Link} from 'react-router-dom';
import './styleSheet/Unicup.scss';
import './styleSheet/c2p.scss';
import c2pData from './localJson/c2p.json';
import heroImg from './assect/imgs/c2p-hero.png';
import displayImg from './assect/imgs/c2p-display-img.png';
import mobileDisplay from './assect/imgs/c2p-mob-display.png';
import twoScreens from './assect/imgs/c2p-2screens-display.png';
import findingOne from './assect/imgs/c2p-finding-1.png';
import findingTwo from './assect/imgs/c2p-finding-2.png';
import findingThree from './assect/imgs/c2p-finding-3.png';
import impactLightbulb from './assect/icons/c2p-ic-lightbulb.svg';
import impactControls from './assect/icons/c2p-ic-controls.svg';
import impactCard from './assect/icons/c2p-ic-card.svg';
import impactPerson from './assect/icons/c2p-ic-person.svg';
import thumbnaila from './assect/imgs/TN-tea.png';
import thumbnailkh from './assect/imgs/TN-DS.png';
import thumbnailc from './assect/imgs/TN-survey.png';
import thumbnailPcfds from './assect/imgs/pcf-ds-thumbnail.png';
import { gsap } from 'gsap';

const ClickToPay = () => {
  const bgImg = useRef(null);
  const { overview, responsibilities, showcase, challenge, goal, informationFlow, experience, userTesting, impact } = c2pData;
  const decisionImages = [mobileDisplay, twoScreens];
  const findingImages = [findingOne, findingTwo, findingThree];
  const impactIcons = {
    lightbulb: impactLightbulb,
    controls: impactControls,
    card: impactCard,
    person: impactPerson,
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
    
    <div style={{ marginTop: '70px', backgroundColor: 'white' }}>
      <div className="hero-wrap">
        <img src={heroImg} alt="Click to Pay" ref={bgImg} />
        <div></div>
        <section className="project-title line-width" style={{ width: '90%' }}>
          <h2 style={{ marginBottom: '20px' }}>
           PC Financial Mastercard Click to Pay design
          </h2>
          <p className="header-subtitle"> Designing a clearer way to manage Click to Pay</p>
         {/*}
        <a href="" className="btn-link animate-btn">
            <span>Visit Website</span>
          </a>
          */}
        </section>
      </div>

{/* Overview section */}
      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'start' }}>
        <Cell phone={12} tablet={12} col={6} >
          <div className="c2p-overview__copy" style={{marginRight:"2.5em"}}>
            <h2>{overview.title}</h2>
            <div className="c2p-overview__body">
              {overview.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={5}>
          <div className="c2p-overview__roles">
            <h4>{responsibilities.title}</h4>
            {responsibilities.items.map((item) => (
              <article className="c2p-role" key={item.title}>
                <p className="c2p-role__title">{item.title}</p>
                <ul>
                  {item.content.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
          <section>
          <img src={displayImg} alt={showcase.alt}  className="large-img"/>
          </section>
        </Cell>
      </Grid>

{/* Challenge and Goal section */}
      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'start' }}>
        <Cell phone={12} tablet={12} col={6}>
          <div className="line-width">
            <h2>{challenge.title}</h2>
            <h3>{challenge.subtitle}</h3>
            <div className="c2p-points">
              {challenge.items.map((item) => (
                <div className="c2p-points__item" key={item.title}>
                  <ul>
                    <li className="strong">{item.title}</li>
                  </ul>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={6}>
          <div className="line-width">
            <h2>{goal.title}</h2>
            <h3>{goal.subtitle}</h3>
            <ul className="c2p-points">
              {goal.content.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </Cell>
      </Grid>


{/* Information Flow section */}
      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'start' }}>
        <Cell phone={12} tablet={12} col={8} >
          <div className="c2p-flow__intro">
            <h2>{informationFlow.title}</h2>
            <h3>{informationFlow.subtitle}</h3>
            {informationFlow.content.map((paragraph) => (
              <p className="c2p-flow__description" key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
          <div className="c2p-flow__stages">
            {informationFlow.stages.map((stage) => (
              <div className="c2p-flow__stage" key={stage.step}>
                <span className="c2p-flow__step">{stage.step}</span>
                <p className="body-highlight c2p-flow__title">
                  {stage.title.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
                <p className="c2p-flow__description">{stage.content}</p>
              </div>
            ))}
          </div>
        </Cell>
      </Grid>

{/* Experience section */}
      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'start' }}>
        {experience.decisions.map((decision, index) => (
          <Cell phone={12} tablet={12} col={12} key={decision.title}>
            <div className={index === 1 ? 'c2p-decision c2p-decision--end' : 'c2p-decision'}>
              <div className="c2p-decision__copy">
                {index === 0 && <h2>{experience.title}</h2>}
                <h3>{decision.title}</h3>
                <div className="c2p-decision__body">
                  {decision.content.map((paragraph) => (
                    <p className="c2p-flow__description" key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {decision.summary && (
                  <p className="c2p-flow__description strong">{decision.summary}</p>
                )}
                {decision.points && (
                  <ul className="c2p-points c2p-decision__points">
                    {decision.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
              <img
                className={index === 0 ? 'c2p-decision__image c2p-decision__image--phone' : 'c2p-decision__image'}
                src={decisionImages[index]}
                alt={decision.image.alt}
              />
            </div>
          </Cell>
        ))}
      </Grid>

{/* User testing section */}
      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'stretch' }}>
        <Cell phone={12} tablet={12} col={12}>
          <h2 className="c2p-testing__title">{userTesting.title}</h2>
        </Cell>
        {userTesting.cards.map((card) => (
          <Cell className="c2p-testing__cell" phone={12} tablet={12} col={4} key={card.title}>
            <article className="c2p-testing__card">
              <h4>{card.title}</h4>
              {card.content && <p className="c2p-flow__description">{card.content}</p>}
              {card.points && (
                <ul className="c2p-points">
                  {card.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </article>
          </Cell>
        ))}
        <Cell phone={12} tablet={12} col={12}>
          <div className="c2p-testing__panel">
            <h3>{userTesting.findings.title}</h3>
            <Grid className="c2p-testing__findings">
              {userTesting.findings.items.map((item, index) => (
                <Cell phone={12} tablet={12} col={6} key={item.image.alt}>
                  <div className="c2p-testing__finding">
                    <img src={findingImages[index]} alt={item.image.alt} />
                    <ul className="c2p-points c2p-testing__checks">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </Cell>
              ))}
            </Grid>
          </div>
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
          <div className="c2p-testing__insights">
            <h3>{userTesting.insights.title}</h3>
            <p className="c2p-flow__description">{userTesting.insights.content}</p>
          </div>
        </Cell>
      </Grid>

{/* Impact section */}
      <Grid className="side-margin" style={{ justifyContent: 'center' }}>
        <Cell phone={12} tablet={12} col={12}>
          <h2 className="c2p-impact__title">{impact.title}</h2>
          <div className="c2p-impact">
            {impact.columns.map((column, columnIndex) => (
              <React.Fragment key={column[0].title}>
                {columnIndex === 1 && (
                  <img
                    className="c2p-impact__image"
                    src={mobileDisplay}
                    alt={impact.image.alt}
                  />
                )}
                <div className="c2p-impact__column">
                  {column.map((card) => (
                    <article className="c2p-impact__card" key={card.title}>
                      <img src={impactIcons[card.icon]} alt="" />
                      <div>
                        <p className="strong">{card.title}</p>
                        <p>{card.content}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
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
              <Link to="/PCF design system">
            <section className='thumb-wrapper'>
              <img src={thumbnailPcfds}  alt="project thumbnail" className='thumb-img'/>
              <span>PC Financial Design System</span>
            </section>
              </Link>
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

        {/* <Cell phone={12} tablet={12} col={4}>
              <Link to="/mobile app project">
            <section className='thumb-wrapper'>
              <img src={thumbnailb}  alt="project thumbnail" className='thumb-img'/>
              <span>Litte Something app</span>
            </section>
              </Link>
        </Cell> */}

        <Cell phone={12} tablet={12} col={3}>
              <Link to="/survey web design project">
            <section className='thumb-wrapper'>
              <img src={thumbnailc}  alt="project thumbnail" className='thumb-img'/>
              <span>ODL survey design</span>
            </section>
              </Link>
        </Cell>
      </Grid>

    </div>
  );
};

export default ClickToPay;
