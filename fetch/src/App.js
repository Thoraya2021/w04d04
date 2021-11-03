
import React from 'react';
import './App.css';
import {Route,Switch} from "react-router-dom";
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Cards from './components/Cards';
import Card from './components/Card';
import Contact from './components/Contact';
function App () {
  return (
    <>
    <Nav/>
    <Switch>
    <Route exact path="/home" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/Cards" component={Cards} />
    <Route exact path="/Card/:id" component={Card} />


   </Switch>
   </>
  );
}

export default App;