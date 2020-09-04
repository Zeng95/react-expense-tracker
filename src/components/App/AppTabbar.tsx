import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const AppTabbarStyled = styled.nav`
  ul {
    display: flex;
  }

  li {
    flex: auto;
    text-align: center;
  }

  a {
    display: block;
    padding: 16px;
  }
`

class AppTabbar extends Component {
  render() {
    return (
      <AppTabbarStyled>
        <ul>
          <li>
            <Link to="/tags">标签</Link>
          </li>

          <li>
            <Link to="/details">明细</Link>
          </li>

          <li>
            <Link to="/statistics">统计</Link>
          </li>
        </ul>
      </AppTabbarStyled>
    )
  }
}

export default AppTabbar
