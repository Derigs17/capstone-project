
//Surat Izin Penelitian (Sip)

import { useState } from 'react';
import '../Inf.css';

function Sip() {

  const [values, setValues] = useState({
    fullname: '',
    contact: '',
    number: '',
    prodi: '',
    lingkupsurat: '',
    semester: '',
    tujuansurat: '',
    tujuaninstansi: '',
    domisiliinstansi: '',
    judulpenelitian: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    alert("Form berhasil disubmit!");

    setValues({
      fullname: '',
      contact: '',
      number: '',
      prodi: '',
      lingkupsurat: '',
      semester: '',
      tujuansurat: '',
      tujuaninstansi: '',
      domisiliinstansi: '',
      judulpenelitian: ''
    })

  }

  return (
    <div className="container">
      <h1>Form Permohonan Surat Izin Penelitian</h1>
      <form onSubmit={handleSubmit}>
        
        {/* nama */}
        <label htmlFor='fullname'>Nama Lengkap*</label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>
        
        {/* no wa */}
        <label htmlFor='contact'>No Whatsapp</label>
          <input type="text" placeholder ="Masukan No Whatsapp" name="contact" 
          onChange={(e) => handleChanges(e)} required value={values.contact}/>

        {/* npm */}
        <label htmlFor='number'>NPM</label>
          <input type="text" placeholder ="Masukan NPM" name="number" 
          onChange={(e) => handleChanges(e)} required value={values.number}/>

        {/* prodi */}
        <label htmlFor='prodi'>Program Studi</label>
          <input type="text" placeholder ="Masukan Program Studi" name="prodi" 
          onChange={(e) => handleChanges(e)} required value={values.prodi}/>

        {/* lingkup surat */}
        <label htmlFor='lingkupsurat'>Lingkup Surat</label>
          <input type="radio" name="lingkupsurat" 
          onChange={(e) => handleChanges(e)} required value={values.lingkupsurat}/> Eksternal
          <input type="radio" name="lingkupsurat" 
          onChange={(e) => handleChanges(e)}/> Internal

        {/* semester */}
        <label htmlFor='semester'>Semester</label>
        <select name='semester' id='semester' onChange={(e) => handleChanges(e)} required value={values.semester}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="tingkatakhir">Tingkat Akhir</option>
        </select>

        {/* tujuan surat */}
        <label htmlFor='tujuansurat'>Tujuan Surat</label>
          <input type="text" placeholder ="Masukan Tujuan Surat" name="tujuansurat" 
          onChange={(e) => handleChanges(e)} required value={values.tujuansurat}/>

        {/* tujuan instansi */}
        <label htmlFor='tujuaninstansi'>Tujuan Instansi</label>
          <input type="text" placeholder ="Masukan Tujuan Instansi" name="tujuaninstansi" 
          onChange={(e) => handleChanges(e)} required value={values.tujuaninstansi}/>

        {/* domisili instansi */}
        <label htmlFor='domisiliinstansi'>Domisili Instansi</label>
          <input type="text" placeholder ="Masukan Domisili Instansi" name="domisiliinstansi" 
          onChange={(e) => handleChanges(e)} required value={values.domisiliinstansi}/>

        {/* judul penelitian */}
        <label htmlFor='judulpenelitian'>Judul Penelitian</label>
          <input type="text" placeholder ="Masukan Judul Penelitian" name="judulpenelitian" 
          onChange={(e) => handleChanges(e)} required value={values.judulpenelitian}/>
        
        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Sip;
