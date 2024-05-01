import React from 'react';
import './App.css';
import { Header } from './header.tsx';
import { Lists } from './components/lists.tsx';
import { Article } from './pages/articlePage.tsx';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './pages/contactPage.tsx';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Lists />} />
        <Route path='/article/:id' element={<Article />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
