import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Shop></Shop>}></Route>
          <Route path="/mens" element={<ShopCategory></ShopCategory>}></Route>
          <Route path="/womens" element={<ShopCategory></ShopCategory>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
