import React from 'react'
import styled from 'styled-components'

const Card: React.FC = ({ children }) => <StyledCard>{children}</StyledCard>

// const StyledCard = styled.div`
//   background: ${(props) => props.theme.color.grey[200]};
//   border: 1px solid ${(props) => props.theme.color.grey[300]}ff;
//   border-radius: 12px;
//   box-shadow: inset 1px 1px 0px ${(props) => props.theme.color.grey[100]};
//   display: flex;
//   flex: 1;
//   flex-direction: column;
// `

const StyledCard = styled.div`
  background: rgb(2 7 22 / 0.7);
  padding: 16px 8px;
  border-radius: 24px;
  display: flex;
  flex: 1;
  flex-direction: column;
  box-shadow: 0px 0px 10px 5px rgba(143, 26, 135, 1);
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    margin-bottom: 120px;
  }
`

export default Card
