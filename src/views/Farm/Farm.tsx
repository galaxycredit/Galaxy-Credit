import React, { useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import { provider } from 'web3-core'
import PageHeader from '../../components/PageHeader'
import Spacer from '../../components/Spacer'
import useFarm from '../../hooks/useFarm'
import useRedeem from '../../hooks/useRedeem'
import useSushi from '../../hooks/useSushi'
import { getMasterChefContract } from '../../sushi/utils'
import { getContract } from '../../utils/erc20'
import Harvest from './components/Harvest'
import Stake from './components/Stake'

import twoRocks from '../../assets/img/two-rocks.png'
import galaxyIcon from '../../assets/img/galaxy-icon.png'

const Farm: React.FC = () => {
  const { farmId } = useParams()
  const {
    pid,
    lpToken,
    lpTokenAddress,
    tokenAddress,
    earnToken,
    name,
    icon,
  } = useFarm(farmId) || {
    pid: 0,
    lpToken: '',
    lpTokenAddress: '',
    tokenAddress: '',
    earnToken: '',
    name: '',
    icon: '',
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const sushi = useSushi()
  const { ethereum } = useWallet()

  const lpContract = useMemo(() => {
    return getContract(ethereum as provider, lpTokenAddress)
  }, [ethereum, lpTokenAddress])

  const { onRedeem } = useRedeem(getMasterChefContract(sushi))

  const lpTokenName = useMemo(() => {
    return lpToken.toUpperCase()
  }, [lpToken])

  const earnTokenName = useMemo(() => {
    return earnToken.toUpperCase()
  }, [earnToken])

  return (
    <div style={{ position: 'relative', marginTop: '32px' }}>
      <div
        style={{
          background: 'rgb(2 7 22 / 0.5019607843137255)',
          padding: '0px 16px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <PageHeader
          icon={<img height="80px" src={galaxyIcon} />}
          title={name}
        />
        <StyledFarm>
          <StyledCardsWrapper>
            <StyledCardWrapper>
              <Harvest pid={pid} />
            </StyledCardWrapper>
            <Spacer />
            <StyledCardWrapper>
              <Stake
                lpContract={lpContract}
                pid={pid}
                tokenName={lpToken.toUpperCase()}
              />
            </StyledCardWrapper>
          </StyledCardsWrapper>
          <Spacer size="lg" />
          <StyledInfo>
            ⭐️ Every time you stake and unstake LP tokens, the contract will
            automagically harvest GALAXY rewards for you!
          </StyledInfo>
          <Spacer size="lg" />
        </StyledFarm>
      </div>

      <img
        style={{
          position: 'absolute',
          left: '6px',
          bottom: '-140px',
          height: '220px',
        }}
        src={twoRocks}
      />
    </div>
  )
}

const StyledFarm = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledCardsWrapper = styled.div`
  display: flex;
  width: 690px;
  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledCardWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
`

const StyledInfo = styled.h3`
  color: ${(props) => props.theme.color.white};
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default Farm
