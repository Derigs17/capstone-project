import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Guidebook from "./pages/Guidebook";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";

import NavbarComponent from './components/NavbarComponent'


function App() {

  const excludePaths = ['/login', '/register'];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [location.pathname]);
  return (
    <div>

      {!excludePaths.includes(window.location.pathname) && <NavbarComponent />}

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/guidebook" element={<Guidebook />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>

    </div>
  );
}

export default App