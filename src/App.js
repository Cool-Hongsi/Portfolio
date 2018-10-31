import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Landing from './components/landingpage';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';
import First from './components/first';
import NotFound from './components/notfound';

export default class App extends React.Component{
  render(){
    return(
      <div>
        <Switch>
          <Route exact path="/" render={() => ( /* do not use {} */
            <First />
          )}/>
          <Route path="/landing" render={() => (
            <Landing />
          )}/>
          <Route path="/about" render={() => (
            <About />
          )}/>
          <Route path="/contact" render={() => (
            <Contact />
          )}/>
          <Route path="/projects" render={() => (
            <Projects />
          )}/>
          <Route path="/resume" render={() => (
            <Resume />
          )}/>
          <Route path="*" render={() => (
            <NotFound />
          )}/>
        </Switch>
      </div>
    )
  }
}