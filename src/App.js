import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Dashboard } from './dashboard'
import styles from './app.css';

export function App() {
  return (
    <Router>
      <div className={styles.app}>
        <header className={styles.appHeader}>
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

