// import NavBar from './Component/NavBarComponent/NavBar'
import NavBar from './Component/NavBarComponent/NavBar'
import Slider from './Component/SliderComponent/Slider'
import {Content} from './Component/ContentComponent/Content'
import Footer from './Component/FooterComponent/Footer'
import { Products } from './Component/Products/Products'
import './index.css'
import {ProductsData} from './Component/ProductsData/ProductsData'
function App() {

  return (
    <>  
      <h2>
        Day1 From React
      </h2>
      {/* <NavBar></NavBar>
      <Content/>
      <Slider/>
      <Footer></Footer> */}
      {/* <Products></Products> */}
      <ProductsData/>
      
    </>
  )
}

export default App
