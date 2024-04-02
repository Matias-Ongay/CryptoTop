import { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useCryptoData } from '../hooks/useCryptoData';
import { getCoinById } from '../helpers';

export const CoinPage = () => {
  const { id } = useParams();
  const { cryptoData, isLoading } = useCryptoData();
  const navigate = useNavigate();
  const onNavigateBack=()=>{
   navigate(-1)
  }
  if (isLoading) {
    // Mientras los datos están cargando, puedes mostrar un mensaje de carga o un indicador
    return <div>Loading...</div>;
  }

  if (!cryptoData.length) {
    // Si no hay datos disponibles, podrías mostrar un mensaje indicando que no hay datos
    return <div>No data available.</div>;
  }

  const coin = getCoinById(id, cryptoData);
  if (!coin) {
    // Si no se encuentra la moneda, redirecciona al usuario a la página de cripto
    return <Navigate to='/crypto' />;
  }

  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={coin.image} 
        alt={coin.name} 
        className=' animate__animated animate__fadeInLeft rounded-circle border border-5'
        />
      </div>
      <div className="col-8">
        <h3>{coin.name}</h3>
        <ul className="list-group list-group-flush">
          <li className='list-group-item'><b>Symbol:</b>{coin.symbol}</li>
          <li className='list-group-item'><b>Price:$</b>{coin.price}</li>
          <li className='list-group-item'><b>Rank:</b>{coin.market_rank}</li>
          <li className='list-group-item'><b>Max price in 24hs:</b>${coin.high}</li>
          <li className='list-group-item'>
            <b>Last 24hs:</b> <span style={{ color: coin.percentage < 0 ? 'red' : 'green' }}>{coin.percentage}%</span>
          </li>

        </ul>
        <button 
        onClick={onNavigateBack}
        className='btn btn-outline-primary'>Regresar</button>
      </div>
      
    </div>
    
  );
};
