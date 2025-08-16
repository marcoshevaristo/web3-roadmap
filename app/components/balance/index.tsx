'use client';
import { useAccount, useBalance, useEnsName } from 'wagmi';

export default function Balance() {
  const { address } = useAccount();
  const { data, error, status } = useBalance({ address });

  if (status === 'pending') return <div>Loading balance...</div>;
  if (status === 'error')
    return <div>Error fetching wallet balance: {error.message}</div>;
  return (
    <>
      <div>Wallet balance: {data?.formatted}</div>
      <div>Address: {address}</div>
    </>
  );
}
