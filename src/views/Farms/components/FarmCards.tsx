import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import Countdown, { CountdownRenderProps } from 'react-countdown'
import styled, { keyframes } from 'styled-components'
import { useWallet } from 'use-wallet'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from '../../../components/Button'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import CardIcon from '../../../components/CardIcon'
import Loader from '../../../components/Loader'
import Spacer from '../../../components/Spacer'
import { Farm } from '../../../contexts/Farms'
import useAllStakedValue, {
  StakedValue,
} from '../../../hooks/useAllStakedValue'
import useFarms from '../../../hooks/useFarms'
import useSushi from '../../../hooks/useSushi'
import { getEarned, getMasterChefContract } from '../../../sushi/utils'
import { bnToDec } from '../../../utils'
import fireworldIcon from '../../../assets/img/icons/fireworld.png'
import atlantisIcon from '../../../assets/img/icons/atlantis.png'
import galatusIcon from '../../../assets/img/icons/galatus.png'
import gravityIcon from '../../../assets/img/icons/gravity.png'
import magmaIcon from '../../../assets/img/icons/magma.png'
import venockIcon from '../../../assets/img/icons/venock.png'
import pinky from '../../../assets/img/icons/pinky.png'
import blueRadius from '../../../assets/img/icons/blue-radius.png'
import blue from '../../../assets/img/icons/blue.png'
import icon9 from '../../../assets/img/icons/9.png'
import icon10 from '../../../assets/img/icons/10.png'
import icon11 from '../../../assets/img/icons/11.png'
import icon12 from '../../../assets/img/icons/12.png'

import rightArrow from '../../../assets/img/arrows/right.png'
import leftArrow from '../../../assets/img/arrows/left.png'

import floatingRock1 from '../../../assets/img/floating-rock-1.png'
import floatingRock2 from '../../../assets/img/floating-rock-2.png'
import floatingRock3 from '../../../assets/img/floating-rock-3.png'
import floatingRock4 from '../../../assets/img/floating-rock-4.png'
import floatingRock5 from '../../../assets/img/floating-rock-5.png'
import floatingRock6 from '../../../assets/img/floating-rock-6.png'

const getFarmIcon = (id: Number) => {
  switch (id) {
    case 0:
      return fireworldIcon
      break
    case 1:
      return atlantisIcon
      break
    case 2:
      return galatusIcon
      break
    case 3:
      return magmaIcon
      break
    case 4:
      return gravityIcon
      break
    case 5:
      return venockIcon
      break
    case 6:
      return pinky
      break
    case 7:
      return blueRadius
      break
    case 8:
      return blue
      break
    case 9:
      return icon9
      break
    case 10:
      return icon10
      break
    case 11:
      return icon11
      break
    case 12:
      return icon12
      break
    default:
      break
  }
}

const getStoneImg = (id: Number) => {
  switch (id) {
    case 0:
      return {
        img: floatingRock1,
        topPosition: '-60px',
      }
      break
    case 1:
      return {
        img: floatingRock2,
        topPosition: '-50px',
      }
      break
    case 2:
      return {
        img: floatingRock3,
        topPosition: '-54px',
      }
      break
    case 3:
      return {
        img: floatingRock4,
        topPosition: '-50px',
      }
      break
    case 4:
      return {
        img: floatingRock5,
        topPosition: '-54px',
      }
      break
    case 5:
      return {
        img: floatingRock6,
        topPosition: '-50px',
      }
      break
    case 6:
      return {
        img: floatingRock6,
        topPosition: '-50px',
      }
      break
    case 7:
      return {
        img: floatingRock1,
        topPosition: '-60px',
      }
      break
    case 8:
      return {
        img: floatingRock2,
        topPosition: '-50px',
      }
      break
    case 9:
      return {
        img: floatingRock3,
        topPosition: '-54px',
      }
      break
    case 10:
      return {
        img: floatingRock4,
        topPosition: '-50px',
      }
      break
    case 11:
      return {
        img: floatingRock5,
        topPosition: '-54px',
      }
      break
    case 12:
      return {
        img: floatingRock6,
        topPosition: '-50px',
      }
      break
    default:
      break
  }
}

interface FarmWithStakedValue extends Farm, StakedValue {
  apy: BigNumber
}

interface FarmCardsProps {
  cards: number[]
}

