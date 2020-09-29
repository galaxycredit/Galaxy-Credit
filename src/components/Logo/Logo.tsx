import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import logo from '../../assets/img/logo.png';

const Logo: React.FC = () => {
  return (
    <StyledLogo to="/">
      <StyledText>
        <img src={logo}/>
        {/* 🪐 Galaxy <MasterChefText>Planetarium</MasterChefText> */}
      </StyledText>
    </StyledLogo>
  )
}

const StyledLogo = styled(Link)`
  display: flex;
  width: 100%;
  margin: 0;
  min-height: 44px;
  padding: 0;
  text-decoration: none;
`

const StyledText = styled.span`
  color: ${(props) => props.theme.color.grey[600]};
  font-family: 'Reem Kufi', sans-serif;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.03em;
  display:flex;
  margin-left: ${(props) => props.theme.spacing[2]}px;
  @media (max-width: 400px) {
    display: none;
  }
`

const MasterChefText = styled.span`
  font-family: 'Kaushan Script', sans-serif;
`

export default Logo
