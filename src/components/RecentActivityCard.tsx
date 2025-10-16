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
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/15 ${
        isExpanded ? 'p-4 w-80' : 'p-3 w-48'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Minimal View */}
      <div className="space-y-2">
        <div className="text-xs text-gray-300">Activity</div>
        <div className="space-y-1">
          {data.slice(0, 2).map((tx, index) => (
            <div key={tx.hash} className="flex items-center space-x-2">
              <div className={`text-sm ${getTypeColor(tx.type)}`}>
                {getTypeIcon(tx.type)}
              </div>
              <div className="text-xs text-white/80">
                {tx.amount} {tx.token}
              </div>
              <div className="text-xs text-white/60">
                {formatTime(tx.timestamp)}
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-white/60">{data.length} recent</div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3 pt-3 border-t border-white/20 mt-3"
        >
          {data.map((tx, index) => (
            <div key={tx.hash} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`text-sm ${getTypeColor(tx.type)}`}>
                  {getTypeIcon(tx.type)}
                </div>
                <div>
                  <div className="text-sm text-white/90">
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
            </div>
          ))}
          <div className="text-xs text-gray-400">
            Click to collapse
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
