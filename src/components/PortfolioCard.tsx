'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface PortfolioCardProps {
  address: string;
}

export function PortfolioCard({ address }: PortfolioCardProps) {
  const [data, setData] = useState<{
    totalValue: number;
    change24h: number;
  } | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Mock data - will be replaced with real Blockscout MCP calls
    const mockData = {
      totalValue: 15420.50,
      change24h: 2.5,
    };
    setData(mockData);
  }, [address]);

  if (!data) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-3 w-48"
      >
        <div className="animate-pulse">
          <div className="h-4 bg-white/20 rounded w-1/2 mb-2"></div>
          <div className="h-6 bg-white/20 rounded w-3/4"></div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, x: -20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl transition-all duration-300 cursor-pointer hover:bg-white/15 ${
        isExpanded ? 'p-4 w-80' : 'p-3 w-48'
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Minimal View */}
      <div className="space-y-1">
        <div className="text-xs text-gray-300">Portfolio</div>
        <div className="text-xl font-bold text-white">
          ${data.totalValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
        </div>
        <div className={`text-sm font-medium ${
          data.change24h >= 0 ? 'text-green-400' : 'text-red-400'
        }`}>
          {data.change24h >= 0 ? '+' : ''}{data.change24h.toFixed(1)}%
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
          <div className="text-sm text-white/80">
            Top holding: ETH (45%)
          </div>
          <div className="text-sm text-white/60">
            Across 4 chains
          </div>
          <div className="text-xs text-gray-400">
            Click to collapse
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
