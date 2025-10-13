'use client';

import { useState, useEffect } from 'react';
// import { fetchMultiChainData, createBlockscoutClient } from '../lib/blockscout';
// import { SUPPORTED_CHAINS } from '../lib/chains';

interface PortfolioOverviewProps {
  address: string;
  selectedChain: number | null;
}

interface PortfolioData {
  totalValue: number;
  chainBreakdown: Array<{
    chain: string;
    value: number;
    percentage: number;
  }>;
  topTokens: Array<{
    symbol: string;
    value: number;
    change24h: number;
  }>;
}

export function PortfolioOverview({ address, selectedChain }: PortfolioOverviewProps) {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPortfolioData = async () => {
      setIsLoading(true);
      try {
        // Mock data for now - will be replaced with actual Blockscout MCP calls
        const mockData: PortfolioData = {
          totalValue: 15420.50,
          chainBreakdown: [
            { chain: 'Ethereum', value: 8500.25, percentage: 55.1 },
            { chain: 'Base', value: 3200.75, percentage: 20.8 },
            { chain: 'Arbitrum', value: 2100.00, percentage: 13.6 },
            { chain: 'Optimism', value: 1619.50, percentage: 10.5 },
          ],
          topTokens: [
            { symbol: 'ETH', value: 12000.00, change24h: 2.5 },
            { symbol: 'USDC', value: 2500.00, change24h: 0.1 },
            { symbol: 'ARB', value: 920.50, change24h: -1.2 },
          ],
        };
        
        setData(mockData);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPortfolioData();
  }, [address, selectedChain]);

  if (isLoading) {
    return (
      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded w-1/3 mb-4"></div>
          <div className="h-8 bg-gray-700 rounded w-1/2 mb-6"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-700 rounded"></div>
            <div className="h-4 bg-gray-700 rounded w-3/4"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
        <p className="text-gray-400">Unable to load portfolio data</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Portfolio Overview</h3>
      
      {/* Total Value */}
      <div className="mb-6">
        <div className="text-3xl font-bold text-green-400 mb-2">
          ${data.totalValue.toLocaleString()}
        </div>
        <div className="text-sm text-gray-400">
          Total Portfolio Value
        </div>
      </div>

      {/* Chain Breakdown */}
      <div className="mb-6">
        <h4 className="text-md font-semibold mb-3">Chain Distribution</h4>
        <div className="space-y-2">
          {data.chainBreakdown.map((item, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm">{item.chain}</span>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">${item.value.toLocaleString()}</div>
                <div className="text-xs text-gray-400">{item.percentage.toFixed(1)}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Tokens */}
      <div>
        <h4 className="text-md font-semibold mb-3">Top Holdings</h4>
        <div className="space-y-2">
          {data.topTokens.map((token, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-sm font-medium">{token.symbol}</span>
              <div className="text-right">
                <div className="text-sm">${token.value.toLocaleString()}</div>
                <div className={`text-xs ${token.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(1)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
