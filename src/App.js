// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@mui/material';
import AllTrains from './components/AllTrains';
import SingleTrain from './components/SingleTrain';

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={AllTrains} />
          <Route path="/train/:trainId" component={SingleTrain} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
