import './css/App.css'
import Favorite from './pages/Favorites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  return (
    <MovieProvider>
    
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favourites' element={<Favorite />}/>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
