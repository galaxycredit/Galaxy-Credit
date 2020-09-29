import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'

import metamaskLogo from '../../assets/img/metamask-fox.svg'
import walletConnectLogo from '../../assets/img/wallet-connect.svg'
import twoRocks from '../../assets/img/two-rocks.png'

import Button from '../Button'
import Modal, { ModalProps } from '../Modal'
import ModalActions from '../ModalActions'
import ModalContent from '../ModalContent'
import ModalTitle from '../ModalTitle'
import Spacer from '../Spacer'

import WalletCard from './components/WalletCard'

const WalletProviderModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()

  useEffect(() => {
    if (account) {
      onDismiss()
    }
  }, [account, onDismiss])

  return (
    <div style={{ position: 'relative' }}>
      <Modal>
        <div style={{ paddingBottom: '16px' }}>
          <ModalTitle text="Select a wallet provider." />
        </div>

        <ModalContent>
          <StyledWalletsWrapper>
            <StyledWalletCard>
              <WalletCard
                icon={<img src={metamaskLogo} style={{ height: 63 }} />}
                onConnect={() => connect('injected')}
                title="Metamask"
              />
            </StyledWalletCard>
            <Spacer size="sm" />
            <StyledWalletCard>
              <WalletCard
                icon={<img src={walletConnectLogo} style={{ height: 54 }} />}
                onConnect={() => connect('walletconnect')}
                title="WalletConnect"
              />
            </StyledWalletCard>
          </StyledWalletsWrapper>
        </ModalContent>

        <ModalActions>
          <Button text="Cancel" variant="secondary" onClick={onDismiss} />
        </ModalActions>
      </Modal>

      <img
        style={{
          position: 'absolute',
          left: '-200px',
          bottom: '-140px',
          height: '220px',
        }}
        src={twoRocks}
      />
    </div>
  )
}

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default WalletProviderModal
