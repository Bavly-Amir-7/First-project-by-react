// Home.jsx
import React from 'react';
import Carousel from './HOME/Carousel';
import Header from './HOME/Header';
import Brands from './HOME/Brands';
import NewArrivals from './HOME/NewArrivals';
import TopSelling from './HOME/TopSelling';
import DressStyles from './HOME/DressStyles';

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
