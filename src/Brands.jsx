// this is Products.jsx file

import React, { useEffect, useState } from 'react';
import Test from './test/Test';
import { useTranslation } from 'react-i18next';
import Cards from './Cards';
// import { render } from 'pug';


function Products() {
  const { t } = useTranslation();


  const [ProductName, SetProductName] = useState('Bavly')
  useEffect(() => { console.log("rendered") }, [])

  useEffect(() => {
    if (!ProductName) return;
    console.log("updated")
  }, [ProductName])

  // useEffect(() => {
  //   return () => {
  //     console.log("deleted")
  //   }, []
  // })

  const click = () => {
    console.log("B")
  }

  return (
    <>
      < Cards />
    </>
  )

}





export default Products;
