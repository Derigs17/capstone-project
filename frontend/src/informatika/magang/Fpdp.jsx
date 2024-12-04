
//Form Pembagian Dosen Pembimbing

import { useState } from 'react';
import '../Inf.css';

function Fpdp() {

  const [values, setValues] = useState({
    fullname: '',
    contact: '',
    number: '',
    suratbalasan: '',
    namamagang: '',
    alamatmagang: '',
    pjmagang: '',
    kontakmagang: '',
    latitudemagang: '',
    longtitudemagang: '',
    awalmagang: '',
    selesaimagang: '',
    bidangminat: '',
    rencanamagang: ''
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
      suratbalasan: '',
      namamagang: '',
      alamatmagang: '',
      pjmagang: '',
      kontakmagang: '',
      latitudemagang: '',
      longtitudemagang: '',
      awalmagang: '',
      selesaimagang: '',
      bidangminat: '',
      rencanamagang: ''
    })
  }

  return (
    <div className="container"> 
      <h1>Form Pembagian Dosen Pembimbing</h1>
      <form onSubmit={handleSubmit}>

        {/* nama */}
        <label htmlFor='fullname'>Nama</label>
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

        {/* surat balasan dari unit tujuan magang */}
        <label htmlFor='suratbalasan'>Surat Balasan dari Unit Tujuan Magang</label>
        <input type='file' placeholder='pilih file' name='suratbalasan' onChange={(e) => handleChanges(e)} required value={values.suratbalasan}/>

        {/* nama tempat magang */}
        <label htmlFor='namamagang'>Nama Tempat Magang</label>
          <input type="text" placeholder ="Masukan nama tempat magang" name="namamagang" 
          onChange={(e) => handleChanges(e)} required value={values.namamagang}/>

        {/* alamat tempat magang */}
        <label htmlFor='alamatmagang'>Alamat Magang</label>
          <input type="text" placeholder ="Masukan alamat magang" name="alamatmagang" 
          onChange={(e) => handleChanges(e)} required value={values.alamatmagang}/>

        {/* nama penanggung jawab di tempat magang */}
        <label htmlFor='pjmagang'>Nama Penanggung Jawab di Tempat Magang</label>
          <input type="text" placeholder ="Masukan nama penanggung jawab di tempat magang" name="pjmagang" 
          onChange={(e) => handleChanges(e)} required value={values.pjmagang}/>

        {/* nomor kontak penanggung jawab di tempat magang */}
        <label htmlFor='kontakmagang'>Nomor Kontak Penanggung Jawab di Tempat Magang</label>
          <input type="text" placeholder ="Masukan nomor kontak penanggung jawab di tempat magang" name="kontakmagang" 
        onChange={(e) => handleChanges(e)} required value={values.kontakmagang}/>

        {/* latitude tempat magang */}
        <label htmlFor='latitudemagang'>Latitude Tempat Magang</label>
          <input type="text" placeholder ="Masukan latitude tempat magang" name="latitudemagang" 
          onChange={(e) => handleChanges(e)} required value={values.latitudemagang}/>

        {/* longtitude tempat magang */}
        <label htmlFor='longtitudemagang'>Longtitude Tempat Magang</label>
          <input type="text" placeholder ="Masukan longtitude tempat magang" name="longtitudemagang" 
          onChange={(e) => handleChanges(e)} required value={values.longtitudemagang}/>

        {/* tanggal awal magang */}
        <label htmlFor='awalmagang'>Tanggal Awal Magang</label>
          <input type="text" placeholder ="Masukan tanggal awal magang" name="awalmagang" 
          onChange={(e) => handleChanges(e)} required value={values.awalmagang}/>

        {/* tanggal selesai magang */}
        <label htmlFor='selesaimagang'>Tanggal Selesai Magang</label>
          <input type="text" placeholder ="Masukan tanggal selesai magang" name="selesaimagang" 
          onChange={(e) => handleChanges(e)} required value={values.selesaimagang}/>

        {/* bidang minat */}
        <label htmlFor='bidangminat'>Bidang Minat</label>
        <select name='bidangminat' id='bidangminat' onChange={(e) => handleChanges(e)} required value={values.bidangminat}>
          <option value="se">Software Engineering</option>
          <option value="cn">Computer Network</option>
          <option value="ds">Data Science</option>
        </select>

        {/* rencana magang */}
        <label htmlFor='rencanamagang'>Rencana Magang</label>
          <input type="text" placeholder ="Masukan rencana magang" name="rencanamagang" 
          onChange={(e) => handleChanges(e)} required value={values.rencanamagang}/>

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Fpdp;
