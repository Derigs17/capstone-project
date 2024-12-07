
//Surat Permohonan Magang

import { useState } from 'react';
import '../Inf.css';

function Spm() {

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
      ttl: '',
      alamat: '',
      instansi: '',
      penerimasurat: '',
      alamatperusahaan: '',
      deskripsiperusahaan: '',
      jenisperusahaan: '',
      tanggaldiisi: ''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Permohonan Surat Permohonan Magang</h1>
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

        {/* tempat tanggal lahir */}
        <label htmlFor='ttl'>Tempat Tanggal Lahir</label>
          <input type="text" placeholder ="Masukan ttl" name="ttl" 
          onChange={(e) => handleChanges(e)} required value={values.ttl}/>

        {/* alamat */}
        <label htmlFor='alamat'>Alamat</label>
          <input type="text" placeholder ="Masukan alamat anda" name="alamat" 
          onChange={(e) => handleChanges(e)} required value={values.alamat}/>

        {/* instansi */}
        <label htmlFor='instansi'>Nama Perusahaan atau Instansi</label>
          <input type="text" placeholder ="Masukan nama perusahaan atau instansi" name="instansi" 
          onChange={(e) => handleChanges(e)} required value={values.instansi}/>

        {/* penerima tujuan surat */}
        <label htmlFor='penerimasurat'>Penerima Tujuan Surat</label>
          <input type="text" placeholder ="Masukan Penerima tujuan surat" name="penerimasurat" 
          onChange={(e) => handleChanges(e)} required value={values.penerimasurat}/>

        {/* alamat perusahaan*/}
        <label htmlFor='alamatperusahaan'>Alamat Perusahaan</label>
          <input type="text" placeholder ="Masukan alamat perusahaan" name="alamatperusahaan" 
          onChange={(e) => handleChanges(e)} required value={values.alamatperusahaan}/>

        {/* deskripsi perusahaan*/}
        <label htmlFor='deskripsiperusahaan'>Deskripsi Perusahaan</label>
          <input type="text" placeholder ="Masukan deskripsi perusahaan" name="deskripsiperusahaan" 
          onChange={(e) => handleChanges(e)} required value={values.deskripsiperusahaan}/>

        {/* jenis perusahaan */}
        <label htmlFor='jenisperusahaan'>Jenis Perusahaan</label>
        <select name='jenisperusahaan' id='jenisperusahaan' onChange={(e) => handleChanges(e)} required value={values.jenisperusahaan}>
          <option value="pt">Persoran Terbatas (PT)</option>
          <option value="cv">Commanditaire Vennotschaap (CV)</option>
          <option value="firma">Firma</option>
          <option value="instansipemerintahan">Instansi Pemerintahan</option>
          <option value="badanpenelitian">Badan Penelitian</option>
        </select>

        {/* tanggal diisi */}
        <label htmlFor='tanggaldiisi'>Tanggal Diisi</label>
          <input type="text" placeholder ="Masukan tanggal diisi" name="tanggaldiisi" 
          onChange={(e) => handleChanges(e)} required value={values.tanggaldiisi}/>


        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Spm;
