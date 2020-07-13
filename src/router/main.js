import React from "react";
import GodParents from "../views/god-parents/GodParents";

import { Switch, Route } from 'react-router-dom'

const Main = () => (
  <main className="main">
    <Switch>
      <Route path='/invite' component={GodParents} />
    </Switch>
  </main>
);

export default Main;