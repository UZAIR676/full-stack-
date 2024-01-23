// App.jsx
// App.js
import React from 'react';
import SignupForm from './singupForm'; 
import Login from './login';
import Suceesfull from './suceesfull'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<SignupForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cong' element={<Suceesfull />} /> \
      </Routes>
    </BrowserRouter>
  );
}

export default App;


