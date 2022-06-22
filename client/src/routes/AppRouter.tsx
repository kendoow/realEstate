import { Route, Routes } from 'react-router-dom'
import Apartaments from '../pages/Apartaments/Apartaments'
import Catalog from '../pages/Catalog/Catalog'

import Main from '../pages/Main/Main'
import Personal from '../pages/Personal/Personal'

const AppRouter = () => {
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