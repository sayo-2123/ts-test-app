import React from 'react';
import './App.css';
import { Header } from './Header.tsx';
import { Lists } from './components/Lists.tsx';
import { Article } from './pages/ArticlePage.tsx';
import { Routes, Route } from 'react-router-dom';
import { Contact } from './pages/ContactPage.tsx';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Lists />} />
        <Route path='/article/:id' element={<Article id={0} title="" thumbnail=""
          createdAt=""
          categories=""
          content="" />} />
        <Route path='/contact' element={<Contact name="" email="" message="" />} />
      </Routes>
    </>
  );
}

export default App;
