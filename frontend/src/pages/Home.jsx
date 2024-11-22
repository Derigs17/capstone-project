import { Link } from 'react-router-dom';
import { Container, Row, Col, } from 'react-bootstrap';


import laptop from '../images/laptop.png';
import tablet from '../images/tablet.png';
import dosen from '../images/dosen.png';

const Home = () => {
  return (
    <>
      <div>
        <Container fluid className='mt-2 mb-2 ml-4 '>
          <Row className="justify-content-center align-items-center">

            <Col md lg={{ span: 9 }} className='d-flex '>
              <Container className="mt-5">
                <h1 className="text-left text-white bold-text ">Selamat Datang</h1>
                <h5 className="text-left text-white" style={{ textAlign: 'justify' }}>
                  Website Layanan <br />
                  Fakultas Ilmu Komputer <br />
                  Universitas Singaperbangsa Karawang <br />
                  (WEBSKOM)
                </h5><br />
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
  <Container className='mt-5 mb-5'>
    <Row className="justify-content-center">
      <Col sm={4} className='isi1 mt-4 pt-4 d-flex flex-column align-items-center' style={{ backgroundColor: '#F5F5DC', padding: '10px', borderRadius: '5px', marginLeft: '20px', marginRight: '20px' }}>
        <Link to="/Informatika" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={laptop} alt="laptop" className="mb-4" style={{ width: '150px' }} />
          <h5 className="text-center text-collor bold-text">INFORMATIKA</h5>
        </Link>
      </Col>

      <Col sm={4} className='isi2 mt-4 pt-4 d-flex flex-column align-items-center' style={{ backgroundColor: '#F5F5DC', padding: '10px', borderRadius: '5px', marginLeft: '20px', marginRight: '20px' }}>
        <Link to="/sistem-informasi" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={tablet} alt="tablet" className="mb-4" style={{ width: '150px' }} />
          <h5 className="text-center text-collor bold-text">SISTEM INFORMASI</h5>
        </Link>
      </Col>
    </Row>
  </Container>
</div>
<div>
<Container className='mt-5 mb-5'>
    <Row className="justify-content-center">
      <Col sm={4} className='isi1 mt-4 pt-4 d-flex flex-column align-items-center' style={{ backgroundColor: '#F5F5DC', padding: '10px', borderRadius: '5px', marginLeft: '20px', marginRight: '20px' }}>
        <Link to="/Dosen" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={dosen} alt="dosen" className="mb-4" style={{ width: '150px' }} />
          <h5 className="text-center text-collor bold-text">DOSEN</h5>
        </Link>
      </Col>
      </Row>
      </Container>
</div>
    </>
  )
}

export default Home