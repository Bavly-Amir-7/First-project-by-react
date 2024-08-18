// this is App.jsx file


import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CustomNav from './CustomNav';
import Home from './Home';
import About from './About';
import Cards from './Cards';
import ErrorPage from './test/ErrorPage';
import Header from './HOME/Header';
import Footer from './Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Men from './Men/Men';





function App() {
  return (
    <>
      <CustomNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/brands" element={<Cards />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="men" element={<Men />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
