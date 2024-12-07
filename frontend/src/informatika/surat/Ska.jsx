
//Surat Keterangan Aktif 

import { useState } from 'react';
import '../../css/main.css';

function Ska() {

  const [values, setValues] = useState({
    fullname: '',
    number: '',
    prodi: '',
    semester: '',
    periode: '',
    tahunakademik: '',
    ttl: '',
    alamat: '',
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
      semester: '',
      periode: '',
      tahunakademik: '',
      ttl: '',
      alamat: '',
      buktiukt: ''
    })

  }


  return (
    <div className="container"> 
    <div className="judul">
      <h1>Form Permohonan Surat Keterangan Aktif</h1>
    </div>
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

        {/* tempat tanggal lahir */}
        <label htmlFor='ttl'>Tempat Tanggal Lahir</label>
          <input type="text" placeholder ="Masukan ttl" name="ttl" 
          onChange={(e) => handleChanges(e)} required value={values.ttl}/>

        {/* alamat */}
        <label htmlFor='alamat'>Alamat</label>
          <input type="text" placeholder ="Masukan alamat anda" name="alamat" 
          onChange={(e) => handleChanges(e)} required value={values.alamat}/>
        
        {/* bukti pembayaran ukt */}
        <label htmlFor='buktiukt'>Bukti Pembayaran UKT</label>
        <input type='file' placeholder='pilih file' name='buktiukt' onChange={(e) => handleChanges(e)} required value={values.buktiukt}/>

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Ska;
