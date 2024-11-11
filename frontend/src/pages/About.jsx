import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import study from '../images/study.png';

const About = () => {
  return (
    <>
      {/* Bagian About */}
      <div>
        <Container fluid className='mt-4 pt-4'>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className='d-flex align-items-center '>
              <Container >
                <h2 className="text-center text-white">ABOUT</h2>
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
            <Col className='mt-4 pt-4 text-center'>
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
        <Container>
          <h2 className="text-center text-white">CONTACT</h2>
        </Container>
        <Container fluid className='mt-4 pt-4'>
          <Row className="justify-content-center align-items-center">
            <Col md={6} style={{ backgroundColor: 'pink' }} className="text-white p-4">
              <h4>Informasi Kontak</h4>
              <p><i className="fas fa-phone"></i> +62 8123 4567 8901</p>
              <p><i className="fas fa-envelope"></i> layananfasilkom@gmail.com</p>
              <p><i className="fas fa-map-marker-alt"></i> Gedung Fasilkom, Uniska</p>
              <div className="d-flex justify-content-start mt-3">
                <i className="fab fa-facebook-f mx-2"></i>
                <i className="fab fa-twitter mx-2"></i>
                <i className="fab fa-instagram mx-2"></i>
              </div>
            </Col>
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
