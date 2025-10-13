'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Welcome to CryptoDash
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Track your onchain identity and crypto metrics across multiple chains in a local-first, private dashboard.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Local-First</h3>
            <p className="text-gray-400 text-sm">
              Your data stays on your device. No central servers storing your wallet information.
            </p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Multi-Chain</h3>
            <p className="text-gray-400 text-sm">
              Track your portfolio across Ethereum, Base, Arbitrum, Optimism, and more.
            </p>
          </div>
          
          <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Real-Time</h3>
            <p className="text-gray-400 text-sm">
              Live updates on your transactions, token balances, and NFT holdings.
            </p>
          </div>
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-400">
            Connect your wallet to get started with your personalized crypto dashboard.
          </p>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
