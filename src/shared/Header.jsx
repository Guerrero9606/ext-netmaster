import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown,Nav, Container } from 'react-bootstrap';
import logoCeragon from '../Images/ceragon_logo.png';

function Header(){

    return(
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={ logoCeragon } width='200px' height='35px' margin-right='20px'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" menuVariant="dark" ml="5">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Tipos de reportes" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/daily">Reportes Diarios</NavDropdown.Item>
                        <NavDropdown.Item href="/week">Reportes Semanales</NavDropdown.Item>
                        <NavDropdown.Item href="/month">Reportes Mensuales</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;