import React from "react";
import "./Sempro1.css";
import { useNavigate } from 'react-router-dom';

function Formkolo1() {
  const navigate = useNavigate()
  const instructions = [
    "GUNAKAN EMAIL AKTIF.",
    "CHECK INBOX EMAIL ANDA SEGERA SETELAH INPUT SELESAI.",
    "PRINT SELURUH HALAMAN FEEDBACK YANG MASUK KE EMAIL ANDA MENGGUNAKAN KERTAS A4.",
    "CEK TERLEBIH DAHULU PASTIKAN TIDAK ADA KONTEN YANG TERPOTONG DARI HASIL PRINT.",
    "GUNAKAN KERTAS A4.",
    "CEK PRINT PREVIEW AGAR TIDAK ADA KONTEN YANG TERPOTONG.",
    "A4",
    "PASTIKAN ANDA MEMBACA DESKRIPSI PENGISIAN DAN CEK ULANG DATA YANG DIINPUT SEBELUM SUBMIT.",
  ]; 

  const handleNext = (e) => {
    navigate('/Formkolo2');
  }

  return (
    <div className="container">
      <h1>Instruksi</h1>
      <ul>
        {instructions.map((instruction, index) => (
          <li key={index}> {instruction}</li>
        ))}
      </ul>

      {/* tombol | ini harus diganti next button*/}
      <button onClick={handleNext} className="next-button">Next</button>

    </div>
  );
}

export default Formkolo1;