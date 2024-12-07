
//Form Pendaftaran Seminar Proposal

import { useState } from 'react';
import '../../css/main.css';

function Formsempro2() {

  const [values, setValues] = useState({
    email: '',
    fullname: '',
    number: '',
    judulproposal: '',
    contact:'',
    namadospem: '',
    buktiukt: '',
    buktikrs: '',
    proposalskripsi: '',
    buktidospem: '',
    buktiplagiarisme:''
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
      judulproposal: '',
      contact:'',
      namadospem: '',
      buktiukt: '',
      buktikrs: '',
      proposalskripsi: '',
      buktidospem: '',
      buktiplagiarisme:''
    })
  }


  return (
    <div className="container"> 
    <div className="judul">
      <h1>Form Pendaftaran Seminar Proposal</h1>
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

        {/* judul proposal skripsi */}
        <label htmlFor='judulproposal'>Judul Proposal Skripsi</label>
          <input type="text" placeholder ="Masukan judul proposal skripsi" name="judulproposal" 
          onChange={(e) => handleChanges(e)} required value={values.judulproposal}/>

        {/* no wa */}
        <label htmlFor='contact'>No Whatsapp</label>
          <input type="text" placeholder ="Masukan No Whatsapp" name="contact" 
          onChange={(e) => handleChanges(e)} required value={values.contact}/>

        {/* nama dospem */}
        <label htmlFor='namadospem'>Nama Dosen Pembimbing</label>
        <select name='namadospem' id='namadospem' onChange={(e) => handleChanges(e)} required value={values.namadospem}>
          <option value="dosen1">Adhi Rizal, MT.</option>
          <option value="dosen2">Agung Susilo Yuda Irawan, M.Kom.</option>
          <option value="dosen3">Aji Primajaya, S.Si., M.Kom.</option>
          <option value="dosen4">Apriade Voutama, M.Kom.</option>
          <option value="dosen5">Aries Suharso, S.Si., M.Kom</option>
          <option value="dosen6">Arip Solehudin, M.Kom.</option>
          <option value="dosen7">Asep Jamaludin, S.Si., M.Kom.</option>
          <option value="dosen8">Azhari Ali Ridha, S.Kom., MMSI.</option>
          <option value="dosen9">Betha Nurina Sari, M.Kom.</option>
          <option value="dosen10">Budi Arif Darmawan, M.Kom.</option>
          <option value="dosen11">Carudin, M.Kom.</option>
          <option value="dosen12">Dr. Chaerur Rozikin, M.Kom.</option>
          <option value="dosen13">Dadang Yusup, M.Kom.</option>
          <option value="dosen14">Didi Juardi, S.T., M.Kom.</option>
          <option value="dosen15">E. Haodudin Nurkifli, S.T., M.Cs., Ph.D..</option>
          <option value="dosen16">Garno, M.Kom.</option>
          <option value="dosen17">H. Bagja Nugraha, ST., M.Kom.</option>
          <option value="dosen18">Hannie, S.Kom., MMSI.m.</option>
          <option value="dosen19">H. Bagja Nugraha, ST., M.Kom.</option>
          <option value="dosen20">Iqbal Maulana, S.Si., M.Sc.</option>
          <option value="dosen21">Dr. Jajam Haerul Jaman, S.E., M.Kom.</option>
          <option value="dosen22">Kamal Prihandani, M.Kom.</option>
          <option value="dosen23">M. Jajuli, M.Si.</option>
          <option value="dosen24">Nina Sulistiyowati, S.T., M.Kom.</option>
          <option value="dosen25">Nono Heryana, M.Kom.</option>
          <option value="dosen26">Dr. Oman Komarudin, S.Si., M.Kom.</option>
          <option value="dosen27">Purwantoro, M.Kom.</option>
          <option value="dosen28">Rini Mayasari, M.Kom.</option>
          <option value="dosen29">Riza Ibnu Adam, M.Si.</option>
          <option value="dosen30">Susilawati, M.Si.</option>
          <option value="dosen31">Tesa Nur Padilah, S.Si., M.Sc.</option>
          <option value="dosen32">Ultach Enri, M.Kom.</option>
          <option value="dosen33">Yuyun Umaidah, M.Kom.</option>
        </select>

        {/* bukti ukt */}
        <label htmlFor='buktiukt'>Upload Bukti Lunas Administrasi (UKT)</label>
        <input type='file' placeholder='pilih file' name='buktiukt' onChange={(e) => handleChanges(e)} required value={values.buktiukt}/>

         {/* bukti krs */}
         <label htmlFor='buktikrs'>Bukti KRS ambil Skripsi (yang telah ditandatangani oleh dosen wali)</label>
        <input type='file' placeholder='pilih file' name='buktikrs' onChange={(e) => handleChanges(e)} required value={values.buktikrs}/>

         {/* proposal skripsi */}
         <label htmlFor='proposalskripsi'>Upload File Proposal Skripsi (mulai cover sampai daftar pustaka), format dokumen (NAMA_Proposal.pdf) max file size 10 MB</label>
        <input type='file' placeholder='pilih file' name='proposalskripsi' onChange={(e) => handleChanges(e)} required value={values.proposalskripsi}/>

        {/* bukti dospem */}
        <label htmlFor='buktidospem'>Upload Bukti Persetujuan Dosen Pembimbing (Screenshot/Capture/Printscreen dari media komunikasi misalnya WA, email, dst) dalam format gambar (*.img), max file size IMB</label>
        <input type='file' placeholder='pilih file' name='buktidospem' onChange={(e) => handleChanges(e)} required value={values.buktidospem}/>

        {/* bukti plagiarisme */}
        <label htmlFor='buktiplagiarisme'>Upload Bukti Cek Plagiarisme Bab 1-3 dalam format gambar (*.jpg), max file size IMB (Upload 3 gambar)</label>
        <input type='file' placeholder='pilih file' name='buktiplagiarisme' onChange={(e) => handleChanges(e)} required value={values.buktiplagiarisme}/>

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Formsempro2;
