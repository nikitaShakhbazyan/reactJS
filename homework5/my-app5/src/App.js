import './App.css';
import Home from "./Pages/GeorgianUni";
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

