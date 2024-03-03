import React, { useEffect } from 'react';
import {Switch, Route, useLocation}from 'react-router-dom';
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
import { AnimatePresence } from 'framer-motion';
import './styleSheet/AllProjects.scss'
import Gallery from './UI';
import LSApp from './LSApp';
import DesignSystem from './DesignSystem';
import KHNoti from './KHNoti';




const AllProject = () => {
  const location=useLocation();
  return ( 
    <>
    <AnimatePresence>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={MyHome} ></Route>
          <Route path="/about me" component={Background} ></Route>
          <Route path="/gallery" component={Gallery} ></Route>
          <Route path="/branding project" component={Branding} ></Route>
          <Route path="/mobile app project" component={LSApp} ></Route>
          <Route path="/survey web design project" component={DLsurvey} ></Route>
          <Route path="/design system project" component={DesignSystem}></Route>
          <Route path="/frontEnd" component={FrontEnd} ></Route>          
          <Route path="/notification page project" component={KHNoti} ></Route>
          {/* <Route path="/sunnyOp project" component={SunnyOp} ></Route> */}
          {/* <Route path="/green P project" component={GreenP} ></Route> */}
        </Switch>
     </AnimatePresence>
    </>
   );
}
 
export default AllProject;