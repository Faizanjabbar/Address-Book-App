import React from 'react'
import HomePage from './HomePage'
import Settings from './Settings'
import Modal from './Modal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
        <Route path='/Modal' element={<Modal/>} />
      <Route path='/' element={<HomePage />} />
      <Route path='/Settings' element={<Settings />} />
  </Routes>
  </BrowserRouter>

    </>
  )
}

export default App
