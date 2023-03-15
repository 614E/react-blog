import { Route, Routes } from 'react-router-dom'

import AppBar from './components/AppBar'
import IndexPage from './pages'
import AboutPage from './pages/about'
import LoginPage from './pages/login'
function App() {
  return (
    <>
      <div>
        {/* app navigation */}
        <section>
          <AppBar />
        </section>
        {/* end of app navigation */}

        {/* body */}

        <div className='mt-3 flex justify-center'>
          {/* router */}
          <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
          {/* end of router */}
        </div>

        {/* end of body */}

        {/* footer */}
        <section></section>
        {/* end of footer */}
      </div>
    </>
  )
}

export default App
