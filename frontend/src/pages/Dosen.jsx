import { Container, Row, Col, } from 'react-bootstrap';

const Dosen = () => {
  return (
    <>
    <Container fluid className='mt-4 pt-4'>
          <Row className="justify-content-center align-items-center">
            <Col md={6} className='d-flex align-items-center '>
              <Container >
                <h1 className="text-center text-white bold-text">Dosen Fakultas Ilmu Komputer</h1>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className='mt-5 mb-5'>
            <Row className="justify-content-center">
                </Row>
            </Container>
    </>
  )
}

export default Dosen