import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";

// import Home from './pages/Home';
// import Guidebook from "./pages/Guidebook";
// import About from "./pages/About";
// import Informatika from "./page/Informatika";
// import SistemInformasi from "./page/SistemInformasi";
// import Dosen from './pages/Dosen';

// import TugasAkhir from './page/TugasAkhir';
import AjukanJudul from './informatika/tugas akhir/AjukanJudul';
import Formdospem1 from './informatika/tugas akhir/Formdospem1';
import Formdospem2 from './informatika/tugas akhir/Formdospem2';
import Formkolo1 from './informatika/tugas akhir/Formkolo1';
import Formkolo2 from './informatika/tugas akhir/Formkolo2';
import Formloa from './informatika/tugas akhir/Formloa';
import Formsempro1 from './informatika/tugas akhir/Formsempro1';
import Formsempro2 from './informatika/tugas akhir/Formsempro2';
import Formyudis1 from './informatika/tugas akhir/Formyudis1';
import Formyudis2 from './informatika/tugas akhir/Formyudis2';
import Revisiproposal from './informatika/tugas akhir/Revisiproposal';

// import Magang from './page/Magang';
import Fpdp from './informatika/magang/Fpdp';
import Mk from './informatika/magang/Mk';
import Mki from './informatika/magang/Mki';
import Mkk from './informatika/magang/Mkk';
import Perusahaan from './informatika/magang/Perusahaan';
import Plm from './informatika/magang/Plm';
import Spm from './informatika/magang/Spm';

// import Persuratan from './page/Persuratan';
import Sbp from './informatika/surat/Sbp';
import Sip from './informatika/surat/Sip';
import Ska from './informatika/surat/Ska';
import Skaopns from './informatika/surat/Skaopns';
import Spc from './informatika/surat/Spc';
import Surek1 from './informatika/surat/Surek1';
import Surek2 from './informatika/surat/Surek2';

import Skripsi1 from './informatika/Skripsi1';
import Skripsi2 from './informatika/Skripsi2';

// import PenyerahanSkripsi from './page/PenyerahanSkripsi';

// import MagangUmum from './page/MagangUmum';
// import MagangKompetisi from './page/MagangKompetisi';

// import TugasAkhirSI from './page/TugasAkhirSI';
// import PersuratanSI from './page/PersuratanSI';


// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import UserProfile from './pages/UserProfile'

// import NavbarComponent from './components/NavbarComponent'


function App() {

  // const excludePaths = ['/Login', '/Register'];

  // const location = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  return (
    <div>

      {/* {!excludePaths.includes(window.location.pathname) && <NavbarComponent />} */}

      <Routes>
         {/* <Route path="/" element={<Home />} /> */}
         {/* <Route path="/guidebook" element={<Guidebook />} /> */}
         {/* <Route path="/about" element={<About />} /> */}
         {/* <Route path="/informatika" element={<Informatika />} /> */}
         {/* <Route path="/sistem-informasi" element={<SistemInformasi />} /> */}
         {/* <Route path="/dosen" element={<Dosen />} /> */}

         {/* <Route path="/tugas-akhir" element={<TugasAkhir />} /> */}
        <Route path="/" element={<Surek1 />} />
        <Route path='/Surek2' element={<Surek2 />} />
        {/* <Route path='/Mkk' element={<Mkk />} /> */}

         {/* <Route path="/magang" element={<Magang />} /> */}
         {/* <Route path="/persuratan" element={<Persuratan />} /> */}
         {/* <Route path="/penyerahan-skripsi" element={<PenyerahanSkripsi />} /> */}

         {/* <Route path="/tugas-akhir-si" element={<TugasAkhirSI />} /> */}
         {/* <Route path="/persuratan-si" element={<PersuratanSI />} /> */}

         {/* <Route path='/magang-umum' element={<MagangUmum />} /> */}
         {/* <Route path='/magang-kompetisi' element={<MagangKompetisi />} /> */}


         {/* <Route path="/Login" element={<Login />} /> */}
         {/* <Route path="/Register" element={<Register />} /> */}
         {/* <Route path="profile" element={<UserProfile />} /> */}
       </Routes>

     </div>
  );
}

export default App