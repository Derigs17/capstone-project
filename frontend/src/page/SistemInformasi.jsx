import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Mengimpor Link dari react-router-dom

const SistemInformasi = () => {
    const squareStyle = {
        width: '200px',          // Sesuaikan ukuran sesuai kebutuhan Anda
        height: '200px',
        backgroundColor: '#F5F5DC',
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
                            <h5 className="text-center bold-text text-black">Tugas Akhir</h5>
                        </Link>
                    </Col>
                    <Col sm={4} style={squareStyle}>
                        <Link to="/persuratan-si" style={squareStyle}>
                            <h5 className="text-center bold-text text-black">Persuratan</h5>
                        </Link>
                    </Col>
                </Row>
            </Container>
            
        </> 
  )
}

export default SistemInformasi