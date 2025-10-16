'use client';

import { useEnsName } from 'wagmi';

interface HeroGreetingProps {
  address: string;
}

export function HeroGreeting({ address }: HeroGreetingProps) {
  const { data: ensName } = useEnsName({ address });
  
  const displayName = ensName || `${address.slice(0, 6)}...${address.slice(-4)}`;

  return (
    <div className="text-center space-y-8">
      {/* Greeting */}
      <div className="space-y-4">
        <div className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          gm {displayName}
        </div>
      </div>

      {/* Quote or Insight */}
      <div className="max-w-2xl mx-auto">
        <div className="text-lg text-gray-400 italic">
          &ldquo;Your portfolio is your story. Every transaction tells a tale.&rdquo;
        </div>
      </div>
    </div>
  );
}
