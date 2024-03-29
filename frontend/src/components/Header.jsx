import React from 'react'
import { Navbar, Nav, Container, Row} from 'react-bootstrap'

function Header() {
    return (
        <div>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                            <Navbar.Brand>Dale's Record Shop</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">

                                        <Nav.Link><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>

            </header>
        </div>
    )
}

export default Header