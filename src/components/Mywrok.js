import React from 'react';
import './Mywork.scss';
import {Link} from 'react-router-dom';
import heroTeashop from './assect/imgs/hero-teashop.png';


const MyWork = () => {
  const marginTopBottom={
    marginBottom:"20px",
    marginTop:"15px",
    textAlign:"center"
  }
  return ( 
    <div style={marginTopBottom}>
    <h4 className="line">MY WORK</h4>
    <Link to="/project one">
      <div className="img-wrap">
       <img src={heroTeashop} alt="tea shop project" className="img" />
       <div className="overlay">
       <div className="text">
         <p className="project-title">Branding and Front-end Development Project</p>
           <p>Unicup Bubbea Tea Shop Webpage Design and Building</p>
         </div>
       </div>
      </div>
    </Link>
    </div>
   );
}
 
export default MyWork;