import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Revision.css";
import { useSelector } from "react-redux";
export default function Revision(props) {

  let products=props.products;
  let soldProducts=[];
    const theme = useSelector(state => state.theme.value);
      const test=useSelector(state=>state.test.value);
  return (
    <>
    <br /><br /><br /><br /><br /><br />
    <h2>theme: {theme}</h2>
    <h2>Counter : {test}</h2>
  <div style={theme==='light'?{backgroundColor:'white'}:{backgroundColor:'black',color:'white'}}>
      <div className="d-flex justify-content-around flex-wrap m-5">
      {products.map((product) => (
        <div className="mb-3" key={product.id}>
          <Card style={{ width: '18rem' }} className="p-3">
            <Card.Img variant="top" src={product.img} alt='chair image' style={{ height:"200px" }} />
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
              {product.description}
            </Card.Text>
            <Card.Text>
              {product.price}
            </Card.Text>
            <Button variant="primary" onClick={()=>{soldProducts.push(product);
         
            console.log(soldProducts)
            }}>Buy</Button>
          </Card>
           
      
        </div>
      ))}
     
    </div>
  </div>
    </>
  );
}

