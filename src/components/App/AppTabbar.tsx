import React from 'react'
import styled from 'styled-components'
import AppTabbarItem from './AppTabbarItem'

const AppTabbarStyled = styled.nav`
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  ul {
    display: flex;
  }
`

const AppTabbar: React.FunctionComponent = () => {
  return (
    <AppTabbarStyled>
      <ul>
        <AppTabbarItem icon="tag" routePath="/tags" routeName="标签" />

        <AppTabbarItem icon="file-text" routePath="/details" routeName="明细" />

        <AppTabbarItem
          icon="pie-chart"
          routePath="/statistics"
          routeName="统计"
        />
      </ul>
    </AppTabbarStyled>
  )
}

export default AppTabbar
