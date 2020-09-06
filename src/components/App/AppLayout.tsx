import React from 'react'
import styled from 'styled-components'
import AppTabbar from './AppTabbar'

interface Props {
  children: any
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Main = styled.main`
  flex: 1;
`

const AppLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <Container>
      <Main>{props.children}</Main>
      <AppTabbar />
    </Container>
  )
}

export default AppLayout
