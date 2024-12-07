import React from "react";
import "./New.css";

function Perusahaan() {
  const companies = [
    { no: 1, name: "Co-Working", category: "Startup", description: "Media dan pengelolaan ruang kerja bersama" },
    { no: 2, name: "CV. Kreasi Teknik", category: "Perusahaan", description: "Perusahaan mekanikal dan elektrikal" },
    { no: 3, name: "Fortuna Medialoka", category: "Startup", description: "Digital marketing dan desain grafis" },
    { no: 4, name: "Nurani Tech Technology", category: "Startup", description: "IT outsourcing dan pengembangan aplikasi" },
    { no: 5, name: "Tech Computindo", category: "Perusahaan", description: "IT consultant" },
    { no: 6, name: "PDAM (Tirta Pulogadung)", category: "Perusahaan", description: "Perusahaan produksi air" },
    { no: 7, name: "PERURI", category: "Perusahaan", description: "Percetakan produk keamanan" },
    { no: 8, name: "PT MIK Semarang", category: "Perusahaan", description: "Perusahaan produksi kertas" },
    { no: 9, name: "PT INDACO KARAWANG", category: "Perusahaan", description: "Perusahaan produksi cat" },
    { no: 10, name: "CV Bali Creative", category: "Startup", description: "Digital agency" },
    { no: 11, name: "PT Energi Sistem", category: "Perusahaan", description: "IT solution" },
    { no: 12, name: "PT Exindo Jaya", category: "Perusahaan", description: "Perusahaan perdagangan besi dan baja" },
    { no: 13, name: "PT Cipta Mahakarya", category: "Perusahaan", description: "Perusahaan interior dan desain" },
    { no: 14, name: "PT BNF Indonesia", category: "Perusahaan", description: "Perusahaan alat tulis" },
  ];
 
  return (
    <div className="container">
      <h1>Perusahaan</h1>
      <p>
        Kamu berada di halaman daftar perusahaan yang telah bekerjasama dengan
        Fasilkom Unsika
      </p>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Unit Tujuan Magang</th>
            <th>Kategori</th>
            <th>Deskripsi Unit/Tujuan Magang</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.no}>
              <td>{company.no}</td>
              <td>{company.name}</td>
              <td>{company.category}</td>
              <td>{company.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Perusahaan;
