# CryptoDash 🚀

**Your personal crypto command center** - A data-driven browser home page and Chrome extension to track onchain identity and crypto metrics across multiple chains.

## 🎯 Project Overview

CryptoDash is a **local-first, minimal dashboard** crypto dashboard that provides:

- **Multi-chain portfolio tracking** across Ethereum, Base, Arbitrum, Optimism, Polygon, BNB, zkSync, Linea, and Scroll
- **Real-time blockchain data** via Blockscout MCP integration
- **Beautiful, minimal UI** with glassmorphic edge cards and central greeting
- **Chrome extension** for new tab override and popup views
- **AI-powered analysis** with conversational wallet insights
- **Premium subscription** with on-chain payments via smart contracts

## 🏆 Hackathon Goals

**Primary Target**: Blockscout prizes (Best Data Integration, Best MCP Usage)
**Secondary**: HyperSync integration for real-time streaming
**Tertiary**: Pyth price feeds for subscription payments

## 🛠 Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **Wallet**: RainbowKit + Wagmi v2 for multi-wallet support
- **Data**: Blockscout MCP for blockchain data, HyperSync for real-time streaming
- **Storage**: Local-first with IPFS deployment via Fleek
- **Extension**: Chrome Extension Manifest V3
- **Payments**: Smart contracts with Pyth price feeds

## 🎨 Design Philosophy

**Minimal Dashboard Design**:
- Central "gm {name}" greeting with ENS resolution
- Minimal edge cards that expand on click
- Glassmorphic design with backdrop blur
- Generative background visuals
- AI chat assistant for conversational analysis

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Build Chrome extension
npm run build:extension
```

### Chrome Extension

The extension is automatically built and available in the `extension/` directory. Load it in Chrome developer mode.

### IPFS Deployment

Automatically deploys to IPFS via Fleek on every push to main branch.

## 📱 Features

### Core Dashboard
- **Portfolio Overview**: Total value, 24h change, chain breakdown
- **Gas Monitor**: Real-time gas prices and network status
- **Activity Feed**: Recent transactions with type icons
- **Chain Activity**: Multi-chain transaction tracking
- **AI Assistant**: Conversational blockchain analysis

### Premium Features
- **Advanced Analytics**: DeFi protocol tracking, yield farming insights
- **Real-time Streaming**: HyperSync integration for live transaction feeds
- **Generative Art**: Transaction-driven visualizations
- **Custom Alerts**: Price and activity notifications

## 🔧 Architecture

### Data Flow
1. **Wallet Connection** → RainbowKit/Wagmi
2. **ENS Resolution** → Built-in RainbowKit support
3. **Blockchain Data** → Blockscout MCP API calls
4. **Real-time Updates** → HyperSync streaming
5. **Local Storage** → Chrome extension + web app compatibility
6. **Premium Features** → Cloudflare Workers + smart contracts

### Multi-Chain Support
- Ethereum Mainnet
- Base
- Arbitrum One
- Optimism
- Polygon
- BNB Smart Chain
- zkSync Era
- Linea
- Scroll

## 🎯 Roadmap

### Phase 1: Foundation ✅
- [x] Next.js setup with TypeScript and Tailwind
- [x] RainbowKit wallet integration
- [x] Chrome extension structure
- [x] Minimal dashboard UI design
- [x] Minimal edge cards with expand/collapse

### Phase 2: Data Integration
- [ ] Blockscout MCP integration
- [ ] Real portfolio data fetching
- [ ] Multi-chain data aggregation
- [ ] ENS resolution and display

### Phase 3: Premium Features
- [ ] Smart contract subscription system
- [ ] Pyth price feed integration
- [ ] Cloudflare Workers API
- [ ] Premium feature gating

### Phase 4: Advanced Features
- [ ] HyperSync real-time streaming
- [ ] Generative art visualizations
- [ ] AI assistant with real data
- [ ] Advanced analytics

## 🏗 Development

### Project Structure
```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── Dashboard.tsx
│   ├── HeroGreeting.tsx
│   ├── PortfolioCard.tsx
│   ├── QuickStatsCard.tsx
│   ├── ChainActivityCard.tsx
│   ├── RecentActivityCard.tsx
│   └── ChatAssistant.tsx
├── lib/                 # Utilities and configs
│   ├── chains.ts        # Multi-chain configuration
│   ├── storage.ts       # Local storage abstraction
│   ├── blockscout.ts    # Blockscout MCP wrapper
│   └── wagmi-config.ts  # Wallet configuration
└── extension/           # Chrome extension files
```

### Key Components
- **Dashboard**: Main layout with edge cards
- **HeroGreeting**: Central "gm" greeting with ENS
- **PortfolioCard**: Minimal portfolio overview
- **QuickStatsCard**: Gas price and network status
- **ChainActivityCard**: Multi-chain activity indicators
- **RecentActivityCard**: Recent transaction feed
- **ChatAssistant**: AI-powered blockchain analysis

## 🎨 Design System

### Colors
- **Primary**: Gradient from amber to purple to blue
- **Background**: Black with subtle gradients
- **Cards**: Glassmorphic with backdrop blur
- **Text**: White with opacity variations

### Typography
- **Headings**: Geist Sans (bold, large)
- **Body**: Geist Sans (regular, medium)
- **Code**: Geist Mono

### Animations
- **Entrance**: Framer Motion with staggered delays
- **Hover**: Scale and opacity transitions
- **Expand**: Smooth height animations
- **Loading**: Pulse and skeleton states

## 🚀 Deployment

### IPFS via Fleek
- Automatic deployment on push to main
- PWA support for offline functionality
- Custom domain via Cloudflare

### Chrome Extension
- Manifest V3 compliant
- New tab override
- Popup interface
- Background service worker

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

This is a hackathon project. Contributions welcome after completion.

---