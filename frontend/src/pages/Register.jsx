
import { useState,  } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import googlelogo from '../images/googlelogo.png'

import validation from './RegisterValidation';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Register = () => {

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setErrors((prevErrors) => ({ ...prevErrors, [event.target.name]: '' }));
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
};

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    const hasErrors = Object.values(errors).some(error => error !== "");
 
    if (!hasErrors) {
       axios.post('http://localhost:8002/Register', { ...values })
          .then(() => {
             navigate('/Login');
          })
          .catch(err => console.log(err));
    }
 }
 

  return (
    <Container className="login-container d-flex flex-column align-items-center justify-content-center mt-5"
    style={{ maxWidth: '100vw', padding: '0 1rem', minHeight: '100vh' }}>
      <Row className="login-content align-items-center mb-5 justify-content-center w-100">
        <Col className="login-form d-flex flex-column  justify-content-center text-start"
        style={{
            borderRadius: '30px',
            background: '#FFFFFF',
            padding: '2rem', // Perubahan padding dalam kolom
            maxWidth: '450px', // Perubahan batas maksimum lebar kolom
            width: '80%', // Perubahan agar kolom menyesuaikan ruang
        }}>
           <h5 >Welcome to <span className="brand bold-text" style={{ color: '#5F9EA0' }}>WEBSKOM</span></h5>
          <h2 className="mb-4">Sign up</h2>
          <div className="d-flex justify-content-center mb-3">
            <Button
              variant="outline-danger"
              
              className="mb-3 d-flex align-items-center google-login-button">
              <img className='mx-2' style={{height:'25px', width:'25px'}}
                src={googlelogo}/>
              Sign up with Google
            </Button>
          </div>
          <div className="text-center">
            <p>atau</p>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="text-start mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                name="name"
                placeholder="Nama Lengkap"
                onChange={handleInput}/>
                {errors.name && <span className='text-danger'>{errors.name}</span>}
            </Form.Group>
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
            <Button
              variant="secondary"
              type="submit"
              style={{
                backgroundColor: '#5F9EA0 ',
                display: 'block',
                margin: 'auto',
                height: '35px',
                width:'220px'
                }}>
              Sign Up
            </Button>

            <p className="mt-3 text-center mb-5">
            Have an Account ? <a href="/Login" style={{color:'#0089ED'}}>Sign in</a>
            </p>
          </Form>
        </Col>

      </Row>
    </Container>
  );
};



export default Register