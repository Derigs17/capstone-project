import { Dropdown, Container, Col, Row } from 'react-bootstrap';

const Persuratan = () => {
  return (
    <>
            <div>
                <Container fluid className='mt-4 pt-4'>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className='d-flex align-items-center '>
                            <Container >
                                <h2 className="text-center text-white text-informatika fs-1 fw-bold ">SISTEM INFORMASI</h2>
                                <p className="text-center  text-white fs-4" style={{ textAlign: 'justify' }}>
                                    Apa yang mau kamu lakukan di bagian persuratan?
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
                        <Dropdown.Item href="#">Surat Rekomendasi</Dropdown.Item>
                        <Dropdown.Item href="#">Pendaftaran Seminar Proposal</Dropdown.Item>
                        <Dropdown.Item href="#">Surat Izin Penelitian</Dropdown.Item>
                        <Dropdown.Item href="#">Surat Keterangan Aktif</Dropdown.Item>
                        <Dropdown.Item href="#">Surat Keterangan Orang Tua PNS</Dropdown.Item>
                        <Dropdown.Item href="#">Surat Bebas Pustaka</Dropdown.Item>
                        <Dropdown.Item href="#">Surat Pengajuan Cuti</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
  )
}

export default Persuratan