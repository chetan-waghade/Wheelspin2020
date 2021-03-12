import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class ContactUsMain extends Component {
    render() {
        return (
            <Container className="mt-2">
                <Row>
                    <Col lg={{span:4 ,offset: 4}} xs={12} className="text-center">
                        <h4 style={ContactPageTitleStyle} id="aboutTitle">CONTACT US</h4>
                    </Col>
                </Row>


                {/* Contact Main Page */}
                <Row className="border-left border-right mt-4">

                    <Col auto>
                    
                    <Row>
                    <Col lg={{span:8 ,offset: 2}} xs={12} className="text-center">

                       

                        <h6>Convener Wheelspin 2020<br></br>
                        Bapurao Deshmukh College of Engineering, Sevagram, Wardha (M.S) - 442102
                        Phone No.: 07152-284378, 284011, 284030
                        Fax : 07152-284241
                        </h6>

                       

                    </Col>
                      </Row>

                    {/* Contact Number */}

                      <Row className="mt-5">

                      <Col lg={4} xs={4} className="text-center">
                    
                    <h6>Prof. Kanchan Warkar<br></br>
                        (Coordinator)<br></br>
                        Contact: 9028431261<br></br>
                       <br></br>

                        </h6>

                    </Col>

                    <Col lg={4} xs={4} className="text-center">

                        
                   <h6> Saurabh Tadas<br></br>
                        (Student Coordinator)<br></br>
                        Contact: 8888369612<br></br></h6> 

                        
                    
                    </Col>

                    <Col lg={4} xs={4} className="text-center">

                   <h6>Abhishek Chaturvedi<br></br>
                        (Student Coordinator)<br></br>
                        Contact: 8076399108<br></br>

                        </h6>
                    
                    
                    </Col>

                      </Row>

                {/* About Developer */}
                <Row className="mt-5">
                            <Col lg={12} xs={12} className="text-center" style={{color:'white'}}>
                                <p class="aboutDeveloperText">Website Design & Developed by : Chetan Waghade</p>
                            </Col>
                            <Col lg={12} xs={12}className="text-center" style={{color:'white'}}>
                               
                                <p class="aboutDeveloperText">Support Team: Shraddha Mehta, Harshal Baswant</p>
                          
                            </Col>
                            <Col lg={12} xs={12} className="text-center" style={{color:'white'}}>
                                
                                <p class="aboutDeveloperText">Department of Computer Engineering, BDCE, Sevagram, Wardha</p>
                            </Col>
                        </Row>
                    
                    </Col>

                </Row>


            </Container>
        )
    }
}

// Contact page event Title Style
const ContactPageTitleStyle = {
    fontFamily: 'Inconsolata',
        fontSize: '1.5rem',
        fontWeight:' bold',
        color: 'white',
        borderLeft: '2px solid white',
        borderRight: '2px solid white',
        textAlign: 'center',

}


export default ContactUsMain
