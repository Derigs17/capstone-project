import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Guidebook from "./pages/Guidebook";
import About from "./pages/About";
import Informatika from "./page/Informatika";

import TugasAkhir from './page/TugasAkhir';
import Magang from './page/Magang';
import Persuratan from './page/Persuratan';
import PenyerahanSkripsi from './page/PenyerahanSkripsi';

import MagangUmum from './page/MagangUmum';
import MagangKompetisi from './page/MagangKompetisi';


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
        <Route path="/informatika" element={<Informatika />} />

        <Route path="/tugas-akhir" element={<TugasAkhir />} />
        <Route path="/magang" element={<Magang />} />
        <Route path="/persuratan" element={<Persuratan />} />
        <Route path="/penyerahan-skripsi" element={<PenyerahanSkripsi />} />

        <Route path='/magang-umum' element={<MagangUmum />} />
        <Route path='/magang-kompetisi' element={<MagangKompetisi />} />


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App