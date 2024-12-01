
//Form Pendaftaran Yudisium

import { useState } from 'react';
import '../Inf.css';

function Formyudis2() {

  const [values, setValues] = useState({
    email: '',
    fullname: '',
    number: '',
    judulskripsiindo: '',
    judulskripsiing: '',
    contact:'',
    buktidospem: '',
    namadospem1: '',
    namadospem2: '',
    namadosji1:'',
    namadosji2:'',
    fileskripsi:'',
    buktiloa:''
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
      buktidospem: '',
      namadospem1: '',
      namadospem2: '',
      namadosji1:'',
      namadosji2:'',
      fileskripsi:'',
      buktiloa:''
    })
  }


  return (
    <div className="container"> 
      <h1>Form Pendaftaran Yudisium</h1>
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

        {/* bukti dospem */}
        <label htmlFor='buktidospem'>Unggah Bukti persetujuan dosen pembimbing 1 dan 2, dosen penguji 1 dan 2 atas revisi skripsi pasca kolokium (Jadikan semua capture WA di satu file gambar atau file pdf) untuk daftar yudisium, format *.img atau .pdf, max file size 10 MB.</label>
        <input type='file' placeholder='pilih file' name='buktidospem' onChange={(e) => handleChanges(e)} required value={values.buktidospem}/>

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

        {/* nama dosen penguji 1*/}
        <label htmlFor='namadosji1'>Nama Dosen Penguji Kolokium 1</label>
        <select name='namadosji1' id='namadosji1' onChange={(e) => handleChanges(e)} required value={values.namadosji1}>
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

        {/* nama dosen penguji 2*/}
        <label htmlFor='namadosji2'>Nama Dosen Penguji Kolokium 2</label>
        <select name='namadosji2' id='namadosji2' onChange={(e) => handleChanges(e)} required value={values.namadosji2}>
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

         {/* file skripsi */}
         <label htmlFor='fileskripsi'>Upload Softfile SKRIPSI berekstensi Word/Document (*.docx/*.doc) lalu di zip/rar (dari cover, lampiran, sampai daftar pustaka)</label>
        <input type='file' placeholder='pilih file' name='fileskripsi' onChange={(e) => handleChanges(e)} required value={values.fileskripsi}/>

        {/* bukti loa */}
        <label htmlFor='buktiloa'>Upload Bukti sudah Upload BuktiLOA Artikel Ilmiah TA</label>
        <input type='file' placeholder='pilih file' name='buktiloa' onChange={(e) => handleChanges(e)} required value={values.buktiloa}/>

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Formyudis2;
