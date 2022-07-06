import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import useTypedDispatch from '../hooks/useTypedDispatch'
import Apartaments from '../pages/Apartaments/Apartaments'
import Catalog from '../pages/Catalog/Catalog'

import Main from '../pages/Main/Main'
import Personal from '../pages/Personal/Personal'
import { checkAuth } from '../redux/Slices/AuthSlice/AuthActionCreator'

const AppRouter = () => {


    const accessToken = localStorage.getItem('accessToken') 
    const dispatch = useTypedDispatch()

    useEffect(() => {
      if (accessToken) {
        dispatch(checkAuth())
    }         
    }, [])


  return (
      <>
        <Routes>
            <Route path='/' element = {<Main/>}/>
            <Route path='/personal' element = {<Personal/>}/>
            <Route path="/apartments/:id" element={<Apartaments/>} />
            <Route path = "/catalog" element = {<Catalog/>}/>
        </Routes>
    </>
  )
}

export default AppRouter