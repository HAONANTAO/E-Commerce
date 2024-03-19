import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes></Routes>
        <Navbar></Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
