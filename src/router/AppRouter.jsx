import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CryptoRoutes } from '../crypto'
import { LoginPage } from '../auth'

export const AppRouter = () => {
  return (
   <>
      

        <Routes>
            
            <Route path='login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/*' element={<CryptoRoutes></CryptoRoutes>}></Route>
        </Routes>
   
   
   </>
  )
}
