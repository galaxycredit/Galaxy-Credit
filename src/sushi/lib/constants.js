import BigNumber from 'bignumber.js/bignumber'
import fireworldIcon from '../../assets/img/icons/fireworld.png'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}

export const addressMap = {
  uniswapFactory: '0xc0a47dFe034B400B47bDaD5FecDa2621de6c4d95',
  uniswapFactoryV2: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  YFI: '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
  YCRV: '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8',
  UNIAmpl: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
  WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  UNIRouter: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
  LINK: '0x514910771AF9Ca656af840dff83E8264EcF986CA',
  MKR: '0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2',
  SNX: '0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F',
  COMP: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
  LEND: '0x80fB784B7eD66730e8b1DBd9820aFD29931aab03',
  SUSHIYCRV: '0x2C7a51A357d5739C5C74Bf3C96816849d2c9F726',
}

export const contractAddresses = {
  sushi: {
    1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
  },
  masterChef: {
    1: '0xa264b1ba331b5b4708b887517c13d9af16082e43',
  },
  weth: {
    1: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}

/*
UNI-V2 LP Address on mainnet for reference
==========================================
*/

export const supportedPools = [
  {
    pid: 0,
    lpAddresses: {
      1: '0xFf7FF0AB0408bfE04C4Be9a7BfA6416c3FE52B7D',
    },
    tokenAddresses: {
      1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
    },
    name: 'Fireworld',
    symbol: 'GALAXY-ETH UNI-V2 LP',
    tokenSymbol: 'GALAXY',
    icon: '🪐',
  },
  {
    pid: 1,
    lpAddresses: {
      1: '0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852',
    },
    tokenAddresses: {
      1: '0xdac17f958d2ee523a2206206994597c13d831ec7',
    },
    name: 'Atlantis',
    symbol: 'ETH-USDT UNI-V2 LP',
    tokenSymbol: 'USDT',
    icon: '💵',
  },
  {
    pid: 2,
    lpAddresses: {
      1: '0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974',
    },
    tokenAddresses: {
      1: '0x514910771af9ca656af840dff83e8264ecf986ca',
    },
    name: 'Galatus',
    symbol: 'LINK-ETH UNI-V2 LP',
    tokenSymbol: 'LINK',
    icon: '🔗',
  },
  {
    pid: 3,
    lpAddresses: {
      1: '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
    },
    tokenAddresses: {
      1: '0x6b175474e89094c44da98b954eedeac495271d0f',
    },
    name: 'Magma-X49',
    symbol: 'DAI-ETH UNI-V2 LP',
    tokenSymbol: 'DAI',
    icon: '💵',
  },
  {
    pid: 4,
    lpAddresses: {
      1: '0xc5be99a02c6857f9eac67bbce58df5572498f40c',
    },
    tokenAddresses: {
      1: '0xd46ba6d942050d489dbd938a2c909a5d5039a161',
    },
    name: 'Gravity-b15',
    symbol: 'ETH-AMPL UNI-V2 LP',
    tokenSymbol: 'AMPL',
    icon: '🐥',
  },
  {
    pid: 5,
    lpAddresses: {
      1: '0x2fdbadf3c4d5a8666bc06645b8358ab803996e28',
    },
    tokenAddresses: {
      1: '0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e',
    },
    name: 'Venock',
    symbol: 'YFI-ETH UNI-V2 LP',
    tokenSymbol: 'YFI',
    icon: '🐋',
  },
  {
    pid: 6,
    lpAddresses: {
      1: '0x88d97d199b9ed37c29d846d00d443de980832a22',
    },
    tokenAddresses: {
      1: '0x04fa0d235c4abf4bcf4787af4cf447de572ef828',
    },
    name: 'Obsidian-7',
    symbol: 'UMA-ETH UNI-V2 LP',
    tokenSymbol: 'UMA',
    icon: '🏖',
  },
  {
    pid: 7,
    lpAddresses: {
      1: '0xcffdded873554f362ac02f8fb1f02e5ada10516f',
    },
    tokenAddresses: {
      1: '0xc00e94cb662c3520282e6f5717214004a7f26888',
    },
    name: 'Arachlands',
    symbol: 'COMP-ETH UNI-V2 LP',
    tokenSymbol: 'COMP',
    icon: '💻',
  },
  {
    pid: 8,
    lpAddresses: {
      1: '0xd3d2e2692501a5c9ca623199d38826e513033a17',
    },
    tokenAddresses: {
      1: '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    },
    name: 'Kepler-10c',
    symbol: 'UNI-ETH UNI-V2 LP',
    tokenSymbol: 'UNI',
    icon: '🦄',
  },
  {
    pid: 9,
    lpAddresses: {
      1: '0x12B8c17929aF18179F4Fe332CB7125b9c03f216C',
    },
    tokenAddresses: {
      1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
    },
    name: 'Sunraze',
    symbol: 'GALAXY-SUSHI UNI-V2 LP',
    tokenSymbol: 'GALAXY',
    icon: '🪐',
  },
  {
    pid: 10,
    lpAddresses: {
      1: '0xB763A767cE3D46418B525A690E81835c043B58Fb',
    },
    tokenAddresses: {
      1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
    },
    name: 'Magnetosphere',
    symbol: 'GALAXY-SASHIMI UNI-V2 LP',
    tokenSymbol: 'GALAXY',
    icon: '🪐',
  },
  {
    pid: 11,
    lpAddresses: {
      1: '0x37c0493520E6Ca8dbAC23BFa817D915507feb623',
    },
    tokenAddresses: {
      1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
    },
    name: 'SafeHome',
    symbol: 'GALAXY-MEME UNI-V2 LP',
    tokenSymbol: 'GALAXY',
    icon: '🪐',
  },
  {
    pid: 12,
    lpAddresses: {
      1: '0xF1b3CAa032507a7C35c49F8e456A53Eb149e1ECa',
    },
    tokenAddresses: {
      1: '0x09a59b9b677cbaad89cd1ba37ea1d42d3449a6fc',
    },
    name: 'Planetoid',
    symbol: 'GALAXY-YAMv2 UNI-V2 LP',
    tokenSymbol: 'GALAXY',
    icon: '🪐',
  },
]
