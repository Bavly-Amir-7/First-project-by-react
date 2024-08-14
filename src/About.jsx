// this is About.jsx file


import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { CounterContext } from './test/CounterProvider';
import Cards from './Cards';

function About() {

  const count = useContext(CounterContext)



  // console.log(count)


  const { t } = useTranslation();
  return <div className='text-center'>
    <h5>{t('About')}</h5>

    <hr />
    <hr />
    <hr />
    <hr />
  </div>;
}

export default About;
