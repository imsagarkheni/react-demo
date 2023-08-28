import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/allRoutes";

function App() {
  document.querySelector("body")?.classList.add("app");
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
