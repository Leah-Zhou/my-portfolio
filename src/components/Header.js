import React from 'react';
import {Grid, Cell} from "react-mdl";
import './Header.scss';


const Header = () => {
  return ( 
    <Grid style={{margin:'4em 2em'}}> 
      <Cell col={12} style={{textAlign:'center'}}>
      <h3>LEAH ZHOU</h3>
      <ul className="divider">
        <li className="ball"></li>
        <li className="name"></li>
      </ul>
      <p>UI DEVELOPER / UX DESIGNER</p>
      </Cell>
      <Cell col={12}>
      <h4>INTRO</h4>
      <p>
       Leah Zhou is a front-end coder and a UX and UI designer with a full passion for creating beautiful and interactive design end digital experience. Her goal is to connect people with brands and businesses via design. She believe a good design could increase people's interest and love for the brand or business.
      </p>
      </Cell>
    </Grid>
   );
}
 
export default Header;