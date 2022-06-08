import { Route, Routes } from 'react-router-dom'

import Main from '../pages/Main/Main'
import Personal from '../pages/Personal/Personal'

const AppRouter = () => {
  return (
      <>
        <Routes>
            <Route path='/' element = {<Main/>}/>
            <Route path='/personal' element = {<Personal/>}/>
        </Routes>
    </>
  )
}

export default AppRouter