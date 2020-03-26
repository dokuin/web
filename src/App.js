import React from 'react'
import { Provider as StoreProvider } from 'react-redux'
import {
  Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import store from './store'

import Header from './partials/Header'
import Footer from './partials/Footer'
import HomePage from './components/homepage/Banner'
import ProjectPage from './pages/ProjectPage'
import NewProjectsPage from './components/projects/AddNewProject'
import LoginPage from './pages/LoginPage'
import Preview from './pages/Preview'


const AuthenticationRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login'
          }}
        />
      )
    }
  />
)


const history = createBrowserHistory()

function App() {
  return (
    <StoreProvider store={store}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/projects" component={ProjectPage} />
          <Route path="/preview/:id" component={Preview} />
          {/* <AuthenticationRoute path="/profile" component={ProfilePage} /> */}
          <AuthenticationRoute
            path="/new-project"
            component={NewProjectsPage}
          />
          <Route path="/login" component={LoginPage} />
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
