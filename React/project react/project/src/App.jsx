// import NavBar from './Component/NavBarComponent/NavBar'
import NavBar from "./Component/NavBarComponent/NavBar";
import Slider from "./Component/SliderComponent/Slider";
import { Content } from "./Component/ContentComponent/Content";
import Footer from "./Component/FooterComponent/Footer";
import { Products } from "./Component/Products/Products";
import "./index.css";
import Cart from "./Component/CartComponent/Cart";
import Counter from "./Component/CounterComponent/Counter";
import { ProductsData } from "./Component/ProductsData/ProductsData";
function App() {
  return (
    <>
      <div className="d-flex justify-content-around m-5">
        <h2>Day1 From React</h2>
        <div className="bg-dark text-light  rounded-1 p-3">
          {" "}
          Cart Produts Count :{" "}
        </div>
      </div>
      {/* <NavBar></NavBar>
      <Content/>
      <Slider/>
      <Footer></Footer> */}
      {/* <Products></Products> */}
      <ProductsData />
      {/* <Cart/> */}
      <Counter></Counter>
    </>
  );
}

export default App;
