'use client';

import { useState, useEffect } from 'react';
// import { SUPPORTED_CHAINS } from '../lib/chains';

interface TokenHoldingsProps {
  address: string;
  selectedChain: number | null;
}

interface TokenData {
  symbol: string;
  name: string;
  balance: string;
  value: number;
  change24h: number;
  chain: string;
  address: string;
}

export function TokenHoldings({ address, selectedChain }: TokenHoldingsProps) {
  const [data, setData] = useState<TokenData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'value' | 'change24h' | 'symbol'>('value');

  useEffect(() => {
    const loadTokenData = async () => {
      setIsLoading(true);
      try {
        // Mock data for now - will be replaced with actual Blockscout MCP calls
        const mockData: TokenData[] = [
          {
            symbol: 'ETH',
            name: 'Ethereum',
            balance: '5.25',
            value: 10500.00,
            change24h: 2.5,
            chain: 'Ethereum',
            address: '0x0000000000000000000000000000000000000000',
          },
          {
            symbol: 'USDC',
            name: 'USD Coin',
            balance: '2500.00',
            value: 2500.00,
            change24h: 0.1,
            chain: 'Ethereum',
            address: '0xA0b86a33E6441b8C4C8C0C4C8C0C4C8C0C4C8C0C4',
          },
          {
            symbol: 'ARB',
            name: 'Arbitrum',
            balance: '1000.00',
            value: 920.50,
            change24h: -1.2,
            chain: 'Arbitrum',
            address: '0xB86a33E6441b8C4C8C0C4C8C0C4C8C0C4C8C0C4C8',
          },
          {
            symbol: 'OP',
            name: 'Optimism',
            balance: '500.00',
            value: 450.00,
            change24h: 3.2,
            chain: 'Optimism',
            address: '0xC86a33E6441b8C4C8C0C4C8C0C4C8C0C4C8C0C4C8',
          },
        ];
        
        setData(mockData);
      } catch (error) {
        console.error('Error loading token data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTokenData();
  }, [address, selectedChain]);

  const sortedData = [...data].sort((a, b) => {
    switch (sortBy) {
      case 'value':
        return b.value - a.value;
      case 'change24h':
        return b.change24h - a.change24h;
      case 'symbol':
        return a.symbol.localeCompare(b.symbol);
      default:
        return 0;
    }
  });

  if (isLoading) {
    return (
      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-1/2 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Token Holdings</h3>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'value' | 'change24h' | 'symbol')}
          className="bg-gray-800 text-white text-sm rounded px-3 py-1 border border-gray-700"
        >
          <option value="value">Sort by Value</option>
          <option value="change24h">Sort by 24h Change</option>
          <option value="symbol">Sort by Symbol</option>
        </select>
      </div>
      
      <div className="space-y-3">
        {sortedData.map((token, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {token.symbol.charAt(0)}
              </div>
              <div>
                <div className="text-sm font-medium">{token.symbol}</div>
                <div className="text-xs text-gray-400">{token.chain}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">${token.value.toLocaleString()}</div>
              <div className="text-xs text-gray-400">{token.balance} {token.symbol}</div>
              <div className={`text-xs ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(1)}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
