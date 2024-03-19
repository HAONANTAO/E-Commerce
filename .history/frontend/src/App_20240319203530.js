import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Router } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter> 
    </>
  );
}

export default App;
