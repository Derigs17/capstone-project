
//Form Penyerahan Laporan Magang

import { useState } from 'react';


function PenyerahanLaporanMagang() {

  const [values, setValues] = useState({
    fullname: '',
    number: '',
    dospemmagang: '',
    namamagang: '',
    alamatmagang: '',
    latitudemagang: '',
    longtitudemagang: '',
    lembarpengesahan: '',
    laporanmagang: '',
    dokumentasimagang: ''
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
      dospemmagang: '',
      namamagang: '',
      alamatmagang: '',
      latitudemagang: '',
      longtitudemagang: '',
      lembarpengesahan: '',
      laporanmagang: '',
      dokumentasimagang: ''
    })
  }

  return (
    <div className="container-form"> 
    <div className="judul">
      <h1>Form Penyerahan Laporan Magang</h1>
    </div>
      <form onSubmit={handleSubmit}>

        {/* nama */}
        <label htmlFor='fullname'>Nama</label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>
        
        {/* npm */}
        <label htmlFor='number'>NPM</label>
          <input type="text" placeholder ="Masukan NPM" name="number" 
          onChange={(e) => handleChanges(e)} required value={values.number}/>

        {/* dosen pembimbing magang */}
        <label htmlFor='dospemmagang'>Dosen Pembimbing Magang</label>
        <input type='text' placeholder='Masukan nama dosen pembimbing magang' name='dospemmagang'     
        onChange={(e) => handleChanges(e)} required value={values.dospemmagang}/>

        {/* nama tempat magang */}
        <label htmlFor='namamagang'>Nama Tempat Magang</label>
          <input type="text" placeholder ="Masukan nama tempat magang" name="namamagang" 
          onChange={(e) => handleChanges(e)} required value={values.namamagang}/>

        {/* alamat tempat magang */}
        <label htmlFor='alamatmagang'>Alamat Magang</label>
          <input type="text" placeholder ="Masukan alamat magang" name="alamatmagang" 
          onChange={(e) => handleChanges(e)} required value={values.alamatmagang}/>

        {/* latitude tempat magang */}
        <label htmlFor='latitudemagang'>Latitude Tempat Magang</label>
          <input type="text" placeholder ="Masukan latitude tempat magang" name="latitudemagang" 
          onChange={(e) => handleChanges(e)} required value={values.latitudemagang}/>

        {/* longtitude tempat magang */}
        <label htmlFor='longtitudemagang'>Longtitude Tempat Magang</label>
          <input type="text" placeholder ="Masukan longtitude tempat magang" name="longtitudemagang" 
          onChange={(e) => handleChanges(e)} required value={values.longtitudemagang}/>

        {/* lembar pengesahan pembimbing (dari tempat magang dan dospem */}
        <label htmlFor='lembarpengesahan'>Lembar Pengesahan Pembimbing (dari Tempat Magang dan Dosen Pembimbing)</label>
        <input type='file' placeholder='pilih file' name='lembarpengesahan' 
        onChange={(e) => handleChanges(e)} required value={values.lembarpengesahan}/>

        {/* laporan magang */}
        <label htmlFor='laporanmagang'>Laporan Magang</label>
        <input type='file' placeholder='pilih file' name='laporanmagang'
        onChange={(e) => handleChanges(e)} required value={values.laporanmagang}/>

        {/* dokumentasi magang */}
        <label htmlFor='dokumentasimagang'>Dokumentasi Magang</label>
        <input type='file' placeholder='pilih file' name='dokumentasimagang'
        onChange={(e) => handleChanges(e)} required value={values.dokumentasimagang}/>

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default PenyerahanLaporanMagang;
