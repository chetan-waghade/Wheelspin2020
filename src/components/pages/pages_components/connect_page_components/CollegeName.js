import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col'
import './CollegeName.css'

export class CollegeName extends Component {
    render() {
        return (
            
                <Container className="mt-4  wsHomeCollegeInfo">
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} className="text-center ">
                            <h6>
                            Yeshwant Rural Education Society's
                            </h6>
                            
                            <h5>
                            BAPURAO DESHMUKH COLLEGE OF ENGINEERING, SEVAGRAM, WARDHA (MH)
                            </h5>
                        </Col>
                        <Col md={2}></Col>
                    </Row>
                </Container>



                
            
        )
    }
}

export default CollegeName
