// Home.jsx
import React from 'react';
import Carousel from './home/Carousel';
import Header from './home/Header';
import Brands from './home/Brands';
import NewArrivals from './home/NewArrivals';
import TopSelling from './home/TopSelling';
import DressStyles from './home/DressStyles';
import Men from './Men/Men';

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


