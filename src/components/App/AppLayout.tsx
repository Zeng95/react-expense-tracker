import React, { Component } from 'react'
import styled from 'styled-components'
import AppTabbar from './AppTabbar'

interface Props {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const Main = styled.main`
  flex: 1;
`

class Layout extends Component<Props> {
  render() {
    const children = this.props.children

    return (
      <Container>
        <Main>{children}</Main>
        <AppTabbar />
      </Container>
    )
  }
}

export default Layout
