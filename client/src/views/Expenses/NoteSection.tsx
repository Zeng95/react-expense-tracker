import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const NoteSectionStyled = styled.section`
  color: #61708f;
  margin: 0 0 20px 20px;
`

const NoteSection: FunctionComponent = () => {
  return <NoteSectionStyled>添加备注</NoteSectionStyled>
}

export { NoteSection }
