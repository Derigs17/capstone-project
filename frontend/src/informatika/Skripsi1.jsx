
//Form penyerahan skripsi inf page 1

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inf.css';

function Skripsi1() {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    contact: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleNext = (e) => {
    e.preventDefault()
    console.log(values)
    navigate('/skripsi2')

    setValues({
      fullname: '',
      email: '',
      contact: ''
  })
  }

  return (
    <div className="container">
      <h1>Form Penyerahan Skripsi</h1>
      <form onSubmit={handleNext}>

        {/* nama */}
        <label htmlFor='fullname'>Nama Lengkap*</label>
          <input type="text" placeholder="Masukan nama lengkap" name="fullname"
          onChange={(e) => handleChanges(e)} required value={values.fullname}/>
        
        {/* email */}
        <label htmlFor='email'>Email</label>
          <input type="email" placeholder ="Masukan alamat email anda" name="email" 
          onChange={(e) => handleChanges(e)} required value={values.email}/>

        {/* no wa */}
        <label htmlFor='contact'>No Whatsapp</label>
          <input type="text" placeholder ="Masukan No Whatsapp" name="contact" 
          onChange={(e) => handleChanges(e)} required value={values.contact}/>
        
        {/* tombol | ini harus diganti next button*/}
        <button onClick={handleNext} className="next-button">Next</button>

      </form>
    </div>
  );
}

export default Skripsi1;
