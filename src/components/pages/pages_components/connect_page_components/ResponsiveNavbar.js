import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';   
import './ResponsiveNavbar.css';

export class ResponsiveNavbar extends Component {


   

    render() {
        return (
        // <!-- NAVBAR -->
        // <!-- start -->
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  id="wsHomeNavbar" >   
            <Navbar.Brand bg="dark" expand="xs" id="wheelspin_brand">WHEELSPIN'20</Navbar.Brand>        
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto wsHomeNavItemContainer">
                    <Nav.Link eventKey={1} as={Link} to="/"  className="wsHomeNavItem"  >Home</Nav.Link>
                    <Nav.Link eventKey={2} as={Link} to="/events"  className=" wsHomeNavItem "  >Events</Nav.Link>
                    <Nav.Link eventKey={3} as={Link} to="/prezentaire"  className=" wsHomeNavItem "  >Prezentaire</Nav.Link>
                    <Nav.Link eventKey={6} as={Link} to="/connect"  className=" wsHomeNavItem " >CONNECT 2020</Nav.Link>
                    <Nav.Link eventKey={7} as={Link} to="/photo_gallery"  className=" wsHomeNavItem " >Photo Gallery</Nav.Link>
                    <Nav.Link eventKey={7} as={Link} to="/registration"  className=" wsHomeNavItem " >Registration</Nav.Link>
                    <Nav.Link eventKey={4} as={Link} to="/about"  className=" wsHomeNavItem "  >About</Nav.Link>
                    <Nav.Link eventKey={5} as={Link} to="/contact_us"  className=" wsHomeNavItem " >Contact us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        

		// <!-- end -->
        )
        
    }

    

   
}



export default ResponsiveNavbar
