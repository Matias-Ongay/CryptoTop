
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { CoinCard } from '../components'
import { useForm } from '../../hooks/useForm'
import { getCoinById, getCoinByName } from '../helpers'
import { useCryptoData } from '../hooks/useCryptoData'
export const SearchPage = () => {
  const { cryptoData} = useCryptoData();
  const navigate=useNavigate();
  const location=useLocation();

  const {q =''} =queryString.parse(location.search);

  const cryptos=getCoinByName(q,cryptoData);
  const {searchText,onInputChange} = useForm({
    searchText:q
  })
  const onSearchSubmit=(event)=>{
    event.preventDefault();
   
    navigate(`?q=${searchText}`);
  }

  return (
   <>
    <h1>Search</h1>
    <hr />
    <div className='row'>
      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSubmit}>
          <input 
          type="text" 
          placeholder='Search a crypto'
          className='form-control'
          name='searchText'
          autoComplete='off'
          value={searchText}
          onChange={onInputChange}
          />
        </form>
        <button 
        className='btn btn-outline-primary mt-1'>
          Search
        </button>
    </div>
    <div className="col-7">
        <h4>Results</h4>
        <hr />
        {
          (q==='')
          ? <div className='alert alert-primary'>Search a crypto</div>
          : (cryptos.length ===0)
          && <div className='alert alert-danger'>No crypto with <b>{q}</b></div>

        }
        
        
        {
          cryptos.map(crypto =>(
            <CoinCard key={crypto.id} {...crypto}></CoinCard>
          ))
        }

    </div>
    </div>
   
   </>
  )
}
