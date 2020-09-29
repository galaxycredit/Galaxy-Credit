import React from 'react'
import styled from 'styled-components'
import chef from '../../assets/img/chef.png'
import Button from '../../components/Button'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import Balances from './components/Balances'
import SushiIcon from '../../components/SushiIcon'
import galaxyIcon from '../../assets/img/galaxy-icon.png';
import smallRock from '../../assets/img/small-rock.png';

const Home: React.FC = () => {
  return (
    <div style={{marginTop: '100px'}}>   
      <Page>
        <PageHeader
          icon={''}
          title="Planetarium is Ready"
          // subtitle="Stake Uniswap LP tokens to claim your very own GALAXY!"
        />
        <Container>
          <Balances />
        </Container>
        <Spacer size="lg" />
        <div
          style={{
            margin: '0 auto',
          }}
        >
          <div style={{position: 'relative', marginTop: '26px'}}>       
            <Button text="See the Menu" to="/farms" variant="secondary">
              <img src={galaxyIcon} style={{height: '20px', marginRight: '8px'}}/>
            </Button>
            
            <div style={{ background: `url(${smallRock})`, height: '58px', width: '80px', position: 'absolute', backgroundRepeat: 'no-repeat', top: '56px', left: '48px' }}></div>
          </div>
        </div>
      </Page>
    </div>
  )
}

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.grey[500]};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  > b {
    color: ${(props) => props.theme.color.grey[600]};
  }
`

export default Home
