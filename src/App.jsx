import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbars/Navbar";
import { Homepage } from "./components/Homepages/Homepage";
import { Footer } from "./components/Footers/Footer";
import { Flights } from "./components/Flights/Flights";
import { Product } from "./components/Product/Product";
import { Stays } from "./components/Stays/Stays";
import { Payment } from "./components/payment/payment";
import Login from "./components/login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/stays" element={<Stays />}></Route>
        <Route path="/flights" element={<Flights />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
      {/* <Stays /> */}
      {/* <Flights /> */}
      {/* <Product /> */}
    </div>
  );
}

export default App;
