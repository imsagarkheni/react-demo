import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./components/Product/Product";
import AllRoutes from "./routes/allRoutes";

function App() {
  document.querySelector("body")?.classList.add("app");
  return (
    <div className="container">
      <BrowserRouter>
      <Navbar/>
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
