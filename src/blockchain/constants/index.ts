export const defaultChainId = 4

export const rpcUrls = {
  4: 'https://rinkeby.infura.io/v3/bf6d33e922864a8aa4bc8ef8db12a29d',
  42: 'https://kovan.infura.io/v3/2377373e9cc84228a6cea33645b511ea',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  1337: 'http://localhost:8545/',
}

export const networkNames = {
  4: 'Rinkeby Testnet',
  42: 'Kovan Testnet',
  97: 'BSC Testnet',
  1337: 'Ganache',
}

export const addresses: { [key: string]: { [key: number]: string } } = {
  factory: {
    4: '0x28196647fE931B176b9c1A8549A01261D6fd967d',
  },
  marketplace: {
    4: '0x94FF713b3fB7A52FE2E8ddb21bFc457BF83CaAD0',
  },
  deep: {
    4: '0x65630D59f310fa649E7C79270ebcd770Af803355',
    // 4: '0x02E7a059BF452d08a51DE3B817921382FeD10403',
    // 4: '0x4d3bfb12a6eba4a920c84f57143ba5ba2418d25e',
  },
}

export const tokenInfos = {
  bnb: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
}
