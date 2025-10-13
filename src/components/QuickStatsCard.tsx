'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface QuickStatsCardProps {
  address: string;
}

interface StatsData {
  gasPrice: number;
  networkStatus: 'good' | 'slow' | 'congested';
}

export function QuickStatsCard({ address }: QuickStatsCardProps) {
  const [data, setData] = useState<StatsData | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mock data - will be replaced with real data
    const mockData: StatsData = {
      gasPrice: 15,
      networkStatus: 'good',
    };
    setData(mockData);
  }, [address]);

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 w-40"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-1/2 mb-2"></div>
          <div className="h-5 bg-white/20 rounded w-3/4"></div>
        </div>
      </motion.div>
    );
  }

  const getNetworkStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-400';
      case 'slow': return 'text-yellow-400';
      case 'congested': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/15 ${
        isExpanded ? 'p-4 w-64' : 'p-3 w-40'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Minimal View - Just Gas */}
      <div className="space-y-1">
        <div className="text-xs text-gray-300">Gas</div>
        <div className="text-lg font-bold text-white">{data.gasPrice} gwei</div>
        <div className={`text-xs ${getNetworkStatusColor(data.networkStatus)}`}>
          {data.networkStatus}
        </div>
      </div>

      {/* Expanded View */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-3 pt-3 border-t border-white/20 mt-3"
        >
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Network Status:</span>
            <span className={`${getNetworkStatusColor(data.networkStatus)} capitalize`}>
              {data.networkStatus}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Active Chains:</span>
            <span className="text-white/90">4</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-white/60">Last Sync:</span>
            <span className="text-white/90">2 min ago</span>
          </div>
          <div className="text-xs text-gray-400">
            Click to collapse
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
