import React from 'react'
import { Link } from 'react-router-dom'
export const CoinCard = ({
    id,
    name,
    symbol,
    market_rank,
    price,
    image,
}) => {
  return (

    <div className='col animate__animated animate__flipInX'>
        <div className="card border border-5">
            <div className="row no-gutters ">
                <div className="col-4 ">
                    <img src={image} className="card-img m-1 rounded-circle" alt={name} />
                </div>
                <div className="col-8">

                    <div className="card-body">
                        <h5 className="card-tittle">{name}</h5>
                        <h6 className="card-text"> ${price}</h6>
                        <p className="card-text">
                            <small className='text-muted'>rank {market_rank}</small>
                        </p>
                        <Link to={`/coin/${id}`}>
                        More...
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>





    // <li key={crypto.id}>
    //     <div>
    //                     <img src={crypto.image} alt={crypto.name} />
    //                     <p>{crypto.name} ({crypto.symbol}) - Rank: {crypto.market_rank}</p>
    //                     <p>Price: {crypto.price}</p>
    //     </div>
    // </li>

  )
}
