import React from 'react';
import {Grid, Cell} from "react-mdl";
import './Header.scss';


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
        <p style={{fontWeight:600}}>UI DEVELOPER / UX DESIGNER</p>
      </div>
      </Cell>
      <Cell col={12} className="intro">
      <h4 className="line" >INTRO</h4>
      <div>
      <p>
       Leah Zhou is a front-end coder, a UX and UI designer with a full passion for creating beautiful and interactive design end digital experience. Her goal is to connect people with brands and businesses via design. She believe a good design could increase people's interest and love for the brand or business.
      </p>
      </div>
      </Cell>
    </Grid>
   );
}
 
export default Header;