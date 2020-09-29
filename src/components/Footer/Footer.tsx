import React from 'react'
import styled from 'styled-components'

import Nav from './components/Nav'

const Footer: React.FC = () => (
  <StyledFooter>
    <Nav />
  </StyledFooter>
)

const StyledFooter = styled.footer`
  padding: 25px 0px;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
`

// const StyledFooterInner = styled.div`
//   align-items: center;
//   display: flex;
//   justify-content: center;
//   height: ${(props) => props.theme.topBarSize}px;
//   max-width: ${(props) => props.theme.siteWidth}px;
//   width: 100%;
// `

export default Footer
