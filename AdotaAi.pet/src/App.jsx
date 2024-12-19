import { BrowserRouter as Router, Routes, Route} from 'react-router'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Adotar from './pages/Adotar'
import Doar from './pages/Doar'
import Ongs from './pages/Ongs'
import Home from './pages/Home'
import StoreProvider from './components/Store/provider'
import RoutesPrivate from './components/Routes/Private'

function App() {

  return (
      <Router>

          <NavBar/>

            <StoreProvider>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <RoutesPrivate path="/adotar" element={<Adotar/>}/>
              <Route path="/doar" element={<Doar/>}/>
              <Route path="/ongs" element={<Ongs/>}/>
            </Routes>
            </StoreProvider>

          <Footer/>
      </Router>
  )
}

export default App
