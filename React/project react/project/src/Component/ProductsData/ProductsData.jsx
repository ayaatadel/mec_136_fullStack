import React from 'react'
import {ProductCart }from '../ProductCart/ProductCart'

export  function ProductsData() {
      const products = [
    {
      name: "chair1",
      price: 500,
      available: true,
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chair2",
      price: 500,
      available: false,
      img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chair3",
      price: 500,
      available: true,
      img: "https://images.pexels.com/photos/923192/pexels-photo-923192.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chair4",
      price: 500,
      available: true,
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <>



    {
    products.map(
        (product) => {
//   console.log(product); // Log product to see if the data is accessible
  return <div key={product.name}>
    <ProductCart productsData={products} ></ProductCart>
  </div>
        }
 
    )
    }
 </>)}
