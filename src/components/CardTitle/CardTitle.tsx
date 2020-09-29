import React from 'react'
import styled from 'styled-components'

interface CardTitleProps {
  text?: string
}

const CardTitle: React.FC<CardTitleProps> = ({ text }) => (
  <StyledCardTitle>{text}</StyledCardTitle>
)

const StyledCardTitle = styled.div`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 300;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export default CardTitle
