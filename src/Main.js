import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Honors from './components/Honors.js';
import Schedule from './components/Schedule.js';
import './Main.css';

const Main = () => (
  <main className="Main">
    <Switch>
     <Route exact path='/' component={Home} />
     <Route path='/honors' component={Honors} />
     <Route path='/schedule' component={Schedule} />
    </Switch>
  </main>
)

export default Main;
