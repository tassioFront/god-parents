import React from "react";
import Home from "../components/home/home";
import Contact from "../components/contact/contact";
import Popup from "../components/popup/Popup";
import GodParents from "../views/god-parents/GodParents";

// import { Container } from 'react-materialize';
import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main className="main">
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
      <Route path='/invite' component={GodParents} />
      <Route path='/invite/:id' component={Popup} />
    </Switch>
  </main>
);

export default Main;