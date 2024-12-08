
//Form Ajukan Judul Skripsi

import { useState } from 'react';
import axios from 'axios';

function AjukanJudul() {

  const [values, setValues] = useState({
    email: '',
    fullname: '',
    number: '',
    judulproposal: '',
    alasanproposal: '',
    usulandospem: '',
    buktikrs: '',
    estimasi: ''
  }) 

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Menggunakan FormData untuk file upload
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
        formData.append(key, values[key]);
    });

    // Menambahkan file ke FormData
    const fileInput = document.querySelector('input[name="buktikrs"]');
    if (fileInput.files[0]) {
        formData.append('buktikrs', fileInput.files[0]);
    }

    axios.post('http://localhost:8002/submitProposal', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(response => {
        console.log(response.data);
        alert("Form berhasil disubmit!");
        setValues({
            email: '',
            fullname: '',
            number: '',
            judulproposal: '',
            alasanproposal: '',
            usulandospem: '',
            buktikrs: '',
            estimasi: ''
        });
    })
    .catch(error => {
        console.error("Error submitting form:", error);
        alert("Terjadi kesalahan saat mengirim form.");
    });
};



  return (
    <div className="container-form"> 
    <div className="judul">
      <h1>Form Pengajuan Judul Skripsi</h1>
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

        {/* alasan memilih judul proposal tersebut */}
        <label htmlFor='alasanproposal'>Alasan Memilih Judul Proposal tersebut</label>
          <input type="text" placeholder ="Masukan alasan memilih judul proposal tersebut" name="alasanproposal" 
          onChange={(e) => handleChanges(e)} required value={values.alasanproposal}/>

        {/* usulan dospem */}
        <label htmlFor='usulandospem'>Usulan Dosen Pembimbing</label>
        <select name='usulandospem' id='usulandospem' onChange={(e) => handleChanges(e)} required value={values.usulandospem}>
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

        {/* bukti krs */}
        <label htmlFor='buktikrs'>Bukti KRS ambil TUGAS AKHIR (Jika tidak mengambil KRS Tugas Akhir tidak perlu upload)</label>
        <input type='file' placeholder='pilih file' name='buktikrs' onChange={(e) => handleChanges(e)} value={values.buktikrs}/>


        {/* estimasi */}
        <label htmlFor='estimasi'>Estimasi Anda akan menyelesaikan proposal bab 1-3 berapa lama untuk maju seminar proposal?</label>
          <input type="text" placeholder ="Masukan estimasi anda" name="estimasi" 
          onChange={(e) => handleChanges(e)} required value={values.estimasi}/>


        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default AjukanJudul;
