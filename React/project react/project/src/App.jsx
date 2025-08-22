// import NavBar from './Component/NavBarComponent/NavBar'
import NavBar from "./Component/NavBarComponent/NavBar";
import Slider from "./Component/SliderComponent/Slider";
import { Content } from "./Component/ContentComponent/Content";
import Footer from "./Component/FooterComponent/Footer";
import { Products } from "./Component/Products/Products";
import "./index.css";
import Cart from "./Component/CartComponent/Cart";
import Counter from "./Component/CounterComponent/Counter";
import { ProductsData } from "./Component/ProductsData/ProductsData"; // export
import Revision from "./Component/RevisionComponent/Revision"; // export default
import Test from "./Component/TestComponent/test";
import { useSelector } from "react-redux";
// import ThemeComponent from "./Component/ThemeComponent/ThemeComponent";
import ReduxCounterComponent from "./Component/ReduxCounterComponent/ReduxCounterComponent";
function App() {
  const title = import.meta.env.VITE_APP_TITLE || "Default App Title";
  const theme = useSelector((state) => state.theme.value);
  // const lang=useSelector((state)=>state.lang.value)
  // const lang=useSelector((state)=>state.lang.availableLanguages)
  // console.log(lang[0]);

  
  return (
  
    <div
      style={{
        ...(theme === "light"
          ? { backgroundColor: "white", color: "black" }
          : { backgroundColor: "black", color: "white" }),
        // ...(lang === "english"
        //   ? { textAlign: "left" }
        //   : { textAlign: "right" }),
      }}
    >
    
      <NavBar></NavBar>
      <br />

      <Test></Test>
   <br /><br /><br />
         <h1>{title}</h1>

      {/* <ThemeComponent></ThemeComponent> */}
      {/* <Revision></Revision> */}
      {/* <Revision></Revision> */}
      {/* <div className="d-flex justify-content-around m-5">
        <h2>Day1 From React</h2>
        <div className="bg-dark text-light  rounded-1 p-3">
          {" "}
          Cart Produts Count :{" "}
        </div>
      </div> */}
      {/* <NavBar></NavBar>
      <Content/>
      <Slider/>
      <Footer></Footer> */}
      {/* <Products></Products> */}
      {/* <ProductsData /> */}
      {/* <Cart/> */}
      {/* <Counter></Counter> */}

      <ReduxCounterComponent></ReduxCounterComponent>
    </div>
  );
}

export default App;

