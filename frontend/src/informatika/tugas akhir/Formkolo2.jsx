
//Form Pendaftaran Kolokium

import { useState } from 'react';
// import '../Inf.css';
import '../../css/main.css';

function Formkolo2() {

  const [values, setValues] = useState({
    email: '',
    fullname: '',
    number: '',
    judulskripsiindo: '',
    judulskripsiing: '',
    contact:'',
    namadospem1: '',
    namadospem2: '',
    buktiukt: '',
    buktikrs: '',
    buktitranskrip:'',
    fileskripsi: '',
    buktidospem: '',
    buktiplagiarisme:'',
    buktimagang:''
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
      judulskripsiindo: '',
      judulskripsiing: '',
      contact:'',
      namadospem1: '',
      namadospem2: '',
      buktiukt: '',
      buktikrs: '',
      buktitranskrip:'',
      fileskripsi: '',
      buktidospem: '',
      buktiplagiarisme:'',
      buktimagang:''
    })
  }


  return (
    <div className="container"> 
    <div className="judul">
      <h1>Form Pendaftaran Kolokium</h1>
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

        {/* judul skripsi ver indo*/}
        <label htmlFor='judulskripsiindo'>Judul Skripsi Bahasa Indonesia, Penulisan judul sesuai dengan PUEBI (contoh: Aplikasi Penghitung Kepopuleran Kata Tuman dan Ahsyiap Berbasis Web (Studi Kasus: Netizen yang Sangat Benar dengan Segala Komentarnya))</label>
          <input type="text" placeholder ="Masukan judul skripsi" name="judulskripsiindo" 
          onChange={(e) => handleChanges(e)} required value={values.judulskripsiindo}/>

        {/* judul skripsi ver inggris*/}
        <label htmlFor='judulskripsiing'>Judul Skripsi Bahasa Inggris, Penulisan judul sesuai dengan Rules for Capitalization seperti Associated Press Stylebook atau Chicago Manual of Style (contoh: Web-Based Application of the Popularity Counters of the Words Tuman and Ahsyiap (Case Study: Highly Correct Netizens with All of Their Comments))</label>
          <input type="text" placeholder ="Masukan judul skripsi" name="judulskripsiing" 
          onChange={(e) => handleChanges(e)} required value={values.judulskripsiing}/>

        {/* no wa */}
        <label htmlFor='contact'>No Whatsapp</label>
          <input type="text" placeholder ="Masukan No Whatsapp" name="contact" 
          onChange={(e) => handleChanges(e)} required value={values.contact}/>

        {/* nama dospem 1*/}
        <label htmlFor='namadospem1'>Nama Dosen Pembimbing Skripsi 1</label>
        <select name='namadospem1' id='namadospem1' onChange={(e) => handleChanges(e)} required value={values.namadospem1}>
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

        {/* nama dospem 2*/}
        <label htmlFor='namadospem2'>Nama Dosen Pembimbing Skripsi 2</label>
        <select name='namadospem2' id='namadospem2' onChange={(e) => handleChanges(e)} required value={values.namadospem2}>
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

        {/* bukti transkrip */}
        <label htmlFor='buktitranskrip'>Bukti Transkrip Sementara dari SISKA</label>
        <input type='file' placeholder='pilih file' name='buktitranskrip' onChange={(e) => handleChanges(e)} required value={values.buktitranskrip} />

         {/* file skripsi */}
         <label htmlFor='fileskripsi'>Upload File Skripsi (lengkap dari cover sampai lampiran), format dokumen (NAMA_SKRIPSI.pdf) , contoh : ANANDA_SKRIPSI.pdf</label>
        <input type='file' placeholder='pilih file' name='fileskripsi' onChange={(e) => handleChanges(e)} required value={values.fileskripsi}/>

        {/* bukti dospem */}
        <label htmlFor='buktidospem'>Upload Bukti Persetujuan Dosen Pembimbing 1 dan 2 (Screenshot/Capture/Printscreen dari media komunikasi misalnya WA, email, dst) dalam format gambar (*.img), max file size IMB</label>
        <input type='file' placeholder='pilih file' name='buktidospem' onChange={(e) => handleChanges(e)} required value={values.buktidospem}/>

        {/* bukti plagiarisme */}
        <label htmlFor='buktiplagiarisme'>Upload Bukti Cek Plagiarisme Bab 1-5 max 30% dalam format gambar (*.jpg), max file size IMB (Upload 3 gambar)</label>
        <input type='file' placeholder='pilih file' name='buktiplagiarisme' onChange={(e) => handleChanges(e)} required value={values.buktiplagiarisme}/>

        {/* bukti laporan magang */}
        <label htmlFor='buktimagang'>Upload Bukti capture sudah mengumpulkan laporan magang</label>
        <input type='file' placeholder='pilih file' name='buktimagang' onChange={(e) => handleChanges(e)} required value={values.buktimagang}/>

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Formkolo2;
