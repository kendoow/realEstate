import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import useTypedDispatch from '../hooks/useTypedDispatch'
import useTypedSelector from '../hooks/useTypedSelector'
import { checkAuth } from '../redux/Slices/AuthSlice/AuthActionCreator'
import { authSelector } from '../redux/Slices/AuthSlice/AuthSelector'

import Apartaments from '../pages/Apartaments/Apartaments'
import Catalog from '../pages/Catalog/Catalog'
import FAQ from '../pages/FAQ/FAQ'
import Main from '../pages/Main/Main'
import Personal from '../pages/Personal/Personal'
import Favourite from '../pages/Favourite/Favourite'
import Map from '../pages/Map/Map'

const AppRouter = () => {
  const { isAuth } = useTypedSelector(authSelector)
  const dispatch = useTypedDispatch()
  const accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    if (accessToken) {
      dispatch(checkAuth())
    }
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/apartments/:id' element={<Apartaments />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/map' element={<Map />} />
        {
          isAuth && <>
            <Route path='/personal' element={<Personal />} />
            <Route path='/favorite' element={<Favourite />} />
          </>
        }
      </Routes>
    </>
  )
}

export default AppRouter