import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import "bootstrap/dist/css/bootstrap.min.css"
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' exact={true} element={<Home/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
