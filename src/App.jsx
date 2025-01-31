import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import CustomNav from './components/layout/CustomNav';
import Home from './components/Home';
import Cards from './components/cardsComponents/Cards';
import Cards2 from './components/cardsComponents/Cards2';
import Cards3 from './components/cardsComponents/Cards3';  
import ErrorPage from './components/errorPage/ErrorPage';
import Footer from './components/layout/Footer';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Men from './components/Men/Men';
import Brands from './components/BrandsCart';
import ResponsiveDrawer from './components/Casual';
import ProductPage from './components/cardsComponents/ProductPage';  

function App() {
  return (
    <>
      <CustomNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/cards2" element={<Cards2 />} />
        <Route path="/cards3" element={<Cards3 />} /> 
        <Route path="/product/:id" element={<ProductPage />} /> 
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/men" element={<Men />} />
        <Route path="/casual" element={<ResponsiveDrawer />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
