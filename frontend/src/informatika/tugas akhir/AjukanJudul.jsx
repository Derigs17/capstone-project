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
  });

  const [errors, setErrors] = useState({
    email: '',
    fullname: '',
    number: '',
    judulproposal: '',
    alasanproposal: '',
    usulandospem: '',
    buktikrs: '',
    estimasi: ''
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Validasi form
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validasi email
    if (!values.email || !/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = 'Email tidak valid';
      isValid = false;
    }

    // Validasi nama lengkap
    if (!values.fullname) {
      newErrors.fullname = 'Nama lengkap harus diisi';
      isValid = false;
    }

    // Validasi NPM
    if (!values.number) {
      newErrors.number = 'NPM harus diisi';
      isValid = false;
    }

    // Validasi judul proposal
    if (!values.judulproposal) {
      newErrors.judulproposal = 'Judul proposal harus diisi';
      isValid = false;
    }

    // Validasi alasan proposal
    if (!values.alasanproposal) {
      newErrors.alasanproposal = 'Alasan proposal harus diisi';
      isValid = false;
    }

    // Validasi dospem
    if (!values.usulandospem) {
      newErrors.usulandospem = 'Dosen pembimbing harus dipilih';
      isValid = false;
    }

    // Validasi estimasi
    if (!values.estimasi) {
      newErrors.estimasi = 'Estimasi harus diisi';
      isValid = false;
    }

    // Validasi file KRS
    const fileInput = document.querySelector('input[name="buktikrs"]');
    if (fileInput.files[0]) {
      const file = fileInput.files[0];
      if (file.type !== 'application/pdf') {
        newErrors.buktikrs = 'Hanya file PDF yang diperbolehkan';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi form
    if (!validateForm()) {
      alert('Terdapat kesalahan pada form. Periksa kembali!');
      return;
    }

    // Menggunakan FormData untuk file upload
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    // Menambahkan file ke FormData jika ada
    const fileInput = document.querySelector('input[name="buktikrs"]');
    if (fileInput.files[0]) {
      formData.append('buktikrs', fileInput.files[0]);
    }

    axios
      .post('http://localhost:8002/submitProposal', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((response) => {
        console.log(response.data);
        alert('Form berhasil disubmit!');
        setValues({
          email: '',
          fullname: '',
          number: '',
          judulproposal: '',
          alasanproposal: '',
          usulandospem: '',
          buktikrs: '',  // Reset file field
          estimasi: ''
        });
        // Reset file input
        document.querySelector('input[name="buktikrs"]').value = '';
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Terjadi kesalahan saat mengirim form.');
      });
  };

  return (
    <div className="container-form">
      <div className="judul">
        <h1>Form Pengajuan Judul Skripsi</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {/* email */}
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="Masukan alamat email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}

        {/* nama */}
        <label htmlFor="fullname">Nama</label>
        <input
          type="text"
          placeholder="Masukan nama lengkap"
          name="fullname"
          onChange={handleChanges}
          required
          value={values.fullname}
        />
        {errors.fullname && <span className="error-message">{errors.fullname}</span>}

        {/* npm */}
        <label htmlFor="number">NPM</label>
        <input
          type="text"
          placeholder="Masukan NPM"
          name="number"
          onChange={handleChanges}
          required
          value={values.number}
        />
        {errors.number && <span className="error-message">{errors.number}</span>}

        {/* judul proposal */}
        <label htmlFor="judulproposal">Judul Proposal Skripsi</label>
        <input
          type="text"
          placeholder="Masukan judul proposal skripsi"
          name="judulproposal"
          onChange={handleChanges}
          required
          value={values.judulproposal}
        />
        {errors.judulproposal && <span className="error-message">{errors.judulproposal}</span>}

        {/* alasan proposal */}
        <label htmlFor="alasanproposal">Alasan Memilih Judul Proposal tersebut</label>
        <input
          type="text"
          placeholder="Masukan alasan memilih judul proposal tersebut"
          name="alasanproposal"
          onChange={handleChanges}
          required
          value={values.alasanproposal}
        />
        {errors.alasanproposal && <span className="error-message">{errors.alasanproposal}</span>}

        {/* usulan dospem */}
        <label htmlFor="usulandospem">Usulan Dosen Pembimbing</label>
        <select
          name="usulandospem"
          id="usulandospem"
          onChange={handleChanges}
          required
          value={values.usulandospem}
        >
          {/* Opsi dosen di sini */}
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
        {errors.usulandospem && <span className="error-message">{errors.usulandospem}</span>}

        {/* bukti KRS */}
        <label htmlFor="buktikrs">
          Bukti KRS ambil TUGAS AKHIR (Jika tidak mengambil KRS Tugas Akhir tidak perlu upload)
        </label>
        <input
          type="file"
          placeholder="Pilih file"
          name="buktikrs"
          onChange={handleChanges}
        />
        {errors.buktikrs && <span className="error-message">{errors.buktikrs}</span>}

        {/* estimasi */}
        <label htmlFor="estimasi">Estimasi Anda akan menyelesaikan proposal bab 1-3 berapa lama untuk maju seminar proposal?</label>
        <input
          type="text"
          placeholder="Masukan estimasi anda"
          name="estimasi"
          onChange={handleChanges}
          required
          value={values.estimasi}
        />
        {errors.estimasi && <span className="error-message">{errors.estimasi}</span>}
        {/* tombol submit */}
        <div className="form-container">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AjukanJudul;
