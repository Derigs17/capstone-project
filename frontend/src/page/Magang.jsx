import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom

const Magang = () => {
    const squareStyle = {
        width: '200px',          // Sesuaikan ukuran sesuai kebutuhan Anda
        height: '200px',
        backgroundColor: '#F4CE74',
        padding: '10px',
        borderRadius: '5px',
        margin: '20px',          // Tambahkan margin yang sama ke semua sisi
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textDecoration: 'none'   // Menghapus underline pada teks link
    };

    return (
        <>
        <div>
                <Container fluid className='mt-4 pt-4'>
                    <Row className="justify-content-center align-items-center">
                        <Col md={6} className='d-flex align-items-center '>
                            <Container >
                                <h2 className="text-center text-white text-informatika fs-1 fw-bold ">INFORMATIKA</h2>
                                <p className="text-center  text-white fs-4" style={{ textAlign: 'justify' }}>
                                    Apa yang mau kamu lakukan di bagian magang?
                                </p>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container className='mt-5 mb-5'>
                <Row className="justify-content-center">
                    <Col sm={4} style={squareStyle}>
                        <Link to="/magang-umum" style={squareStyle}>
                            <h5 className="text-center text-white">Umum</h5>
                        </Link>
                    </Col>
                    <Col sm={4} style={squareStyle}>
                        <Link to="/magang-kompetisi" style={squareStyle}>
                            <h5 className="text-center text-white">Kompetisi</h5>
                        </Link>
                    </Col>
                </Row>
            </Container>
            <Container className='mt-5 mb-5'>
                <Row className="justify-content-center">
                    <Col sm={4} style={squareStyle}>
                        <Link to="/panduan-magang" style={squareStyle}>
                            <h5 className="text-center text-white">Panduan Magang</h5>
                        </Link>
                    </Col>
                    <Col sm={4} style={squareStyle}>
                        <Link to="/alur-magang" style={squareStyle}>
                            <h5 className="text-center text-white">Alur Magang</h5>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </> 
    );
}

export default Magang