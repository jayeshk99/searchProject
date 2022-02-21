import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import { Home } from './components/home'
import { Search } from './components/search'

function App() {
  

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </div>
  )
}

export default App
