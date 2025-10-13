'use client';

import { useState, useEffect } from 'react';
// import { SUPPORTED_CHAINS } from '../lib/chains';

interface ChainActivityProps {
  address: string;
}

interface ChainActivityData {
  chain: string;
  transactionCount: number;
  lastActivity: number;
  activityLevel: 'high' | 'medium' | 'low';
}

export function ChainActivity({ address }: ChainActivityProps) {
  const [data, setData] = useState<ChainActivityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadActivityData = async () => {
      setIsLoading(true);
      try {
        // Mock data for now - will be replaced with actual Blockscout MCP calls
        const mockData: ChainActivityData[] = [
          { chain: 'Ethereum', transactionCount: 45, lastActivity: Date.now() - 3600000, activityLevel: 'high' },
          { chain: 'Base', transactionCount: 23, lastActivity: Date.now() - 7200000, activityLevel: 'medium' },
          { chain: 'Arbitrum', transactionCount: 12, lastActivity: Date.now() - 86400000, activityLevel: 'low' },
          { chain: 'Optimism', transactionCount: 8, lastActivity: Date.now() - 172800000, activityLevel: 'low' },
          { chain: 'Polygon', transactionCount: 3, lastActivity: Date.now() - 259200000, activityLevel: 'low' },
        ];
        
        setData(mockData);
      } catch (error) {
        console.error('Error loading activity data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadActivityData();
  }, [address]);

  const getActivityColor = (level: string) => {
    switch (level) {
      case 'high': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  // const getActivityIntensity = (count: number) => {
  //   if (count > 30) return 'high';
  //   if (count > 10) return 'medium';
  //   return 'low';
  // };

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
      <h3 className="text-lg font-semibold mb-4">Chain Activity</h3>
      
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${getActivityColor(item.activityLevel)}`}></div>
              <span className="text-sm font-medium">{item.chain}</span>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium">{item.transactionCount} txs</div>
              <div className="text-xs text-gray-400">
                {new Date(item.lastActivity).toLocaleDateString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-800">
        <div className="text-xs text-gray-400">
          Activity levels: <span className="text-green-400">●</span> High, <span className="text-yellow-400">●</span> Medium, <span className="text-gray-400">●</span> Low
        </div>
      </div>
    </div>
  );
}
