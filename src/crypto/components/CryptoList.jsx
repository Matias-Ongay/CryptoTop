import React from 'react'
import { useCryptoData } from '../hooks/useCryptoData'
import { CoinCard } from './CoinCard';
export const CryptoList = () => {
  const { cryptoData } = useCryptoData();

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
      {cryptoData.map(crypto => (
            <CoinCard 
            key={crypto.id}
            {...crypto}
            />
                        
                            
                    ))}



        
    </div>
  )
}
