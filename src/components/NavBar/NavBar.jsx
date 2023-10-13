import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">Ropa</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Remeras</Nav.Link>
                        <Nav.Link href="#action2">Pantalones</Nav.Link>
                        <NavDropdown title="Más" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Gorras</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                            Zapatillas
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Contacto
                        </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>   
    )
}

export default NavBar