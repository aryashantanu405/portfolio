import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import {BrowserRouter as Router,Routes,Route} from 'react-router'
function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
