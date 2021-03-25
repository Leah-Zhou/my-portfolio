import React from 'react';
import {Grid, Cell} from "react-mdl";
import './styleSheet/Header.scss';


const Header = () => {
  // const expandContent =document.querySelector('.expand-content');

  // function toggleContent(){
  //   expandContent.classList.toggle('expanded')
  // }

  return ( 
    <Grid className="side-margin" style={{textAlign:'center'}}> 
      <Cell col={12}>
      <div className="title">
        <h2 className="long-line name">LEAH ZHOU</h2>
        <p style={{fontWeight:600}}>FRONT-END WEB DEVELOPER / UX DESIGNER</p>
      </div>
      </Cell>
      <Cell col={12} className="intro">
      <h4 className="line" >INTRO</h4>
      <div>
      <p>
      Leah Zhou is graduated with an interaction design and UX design education background. She has a full passion for front-end development and the UX design field. She has participated in different projects and gained professional work experience with front-end website building and management, UI design, and UX design. 
      </p>
      </div>
      </Cell>
    </Grid>
   );
}
 
export default Header;