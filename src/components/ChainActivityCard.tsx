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
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/15 ${
        isExpanded ? 'p-4 w-80' : 'p-3 w-48'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Minimal View */}
      <div className="space-y-2">
        <div className="text-xs text-gray-300">Chains</div>
        <div className="flex space-x-2">
          {data.slice(0, 3).map((chain, index) => (
            <div key={chain.id} className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${getActivityColor(chain.activity)}`} />
              <span className="text-xs text-white/80">{chain.name.slice(0, 3)}</span>
            </div>
          ))}
        </div>
        <div className="text-sm text-white/60">{data.length} active</div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3 pt-3 border-t border-white/20 mt-3"
        >
          {data.map((chain, index) => (
            <div key={chain.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${getActivityColor(chain.activity)}`} />
                <span className="text-sm text-white/90">{chain.name}</span>
              </div>
              <div className="text-xs text-white/60">{chain.txCount} txs</div>
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