const FarmCards: React.FC<FarmCardsProps> = ({cards}) => {
  const [farms] = useFarms()
  const { account } = useWallet()
  const stakedValue = useAllStakedValue()

  const sushiIndex = farms.findIndex(
    ({ tokenSymbol }) => tokenSymbol === 'GALAXY',
  )

  const sushiPrice =
    sushiIndex >= 0 && stakedValue[sushiIndex]
      ? stakedValue[sushiIndex].tokenPriceInWeth
      : new BigNumber(0)

  const BLOCKS_PER_YEAR = new BigNumber(2336000)
  const SUSHI_PER_BLOCK = new BigNumber(200)

  const rows = farms.filter(farm => cards.includes(farm.pid)).reduce<FarmWithStakedValue[][]>(
    (farmRows, farm, i) => {
      const farmWithStakedValue = {
        ...farm,
        ...stakedValue[farm.pid],
        apy: stakedValue[farm.pid]
          ? sushiPrice
              .times(SUSHI_PER_BLOCK)
              .times(BLOCKS_PER_YEAR)
              .times(stakedValue[farm.pid].poolWeight)
              .div(stakedValue[farm.pid].totalWethValue)
          : null,
      }
      const newFarmRows = [...farmRows]
      if (newFarmRows[newFarmRows.length - 1].length === 6) {
        newFarmRows.push([farmWithStakedValue])
      } else {
        newFarmRows[newFarmRows.length - 1].push(farmWithStakedValue)
      }
      return newFarmRows
    },
    [[]],
  )
  var settings = {
    dots: true,
    focusOnSelect: false,
    nextArrow: (
      <div>
        <img
          src={rightArrow}
          style={{
            position: 'relative',
            top: '-50px',
            right: '-15px',
            height: '120px',
            width: '70px',
          }}
        />
      </div>
    ),
    prevArrow: (
      <div>
        <img
          src={leftArrow}
          style={{
            position: 'relative',
            top: '-50px',
            left: '-70px',
            height: '120px',
            width: '70px',
          }}
        />
      </div>
    ),
  }
  return (
    <StyledCards>
      {!!rows[0].length ? (
        <Slider {...settings}>
          {rows.map((farmRow, i) => (
            <div key={i}>
              <StyledRow>
                {farmRow.map((farm, j) => (
                  <React.Fragment key={j}>
                    <FarmCard farm={farm} />
                    {/* {(j === 0 || j === 1) && <StyledSpacer />} */}
                  </React.Fragment>
                ))}
              </StyledRow>
            </div>
          ))}
        </Slider>
      ) : (
        <StyledLoadingWrapper>
          <Loader text="Travelling the galaxy ..." />
        </StyledLoadingWrapper>
      )}
    </StyledCards>
  )
}

interface FarmCardProps {
  farm: FarmWithStakedValue
}

const FarmCard: React.FC<FarmCardProps> = ({ farm }) => {
  const [startTime, setStartTime] = useState(0)
  const [harvestable, setHarvestable] = useState(0)

  const { account } = useWallet()
  const { lpTokenAddress } = farm
  const sushi = useSushi()

  const renderer = (countdownProps: CountdownRenderProps) => {
    const { hours, minutes, seconds } = countdownProps
    const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const paddedHours = hours < 10 ? `0${hours}` : hours
    return (
      <span style={{ width: '100%' }}>
        {paddedHours}:{paddedMinutes}:{paddedSeconds}
      </span>
    )
  }

  useEffect(() => {
    async function fetchEarned() {
      if (sushi) return
      const earned = await getEarned(
        getMasterChefContract(sushi),
        lpTokenAddress,
        account,
      )
      setHarvestable(bnToDec(earned))
    }
    if (sushi && account) {
      fetchEarned()
    }
  }, [sushi, lpTokenAddress, account, setHarvestable])

  const poolActive = true // startTime * 1000 - Date.now() <= 0

  return (
    <StyledCardWrapper>
      <div style={{ position: 'relative', margin: '0 auto', height: '410px' }}>
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Card>
            <CardContent>
              <StyledContent>
                {/* <CardIcon><span style={{fontSize: 60}}>{farm.icon}</span></CardIcon> */}
                <div>
                  <img height="70px" src={getFarmIcon(farm.pid)} />
                </div>
                <StyledTitle>{farm.name}</StyledTitle>
                <StyledDetails>
                  <StyledDetail>
                    Deposit <a href={farm.lpToken.endsWith(" BPT") ? "https://pools.balancer.exchange/#/pool/" + farm.lpTokenAddress + "/" : "https://uniswap.info/pair/" + farm.lpTokenAddress} target={"_blank"} style={{color: "#eee"}}>{farm.lpToken.toUpperCase()}</a>
                  </StyledDetail>
                  <StyledDetail>
                    Earn {farm.earnToken.toUpperCase()}
                  </StyledDetail>
                </StyledDetails>
                <Spacer />
                <Button
                  disabled={!poolActive}
                  text={poolActive ? 'Select' : undefined}
                  to={`/farms/${farm.id}`}
                >
                  {!poolActive && (
                    <Countdown
                      date={new Date(startTime * 1000)}
                      renderer={renderer}
                    />
                  )}
                </Button>
                <StyledInsight>
                  <span>APY</span>
                  <span>
                    {farm.apy
                      ? `${farm.apy
                          .times(new BigNumber(100))
                          .toNumber()
                          .toLocaleString('en-US')
                          .slice(0, -1)}%`
                      : 'Loading ...'}
                  </span>
                  {/* <span>
                    {farm.tokenAmount
                      ? (farm.tokenAmount.toNumber() || 0).toLocaleString('en-US')
                      : '-'}{' '}
                    {farm.tokenSymbol}
                  </span>
                  <span>
                    {farm.wethAmount
                      ? (farm.wethAmount.toNumber() || 0).toLocaleString('en-US')
                      : '-'}{' '}
                    ETH
                  </span> */}
                </StyledInsight>
              </StyledContent>
            </CardContent>
          </Card>
        </div>
        <img
          src={getStoneImg(farm.pid).img}
          style={{
            position: 'relative',
            top: `${getStoneImg(farm.pid).topPosition}`,
            left: '36px',
            width: '330px',
            height: '139px',
          }}
        />
      </div>
    </StyledCardWrapper>
  )
}

