import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';

function App() {
  return (
    <>
      <div className='flex justify-center m-20'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
