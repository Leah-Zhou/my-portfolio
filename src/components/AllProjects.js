import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import Unicup from './Unicup';
import Home from './Home';
import AboutMe from './AboutMe';
import GreenP from './GreenP';




const AllProject = () => {
  return ( 
    <>
    <Switch>
      <Route path="/" exact component={Home} ></Route>
      <Route path="/about me" component={AboutMe} ></Route>
      <Route path="/green P project" component={GreenP} ></Route>
      <Route path="/unicup project" component={Unicup} ></Route>
    </Switch>
    </>
   );
}
 
export default AllProject;