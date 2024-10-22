import { Container, Row, Col, Form, Button, } from 'react-bootstrap';

import googlelogo from '../images/googlelogo.png';

const Login = () => {
  return (
    <Container className="login-container d-flex flex-column align-items-center justify-content-center mt-5">
      <Row className="login-content align-items-center mb-5">
        <Col className="login-form d-flex flex-column align-items-center justify-content-center"
          style={{
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            height: '550px',
          }}>
          
          <h3 className="mb-4">Login in to your Account</h3>

          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="outline-danger"

              className="mb-3 d-flex align-items-center google-login-button">
              <img className='mx-2' style={{ height: '25px', width: '25px' }}
                src={googlelogo} />
              Login in with Google
            </Button>
          </div>
          <div className="text-center">
            <p>atau</p>
          </div>
          <Form action='' onSubmit={handleSubmit}>
            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Alamat email"
                onChange={handleInput} />
              {errors.email && <span className='text-danger'>{errors.email}</span>}
            </Form.Group>
            <Form.Group className="text-start mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput} />
              {errors.password && <span className='text-danger'>{errors.password}</span>}
            </Form.Group>
            <p className="text-end mt-2" style={{ fontSize: '0.8rem' }}>
              <a href="#" style={{ color: '#34745C' }}>Forgot Password?</a>
            </p>
            <Button
              variant="secondary"
              type="submit"
              style={{
                backgroundColor: '#34745C',
                display: 'block',
                margin: 'auto',
                height: '35px',
                width: '220px'
              }}>
              Login
            </Button>


            <p className="mt-3 text-center mb-5">
              Belumpunya Akun <a href="/Register" style={{ color: '#34745C' }}>Buat Akun</a>
            </p>

          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default Login