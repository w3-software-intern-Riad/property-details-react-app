import { useState } from 'react'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import HomePageElement from './components/HomePage/HomePageElement'
import NotFoundPage from './components/NotFoundPage';


function App() {


  return (

      <BrowserRouter>
        <Routes>
          {/* Redirect from root path to default path */}
          <Route path="/" element={<Navigate to="/hotels/beautiful-hotel" />} />
          {/* Define the route for /hotels/:hotelName */}
          <Route path="/hotels/:hotel_slug" element={<HomePageElement />} />
          {/* Optional: A 404 page for unmatched routes */}
          <Route path="/not-found" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
   



  )
}

export default App
