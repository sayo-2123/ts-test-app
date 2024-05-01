import React from 'react';
import './App.css';
import { Header } from './header.tsx';
import { Lists } from "./components/lists.tsx";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Lists />} />
        {/* <Route path='/article/:id' element={<Article />} /> */}
      </Routes>
    </>
  );
}

export default App;
