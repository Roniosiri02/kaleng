import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './component/Navigation';
import Maincontent from './Maincontent'

import Footer from './component/Footer'
import { Routes, Route, Router } from 'react-router-dom';

import Profile from './component/Profile';
import Sejarah from './component/Profile/Sejarah'
import Vimi from './component/Profile/Vimi'
import Fasilitis from './component/Fasilitas'
import FAQ from './component/Faq'
import { Container, Navbar } from 'react-bootstrap';

function App() {
  return (
    <>
 
      <div className='App'>
      <Navigation />
        <Routes>
          <Route path='/' element={<Maincontent />} />

          <Route path='/Profile' element={<Profile/>}>
            <Route path='sejarah' element={<Sejarah/>} />
            <Route path='vimi' element={<Vimi/>} />
          </Route>
          <Route path='/fasilitas' element={<Fasilitis />}/>
          <Route path='/faq' element={<FAQ />}/>
        </Routes>
      </div>
      <div>
      <Footer />
      </div>

    </>
  );
}


export default App;
