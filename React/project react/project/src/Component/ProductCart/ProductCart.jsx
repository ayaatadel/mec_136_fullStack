import React from "react";

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

export function ProductCart({ productsData }) {
  // console.log(productsData);

  return (
    <div className="d-flex justify-content-around flex-wrap">
      {productsData.map((product) => {
        // console.log(product);
        return (
          <div
            className="card d-flex w-25 justify-content-around m-5"
            key={product.name}
          >
            <div className=" d-flex justify-content-center mt-2">
              <img src={product.img} alt="productImage" className="w-50" />
            </div>
            <h2>{product.name}</h2>
            <span className="text-success text-center">
              Price: {product.price}
            </span>
            <div className="d-flex justify-content-center my-3">

              {/* create Event ==> click ==> button ===> log ==>clicked */}
              {/* <button className="btn btn-success"  onClick={clickMe} >Add to Cart</button> */}
              {/* <button className="btn btn-success"  onClick={()=>{
                console.log('clicked by call back');
                
              }} >Add to Cart</button> */}

{/**
 *  Add To Cart Button ==> Products in local Storage
 * 
 * select product ===> store data 
 * 
 */}


              {/* <button className="btn btn-success" onClick={(event)=>{
                     addToCart(event,product )
                     }}>Add to Cart</button> */}
                     <button className="btn btn-success" onClick={(event)=>{
                      addToCart(event,product)

                     }}>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// function clickMe()
// {
//   console.log("clicked");
  
// }
function addToCart(event,product)
{
  // console.log(event.target);
  // console.log(product);
  let cards=JSON.parse(localStorage.getItem('cards'))??[];
  cards.push(product);
  localStorage.setItem('cards',JSON.stringify(cards))
  console.log(cards.length);
  
  
}



/**
 * function sum(x=1,y=2)   <sum x={product}>   ==> function sum (props.x.name )
 * sum(5,10)
 */
