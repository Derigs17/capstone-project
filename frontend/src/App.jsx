import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

import Home from './pages/Home';
import Guidebook from "./pages/Guidebook";
import About from "./pages/About";
import Informatika from "./page/Informatika";
import SistemInformasi from "./page/SistemInformasi";
import Dosen from './page/Dosen';

// Informatika
import TugasAkhir from './Informatika/TugasAkhir';
import Magang from './Informatika/Magang';
import Persuratan from './Informatika/Persuratan';
import PenyerahanSkripsi from './page/PenyerahanSkripsi';

// bagian Tugas Akhir TI
import AjukanJudul from './Informatika/Tugas Akhir/AjukanJudul';

// Persuratan TI
import SuratRekomendasi from './Informatika/Persuratan/SuratRekomendasi';
import SuratRekomendasi2 from './Informatika/Persuratan/SuratRekomendasi2';

import MagangUmum from './Informatika/Magang/MagangUmum';
import MagangKompetisi from './Informatika/Magang/MagangKompetisi';

// magang
import SuratPermohonanMagang from './Informatika/Magang/SuratPermohonanMagang';

import TugasAkhirSI from './SistemInformasi/TugasAkhirSI';
import PersuratanSI from './SistemInformasi/PersuratanSI';


import Login from "./pages/Login";
import Register from "./pages/Register";
import UserProfile from './pages/UserProfile'

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

        {/* magang */}
        <Route path='/surat-permohonan-magang' element={<SuratPermohonanMagang />} />

        {/*  bagian Tugas Akhir TI */}
        <Route path='/ajukan-judul' element={<AjukanJudul />} />

        {/* Persratan TI */}
        <Route path='/surat-rekomendasi' element={<SuratRekomendasi />} />
        <Route path='/surat-rekomendasi2' element={<SuratRekomendasi2 />} />



        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="profile" element={<UserProfile />} />
      </Routes>

    </div>
  );
}

export default App