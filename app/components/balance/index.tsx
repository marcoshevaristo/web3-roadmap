'use client';
import { formatBalance } from '@/app/utils/balance.utils';
import { useMemo } from 'react';
import { useAccount, useBalance } from 'wagmi';
import '@rainbow-me/rainbowkit/styles.css';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Box } from '@mui/material';
import WalletIcon from '@mui/icons-material/Wallet';

export default function Balance() {
  const { address } = useAccount();
  const { data, error, status } = useBalance({ address });

  const walletMessage = useMemo(() => {
    if (!address) return '';
    if (status === 'pending') return 'Loading balance...';
    if (error) return 'Error loading balance';
    return `Balance: ${formatBalance(data.value, data.symbol)}`;
  }, [address, data, error, status]);

  return (
    <Box
      sx={{ width: 340 }}
      className='bg-gray-300 fixed -right-85 top-20 rounded-xl pb-2 px-2 transition-translate ease-in-out duration-300 hover:-translate-x-85'
    >
      <Box
        sx={{ width: 380 }}
        className='text-gray-700 bg-gray-300 py-2 px-3 flex gap-4 items-center rounded-xl transition-translate ease-in-out duration-300 -translate-x-15 cursor-pointer'
      >
        <WalletIcon sx={{ fontSize: 32 }} />
        {walletMessage}
      </Box>
      <Box className='mt-4 w-full flex justify-center relative'>
        <ConnectButton showBalance={false} />
      </Box>
    </Box>
  );
}
