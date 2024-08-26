import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main, LoginView} from "./layouts"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />}></Route>
          <Route path='/notes' element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
