import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from 'react-router-dom'
import AppTabbar from 'components/App/AppTabbar'
import styled from 'styled-components'

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
`

function App() {
  return (
    <Router>
      <Container>
        <Main>
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
        </Main>

        <AppTabbar />
      </Container>
    </Router>
  )
}

// You can think of these components as "pages"
// in your app.

function Tags() {
  return (
    <div>
      <h2>标签</h2>
    </div>
  )
}

function Details() {
  return (
    <div>
      <h2>明细</h2>
    </div>
  )
}

function Statistics() {
  return (
    <div>
      <h2>统计</h2>
    </div>
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
