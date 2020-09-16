import { fontSize3, themes } from 'components/Shared/Styles'
import React from 'react'
import styled from 'styled-components'
import AppTabbar from './AppTabbar'

interface Props {
  children: any
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const AppHeader = styled.header`
  ${fontSize3}
  background-color: ${themes.color};
  color: #fff;
  padding: 10px 0;
  text-align: center;
`
const AppMain = styled.div`
  flex: auto;
`

const AppLayout: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <AppContainer>
      <AppHeader>
        <h1>旺财记账</h1>
      </AppHeader>

      <AppMain>{children}</AppMain>

      <AppTabbar />
    </AppContainer>
  )
}

export default AppLayout
