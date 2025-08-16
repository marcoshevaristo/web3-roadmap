import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';

export default getDefaultConfig({
  appName: 'Web3 Roadmap',
  projectId: '1150fbfb6e982dbc11427bd87760cb95',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});
