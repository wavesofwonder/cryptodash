'use client';

import { motion } from 'framer-motion';

export function WelcomeScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        {/* Hero Text */}
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl font-bold bg-gradient-to-r from-amber-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            CryptoDash
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl text-white/80 font-light"
          >
            Your personal crypto command center
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Track your onchain identity and crypto metrics across multiple chains in a beautiful, local-first dashboard.
          </motion.p>
        </div>
        
        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Local-First</h3>
            <p className="text-white/70 text-sm">
              Your data stays on your device. No central servers storing your wallet information.
            </p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">🌐</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Multi-Chain</h3>
            <p className="text-white/70 text-sm">
              Track your portfolio across Ethereum, Base, Arbitrum, Optimism, and more.
            </p>
          </div>
          
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3 text-white">Real-Time</h3>
            <p className="text-white/70 text-sm">
              Live updates on your transactions, token balances, and NFT holdings.
            </p>
          </div>
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="space-y-6"
        >
          <p className="text-white/60 text-lg">
            Connect your wallet to unlock your personalized dashboard
          </p>
          
          <div className="text-sm text-white/40">
            Click the connect button in the top right to get started
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
