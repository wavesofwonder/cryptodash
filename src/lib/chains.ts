export interface ChainConfig {
  id: number;
  name: string;
  rpcUrl: string;
  blockscoutApiUrl: string;
  explorerUrl: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}

export const SUPPORTED_CHAINS: ChainConfig[] = [
  {
    id: 1,
    name: "Ethereum",
    rpcUrl: "https://eth.llamarpc.com",
    blockscoutApiUrl: "https://eth.blockscout.com/api",
    explorerUrl: "https://eth.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 8453,
    name: "Base",
    rpcUrl: "https://mainnet.base.org",
    blockscoutApiUrl: "https://base.blockscout.com/api",
    explorerUrl: "https://base.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 42161,
    name: "Arbitrum",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
    blockscoutApiUrl: "https://arbitrum.blockscout.com/api",
    explorerUrl: "https://arbitrum.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 10,
    name: "Optimism",
    rpcUrl: "https://mainnet.optimism.io",
    blockscoutApiUrl: "https://optimism.blockscout.com/api",
    explorerUrl: "https://optimism.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 324,
    name: "zkSync Era",
    rpcUrl: "https://mainnet.era.zksync.io",
    blockscoutApiUrl: "https://era.zksync.blockscout.com/api",
    explorerUrl: "https://era.zksync.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 59144,
    name: "Linea",
    rpcUrl: "https://rpc.linea.build",
    blockscoutApiUrl: "https://linea.blockscout.com/api",
    explorerUrl: "https://linea.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 137,
    name: "Polygon",
    rpcUrl: "https://polygon-rpc.com",
    blockscoutApiUrl: "https://polygon.blockscout.com/api",
    explorerUrl: "https://polygon.blockscout.com",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18,
    },
  },
  {
    id: 534352,
    name: "Scroll",
    rpcUrl: "https://rpc.scroll.io",
    blockscoutApiUrl: "https://scroll.blockscout.com/api",
    explorerUrl: "https://scroll.blockscout.com",
    nativeCurrency: {
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
  },
  {
    id: 56,
    name: "BNB Smart Chain",
    rpcUrl: "https://bsc-dataseed1.binance.org",
    blockscoutApiUrl: "https://bsc.blockscout.com/api",
    explorerUrl: "https://bsc.blockscout.com",
    nativeCurrency: {
      name: "BNB",
      symbol: "BNB",
      decimals: 18,
    },
  },
];

export const getChainById = (id: number): ChainConfig | undefined => {
  return SUPPORTED_CHAINS.find(chain => chain.id === id);
};

export const getChainByName = (name: string): ChainConfig | undefined => {
  return SUPPORTED_CHAINS.find(chain => chain.name === name);
};
