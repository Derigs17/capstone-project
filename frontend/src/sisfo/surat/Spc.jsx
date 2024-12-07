
//Surat Permohonan Cuti

import { useState } from 'react';
import '../Inf.css';

function Spc() {

  const [values, setValues] = useState({
    fullname: '',
    number: '',
    prodi: '',
    periode: '',
    tahunakademik: '',
    contact: '',
    alamat: '',
    alasancuti: '',
    buktiukt: ''
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
      number: '',
      prodi: '',
      periode: '',
      tahunakademik: '',
      contact: '',
      alamat: '',
      alasancuti: '',
      buktiukt: ''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Permohonan Surat Pengajuan Cuti</h1>
      <form onSubmit={handleSubmit}>

        {/* nama */}
        <label htmlFor='fullname'>Nama </label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>

        {/* npm */}
        <label htmlFor='number'>NPM</label>
          <input type="text" placeholder ="Masukan NPM" name="number" 
          onChange={(e) => handleChanges(e)} required value={values.number}/>

        {/* prodi */}
        <label htmlFor='prodi'>Program Studi</label>
          <input type="text" placeholder ="Masukan Program Studi" name="prodi" 
          onChange={(e) => handleChanges(e)} required value={values.prodi}/>

        {/* periode */}
        <label htmlFor='periode'>Periode</label>
          <input type="radio" name="periode" 
          onChange={(e) => handleChanges(e)} required value={values.periode}/> Gasal
          <input type="radio" name="periode" 
          onChange={(e) => handleChanges(e)}/> Ganjil

        {/* tahun akademik */}
        <label htmlFor='tahunakademik'>Tahun Akademik</label>
          <input type="text" placeholder ="Masukan tahun akademik anda" name="tahunakademik" 
          onChange={(e) => handleChanges(e)} required value={values.tahunakademik}/>

        {/* no wa */}
        <label htmlFor='contact'>No Whatsapp</label>
          <input type="text" placeholder ="Masukan No Whatsapp" name="contact" 
          onChange={(e) => handleChanges(e)} required value={values.contact}/>

        {/* alamat */}
        <label htmlFor='alamat'>Alamat</label>
          <input type="text" placeholder ="Masukan alamat anda" name="alamat" 
          onChange={(e) => handleChanges(e)} required value={values.alamat}/>
        
        {/* alasan cuti */}
        <label htmlFor='alasancuti'>Alasan Cuti</label>
          <input type="text" placeholder ="Masukan alasan cuti" name="alasancuti" 
          onChange={(e) => handleChanges(e)} required value={values.alasancuti}/>

        {/* bukti pembayaran ukt */}
        <label htmlFor='buktiukt'>Bukti Pembayaran UKT</label>
        <input type='file' placeholder='pilih file' name='buktiukt' onChange={(e) => handleChanges(e)} required value={values.buktiukt}/>

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Spc;
