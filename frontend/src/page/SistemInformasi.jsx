import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom

const SistemInformasi = () => {
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
            <Container className='mt-5 mb-5'>
                <Row className="justify-content-center">
                    <Col sm={4} style={squareStyle}>
                        <Link to="/tugas-akhir-si" style={squareStyle}>
                            <h5 className="text-center text-white">Tugas Akhir</h5>
                        </Link>
                    </Col>
                    <Col sm={4} style={squareStyle}>
                        <Link to="/persuratan-si" style={squareStyle}>
                            <h5 className="text-center text-white">Persuratan</h5>
                        </Link>
                    </Col>
                </Row>
            </Container>
            
        </> 
  )
}

export default SistemInformasi