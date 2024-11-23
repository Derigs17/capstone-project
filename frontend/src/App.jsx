import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Guidebook from "./pages/Guidebook";
import About from "./pages/About";
import Informatika from "./page/Informatika";
import SistemInformasi from "./page/SistemInformasi";
import Dosen from './pages/Dosen';

import TugasAkhir from './page/TugasAkhir';
import Magang from './page/Magang';
import Persuratan from './page/Persuratan';
import PenyerahanSkripsi from './page/PenyerahanSkripsi';

import MagangUmum from './page/MagangUmum';
import MagangKompetisi from './page/MagangKompetisi';

import TugasAkhirSI from './page/TugasAkhirSI';
import PersuratanSI from './page/PersuratanSI';


import Login from "./pages/Login";
import Register from "./pages/Register";

import NavbarComponent from './components/NavbarComponent'


function App() {

  const excludePaths = ['/Login', '/Register'];

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
        <Route path="/sistem-informasi" element={<SistemInformasi />} />
        <Route path="/dosen" element={<Dosen />} />

        <Route path="/tugas-akhir" element={<TugasAkhir />} />
        <Route path="/magang" element={<Magang />} />
        <Route path="/persuratan" element={<Persuratan />} />
        <Route path="/penyerahan-skripsi" element={<PenyerahanSkripsi />} />

        <Route path="/tugas-akhir-si" element={<TugasAkhirSI />} />
        <Route path="/persuratan-si" element={<PersuratanSI />} />

        <Route path='/magang-umum' element={<MagangUmum />} />
        <Route path='/magang-kompetisi' element={<MagangKompetisi />} />


        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App