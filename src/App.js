import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
    </div>
  );
}

export default App;
