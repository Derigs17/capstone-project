
//Surat Bebas Pustaka

import { useState } from 'react';
import '../Inf.css';

function Sbp() {

  const [values, setValues] = useState({
    fullname: '',
    number: '',
    prodi: ''
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
      prodi: ''
    })

  }

  return (
    <div className="container"> 
      <h1>Form Permohonan Surat Bebas Pustaka</h1>
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

        {/* tombol */}
        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default Sbp;