const RainbowLight = keyframes`
  
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`

const StyledCardAccent = styled.div`
  background-size: 300% 300%;
  border-radius: 12px;
  filter: blur(6px);
  position: absolute;
  top: -2px;
  right: -2px;
  bottom: -2px;
  left: -2px;
  z-index: -1;
`
// const StyledCardAccent = styled.div`
//   background: linear-gradient(
//     45deg,
//     rgba(255, 0, 0, 1) 0%,
//     rgba(255, 154, 0, 1) 10%,
//     rgba(208, 222, 33, 1) 20%,
//     rgba(79, 220, 74, 1) 30%,
//     rgba(63, 218, 216, 1) 40%,
//     rgba(47, 201, 226, 1) 50%,
//     rgba(28, 127, 238, 1) 60%,
//     rgba(95, 21, 242, 1) 70%,
//     rgba(186, 12, 248, 1) 80%,
//     rgba(251, 7, 217, 1) 90%,
//     rgba(255, 0, 0, 1) 100%
//   );
//   background-size: 300% 300%;
//   animation: ${RainbowLight} 2s linear infinite;
//   border-radius: 12px;
//   filter: blur(6px);
//   position: absolute;
//   top: -2px;
//   right: -2px;
//   bottom: -2px;
//   left: -2px;
//   z-index: -1;
// `

const StyledCards = styled.div`
  width: 1152px;
  @media (max-width: 768px) {
    width: 100%;
  }
`

const StyledLoadingWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
`

const StyledRow = styled.div`
  display: flex;
  margin-bottom: ${(props) => props.theme.spacing[4]}px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px;
  margin-top: ${(props) => props.theme.spacing[4]}px;
`

// const StyledRow = styled.div`
//   display: flex;
//   margin-bottom: ${(props) => props.theme.spacing[4]}px;
//   flex-flow: row wrap;
//   @media (max-width: 768px) {
//     width: 100%;
//     flex-flow: column nowrap;
//     align-items: center;
//   }
// `

const StyledCardWrapper = styled.div`
  display: flex;
  width: calc((1130px - ${(props) => props.theme.spacing[4]}px * 2) / 3);
  position: relative;
  margin: 0 auto;
  height: 410px;
`

const StyledTitle = styled.h4`
  color: ${(props) => props.theme.color.white};
  font-size: 20px;
  font-weight: 700;
  margin: ${(props) => props.theme.spacing[2]}px 0 0;
  padding: 0;
`

const StyledContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const StyledSpacer = styled.div`
  height: ${(props) => props.theme.spacing[4]}px;
  width: ${(props) => props.theme.spacing[4]}px;
`

const StyledDetails = styled.div`
  margin-top: ${(props) => props.theme.spacing[2]}px;
  text-align: center;
  color: ${(props) => props.theme.color.white};
  font-size: 15px;
  margin-top: 12px;
`

const StyledDetail = styled.div`
  color: ${(props) => props.theme.color.white};
`

const StyledInsight = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-radius: 4px;
  background: #020716;
  color: #ffffff;
  width: 100%;
  margin-top: 12px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  padding: 0 12px;
`

export default FarmCards
