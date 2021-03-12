import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';   
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import ProfileEventRegistration from './ProfileEventRegistration';
import ProfilePrezentaireRegistration from './ProfilePrezentaireRegistration';


export class ProfileRegistations extends Component {
    render() {
        return (
            <Router>
            <Container>

                {/* NAVBAR */}
                <Row >

                <Col lg={6} xs={6} style={{color:'white'}} >


                <Navbar collapseOnSelect expand="lg"  >   

                            {/* Events Prezentaire / Workshop menu */}
                            <Nav className="m-auto">
                                <Nav.Link eventKey={1} as={Link} to="/profile/registrations/event"  className="wsHomeNavItem" style={registrationNavStyle}>Event</Nav.Link>
                                
                                
                            </Nav>
                        
                    </Navbar>

                    

                </Col>

                <Col lg={6} xs={6} >


                <Navbar collapseOnSelect expand="lg"  >   

                            {/* Events Prezentaire / Workshop menu */}
                            <Nav className="m-auto">
                                
                                <Nav.Link eventKey={2} as={Link} to="/profile/registrations/prezentaire" 
                                className=" wsHomeNavItem " style={registrationNavStyle}>Prezentaire</Nav.Link>
                                
                            </Nav>
                        
                    </Navbar>

                    

                </Col>

                </Row>

                

                {/* routes */}
                <Row>

                <Col lg={12} xs={12} >

                            <Route path="/profile/registrations/event" exact><ProfileEventRegistration/></Route>
                            <Route path="/profile/registrations/prezentaire"><ProfilePrezentaireRegistration/></Route>
                            
                
                </Col>


                </Row>


            </Container>
            </Router>
        )
    }
}

 // btn Style
 const btnWithUnderline={
    backgroundColor:'transparent',
    color:'white',
    fontWeight:'bold',
    border:'none',
    borderRadius:'0px',
    borderBottom:'2px solid white'
  }

 const registrationNavStyle={
     color:'white',
     padding:'2vh',
     
 }


export default ProfileRegistations
