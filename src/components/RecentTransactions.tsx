'use client';

import { useState, useEffect } from 'react';
// import { SUPPORTED_CHAINS } from '../lib/chains';

interface RecentTransactionsProps {
  address: string;
  selectedChain: number | null;
}

interface TransactionData {
  hash: string;
  from: string;
  to: string;
  value: string;
  timestamp: number;
  method: string;
  status: 'success' | 'failed';
  chain: string;
  gasUsed: string;
}

export function RecentTransactions({ address, selectedChain }: RecentTransactionsProps) {
  const [data, setData] = useState<TransactionData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTransactionData = async () => {
      setIsLoading(true);
      try {
        // Mock data for now - will be replaced with actual Blockscout MCP calls
        const mockData: TransactionData[] = [
          {
            hash: '0x1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef',
            from: address,
            to: '0x742d35Cc6634C0532925a3b8D0C0E1c4C5F2A6B7',
            value: '1.5',
            timestamp: Date.now() - 3600000,
            method: 'transfer',
            status: 'success',
            chain: 'Ethereum',
            gasUsed: '21000',
          },
          {
            hash: '0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890',
            from: '0x742d35Cc6634C0532925a3b8D0C0E1c4C5F2A6B7',
            to: address,
            value: '0.5',
            timestamp: Date.now() - 7200000,
            method: 'swap',
            status: 'success',
            chain: 'Base',
            gasUsed: '150000',
          },
          {
            hash: '0x9876543210fedcba9876543210fedcba9876543210fedcba9876543210fedcba',
            from: address,
            to: '0x1234567890123456789012345678901234567890',
            value: '0.1',
            timestamp: Date.now() - 86400000,
            method: 'approve',
            status: 'failed',
            chain: 'Arbitrum',
            gasUsed: '46000',
          },
        ];
        
        setData(mockData);
      } catch (error) {
        console.error('Error loading transaction data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactionData();
  }, [address, selectedChain]);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  const formatTime = (timestamp: number) => {
    const now = Date.now();
    const diff = now - timestamp;
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(hours / 24);
    
    if (days > 0) return `${days}d ago`;
    if (hours > 0) return `${hours}h ago`;
    return 'Just now';
  };

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
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
      
      <div className="space-y-3">
        {data.map((tx, index) => (
          <div key={index} className="p-3 bg-gray-800/50 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${tx.status === 'success' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm font-medium">{tx.method}</span>
                <span className="text-xs text-gray-400">{tx.chain}</span>
              </div>
              <div className="text-xs text-gray-400">{formatTime(tx.timestamp)}</div>
            </div>
            
            <div className="text-sm text-gray-300 mb-1">
              {tx.value} ETH
            </div>
            
            <div className="text-xs text-gray-400">
              {formatAddress(tx.from)} → {formatAddress(tx.to)}
            </div>
            
            <div className="text-xs text-gray-500 mt-1">
              Gas: {tx.gasUsed}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-800">
        <button className="text-sm text-blue-400 hover:text-blue-300">
          View all transactions →
        </button>
      </div>
    </div>
  );
}
