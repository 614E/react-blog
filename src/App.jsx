import { Route, Routes } from 'react-router-dom'
import AppBar from './components/AppBar'
import IndexPage from './pages'
import AboutPage from './pages/about'
import LoginPage from './pages/login'
import CatImage from './assets/steven-van-elk-x-DLGinewrE-unsplash.jpg'
function App() {
  return (
    <><div>
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
    </div><div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-2">
            <img class="h-48 w-full object-cover md:h-full md:w-48" src={CatImage} alt="Unsplash Image" />
           </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
            <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
            <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
          </div>
        </div>
      </div></>
  )
}

export default App
