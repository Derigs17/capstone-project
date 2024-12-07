
//Form Bukti Submit dan LOA Publikasi Ilmiah Tugas Akhir

import { useState } from 'react';
import '../Inf.css';

function Formloa() {

  const [values, setValues] = useState({
    email: '',
    fullname: '',
    number: '',
    judulskripsi: '',
    judulartikel: '',
    namapublikasi:'',
    linkpublikasi:'',
    indeksjurnal:'',
    linkartikel:'',
    penulisartikel:'',
    buktisubmit: '',
    buktiloa: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    alert("Form berhasil disubmit!");

    setValues({
      email: '',
      fullname: '',
      number: '',
      judulskripsi: '',
      judulartikel: '',
      namapublikasi:'',
      linkpublikasi:'',
      indeksjurnal:'',
      linkartikel:'',
      penulisartikel:'',
      buktisubmit: '',
      buktiloa: ''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Bukti Submit dan LOA Publikasi Ilmiah Tugas Akhir</h1>
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

        {/* judul skripsi */}
        <label htmlFor='judulskripsi'>Judul Skripsi</label>
          <input type="text" placeholder ="Masukan judul skripsi" name="judulskripsi" 
          onChange={(e) => handleChanges(e)} required value={values.judulskripsi}/>

        {/* judul artikel paper */}
        <label htmlFor='judulartikel'>Judul Artikel Paper</label>
          <input type="text" placeholder ="Masukan judul artikel paper" name="judulartikel" 
          onChange={(e) => handleChanges(e)} required value={values.judulartikel}/>

        {/* nama jurnal tujuan publikasi */}
        <label htmlFor='namapublikasi'>Nama Jurnal Tujuan Publikasi</label>
          <input type="text" placeholder ="Masukan nama jurnal tujuan publikasi" name="namapublikasi" 
          onChange={(e) => handleChanges(e)} required value={values.namapublikasi}/>

        {/* link jurnal tujuan publikasi */}
        <label htmlFor='linkpublikasi'>Link Jurnal Tujuan Publikasi</label>
          <input type="text" placeholder ="Masukan link jurnal tujuan publikasi" name="linkpublikasi" 
          onChange={(e) => handleChanges(e)} required value={values.linkpublikasi}/>

        {/* indeks jurnal */}
        <label htmlFor='indeksjurnal'>Indeks Jurnal</label>
        <select name='indeksjurnal' id='indeksjurnal' onChange={(e) => handleChanges(e)} required value={values.indeksjurnal}>
          <option value="sinta1">SINTA 1</option>
          <option value="sinta2">SINTA 2</option>
          <option value="sinta3">SINTA 3</option>
          <option value="sinta4">SINTA 4</option>
          <option value="sinta5">SINTA 5</option>
          <option value="sinta6">SINTA 6</option>
        </select>

        {/* link artikel */}
        <label htmlFor='linkartikel'>Link artikel (URL) atau DOI (kalau sudah published), kalau belum isi - saja</label>
        <input type="text" placeholder ="Masukan link artikel" name="linkartikel" 
          onChange={(e) => handleChanges(e)} required value={values.linkartikel}/>

        {/* penulis artikel */}
        <label htmlFor='penulisartikel'>Tulis Nama semua Penulis Artikel tersebut (Misalnya ada 3 : NamaMahasiswa, NamaDosen1, NamaDosen2)</label>
        <input type="text" placeholder ="Masukan link artikel" name="penulisartikel" 
          onChange={(e) => handleChanges(e)} required value={values.penulisartikel}/>

        {/* bukti submit */}
        <label htmlFor='buktisubmit'>Upload Bukti Submit</label>
        <input type='file' placeholder='pilih file' name='buktisubmit' onChange={(e) => handleChanges(e)} required value={values.buktisubmit}/>

         {/* bukti loa */}
         <label htmlFor='buktiloa'>Capture Bukti LOA (Letter of Acceptance) : kalau sudah accepted silakan diupload</label>
        <input type='file' placeholder='pilih file' name='buktiloa' onChange={(e) => handleChanges(e)} value={values.buktiloa}/>

         {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Formloa;
