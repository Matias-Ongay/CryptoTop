import React from 'react'
import { useCryptoData } from '../hooks/useCryptoData'
import { CryptoList } from '../components';
export const AllCryptosPage = () => {
  const { isLoading } = useCryptoData();
  return (
    <div>
            <h1 className='card-tittle '>Cryptocurrency List</h1>
            <hr />
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    <CryptoList></CryptoList>
                </ul>
            )}
        </div>
  )
}
