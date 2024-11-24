import { Container, Row, Col} from 'react-bootstrap';

const Guidebook = () => {
  return (
    <>
      <div>
        <Container fluid className='mt-4 pt-4 mb-5'
          style={{
            backgroundColor: '#D3D3D3',
            padding: '20px',
            margin: '0 auto',
            maxWidth: '1300px',
            minHeight: 'auto',
            borderRadius: '20px',
          }}>
          <Row className="justify-content-center align-items-center">
            <Col className='d-flex align-items-center '>
              <Container >
                <h4 style={{
                  fontSize: "25px", // Perkecil ukuran font
                }} className="text- bold-text text-center mt-3">PANDUAN PENGAJUAN SURAT PADA LAYANAN FASILKOM</h4>
                <ol type='1' className="mt-4 ms-4 me-4 ps-5" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px" }}>

                  <li>Akses website layanan fasilkom melalui https://unsika.link/layananfasilkom.</li>
                  <li>Pilih program studi untuk pengajuan surat.</li>
                  <li>Pilih menu Persuratan.</li>
                  <li> Pilih kebutuhan surat, kemudian secara otomatis anda memasuki website https://digiletter.marooners.my.id/</li>
                  <li>Login ke Digiletter. Jika belum memiliki akun klik menu Daftar Akun.</li>
                  <li>Pilih kebutuhan surat, lalu isi formulir sesuai dengan pertanyaan yang disediakan.</li>
                  <li> Setelah formulir terkirim, klik menu Riwayat Surat dan cek berkala halaman tersebut.</li>
                  <li>Jika surat telah disetujui oleh Admin akan muncul tombol Download pada halaman tersebut.</li>
                  <li>Klik Download dan surat dapat digunakan dengan semestinya.</li>

                </ol>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
      <Container fluid className='mt-4 pt-4 mb-5'
          style={{
            backgroundColor: '#D3D3D3',
            padding: '20px',
            margin: '0 auto',
            maxWidth: '1300px',
            minHeight: 'auto',
            borderRadius: '20px',
          }}>
          <Row className="justify-content-center align-items-center">
            <Col className='d-flex align-items-center '>
              <Container >
                <h4 style={{
                  fontSize: "25px", // Perkecil ukuran font
                }} className="text- bold-text text-center mt-3">PANDUAN LAYANAN INFORMASI TUGAS AKHIR</h4>
                <ol type='1' className="mt-4 ms-4 me-5 ps-5" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px" }}>

                  <li>Akses website layanan fasilkom melalui https://unsika.link/layananfasilkom.</li>
                  <li>Pilih program studi untuk mengakses layanan informasi tugas akhir</li>
                  <li>Pilih menu Tugas Akhir.</li>
                  <li> Pilih kebutuhan yang diperlukan untuk tugas akhir.</li>
                  <li>Isi formulir sesuai dengan kebutuhan untuk menu Pengajuan Judul Proposal, Pendaftaran Seminar Proposal, Upload Revisi Proposal, Pendaftaran Kolokium, Pendaftaran Yudisium, Upload LoA Jurnal dan Permohonan Ganti Pembimbing.</li>
                  <li>Jika yang dibutuhkan adalah informasi mengenai pembimbing tugas akhir, klik menu Pengumuman Pembimbing atau untuk mengakses surat tugas dapat melalui menu Download Surat Tugas Pembimbing Skripsi.</li>

                </ol>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
      <Container fluid className='mt-4 pt-4 mb-5'
          style={{
            backgroundColor: '#D3D3D3',
            padding: '20px',
            margin: '0 auto',
            maxWidth: '1300px',
            minHeight: 'auto',
            borderRadius: '20px',
          }}>
          <Row className="justify-content-center align-items-center">
            <Col className='d-flex align-items-center '>
              <Container >
                <h4 style={{
                  fontSize: "25px", // Perkecil ukuran font
                }} className="text- bold-text text-center mt-3">PANDUAN PENYERAHAN TUGAS AKHIR FASILKOM</h4>
                <ol type='1' className="mt-4 ms-4 me-5 ps-5" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px" }}>

                  <li>Akses website layanan fasilkom melalui https://unsika.link/layananfasilkom.</li>
                  <li>Pilih menu Penyerahan Skripsi.</li>
                  <li>Isi formulir sesuai dengan berkas yang dibutuhkan, lalu kirim.</li>

                </ol>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Guidebook