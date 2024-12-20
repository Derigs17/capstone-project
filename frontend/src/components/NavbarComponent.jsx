import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import logosementara from '../images/logosementara.png';

const NavbarComponent = () => {
  const isLoggedIn = !!localStorage.getItem('loggedInUserEmail'); // Cek apakah user sudah login
  
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#620808' }}>
        <Container fluid>
          <Navbar.Brand style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginLeft: '20px', paddingBottom: '10px' }}>
            WEBSKOM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              variant="underline"
              defaultActiveKey="/home"
              className="navbar-custom mx-auto me-auto me-2 my-2 my-lg-0"
              navbarScroll
            >
              <NavLink to="/" exact="true" className="nav-link" activeclassname="active">Home</NavLink>
              <NavLink to="/guidebook" className="nav-link" activeclassname="active">Guidebook</NavLink>
              <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
            </Nav>
            <div style={{ display: 'flex', gap: '10px', marginRight: '30px' }}>
              {!isLoggedIn ? ( // Hanya tampilkan jika belum login
                <>
                  <NavLink 
                    to="/Login" 
                    className="nav-link" 
                    activeclassname="active" 
                    style={{ 
                      backgroundColor: '#F4CE74', 
                      color: 'black', 
                      padding: '10px 15px', 
                      borderRadius: '5px', 
                      textDecoration: 'none' 
                    }}
                  >
                    Login
                  </NavLink>
                  <NavLink 
                    to="/Register" 
                    className="nav-link" 
                    activeclassname="active" 
                    style={{ 
                      backgroundColor: '#F4CE74', 
                      color: 'black', 
                      padding: '10px 15px', 
                      borderRadius: '5px', 
                      textDecoration: 'none' 
                    }}
                  >
                    Register
                  </NavLink>
                </>
              ) : (
                // Jika sudah login, tombol Profile akan digantikan dengan logo yang sudah ada
                null
              )}
            </div>
            <NavLink className="" to="/profile" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className="logo-profile mt-lg-0">
                <img src={logosementara} alt='logo' />
              </Navbar.Brand>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
