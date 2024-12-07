
//Surat Izin Penelitian

import { useState } from 'react';
import '../Inf.css';

function Surek2() {

  const [values, setValues] = useState({
    fullname: '',
      contact: '',
      number: '',
      prodi: '',
      usulansurat: '',
      template: '',
      semester:'',
      ttlanda:'',
      nilaiipk:'',
      program:'',
      posisijabatan:'',
      instansi: '',
      tujuan: '',
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
      usulansurat: '',
      template: '',
      semester:'',
      ttlanda:'',
      nilaiipk:'',
      program:'',
      posisijabatan:'',
      instansi: '',
      tujuan: '',
    })
  }


  return (
    <div className="container"> 
      <h1>Form Permohonan surat rekomendasi</h1>
      <form onSubmit={handleSubmit}>

        {/* nama */}
        <label htmlFor='fullname'>Nama anggota </label>
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

        {/* usulan surat */}
        <label htmlFor='usulansurat'>Usulan Surat</label>
          <input type="radio" name="usulansurat" 
          onChange={(e) => handleChanges(e)} required value={values.usulansurat}/> Rekomendasi
          <input type="radio" name="usulansuratt" 
          onChange={(e) => handleChanges(e)}/> Pengantar
          <input type="radio" name="usulansurat" 
          onChange={(e) => handleChanges(e)}/> Keduanya

        {/* template khusus */}
        <label htmlFor='template'>Template khusus</label>
        <input type='file' placeholder='pilih file' name='template' onChange={(e) => handleChanges(e)} required value={values.template}/>

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

        {/* ttl */}
        <label htmlFor='ttlanda'>Tempat Tanggal Lahir</label>
          <input type="text" placeholder ="Masukan Tempat tanggal lahir anda" name="ttlanda" 
          onChange={(e) => handleChanges(e)} required value={values.ttlanda}/>

        {/* ipk */}
        <label htmlFor='nilaiipk'>IPK</label>
          <input type="text" placeholder ="Masukan nilai IPK anda" name="nilaiipk" 
          onChange={(e) => handleChanges(e)} required value={values.nilaiipk}/>

        {/* program */}
        <label htmlFor='program'>Program</label>
          <input type="text" placeholder ="Masukan nama program" name="program" 
          onChange={(e) => handleChanges(e)} required value={values.program}/>

        {/* posisijabatan */}
        <label htmlFor='posisijabatan'>Posisi atau Jabatan yang dituju</label>
          <input type="text" placeholder ="Masukan posisi atau jabatan" name="posisijabatan" 
          onChange={(e) => handleChanges(e)} required value={values.posisijabatan}/>

        {/* instansi */}
        <label htmlFor='instansi'>Instansi Penyelenggara</label>
          <input type="text" placeholder ="Masukan instansi penyelanggaran" name="instansi" 
          onChange={(e) => handleChanges(e)} required value={values.instansi}/>
        
        {/* tujuan surat */}
        <label htmlFor='tujuan'>Tujuan Surat (Jika diwajibkan Surat Pengantar dari Universitas)</label>
          <input type="text" placeholder ="Masukan instansi penyelanggaran" name="tujuan" 
          onChange={(e) => handleChanges(e)} required value={values.tujuan}/>
        
        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Surek2;
