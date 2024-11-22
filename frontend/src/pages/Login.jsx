import { useState, } from 'react';
import { Container, Row, Col, Form, Button, } from 'react-bootstrap';

import googlelogo from '../images/googlelogo.png'

import Validation from './LoginValidation';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [values, setValues] = useState({
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
        setErrors(Validation(values));
        const hasErrors = Object.values(errors).some(error => error !== "");

        if (!hasErrors) {
            axios.post('http://localhost:8002/Login', {
                email: values.email,
                password: values.password,
            })
                .then(res => {
                    if (res.data === "Success") {
                        localStorage.setItem('loggedInUserEmail', values.email);
                        localStorage.setItem('loggedInUserData', JSON.stringify(res.data.user));
                        navigate('/');
                    } else {
                        alert("Email dan password tidak cocok");
                    }
                })

                .catch(err => console.log(err));
        }
    };

    return (
        <>
            <Container className="login-container d-flex flex-column align-items-center justify-content-center mt-3"
                style={{ maxWidth: '100vw', padding: '0 1rem', minHeight: '100vh' }}>
                <Row className="login-content align-items-center mb-5 justify-content-center w-100">
                    <Col className="login-form d-flex flex-column  justify-content-center text-start"
                        style={{
                            borderRadius: '30px',
                            background: '#FFFFFF',
                            padding: '2rem', // Perubahan padding dalam kolom
                            maxWidth: '450px', // Perubahan batas maksimum lebar kolom
                            width: '80%', // Perubahan agar kolom menyesuaikan ruang
                        }}
                    >
                        <h5 >Welcome to <span className="brand bold-text" style={{ color: '#5F9EA0' }}>WEBSKOM</span></h5>
                        <h2 className="mb-4">Sign In</h2>
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
                            <label>Enter your username or email address</label>
                            <Form.Group className="text-start mb-3" controlId="formBasicEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Username or email address"
                                    onChange={handleInput} />
                                {errors.email && <span className='text-danger'>{errors.email}</span>}
                            </Form.Group>
                            <label>Enter your Password</label>
                            <Form.Group className="text-start mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    onChange={handleInput} />
                                {errors.password && <span className='text-danger'>{errors.password}</span>}
                            </Form.Group>
                            <p className="text-end mt-2" style={{ fontSize: '0.8rem' }}>
                                <a href="#" style={{ color: '#0089ED' }}>Forgot Password?</a>
                            </p>
                            <Button
                                variant="secondary"
                                type="submit"
                                style={{
                                    backgroundColor: '#5F9EA0',
                                    display: 'block',
                                    margin: 'auto',
                                    height: '35px',
                                    width: '220px'
                                }}>
                                Login
                            </Button>


                            <p className="mt-3 text-center mb-5">
                                No Account? <a href="/Register" style={{ color: '#0089ED' }}>Sign up</a>
                            </p>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login