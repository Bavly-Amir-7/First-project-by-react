// Home.jsx
import React from 'react';
import Carousel from './components/home/Carousel';
import Header from './components/home/Header';
import Brands from './components/home/Brands';
import NewArrivals from './components/home/NewArrivals';
import TopSelling from './components/home/TopSelling';
import DressStyles from './components/home/DressStyles';
import Men from './components/Men/Men';

function Home() {
  return (
    <>

      <div>
        <Header />
      </div>

      <div>
        <Brands />
      </div>


      <div>
        <NewArrivals />
      </div>

      <div>
        <TopSelling />
      </div>

      <div>
        <DressStyles />
      </div>


      <div>
        <Carousel />
      </div>


    </>
  );
}

export default Home;
