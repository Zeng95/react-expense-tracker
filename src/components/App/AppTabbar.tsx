import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Tag, FileText, PieChart } from '@styled-icons/feather'

const AppTabbarStyled = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
  }

  li {
    flex: auto;
  }

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: 9px;

    svg {
      height: 20px;
      width: 20px;
    }
  }
`

class AppTabbar extends Component {
  render() {
    return (
      <AppTabbarStyled>
        <ul>
          <li>
            <Link to="/tags">
              <Tag />
              <span>标签</span>
            </Link>
          </li>

          <li>
            <Link to="/details">
              <FileText />
              <span>明细</span>
            </Link>
          </li>

          <li>
            <Link to="/statistics">
              <PieChart />
              <span>统计</span>
            </Link>
          </li>
        </ul>
      </AppTabbarStyled>
    )
  }
}

export default AppTabbar
