import { fontSize3, themes } from 'components/Shared/Styles'
import React from 'react'
import styled from 'styled-components'
import AppTabbar from './AppTabbar'

interface Props {
  children: any
}

const AppContainer = styled.div.attrs({
  className: 'flex flex-col h-screen'
})``
const AppHeader = styled.header.attrs({
  className: 'text-white text-center'
})`
  ${fontSize3}
  background-color: ${themes.color};
  padding: 10px 0;
`
const AppMain = styled.div.attrs({
  className: 'flex-grow'
})``

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
