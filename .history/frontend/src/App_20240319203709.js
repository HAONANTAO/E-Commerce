import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Navbar></Navbar>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
