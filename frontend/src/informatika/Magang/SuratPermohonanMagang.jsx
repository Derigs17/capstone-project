import { useState } from 'react';
import axios from 'axios';

function SuratPermohonanMagang() {
  const [values, setValues] = useState({
    fullname: '',
    contact: '',
    number: '',
    ttl: '',
    alamat: '',
    instansi: '',
    penerimasurat: '',
    alamatperusahaan: '',
    deskripsiperusahaan: '',
    jenisperusahaan: '',
    tanggaldiisi: ''
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data ke server
    axios
      .post('http://localhost:8002/submitMagang', values)
      .then((response) => {
        console.log('Response:', response.data);
        alert('Form berhasil disubmit!');
        setValues({
          fullname: '',
          contact: '',
          number: '',
          ttl: '',
          alamat: '',
          instansi: '',
          penerimasurat: '',
          alamatperusahaan: '',
          deskripsiperusahaan: '',
          jenisperusahaan: '',
          tanggaldiisi: ''
        });
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Terjadi kesalahan saat mengirim form.');
      });
  };

  return (
    <div className="container-form">
      <div className="judul">
        <h1>Form Permohonan Surat Permohonan Magang</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* nama */}
        <label htmlFor="fullname">Nama</label>
        <input
          type="text"
          placeholder="Masukan nama lengkap"
          name="fullname"
          onChange={handleChanges}
          required
          value={values.fullname}
        />
        
        {/* no wa */}
        <label htmlFor="contact">No Whatsapp</label>
        <input
          type="text"
          placeholder="Masukan No Whatsapp"
          name="contact"
          onChange={handleChanges}
          required
          value={values.contact}
        />

        {/* npm */}
        <label htmlFor="number">NPM</label>
        <input
          type="text"
          placeholder="Masukan NPM"
          name="number"
          onChange={handleChanges}
          required
          value={values.number}
        />

        {/* tempat tanggal lahir */}
        <label htmlFor="ttl">Tempat Tanggal Lahir</label>
        <input
          type="text"
          placeholder="Masukan ttl"
          name="ttl"
          onChange={handleChanges}
          required
          value={values.ttl}
        />

        {/* alamat */}
        <label htmlFor="alamat">Alamat</label>
        <input
          type="text"
          placeholder="Masukan alamat anda"
          name="alamat"
          onChange={handleChanges}
          required
          value={values.alamat}
        />

        {/* instansi */}
        <label htmlFor="instansi">Nama Perusahaan atau Instansi</label>
        <input
          type="text"
          placeholder="Masukan nama perusahaan atau instansi"
          name="instansi"
          onChange={handleChanges}
          required
          value={values.instansi}
        />

        {/* penerima tujuan surat */}
        <label htmlFor="penerimasurat">Penerima Tujuan Surat</label>
        <input
          type="text"
          placeholder="Masukan Penerima tujuan surat"
          name="penerimasurat"
          onChange={handleChanges}
          required
          value={values.penerimasurat}
        />

        {/* alamat perusahaan */}
        <label htmlFor="alamatperusahaan">Alamat Perusahaan</label>
        <input
          type="text"
          placeholder="Masukan alamat perusahaan"
          name="alamatperusahaan"
          onChange={handleChanges}
          required
          value={values.alamatperusahaan}
        />

        {/* deskripsi perusahaan */}
        <label htmlFor="deskripsiperusahaan">Deskripsi Perusahaan</label>
        <input
          type="text"
          placeholder="Masukan deskripsi perusahaan"
          name="deskripsiperusahaan"
          onChange={handleChanges}
          required
          value={values.deskripsiperusahaan}
        />

        {/* jenis perusahaan */}
        <label htmlFor="jenisperusahaan">Jenis Perusahaan</label>
        <select
          name="jenisperusahaan"
          id="jenisperusahaan"
          onChange={handleChanges}
          required
          value={values.jenisperusahaan}
        >
          <option value="">Pilih jenis perusahaan</option>
          <option value="pt">Persoran Terbatas (PT)</option>
          <option value="cv">Commanditaire Vennotschaap (CV)</option>
          <option value="firma">Firma</option>
          <option value="instansipemerintahan">Instansi Pemerintahan</option>
          <option value="badanpenelitian">Badan Penelitian</option>
        </select>

        {/* tanggal diisi */}
        <label htmlFor="tanggaldiisi">Tanggal Diisi</label>
        <input
          type="text"
          placeholder="Masukan tanggal diisi"
          name="tanggaldiisi"
          onChange={handleChanges}
          required
          value={values.tanggaldiisi}
        />

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SuratPermohonanMagang;
