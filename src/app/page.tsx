'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { Dashboard } from '../components/Dashboard';
import { WelcomeScreen } from '../components/WelcomeScreen';

export default function Home() {
  const { isConnected, address } = useAccount();

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CryptoDash
            </h1>
            <span className="text-sm text-gray-400">Local-First Crypto Dashboard</span>
          </div>
          <ConnectButton />
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4">
        {isConnected && address ? (
          <Dashboard address={address} />
        ) : (
          <WelcomeScreen />
        )}
      </main>
    </div>
  );
}
