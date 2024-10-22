import { Container, Row, Col, } from 'react-bootstrap';

import study from '../images/study.png';

const About = () => {
  return (
    <>
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
      <div>
  <Container className='mb-5 text-white'>
    {/* Judul */}
    <Row className="justify-content-center">
      <Col className='mt-4 pt-4 text-center'>
        <h2>Company Profile Staff Tata Usaha</h2>
      </Col>
    </Row>

    {/* Baris 1 */}
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

    {/* Baris 2 */}
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

    </>
  )
}

export default About