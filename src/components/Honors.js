import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullHonors from './FullHonors.js'
import Honor from './Honor.js'

const Honors = () => (
  <div>
    <h2>Honors page:</h2>
    <Switch>
      <Route exact path= '/honors' component={FullHonors} />
      <Route path='/honors/:id' component={Honor} />
    </Switch>
  </div>
)

export default Honors;
