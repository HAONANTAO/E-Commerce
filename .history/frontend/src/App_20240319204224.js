import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route
            path="/mens"
            element={<ShopCategory category="mens"></ShopCategory>}></Route>
          <Route
            path="/womens"
            element={<ShopCategory category="womens"></ShopCategory>}></Route>
          <Route
            path="/kids"
            element={<ShopCategory category="kids"></ShopCategory>}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path=":productId element={<Product />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
