import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Quiz from './components/Quiz';
import Score from './components/Score';
import Start from './components/Start';
import NotFound from './components/NotFound';

const App = () => {

  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/score" component={Score} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
