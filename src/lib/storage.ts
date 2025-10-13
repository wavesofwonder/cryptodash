interface CacheItem<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

export class LocalStorage {
  private static isExtension(): boolean {
    return typeof chrome !== 'undefined' && !!chrome.storage;
  }

  static async get<T>(key: string): Promise<T | null> {
    try {
      if (this.isExtension()) {
        const result = await chrome.storage.local.get(key);
        const item = result[key] as CacheItem<T> | undefined;
        
        if (!item) return null;
        
        // Check if expired
        if (Date.now() - item.timestamp > item.ttl) {
          await this.remove(key);
          return null;
        }
        
        return item.data;
      } else {
        const item = localStorage.getItem(key);
        if (!item) return null;
        
        const parsed = JSON.parse(item) as CacheItem<T>;
        
        // Check if expired
        if (Date.now() - parsed.timestamp > parsed.ttl) {
          localStorage.removeItem(key);
          return null;
        }
        
        return parsed.data;
      }
    } catch (error) {
      console.error('Storage get error:', error);
      return null;
    }
  }

  static async set<T>(key: string, data: T, ttl: number = 5 * 60 * 1000): Promise<void> {
    try {
      const item: CacheItem<T> = {
        data,
        timestamp: Date.now(),
        ttl,
      };

      if (this.isExtension()) {
        await chrome.storage.local.set({ [key]: item });
      } else {
        localStorage.setItem(key, JSON.stringify(item));
      }
    } catch (error) {
      console.error('Storage set error:', error);
    }
  }

  static async remove(key: string): Promise<void> {
    try {
      if (this.isExtension()) {
        await chrome.storage.local.remove(key);
      } else {
        localStorage.removeItem(key);
      }
    } catch (error) {
      console.error('Storage remove error:', error);
    }
  }

  static async clear(): Promise<void> {
    try {
      if (this.isExtension()) {
        await chrome.storage.local.clear();
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.error('Storage clear error:', error);
    }
  }
}

// Cache keys
export const CACHE_KEYS = {
  WALLET_ADDRESS: 'wallet_address',
  AUTHENTICATED: 'authenticated',
  PORTFOLIO_DATA: 'portfolio_data',
  TOKEN_BALANCES: 'token_balances',
  TRANSACTIONS: 'transactions',
  NFT_TOKENS: 'nft_tokens',
  SUBSCRIPTION_STATUS: 'subscription_status',
} as const;

// TTL constants (in milliseconds)
export const CACHE_TTL = {
  BALANCES: 5 * 60 * 1000, // 5 minutes
  TRANSACTIONS: 30 * 60 * 1000, // 30 minutes
  NFT_TOKENS: 60 * 60 * 1000, // 1 hour
  SUBSCRIPTION: 60 * 60 * 1000, // 1 hour
} as const;
