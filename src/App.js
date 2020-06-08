import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Dashboard } from './dashboard'
import './App.css';

export function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/:pageId" component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}

