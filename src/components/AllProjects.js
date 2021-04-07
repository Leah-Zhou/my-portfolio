import React from 'react';
import {Switch, Route}from 'react-router-dom';
import Unicup from './Unicup';
import Home from './Home';
import GreenP from './GreenP';
import WeatherApp from './WeatherApp';
import Branding from './Branding';
import Background from './Background';
import SunnyOp from './SunnyOp';
import DLsurvey from './DLsurvey';




const AllProject = () => {
  return ( 
    <>
    <Switch>
      <Route path="/" exact component={Home} ></Route>
      <Route path="/about me" component={Background} ></Route>
      <Route path="/green P project" component={GreenP} ></Route>
      <Route path="/unicup project" component={Unicup} ></Route>
      <Route path="/weather app project" component={WeatherApp} ></Route>
      <Route path="/branding project" component={Branding} ></Route>
      <Route path="/sunnyOp project" component={SunnyOp} ></Route>
      <Route path="/survey web design project" component={DLsurvey} ></Route>
    </Switch>
    </>
   );
}
 
export default AllProject;