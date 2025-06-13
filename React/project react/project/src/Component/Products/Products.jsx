import React, { Fragment } from "react";
import "./products.css";
import {products} from './allProducts'
export function Products() {
  //   const product={
  //     name:"chair",
  //     price:500,
  //     available:true,
  //     img:"https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600"
  // }
  const products = [
    {
      name: "chair",
      price: 500,
      available: true,
      img: "https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "chair",
      price: 500,
      available: false,
      img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
   
  ];
//   const productImage =
//     "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <>
      <section
        className="Products"
        style={{ display: "flex", justifyContent: "space-around",flexWrap:"wrap", textAlign:"center" }}
      >
        {/* single product */}
        {
            /* <div className="card">
            <img src={product.img} alt="productImage" srcset="" />
            <h2>{product.name}</h2>
            <span className='text-success my-3'>Price:{product.price}</span>
        {product.available? <button className="btn btn-success">Add To Cart</button>:<button className="btn btn-danger">Avalable:Not Available</button>}
        </div> */
    }

        {/* ===================================== */}
        {/* array ==>>loop   ==> foreach , map , filter , find */}
{/* 
        {products.map((product) => (
            
         <div className="card w-25 justify-content-around m-5">
           <div className=" d-flex justify-content-center mt-2 ">
             <img src={product.img} alt="productImage" srcset=""  className="w-50 "/>
           </div>
            <h2>{product.name}</h2>
            <span className='text-success'>Price:{product.price}</span>
        {product.available?  <div className="d-flex justify-content-center my-3">
          <button className="btn btn-success">Add to Cart</button>
        </div>:  <div className="d-flex justify-content-center my-3">
          <button className="btn btn-danger">Not Available</button>
        </div>}
        </div>
        ))} */}

        {products.map((product) => {
//   console.log(product); // Log product to see if the data is accessible
  return (
    <div className="card w-25 justify-content-around m-5" key={product.name}>
      <div className=" d-flex justify-content-center mt-2">
        <img src={product.img} alt="productImage" className="w-50" />
      </div>
      <h2>{product.name}</h2>
      <span className="text-success">Price: {product.price}</span>
      {product.available ? (
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-success">Add to Cart</button>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-danger">Not Available</button>
        </div>
      )}
    </div>
  );
})}
      </section>
    </>
  );
}
