
//Form Pendaftaran magang individu

import { useState } from 'react';
import '../Inf.css';

function Mki() {

  const [values, setValues] = useState({
    fullname: '',
    contact: '',
    number: '',
    namaevent: '',
    tingkatevent: '',
    masakompetisi: '',
    posterkompetisi: '',
    kontakpenyelenggara: '',
    bidangminatkompetisi: '',
    rencanaproduk: ''
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
      namaevent: '',
      tingkatevent: '',
      masakompetisi: '',
      posterkompetisi: '',
      kontakpenyelenggara: '',
      bidangminatkompetisi: '',
      rencanaproduk: ''
    })
  }

  return (
    <div className="container"> 
      <h1>Form Pendaftaran Magang Individu</h1>
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

        {/* nama kompetisi atau event atau lomba */}
        <label htmlFor='namaevent'>Nama kompetisi/event/lomba</label>
        <input type='text' placeholder='Masukan nama kompetisi/event/lomba' name='namaevent'     
        onChange={(e) => handleChanges(e)} required value={values.namaevent}/>

        {/* tingkat event */}
        <label htmlFor='tingkatevent'>Tingkat kompetisi/event/lomba</label>
        <select name='tingkatevent' id='tingkatevent' onChange={(e) => handleChanges(e)} required value={values.tingkatevent}>
          <option value="nas">Nasional</option>
          <option value="inter">Internasional</option>
        </select>

        {/* masa kompetisi */}
        <label htmlFor='masakompetisi'>Masa Kompetisi</label>
          <input type="text" placeholder ="Masukan masa kompetisi" name="masakompetisi" 
          onChange={(e) => handleChanges(e)} required value={values.masakompetisi}/>

        {/* poster kompetisi */}
        <label htmlFor='posterkompetisi'>Upload Poster Kompetisi</label>
        <input type='file' placeholder='pilih file' name='posterkompetisi' 
        onChange={(e) => handleChanges(e)} required value={values.posterkompetisi}/>

        {/* halaman web atau sosmed penyelenggara */}
        <label htmlFor='kontakpenyelenggara'>Halaman Web atau Sosial Media Penyelenggara</label>
          <input type="text" placeholder ="Masukan halaman web atau sosial media penyelenggara" name="kontakpenyelenggara" 
          onChange={(e) => handleChanges(e)} required value={values.kontakpenyelenggara}/>

         {/* bidang minat kompetisi*/}
         <label htmlFor='bidangminatkompetisi'>Bidang Minat Kompetisi</label>
        <select name='bidangminatkompetisi' id='bidangminatkompetisi' onChange={(e) => handleChanges(e)} required value={values.bidangminatkompetisi}>
          <option value="se">Software Engineering</option>
          <option value="cn">Computer Network</option>
          <option value="ds">Data Science</option>
        </select>

        {/* rencana produk */}
        <label htmlFor='rencanaproduk'>Rencana produk yang akan dikembangkan untuk kompetis</label>
          <input type="text" placeholder ="Masukan rencana produk" name="rencanaproduk" 
          onChange={(e) => handleChanges(e)} required value={values.rencanaproduk}/>

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Mki;
