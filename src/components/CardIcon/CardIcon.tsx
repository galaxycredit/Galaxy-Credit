import React from 'react'
import styled from 'styled-components'

interface CardIconProps {
  children?: React.ReactNode,
}

const CardIcon: React.FC<CardIconProps> = ({ children }) => (
  <StyledCardIcon>
    {children}
  </StyledCardIcon>
)

const StyledCardIcon = styled.div`
  font-size: 36px;
  height: 50px;
  width: 50px;
  border-radius: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
    inset -6px -6px 12px ${props => props.theme.color.grey[100]};
  margin: 0 auto ${props => props.theme.spacing[3]}px;
  
  img {
    height: 45px;
  }
`

export default CardIcon