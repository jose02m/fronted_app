import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


import Navbar from './components/navbar/Navbar';
import VideosList from './components/videos/VideosList';
import VideoForm from './components/videos/VideoForm';

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>

    <Navbar />

    <div className="container mt-4">
      <Routes>
        <Route path='/' element={<VideosList />} />
        <Route path='/new_video' element={<VideoForm />} />
        <Route path='/update/:id' element={<VideoForm />} />
      </Routes>

      <ToastContainer />
    </div>
    
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
