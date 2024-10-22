import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 
import logosementara from '../images/logosementara.png';

const NavbarComponent = () => {
  return (
    <>
      <Navbar expand="lg" style={{ backgroundColor: '#620808' }}>
        <Container fluid>
          <Navbar.Brand style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginLeft: '20px', paddingBottom: '10px' }}>
          WEBSKOM
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav variant="underline" defaultActiveKey="/home" className="navbar-custom mx-auto me-auto me-2 my-2 my-lg-0" navbarScroll >
              <NavLink to="/" exact="true" className="nav-link" activeclassname="active">Home</NavLink>
              <NavLink to="/guidebook" className="nav-link" activeclassname="active">Guidebook</NavLink>
              <NavLink to="/about" className="nav-link" activeclassname="active">About</NavLink>
            </Nav>
            <div style={{ display: 'flex', gap: '10px' , marginRight: '30px' }}>
              <NavLink 
                to="/login" 
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
                to="/register" 
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
            </div>
            <NavLink to="/profile" style={{ textDecoration: 'none' }}>
              <Navbar.Brand className="logo-profile mt-2 mt-lg-0">
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
