// Form Penyerahan Laporan Magang
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/main.css';

function Mk() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    tipekompetisi: '',
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value }); // Simpan pilihan ke state
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Arahkan ke halaman sesuai pilihan
    if (values.tipekompetisi === 'in') {
      navigate('/Mki'); // Halaman untuk Individu
    } else if (values.tipekompetisi === 'kel') {
      navigate('/Mkk'); // Halaman untuk Kelompok
    } else {
      alert('Pilih tipe kompetisi terlebih dahulu'); // Validasi tambahan
    }
  };

  return (
    <div className="container">
      <div className="judul">
      <h1>Form Pendaftaran Magang Kompetisi</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Tipe Kompetisi */}
        <label htmlFor="tipekompetisi">Tipe Kompetisi</label>
        <select
          name="tipekompetisi"
          id="tipekompetisi"
          onChange={handleChanges}
          required
          value={values.tipekompetisi}
        >
          <option value="" disabled>
            Pilih tipe kompetisi
          </option>
          <option value="in">Individu</option>
          <option value="kel">Kelompok</option>
        </select>

        {/* Tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Mk;
