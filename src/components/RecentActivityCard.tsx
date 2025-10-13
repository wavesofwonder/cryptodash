'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface RecentActivityCardProps {
  address: string;
}

interface TransactionData {
  hash: string;
  type: 'transfer' | 'swap' | 'approve' | 'mint' | 'burn';
  amount: string;
  token: string;
  timestamp: number;
  chain: string;
  status: 'success' | 'failed';
}

export function RecentActivityCard({ address }: RecentActivityCardProps) {
  const [data, setData] = useState<TransactionData[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mock data - will be replaced with real Blockscout MCP calls
    const mockData: TransactionData[] = [
      {
        hash: '0x1234...abcd',
        type: 'transfer',
        amount: '1.5',
        token: 'ETH',
        timestamp: Date.now() - 3600000,
        chain: 'Ethereum',
        status: 'success',
      },
      {
        hash: '0x5678...efgh',
        type: 'swap',
        amount: '0.5',
        token: 'USDC',
        timestamp: Date.now() - 7200000,
        chain: 'Base',
        status: 'success',
      },
      {
        hash: '0x9abc...ijkl',
        type: 'approve',
        amount: '1000',
        token: 'USDC',
        timestamp: Date.now() - 86400000,
        chain: 'Arbitrum',
        status: 'failed',
      },
    ];
    setData(mockData);
  }, [address]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'transfer': return '↗';
      case 'swap': return '⇄';
      case 'approve': return '✓';
      case 'mint': return '✨';
      case 'burn': return '🔥';
      default: return '•';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'transfer': return 'text-blue-400';
      case 'swap': return 'text-purple-400';
      case 'approve': return 'text-green-400';
      case 'mint': return 'text-pink-400';
      case 'burn': return 'text-orange-400';
      default: return 'text-gray-400';
    }
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300 ${
        isExpanded ? 'w-96' : 'w-80'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white/90">Recent Activity</h3>
          <div className="text-sm text-white/60">{data.length} txs</div>
        </div>

        <div className="space-y-3">
          {data.map((tx, index) => (
            <motion.div
              key={tx.hash}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className={`text-lg ${getTypeColor(tx.type)}`}>
                  {getTypeIcon(tx.type)}
                </div>
                <div>
                  <div className="text-sm font-medium text-white/90">
                    {tx.amount} {tx.token}
                  </div>
                  <div className="text-xs text-white/60">{tx.chain}</div>
                </div>
              </div>
              <div className="text-right">
                <div className={`text-xs ${
                  tx.status === 'success' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {tx.status}
                </div>
                <div className="text-xs text-white/60">{formatTime(tx.timestamp)}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="pt-4 border-t border-white/20"
          >
            <button className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
              View all transactions →
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
