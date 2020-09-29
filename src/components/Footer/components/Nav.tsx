import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink target="_blank" href="https://t.me/FarmGalaxy">
        Telegram
      </StyledLink>
      <StyledLink target="_blank" href="https://discord.gg/45MYrzg">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://twitter.com/farmgalaxy">
        Twitter
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/address/0xa264b1ba331b5b4708b887517c13d9af16082e43#code"
      >
        Planetarium Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://etherscan.io/token/0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc"
      >
        GALAXY Contract
      </StyledLink>
      <StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xFf7FF0AB0408bfE04C4Be9a7BfA6416c3FE52B7D"
      >
        Uniswap GALAXY-ETH
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
  font-weight: 600;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.white};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  font-size: 12px;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }

  @media (max-width: 767px) {
    margin-bottom: 15px;
  }
`

export default Nav
