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

function App() {
  return (
    <StoreProvider store={store}>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={Homepage} />

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
