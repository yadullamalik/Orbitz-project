import "./App.css";
import {Routes,Route} from "react-router-dom"
import {Navbar} from './components/Navbars/Navbar'
import {Homepage} from "./components/Homepages/Homepage"
import {Footer} from "./components/Footers/Footer"
import { Flights } from "./components/Flights/Flights";
import { Product } from "./components/Product/Product";
import { Stays } from "./components/Stays/Stays";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
      <Route path="/" element={<Homepage/>} ></Route>
    
      
      </Routes>
      <Footer/>
      {/* <Stays /> */}
      {/* <Flights /> */}
      {/* <Product /> */}
    </div>
  );
}

export default App;
