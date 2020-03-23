import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/projects">
          <ProjectPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
