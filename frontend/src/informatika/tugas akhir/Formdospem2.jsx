
//Form Pengajuan Ulang Proposal atau Skripsi dan Dosen Pembimbing Tugas Akhir

import { useState } from 'react';
import '../../css/main.css';

function Formdospem2() {

  const [values, setValues] = useState({
    judulproposal: '',
    plotdospem: '',
    usulandospem: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    alert("Form berhasil disubmit!");

    setValues({
      judulproposal: '',
      plotdospem: '',
      usulandospem: ''
    })
  }

  return (
    <div className="container"> 
    <div className="judul">
      <h1>Form Pengajuan Ulang Proposal atau Skripsi dan Dosen Pembimbing Tugas Akhir</h1>
    </div>
      <form onSubmit={handleSubmit}>

        {/* judul proposal*/}
        <label htmlFor='judulproposal'>Judul Proposal</label>
          <input type="text" placeholder ="Masukan judul proposal" name="judulproposal" 
          onChange={(e) => handleChanges(e)} required value={values.judulproposal}/>

        {/* nama dospem 1*/}
        <label htmlFor='plotdospem'>Dosen plotting sebelumnya (kalau sudah mendapat dosen pembimbing proposal sebelumnya). Proposal - Pilih satu dosen pembimbing proposal sebelumnya.</label>
        <select name='plotdospem' id='plotdospem' onChange={(e) => handleChanges(e)} required value={values.plotdospem}>
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
        
         {/* usulan dospem*/}
         <label htmlFor='usulandospem'>Usulan Dosen Pembimbing Proposal (max 2 orang)</label>
          <input type="text" placeholder ="Masukan usulan dospem" name="usulandospem" 
          onChange={(e) => handleChanges(e)} required value={values.usulandospem}/>

        {/* tombol */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default Formdospem2;
