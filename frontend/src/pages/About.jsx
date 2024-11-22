import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import study from '../images/study.png';
import kontak from '../images/kontak.png';
import telpon from '../assets/telpon.png';
import email from '../assets/email.png';
import lokasi from '../assets/lokasi.png';

const About = () => {
  return (
    <>
      {/* Bagian About */}
      <div>
        <Container fluid className='mt-4 pt-4'>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className='d-flex align-items-center '>
              <Container >
                <h2 className="text-center text-white bold-text">ABOUT</h2>
                <p className="text-white" style={{ textAlign: 'justify' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus pharetra tortor mattis semper. Proin laoreet neque ut nibh hendrerit, a ultrices neque vulputate. Nunc ornare luctus sem vel ultrices. Ut facilisis nulla et efficitur posuere. Nunc pretium ornare feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus pharetra tortor mattis semper. Proin laoreet neque ut nibh hendrerit, a ultrices neque vulputate. Nunc ornare luctus sem vel ultrices. Ut facilisis nulla et efficitur posuere. Nunc pretium ornare feugiat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel purus pharetra tortor mattis semper. Proin laoreet neque ut nibh hendrerit, a ultrices neque vulputate. Nunc ornare luctus sem vel ultrices. Ut facilisis nulla et efficitur posuere. Nunc pretium ornare feugiat.
                </p>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bagian Company Profile */}
      <div>
        <Container className='mb-5 text-white'>
          <Row className="justify-content-center">
            <Col className='mt-4 pt-4 text-center bold-text'>
              <h2>Company Profile Staff Tata Usaha</h2>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col sm={4} className='d-flex flex-column align-items-center'>
              <img src={study} alt="rencana1" className="mb-4 img-fluid" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
              <h5 className="text-center">Lorem Ipsum dolor amet</h5>
            </Col>
            <Col sm={4} className='d-flex flex-column align-items-center'>
              <img src={study} alt="rencana2" className="mb-4 img-fluid" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
              <h5 className="text-center">Lorem Ipsum dolor amet</h5>
            </Col>
          </Row>

          <Row className="justify-content-center mt-5">
            <Col sm={4} className='d-flex flex-column align-items-center'>
              <img src={study} alt="rencana3" className="mb-4 img-fluid" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
              <h5 className="text-center">Lorem Ipsum dolor amet</h5>
            </Col>
            <Col sm={4} className='d-flex flex-column align-items-center'>
              <img src={study} alt="rencana4" className="mb-4 img-fluid" style={{ width: '250px', height: '250px', objectFit: 'cover', borderRadius: '10px' }} />
              <h5 className="text-center">Lorem Ipsum dolor amet</h5>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bagian Contact */}
      <div>
        <Container className="mt-5 pt-5">
          <h2 className="text-center text-white bold-text">CONTACT</h2>
        </Container>
        <Container
          fluid
          className="mt-5 pt-2"
          style={{
            backgroundColor: 'white',
            padding: '20px',
            margin: '0 auto',
            maxWidth: '1000px',
            minHeight: '600px',
            borderRadius: '8px',
          }}
        >
          <Row className="justify-content-center align-items-center">
            {/* Kolom dengan background foto */}
            <Col
              md={6}
              style={{
                backgroundImage: `url(${kontak})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                minHeight: '700px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '20px',
              }}
            >
              {/* Judul di bagian atas */}
              <h4>Informasi Kontak</h4>

              {/* Konten tengah */}
              <div>
                <div className="d-flex  contact-info">
                  <img
                    src={telpon}
                    alt="Phone Icon"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '20px', // Jarak antara ikon dan teks
                    }}
                  />
                  <p>+62 8123 4567 8901</p>
                </div>

                <div className="d-flex contact-info">
                  <img
                    src={email}
                    alt="Email Icon"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '20px',
                    }}
                  />
                  <p>layananfasilkom@gmail.com</p>
                </div>

                <div className="d-flex  contact-info">
                  <img
                    src={lokasi}
                    alt="Location Icon"
                    style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '20px',
                    }}
                  />
                  <p>Gedung Fasilkom, Uniska</p>
                </div>
              </div>

              {/* Ikon Sosial Media di bagian bawah */}
              <div className="d-flex justify-content-start mt-3">
                <div className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-icon mx-2">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="social-icon">
                  <i className="fab fa-instagram"></i>
                </div>
              </div>
            </Col>

            {/* Kolom dengan background putih */}
            <Col md={6} className="bg-white p-4">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="formNPM">
                      <Form.Label>NPM</Form.Label>
                      <Form.Control type="text" placeholder="Enter your NPM" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPhone">
                  <Form.Label>Nomor Handphone</Form.Label>
                  <Form.Control type="text" placeholder="+62 123 4567 789" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Pilih Program Studi</Form.Label>
                  <div>
                    <Form.Check inline label="Informatika" name="programStudi" type="radio" id="informatika" />
                    <Form.Check inline label="Sistem Informasi" name="programStudi" type="radio" id="sistemInformasi" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Pilih Tahun Angkatan</Form.Label>
                  <div>
                    <Form.Check inline label="2021" name="angkatan" type="radio" id="angkatan2021" />
                    <Form.Check inline label="2022" name="angkatan" type="radio" id="angkatan2022" />
                    <Form.Check inline label="2023" name="angkatan" type="radio" id="angkatan2023" />
                    <Form.Check inline label="2024" name="angkatan" type="radio" id="angkatan2024" />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Pesan</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Write your message..." />
                </Form.Group>

                <Button variant="dark" type="submit">
                  Kirim Pesan
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>



    </>
  )
}

export default About;
