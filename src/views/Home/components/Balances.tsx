import BigNumber from 'bignumber.js'
import React, { useEffect, useState } from 'react'
import CountUp from 'react-countup'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'
import Card from '../../../components/Card'
import CardContent from '../../../components/CardContent'
import useAllEarnings from '../../../hooks/useAllEarnings'
import useAllStakedValue from '../../../hooks/useAllStakedValue'
import Label from '../../../components/Label'
import SushiIcon from '../../../components/SushiIcon'
import Value from '../../../components/Value'
import useFarms from '../../../hooks/useFarms'
import useTokenBalance from '../../../hooks/useTokenBalance'
import useSushi from '../../../hooks/useSushi'
import { getSushiAddress, getSushiSupply } from '../../../sushi/utils'
import floatingRock1 from '../../../assets/img/floating-rock-1.png'
import floatingRock2 from '../../../assets/img/floating-rock-2.png'
import { getBalanceNumber } from '../../../utils/formatBalance'

import galaxyIcon from '../../../assets/img/galaxy-icon.png'

const PendingRewards: React.FC = () => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)
  const [scale, setScale] = useState(1)

  const allEarnings = useAllEarnings()
  let sumEarning = 0
  for (let earning of allEarnings) {
    sumEarning += new BigNumber(earning)
      .div(new BigNumber(10).pow(18))
      .toNumber()
  }

  const [farms] = useFarms()
  const allStakedValue = useAllStakedValue()

  if (allStakedValue && allStakedValue.length) {
    const sumWeth = farms.reduce(
      (c, { id }, i) => c + (allStakedValue[i].totalWethValue.toNumber() || 0),
      0,
    )
  }

  useEffect(() => {
    setStart(end)
    setEnd(sumEarning)
  }, [end, sumEarning])

  return (
    <span
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'right bottom',
        transition: 'transform 0.5s',
        display: 'inline-block',
      }}
    >
      <CountUp
        start={start}
        end={end}
        decimals={end < 0 ? 4 : end > 1e5 ? 0 : 3}
        duration={1}
        onStart={() => {
          setScale(1.25)
          setTimeout(() => setScale(1), 600)
        }}
        separator=","
      />
    </span>
  )
}

const Balances: React.FC = () => {
  const [totalSupply, setTotalSupply] = useState<BigNumber>()
  const sushi = useSushi()
  const sushiBalance = useTokenBalance(getSushiAddress(sushi))
  const { account, ethereum }: { account: any; ethereum: any } = useWallet()

  useEffect(() => {
    async function fetchTotalSupply() {
      const supply = await getSushiSupply(sushi)
      setTotalSupply(supply)
    }
    if (sushi) {
      fetchTotalSupply()
    }
  }, [sushi, setTotalSupply])

  return (
    <StyledWrapper>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 10, width: '350px' }}>
          <Card>
            <CardContent>
              <StyledBalances>
                <StyledBalance>
                  {/* <SushiIcon /> */}
                  {/* <Spacer /> */}
                  <div style={{ flex: 1 }}>
                    <Label text="Your GALAXY Balance" />
                    <Value
                      value={
                        !!account ? getBalanceNumber(sushiBalance) : 'Locked'
                      }
                    />
                  </div>
                  <div>
                    <img src={galaxyIcon} height="68px" />
                  </div>
                </StyledBalance>
              </StyledBalances>
            </CardContent>

            <CardDivider />

            <Footnote>
              Pending harvest
              <FootnoteValue>
                <PendingRewards /> GALAXY
              </FootnoteValue>
            </Footnote>
          </Card>
        </div>

        <div
          style={{
            background: `url(${floatingRock1})`,
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundRepeat: 'no-repeat',
            top: '125px',
            left: '48px',
          }}
        ></div>
      </div>
      {/* <Spacer /> */}

      <div style={{ position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 10, width: '350px' }}>
          <Card>
            <CardContent>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                  <Label text="Total GALAXY Supply" />
                  <Value
                    value={
                      totalSupply ? getBalanceNumber(totalSupply) : 'Locked'
                    }
                  />
                </div>
                <div>
                  <img src={galaxyIcon} height="68px" />
                </div>
              </div>
            </CardContent>

            <CardDivider />

            <Footnote>
              New rewards per block
              <FootnoteValue>5 GALAXY</FootnoteValue>
            </Footnote>
          </Card>
        </div>

        <div
          style={{
            background: `url(${floatingRock2})`,
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundRepeat: 'no-repeat',
            top: '128px',
            left: '48px',
          }}
        ></div>
      </div>
    </StyledWrapper>
  )
}

const CardDivider = styled.div`
  width: 90%;
  height: 0.5px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.color.white};
`

const Footnote = styled.div`
  font-size: 14px;
  padding: 8px 20px;
  color: ${(props) => props.theme.color.white};
  font-weight: bold;
`
// const Footnote = styled.div`
//   font-size: 14px;
//   padding: 8px 20px;
//   color: ${(props) => props.theme.color.grey[400]};
//   border-top: solid 1px ${(props) => props.theme.color.grey[300]};
// `
const FootnoteValue = styled.div`
  font-family: 'Roboto Mono', monospace;
  float: right;
`

const StyledWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding-top: 30px;

  @media (max-width: 768px) {
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
`

const StyledBalances = styled.div`
  display: flex;
`

const StyledBalance = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
`

export default Balances
