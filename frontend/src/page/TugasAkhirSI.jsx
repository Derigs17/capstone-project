import { Dropdown, Container, Col, Row } from 'react-bootstrap';

const TugasAkhir = () => {
    return (
        <>
            <div>
                <Container fluid className='mt-4 pt-4'>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className='d-flex align-items-center '>
                            <Container >
                                <h2 className="text-center text-white text-informatika fs-1 fw-bold ">SISTEM INFORMASI</h2>
                                <p className="text-center  text-white fs-4" style={{ textAlign: 'justify' }}>
                                    Apa yang mau kamu lakukan di bagian tugas akhir?
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Dropdown className="d-flex justify-content-center mt-4 w-100">
                    <Dropdown.Toggle 
                        id="dropdown-centered"
                        style={{ 
                            backgroundColor: 'white', 
                            borderColor: 'white', 
                            color: 'black', 
                            width: '60%', 
                            display: 'flex', 
                            justifyContent: 'space-between', // Aligns text and arrow
                            alignItems: 'center' // Center aligns items vertically
                        }} 
                    >
                        <span>Selected Option</span> {/* Left aligned text */}
                        <span style={{ marginLeft: 'auto' }} /> {/* This pushes the arrow to the right */}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: '60%' }}> {/* Set width to 60% */}
                        <Dropdown.Item href="#">Pengajuan Judul Proposal</Dropdown.Item>
                        <Dropdown.Item href="#">Pendaftaran Seminar Proposal</Dropdown.Item>
                        <Dropdown.Item href="#">Upload Revisi Proposal</Dropdown.Item>
                        <Dropdown.Item href="#">Pendaftaran Kolokium</Dropdown.Item>
                        <Dropdown.Item href="#">Pendaftaran Yudisium</Dropdown.Item>
                        <Dropdown.Item href="#">Upload LoA (Jurnal)</Dropdown.Item>
                        <Dropdown.Item href="#">Pengumuman Pembimbing dan Surat Tugas Dosen Pembimbing</Dropdown.Item>
                        <Dropdown.Item href="#">Permohonan ganti Dosen Pembimbing atau Update Surat Tugas (Jika masa berlaku surat habis)</Dropdown.Item>
                        <Dropdown.Item href="#">Download surat tugas dosen pembimbing skripsi 1 dan 2</Dropdown.Item>
                        <Dropdown.Item href="#">Penyerahan Skripsi</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    );
}

export default TugasAkhir;
