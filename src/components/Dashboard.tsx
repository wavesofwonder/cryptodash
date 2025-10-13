'use client';

import { useState, useEffect } from 'react';
import { PortfolioOverview } from './PortfolioOverview';
import { ChainActivity } from './ChainActivity';
import { TokenHoldings } from './TokenHoldings';
import { RecentTransactions } from './RecentTransactions';
import { NFTGallery } from './NFTGallery';
import { SUPPORTED_CHAINS } from '../lib/chains';

interface DashboardProps {
  address: string;
}

export function Dashboard({ address }: DashboardProps) {
  const [selectedChain, setSelectedChain] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Chain Selector */}
      <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
        <h3 className="text-lg font-semibold mb-4">Select Chain</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedChain(null)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedChain === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            All Chains
          </button>
          {SUPPORTED_CHAINS.map((chain) => (
            <button
              key={chain.id}
              onClick={() => setSelectedChain(chain.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedChain === chain.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {chain.name}
            </button>
          ))}
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {/* Portfolio Overview - Full width on large screens */}
        <div className="lg:col-span-2 xl:col-span-3">
          <PortfolioOverview address={address} selectedChain={selectedChain} />
        </div>

        {/* Chain Activity Heatmap */}
        <div className="lg:col-span-1 xl:col-span-1">
          <ChainActivity address={address} />
        </div>

        {/* Token Holdings */}
        <div className="lg:col-span-1 xl:col-span-1">
          <TokenHoldings address={address} selectedChain={selectedChain} />
        </div>

        {/* Recent Transactions */}
        <div className="lg:col-span-1 xl:col-span-1">
          <RecentTransactions address={address} selectedChain={selectedChain} />
        </div>

        {/* NFT Gallery */}
        <div className="lg:col-span-2 xl:col-span-2">
          <NFTGallery address={address} selectedChain={selectedChain} />
        </div>
      </div>
    </div>
  );
}
