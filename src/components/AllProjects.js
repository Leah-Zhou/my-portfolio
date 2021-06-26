import React from 'react';
import {Switch, Route}from 'react-router-dom';
// import Unicup from './Unicup';
import GreenP from './GreenP';
// import WeatherApp from './WeatherApp';
import Branding from './Branding';
import Background from './Background';
import SunnyOp from './SunnyOp';
import DLsurvey from './DLsurvey';
import FrontEnd from './FrontEnd';
import DesignWork from './UX';
import MyHome from './MyHome.js';




const AllProject = () => {
  return ( 
    <>
    <Switch>
      <Route path="/" exact component={MyHome} ></Route>
      <Route path="/about me" component={Background} ></Route>
      <Route path="/green P project" component={GreenP} ></Route>
      {/* <Route path="/unicup project" component={Unicup} ></Route> */}
      {/* <Route path="/weather app project" component={WeatherApp} ></Route> */}
      <Route path="/branding project" component={Branding} ></Route>
      <Route path="/sunnyOp project" component={SunnyOp} ></Route>
      <Route path="/survey web design project" component={DLsurvey} ></Route>
      <Route path="/frontEnd" component={FrontEnd} ></Route>
      <Route path="/design show case" component={DesignWork} ></Route>
    </Switch>
    </>
   );
}
 
export default AllProject;