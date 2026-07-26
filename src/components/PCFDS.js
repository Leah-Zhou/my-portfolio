import React, { useEffect, useRef } from 'react';
import PCFdata from './localJson/PCFDesignSystem.json';
import { Grid, Cell } from 'react-mdl';
import './styleSheet/Unicup.scss';
import './styleSheet/DesignSystem.scss';
import { v4 as uuidv4 } from 'uuid';
import { gsap } from 'gsap';

// PC Financial Design System page component
const PCFDS = () => {
  const heroRef = useRef(null);

  // simple inline SVG placeholder image (can be replaced later)
  const placeholderSvg = `data:image/svg+xml;utf8,` +
    encodeURIComponent(`
      <svg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'>
        <rect width='100%' height='100%' fill='%23f3f4f6' />
        <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='22'>Image placeholder</text>
      </svg>
    `);

  // attach placeholder images to each problem object so markup can reference them
  if (Array.isArray(PCFdata.problems)) {
    PCFdata.problems.forEach((p, i) => {
      if (!p.img) p.img = {};
      p.img.src = placeholderSvg;
      p.img.alt = p.title ? `${p.title} placeholder` : `problem-${i}-placeholder`;
    });
  }

  useEffect(() => {
    // subtle hero scale animation like DesignSystem.js
    setTimeout(() => {
      if (heroRef.current) gsap.fromTo(heroRef.current, { scale: 1.05 }, { scale: 1, duration: 1.6, ease: 'power2.out' });
    }, 50);
  }, []);

  return (
    <div style={{ marginTop: '70px', backgroundColor: 'white' }}>
      <div className="hero-wrap">
        <div className="hero-placeholder" ref={heroRef} style={{ height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ margin: 0 }}>{PCFdata.title}</h2>
        </div>
      </div>

      <Grid className="side-margin" style={{ justifyContent: 'center', alignItems: 'start' }}>
        <Cell phone={12} tablet={12} col={5}>
          <div style={{ marginRight: '2em' }}>
            <span>{PCFdata.overview.title}</span>
            <p>{PCFdata.overview.description}</p>
          </div>
        </Cell>

        <Cell phone={12} tablet={12} col={12}>
          <section className="text-center banner-text bg-b">
            <span>The problems</span>
            <h3>Key challenges and how they were addressed</h3>
          </section>
        </Cell>

        {PCFdata.problems && PCFdata.problems.map(problem => (
          <Cell phone={12} tablet={12} col={12} key={uuidv4()}>
            <div className="discovery-section">
              <section>
                {problem.img ? (
                  <img src={problem.img.src} alt={problem.img.alt} style={{ maxWidth: '100%' }} />
                ) : null}
              </section>
              <section className="text-box add-bg">
                <p style={{ fontWeight: 600 }}>{problem.title}</p>
                <p style={{ fontStyle: 'italic' }}>{problem.challenge}</p>

                {problem.painPoints && (
                  <div>
                    <p style={{ fontWeight: 600 }}>Pain points</p>
                    <ul>
                      {problem.painPoints.map(item => (
                        <li key={uuidv4()}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {problem.solution && (
                  <div>
                    <p style={{ fontWeight: 600 }}>Solution</p>
                    <p>{problem.solution.summary}</p>
                    {problem.solution.actions && (
                      <ul>
                        {problem.solution.actions.map(act => (
                          <li key={uuidv4()}>{act}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}

                {problem.impact && (
                  <div>
                    <p style={{ fontWeight: 600 }}>Impact</p>
                    <ul>
                      {problem.impact.map(imp => (
                        <li key={uuidv4()}>{imp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </div>
          </Cell>
        ))}

        <Cell phone={12} tablet={12} col={10}>
          <section className="line-width top-margin">
            <span>{PCFdata.contributions.title}</span>
            <h3>Contributions</h3>
          </section>
        </Cell>
        <Cell phone={12} tablet={12} col={12}>
          <section className="rows-group">
            {PCFdata.contributions.items.map(item => (
              <div key={uuidv4()} className="add-gap">
                <p>{item}</p>
              </div>
            ))}
          </section>
        </Cell>
      </Grid>
    </div>
  );
};

export default PCFDS;
