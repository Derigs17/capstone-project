
//Surat rekomendasi inf page 1

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Inf.css';

function Surek1() {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    jenissurat: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleNext = (e) => {
    e.preventDefault()
    console.log(values)
    navigate('/Surek2')

    setValues({
    jenissurat: ''
    })
  }

  return (
    <div className="container">
      <h1>Form Permohonan surat rekomendasi</h1>
      <form onSubmit={handleNext}>

        {/* lingkup surat */}
        <label htmlFor='jenissurat'>Jenis Surat</label>
          <input type="radio" name="jenissurat" 
          onChange={(e) => handleChanges(e)} required value={values.jenissurat}/> Rekomendasi
          <input type="radio" name="jenissurat" 
          onChange={(e) => handleChanges(e)}/> Surat Keterangan Tidak Menerima Beasiswa
        
        {/* tombol */}
        <button onClick={handleNext} className="next-button">Next</button>

      </form>
    </div>
  );
}

export default Surek1;
