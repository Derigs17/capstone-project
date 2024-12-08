
//Surat rekomendasi inf page 1

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SuratRekomendasi1() {

  const navigate = useNavigate()
  const [values, setValues] = useState({
    jenissurat: ''
  })

  const handleChanges = (e) => {
    setValues({...values, [e.target.name]:[e.target.value]})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
    navigate('/surat-rekomendasi2')

    setValues({
    jenissurat: ''
    })
  }

  return (
    <div className="container-form">
      <div className="judul">
      <h1>Form Permohonan surat rekomendasi</h1>
      </div>
      <form onSubmit={handleSubmit}>

        {/* lingkup surat */}
        <label htmlFor='jenissurat'>Jenis Surat</label>
        <select name='jenissurat' id='jenissurat' onChange={(e) => handleChanges(e)} required value={values.jenissurat}>
          <option value="Rekomendasi">Rekomendasi</option>
          <option value="Surat Keterangan TidakMenerimaBeasiswa">Surat Keterangan Tidak Menerima Beasiswa</option>
        </select>
        
        {/* tombol */}
        <div className="form-container">
          <button type="submit">Next</button>
        </div>

      </form>
    </div>
  );
}

export default SuratRekomendasi1;
