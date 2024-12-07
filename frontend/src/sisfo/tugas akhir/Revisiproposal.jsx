
//Form Upload Soft File Revisi Proposal

import { useState } from 'react';
import '../Inf.css';

function Revisiproposal() {

  const [values, setValues] = useState({
    fullname: '',
    number: '',
    tanggalsempro:'',
    softfile:'',
    buktidospem: '',
    buktidosji: '',
    judulproposalrevisi: ''
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
      tanggalsempro:'',
      softfile:'',
      buktidospem: '',
      buktidosji: '',
      judulproposalrevisi: ''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Upload Soft File Revisi Proposal</h1>
      <form onSubmit={handleSubmit}>

        {/* nama */}
        <label htmlFor='fullname'>Nama</label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>

        {/* npm */}
        <label htmlFor='number'>NPM</label>
          <input type="text" placeholder ="Masukan NPM" name="number" 
          onChange={(e) => handleChanges(e)} required value={values.number}/>

        {/* tanggal sempro */}
        <label htmlFor='tanggalsempro'>Tanggal Pelaksanaan Seminar Proposal</label>
          <input type="text" placeholder ="Masukan tanggal sempro" name="tanggalsempro" 
          onChange={(e) => handleChanges(e)} required value={values.tanggalsempro}/>

        {/* soft file */}
        <label htmlFor='softfile'>Upload Soft File Word/Document berekstensi (*pdf atau *docx)</label>
        <input type='file' placeholder='pilih file' name='softfile' onChange={(e) => handleChanges(e)} required value={values.softfile}/>

        {/* bukti dospem */}
        <label htmlFor='buktidospem'>Upload Bukti Persetujuan Dosen Pembimbing (Screenshot/Capture/Printscreen dari media komunikasi misalnya WA, email, dst) dalam format gambar (*.img), max file size IMB</label>
        <input type='file' placeholder='pilih file' name='buktidospem' onChange={(e) => handleChanges(e)} required value={values.buktidospem}/>

        {/* bukti dosji */}
        <label htmlFor='buktidosji'>Upload Bukti Persetujuan Dosen Penguji (Screenshot/Capture/Printscreen dari media komunikasi misalnya WA, email, dst) dalam format gambar (*.img), max file size IMB</label>
        <input type='file' placeholder='pilih file' name='buktidosji' onChange={(e) => handleChanges(e)} required value={values.buktidosji}/>

        {/* judul proposal skripsi revisi*/}
        <label htmlFor='judulproposalrevisi'>Judul Proposal Skripsi setelah revisi</label>
          <input type="text" placeholder ="Masukan judul proposal skripsi setelah revisi" name="judulproposalrevisi" 
          onChange={(e) => handleChanges(e)} required value={values.judulproposalrevisi}/>

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Revisiproposal;
