import React from 'react'

// first try

// export  function ProductCart(props) {
//     console.log(props);
//     // exit;
    
    
//   return (
// <>

//    <div className="card w-25 justify-content-around m-5" key={props.productsData.name}>
//       <div className=" d-flex justify-content-center mt-2">
//         <img src={props.productsData.img} alt="productImage" className="w-50" />
//       </div>
//       <h2>{props.productsData.name}</h2>
//       <span className="text-success">Price: {props.productsData.price}</span>
//       {props.productsData.available ? (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-success">Add to Cart</button>
//         </div>
//       ) : (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-danger">Not Available</button>
//         </div>
//       )}
//     </div>


//     {/* <div className="card w-25 justify-content-around m-5" key={productsData.name}>
//       <div className=" d-flex justify-content-center mt-2">
//         <img src={product.img} alt="productImage" className="w-50" />
//       </div>
//       <h2>{product.name}</h2>
//       <span className="text-success">Price: {product.price}</span>
//       {product.available ? (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-success">Add to Cart</button>
//         </div>
//       ) : (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-danger">Not Available</button>
//         </div>
//       )}
//     </div> */}




// </>
   
//   )
// }
// second way
// export  function ProductCart(props) {
//     // console.log(props.productsData);
//     const product= props.productsData;
//     console.log(product);
    
    
    
//   return (
// <>

//    <div className="card w-25 justify-content-around m-5" key={product.name}>
//       <div className=" d-flex justify-content-center mt-2">
//         <img src={product.img} alt="productImage" className="w-50" />
//       </div>
//       <h2>{product.name}</h2>
//       <span className="text-success">Price: {product.price}</span>
//       {product.available ? (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-success">Add to Cart</button>
//         </div>
//       ) : (
//         <div className="d-flex justify-content-center my-3">
//           <button className="btn btn-danger">Not Available</button>
//         </div>
//       )}
//     </div>


// </>
   
//   )
// }

// third way

export  function ProductCart({productsData}) {
      return (
<>

   <div className="card w-25 justify-content-around m-5" key={productsData.name}>
      <div className=" d-flex justify-content-center mt-2">
        <img src={productsData.img} alt="productImage" className="w-50" />
      </div>
      <h2>{productsData.name}</h2>
      <span className="text-success">Price: {productsData.price}</span>
      {productsData.available ? (
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-success">Add to Cart</button>
        </div>
      ) : (
        <div className="d-flex justify-content-center my-3">
          <button className="btn btn-danger">Not Available</button>
        </div>
      )}
    </div>


</>
   
  )
}
/**
 * function sum(x=1,y=2)   <sum x={product}>   ==> function sum (props.x.name )
 * sum(5,10)
 */