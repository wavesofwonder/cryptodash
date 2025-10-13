import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, base, arbitrum, optimism, polygon, bsc } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'CryptoDash',
  projectId: '1b1c6fdd015b57ddaeda6d527ec4ee02',
  chains: [mainnet, base, arbitrum, optimism, polygon, bsc],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
