import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import store from './store'


import Header from './partials/Header'
import Footer from './partials/Footer'
import Homepage from './pages/Homepage'

import Header from './partials/Header'
import Footer from './partials/Footer'
import HomePage from './components/homepage/Banner'
import ProjectPage from './components/projects/ProjectPage'
import NewProjectsPage from './components/projects/AddNewProject'
function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/newprojects" component={NewProjectsPage} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </StoreProvider>
  )
}

export default App
