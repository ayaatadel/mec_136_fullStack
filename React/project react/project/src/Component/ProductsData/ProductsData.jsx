import React from 'react'
import {ProductCart }from '../ProductCart/ProductCart'

export  function ProductsData() {
      const products = [
    {
      name: "chair1",
      price: 500,
      
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chair2",
      price: 500,
     
      img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    
  ];
  return (
    <div >



    {
    products.map(
        (product) => {
//   console.log(product); // Log product to see if the data is accessible
  return <div key={product.name}>
    <ProductCart productsData={products} ></ProductCart>
    {/* <ProductCart productsData={products} /> */}

  </div>
        }
 
    )
    }
 </div>)}
