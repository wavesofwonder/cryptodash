'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ChainActivityCardProps {
  address: string;
}

interface ChainData {
  name: string;
  id: number;
  activity: 'high' | 'medium' | 'low';
  lastActivity: number;
  txCount: number;
}

export function ChainActivityCard({ address }: ChainActivityCardProps) {
  const [data, setData] = useState<ChainData[]>([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mock data - will be replaced with real Blockscout MCP calls
    const mockData: ChainData[] = [
      { name: 'Ethereum', id: 1, activity: 'high', lastActivity: Date.now() - 3600000, txCount: 45 },
      { name: 'Base', id: 8453, activity: 'medium', lastActivity: Date.now() - 7200000, txCount: 23 },
      { name: 'Arbitrum', id: 42161, activity: 'low', lastActivity: Date.now() - 86400000, txCount: 12 },
      { name: 'Optimism', id: 10, activity: 'low', lastActivity: Date.now() - 172800000, txCount: 8 },
    ];
    setData(mockData);
  }, [address]);

  const getActivityColor = (activity: string) => {
    switch (activity) {
      case 'high': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  const getActivityGlow = (activity: string) => {
    switch (activity) {
      case 'high': return 'shadow-green-400/50';
      case 'medium': return 'shadow-yellow-400/50';
      case 'low': return 'shadow-gray-400/50';
      default: return 'shadow-gray-400/50';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 transition-all duration-300 ${
        isExpanded ? 'w-80' : 'w-64'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white/90">Active Chains</h3>
          <div className="text-sm text-white/60">{data.length} chains</div>
        </div>

        <div className="space-y-3">
          {data.map((chain, index) => (
            <motion.div
              key={chain.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getActivityColor(chain.activity)} ${getActivityGlow(chain.activity)} shadow-lg`} />
                <span className="text-sm font-medium text-white/90">{chain.name}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-white/80">{chain.txCount} txs</div>
                <div className="text-xs text-white/60">
                  {new Date(chain.lastActivity).toLocaleDateString()}
                </div>
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
            <div className="text-sm text-white/60 mb-2">Activity levels:</div>
            <div className="flex space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-white/80">High</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <span className="text-white/80">Medium</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                <span className="text-white/80">Low</span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
