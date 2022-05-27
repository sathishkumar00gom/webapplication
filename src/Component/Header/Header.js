import React from 'react'
import { Navbar, Container, Nav, Button } from 'react-bootstrap'
import Body from '../Body/Body'

export default function Header() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav style={{ fontWeight: "bolder", fontSize: "15px" }} className="me-auto">
                        <Nav.Link href="#home">Vectors</Nav.Link>
                        <Nav.Link href="#features">Photos</Nav.Link>
                        <Nav.Link href="#pricing">PSD</Nav.Link>
                        <Nav.Link href="#home">Fonts</Nav.Link>
                        <Nav.Link href="#features">Categories</Nav.Link>
                        <Nav.Link href="#pricing">Collections</Nav.Link>
                        <Nav.Link href="#pricing">More</Nav.Link>

                        <Nav style={{ fontWeight: "bolder", paddingLeft: "200px" }} className="me-auto">
                            <Nav.Link href="#pricing">Sell your Content</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link href="#pricing">Login</Nav.Link>
                            <Button className="bg-light mt-1 " style={{ width: "80px", height: "30px", color: "blue", border: "1px white" }}>Sign up</Button>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar >
            <Body />
        </>
    )
}
