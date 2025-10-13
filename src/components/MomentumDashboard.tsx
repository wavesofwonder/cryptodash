'use client';

import { useState, useEffect } from 'react';
import { HeroGreeting } from './HeroGreeting';
import { PortfolioCard } from './PortfolioCard';
import { ChainActivityCard } from './ChainActivityCard';
import { RecentActivityCard } from './RecentActivityCard';
import { QuickStatsCard } from './QuickStatsCard';
import { ChatAssistant } from './ChatAssistant';

interface MomentumDashboardProps {
  address: string;
}

export function MomentumDashboard({ address }: MomentumDashboardProps) {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Update time every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Simulate loading
    const loadingTimer = setTimeout(() => setIsLoading(false), 1500);

    return () => {
      clearInterval(timer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Hero Section - Center */}
      <div className="flex items-center justify-center min-h-screen">
        <HeroGreeting address={address} />
      </div>

      {/* Edge Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Left - Portfolio */}
        <div className="absolute top-8 left-8 pointer-events-auto">
          <PortfolioCard address={address} />
        </div>

        {/* Top Right - Gas Stats */}
        <div className="absolute top-8 right-8 pointer-events-auto">
          <QuickStatsCard address={address} />
        </div>

        {/* Bottom Left - Recent Activity */}
        <div className="absolute bottom-8 left-8 pointer-events-auto">
          <RecentActivityCard address={address} />
        </div>

        {/* Bottom Right - Chain Activity */}
        <div className="absolute bottom-8 right-8 pointer-events-auto">
          <ChainActivityCard address={address} />
        </div>
      </div>

      {/* Chat Assistant - Slide out from right */}
      <ChatAssistant address={address} />
    </div>
  );
}
