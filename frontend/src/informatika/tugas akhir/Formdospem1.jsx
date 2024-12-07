
//Surat rekomendasi inf page 1

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/main.css';

function Formdospem1() {

  const navigate = useNavigate()
  const [values, setValues] = useState({
        email: '',
        fullname: '',
        number: '',
        tahapta: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    navigate('/Formdospem2')

    setValues({
      email: '',
      fullname: '',
      number: '',
      tahapta: ''
    })
  }

  return (
    <div className="container">
      <div className="judul">
      <h1>Form Pengajuan Ulang Proposal atau Skripsi dan Dosen Pembimbing Tugas Akhir</h1>
      </div>
      <form onSubmit={handleSubmit}>

        {/* email */}
        <label htmlFor='email'>Email</label>
          <input type="text" placeholder ="Masukan alamat email" name="email" 
          onChange={(e) => handleChanges(e)} required value={values.email}/>

        {/* nama */}
        <label htmlFor='fullname'>Nama</label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>

        {/* npm */}
        <label htmlFor='number'>NPM</label>
          <input type="text" placeholder ="Masukan NPM" name="number" 
          onChange={(e) => handleChanges(e)} required value={values.number}/>

        {/* tahap tugas akhir */}
        <label htmlFor='tahapta'>Tahap Tugas Akhir</label>
        <select name='tahapta' id='tahapta' onChange={(e) => handleChanges(e)} required value={values.tahapta}>
          <option value="tahapta1">Proposal Skripsi</option>
          <option value="tahapta2">Skripsi</option>
        </select>


        {/* tombol */}
        <div className="form-container">
          <button type="submit">Next</button>
      </div>
        
      </form>
    </div>
  );
}

export default Formdospem1;
