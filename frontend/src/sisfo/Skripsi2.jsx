
//Form penyerahan skripsi inf page 2

import { useState } from 'react';
import './Inf.css';

function Skripsi2() {

  const [values, setValues] = useState({
    judulskripsi: '',
    tahunmasuk: '',
    tahunkeluar: '',
    namadospem: '',
    namatu: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    alert("Form berhasil disubmit!");

    setValues({
      judulskripsi: '',
      tahunmasuk: '',
      tahunkeluar: '',
      namadospem: '',
      namatu: ''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Penyerahan Skripsi</h1>
      <form onSubmit={handleSubmit}>

        {/* judul skripsi */}
        <label htmlFor='judulskripsi'>Judul Skripsi</label>
          <input type="text" placeholder="Masukan judul skripsi anda" name="judulskripsi"
          onChange={(e) => handleChanges(e)} required value={values.judulskripsi}/>
        
        {/* tahun masuk */}
        <label htmlFor='tahunmasuk'>Tahun Masuk</label>
          <input type="text" placeholder ="Masukan tahun masuk perkuliahan anda" name="tahunmasuk" 
          onChange={(e) => handleChanges(e)} required value={values.tahunmasuk}/>

        {/* tahun keluar */}
        <label htmlFor='tahunkeluar'>Tahun Keluar</label>
          <input type="text" placeholder ="Masukan tahun keluar perkuliahan anda" name="tahunkeluar" 
          onChange={(e) => handleChanges(e)} required value={values.tahunkeluar}/>

        {/* nama dospem */}
        <label htmlFor='namadospem'>Nama Dosen Pembimbing 1 dan 2</label>
          <input type="text" placeholder ="Masukan nama dosen pembimbing 1 dan 2" name="namadospem" 
          onChange={(e) => handleChanges(e)} required value={values.namadospem}/>

        {/* nama pihak tu */}
        <label htmlFor='namatu'>Nama pihak Tata Usaha yang menerima</label>
        <select name='namatu' id='namatu' onChange={(e) => handleChanges(e)} required value={values.namatu}>
          <option value="Riga Karamudi">Riga Karamudi</option>
          <option value="Ade Mulyadi">Ade Mulyadi</option>
          <option value="Muhammad Rizki Fauzi Suharto">Muhammad Rizki Fauzi Suharto</option>
          <option value="Salwa Nur Atifah">Salwa Nur Atifah</option>
          <option value="Ginanjar Mulya Hendarsyah">Ginanjar Mulya Hendarsyah</option>
          <option value="Wahyu Darmawan">Wahyu Darmawan</option>
        </select>
      
        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Skripsi2;
