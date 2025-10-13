'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { MomentumDashboard } from '../components/MomentumDashboard';
import { WelcomeScreen } from '../components/WelcomeScreen';

export default function Home() {
  const { isConnected, address } = useAccount();

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Generative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-amber-900/20" />
      
      {/* Connect Button - Top Right */}
      <div className="absolute top-6 right-6 z-50">
        <ConnectButton />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {isConnected && address ? (
          <MomentumDashboard address={address} />
        ) : (
          <WelcomeScreen />
        )}
      </main>
    </div>
  );
}
