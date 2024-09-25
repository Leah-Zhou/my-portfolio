import React, {useRef, useEffect} from 'react';
import {Grid, Cell} from 'react-mdl';
import './styleSheet/Global.scss';
import ins from './assect/icons/icon-ins.svg';
import linkedin from './assect/icons/icon-linkedin.svg';
import email from './assect/icons/icon-email.svg';
import github from './assect/icons/icon-github.svg';
import shape from './assect/imgs/shape.png';

const Footer = () => {

  return(
    <Grid>
      <Cell COL={12}>
        <div className='footer-section'>
          <h5>Let’s connect and keep in touch</h5>
          <section className='icon-wrap'>
            <a href="https://www.linkedin.com/in/leah-zhou-853ba8174/">
              <img src={linkedin} alt="linkedin icon" />
            </a>
            <a href="https://www.instagram.com/leahs_design_notes/">
              <img src={ins} alt="Instagram icon" />
            </a>
            <a href="https://github.com/Leah-Zhou">
              <img src={github} alt="Github icon" />
            </a>
            <a href="mailto:leahzhoulz@gmail.com">
              <img src={email} alt="email icon" />
            </a>
          </section>
          <img src={shape} alt="shape" className='shape-bg'/>
        </div>
      </Cell>
    </Grid>
  )
  
}

export default Footer;