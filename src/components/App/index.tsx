import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom'
import AppLayout from 'components/App/AppLayout'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/details" />

        <Route path="/tags">
          <Tags />
        </Route>

        <Route path="/details">
          <Details />
        </Route>

        <Route path="/statistics">
          <Statistics />
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}

// You can think of these components as "pages"
// in your app.

function Tags() {
  return (
    <AppLayout>
      <h2>标签</h2>
    </AppLayout>
  )
}

function Details() {
  return (
    <AppLayout>
      <h2>明细</h2>
    </AppLayout>
  )
}

function Statistics() {
  return (
    <AppLayout>
      <h2>统计</h2>
    </AppLayout>
  )
}

function NoMatch() {
  const location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

export default App
