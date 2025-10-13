import { SUPPORTED_CHAINS, ChainConfig } from './chains';
import { LocalStorage, CACHE_KEYS, CACHE_TTL } from './storage';

export interface AddressInfo {
  address: string;
  balance: string;
  ensName?: string;
  isContract: boolean;
  isVerified: boolean;
}

export interface TokenInfo {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: string;
  value?: number;
  price?: number;
  change24h?: number;
}

export interface TransactionInfo {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  method?: string;
  status: 'success' | 'failed';
  gasUsed: string;
  gasPrice: string;
}

export interface NFTToken {
  tokenId: string;
  name: string;
  description?: string;
  image?: string;
  collection: {
    name: string;
    symbol: string;
    address: string;
  };
}

export class BlockscoutClient {
  private chain: ChainConfig;

  constructor(chain: ChainConfig) {
    this.chain = chain;
  }

  private getCacheKey(suffix: string): string {
    return `${CACHE_KEYS.PORTFOLIO_DATA}_${this.chain.id}_${suffix}`;
  }

  async getAddressInfo(address: string): Promise<AddressInfo | null> {
    const cacheKey = this.getCacheKey(`address_${address}`);
    const cached = await LocalStorage.get<AddressInfo>(cacheKey);
    if (cached) return cached;

    try {
      // This would be replaced with actual MCP calls
      // For now, return mock data
      const mockData: AddressInfo = {
        address,
        balance: '0',
        isContract: false,
        isVerified: false,
      };

      await LocalStorage.set(cacheKey, mockData, CACHE_TTL.BALANCES);
      return mockData;
    } catch (error) {
      console.error('Error fetching address info:', error);
      return null;
    }
  }

  async getTokensByAddress(address: string): Promise<TokenInfo[]> {
    const cacheKey = this.getCacheKey(`tokens_${address}`);
    const cached = await LocalStorage.get<TokenInfo[]>(cacheKey);
    if (cached) return cached;

    try {
      // This would be replaced with actual MCP calls
      // For now, return mock data
      const mockData: TokenInfo[] = [
        {
          address: '0x0000000000000000000000000000000000000000',
          name: this.chain.nativeCurrency.name,
          symbol: this.chain.nativeCurrency.symbol,
          decimals: this.chain.nativeCurrency.decimals,
          balance: '1000000000000000000', // 1 ETH
          value: 2000,
          price: 2000,
          change24h: 2.5,
        },
      ];

      await LocalStorage.set(cacheKey, mockData, CACHE_TTL.BALANCES);
      return mockData;
    } catch (error) {
      console.error('Error fetching tokens:', error);
      return [];
    }
  }

  async getTransactionsByAddress(
    address: string,
    limit: number = 20
  ): Promise<TransactionInfo[]> {
    const cacheKey = this.getCacheKey(`transactions_${address}_${limit}`);
    const cached = await LocalStorage.get<TransactionInfo[]>(cacheKey);
    if (cached) return cached;

    try {
      // This would be replaced with actual MCP calls
      // For now, return mock data
      const mockData: TransactionInfo[] = [
        {
          hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
          from: address,
          to: '0x742d35Cc6634C0532925a3b8D0C0E1c4C5F2A6B7',
          value: '1000000000000000000',
          timestamp: Date.now() - 3600000, // 1 hour ago
          method: 'transfer',
          status: 'success',
          gasUsed: '21000',
          gasPrice: '20000000000',
        },
      ];

      await LocalStorage.set(cacheKey, mockData, CACHE_TTL.TRANSACTIONS);
      return mockData;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      return [];
    }
  }

  async getNFTTokensByAddress(address: string): Promise<NFTToken[]> {
    const cacheKey = this.getCacheKey(`nfts_${address}`);
    const cached = await LocalStorage.get<NFTToken[]>(cacheKey);
    if (cached) return cached;

    try {
      // This would be replaced with actual MCP calls
      // For now, return mock data
      const mockData: NFTToken[] = [
        {
          tokenId: '1',
          name: 'Cool NFT #1',
          description: 'A really cool NFT',
          image: 'https://via.placeholder.com/300x300',
          collection: {
            name: 'Cool Collection',
            symbol: 'COOL',
            address: '0x1234567890123456789012345678901234567890',
          },
        },
      ];

      await LocalStorage.set(cacheKey, mockData, CACHE_TTL.NFT_TOKENS);
      return mockData;
    } catch (error) {
      console.error('Error fetching NFTs:', error);
      return [];
    }
  }
}

// Factory function to create client for specific chain
export const createBlockscoutClient = (chainId: number): BlockscoutClient | null => {
  const chain = SUPPORTED_CHAINS.find(c => c.id === chainId);
  if (!chain) return null;
  return new BlockscoutClient(chain);
};

// Utility to fetch data across all chains
// TODO: Fix TypeScript generic type issue
// export const fetchMultiChainData = async <T>(
//   address: string,
//   fetchFn: (client: BlockscoutClient) => Promise<T>
// ): Promise<Array<{ chain: ChainConfig; data: T }>> => {
//   const results = await Promise.allSettled(
//     SUPPORTED_CHAINS.map(async (chain) => {
//       const client = new BlockscoutClient(chain);
//       const data = await fetchFn(client);
//       return { chain, data };
//     })
//   );

//   return results
//     .filter((result) => result.status === 'fulfilled')
//     .map((result) => (result as PromiseFulfilledResult<{ chain: ChainConfig; data: T }>).value);
// };
