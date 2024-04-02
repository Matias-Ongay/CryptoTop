import React from 'react'
import { Navigate,Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { AllCryptosPage,SearchPage,CoinPage } from '../pages'
export const CryptoRoutes = () => {
  return (
        <>
        <Navbar></Navbar>
        <div className='container'>
        <Routes>
            <Route path='crypto' element={<AllCryptosPage></AllCryptosPage>}></Route>

            <Route path='search' element={<SearchPage></SearchPage>}></Route>

            <Route path='coin/:id' element={<CoinPage></CoinPage>}></Route>





            <Route path='/' element={<Navigate to='/crypto'></Navigate>}></Route>
        </Routes>

        </div>
       
        </>
  )
}
