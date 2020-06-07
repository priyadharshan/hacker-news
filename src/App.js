import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard } from './dashboard'
import './App.css';

export function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/news/1" /> }
          />
          <Route exact path="/news/:pageId" component={Dashboard} />
          </Switch>
      </div>
    </Router>
  );
}

