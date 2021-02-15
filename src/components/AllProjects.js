import React from 'react';
import {BrowserRouter as Router, Switch, Route}from 'react-router-dom';
import ProjectOne from './ProjectOne';
import Home from './Home';
import AboutMe from './AboutMe';




const AllProject = () => {
  return ( 
    <>
    <Switch>
      <Route path="/" exact component={Home} ></Route>
      <Route path="/about me" component={AboutMe} ></Route>
      <Route path="/project one" component={ProjectOne} ></Route>
    </Switch>
    </>
   );
}
 
export default AllProject;