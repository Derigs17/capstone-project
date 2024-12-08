import { Container, Row, Col } from 'react-bootstrap';

import gambardosen from '../images/gambardosen.png';

const Dosen = () => {
  return (
    <>
      <Container fluid className="mt-4 pt-4">
        <Row className="justify-content-center align-items-center">
          <Col md={6} className="d-flex align-items-center">
            <Container>
              <h1 className="text-center text-collor bold-text">Dosen Fakultas Ilmu Komputer</h1>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 mb-5">
        {/* Card 1 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 1"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px", letterSpacing: "1.5px" }}>
              <p className="mb-0">Ade Andri Hendriadi, S.Si., M.Kom</p>
              <p className="mb-0">NIDN : 0402047903</p>
              <p className="mb-0">NIP : 1979040222021211007</p>
            </div>
          </Col>
        </Row>

        {/* Card 2 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Adhi Rizal, S.Pd., M.T.</p>
              <p className="mb-0">NIDN : 0007089101</p>
              <p className="mb-0">NIP : 1991080720220231005</p>
            </div>
          </Col>
        </Row>
        {/* Card 3 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Agung Susilo Yuda Irawan, M.Kom.</p>
              <p className="mb-0">NIDN : 0015069302</p>
              <p className="mb-0">NIP : -</p>
            </div>
          </Col>
        </Row>
        {/* Card 4 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Aji Primajaya, S.Si., M.Kom.</p>
              <p className="mb-0">NIDN : 0026048706</p>
              <p className="mb-0">NIP : 198704262019031008</p>
            </div>
          </Col>
        </Row>
        {/* Card 4 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Akhmad Khusaeri, M.Kom.</p>
              <p className="mb-0">NIDN : -</p>
              <p className="mb-0">NIP : 199701242024061003</p>
            </div>
          </Col>
        </Row>
         {/* Card 5 */}
         <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Apriade Voutama, M.Kom.</p>
              <p className="mb-0">NIDN : 0004049401  </p>
              <p className="mb-0">NIP : 199404042024061001</p>
            </div>
          </Col>
        </Row>
        {/* Card 6 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Aries Suharso, S.Si., M.Kom.</p>
              <p className="mb-0">NIDN : 0422037701   </p>
              <p className="mb-0">NIP : 1977032220221211002</p>
            </div>
          </Col>
        </Row>
        {/* Card 6 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Arip Solehudin, M.Kom.</p>
              <p className="mb-0">NIDN : 0016048902 </p>
              <p className="mb-0">NIP : 198904162021211001</p>
            </div>
          </Col>
        </Row>
        {/* Card 6 */}
        <Row className="justify-content-center mb-4">
          <Col md={2} className="d-flex justify-content-center align-items-center">
            <img
              src={gambardosen} // Ganti dengan URL gambar dosen
              alt="Dosen 2"
              style={{ width: "190px", height: "190px" }}
            />
          </Col>
          <Col
            md={5}
            className="d-flex align-items-center text-white p-3 rounded"
            style={{
              backgroundColor: "#AE5041", // Ubah warna background
              height: "190px", // Sesuaikan tinggi dengan gambar
            }}
          >
            <div  className=" bold-text" style={{ textAlign: 'justify', lineHeight: "2", fontSize: "20px",letterSpacing: "1.5px" }}>
              <p className="mb-0">Arip Solehudin, M.Kom.</p>
              <p className="mb-0">NIDN : 0016048902 </p>
              <p className="mb-0">NIP : 198904162021211001</p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dosen;
