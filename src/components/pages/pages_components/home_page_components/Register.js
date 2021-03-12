import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Link from 'react-router-dom/Link'
import './Register.css'

export class Register extends Component {
    render() {
        return (
            
            <Container className="wsHomeRegister mt-5">
                <Row noGutters = {true}>
                    <Col xs={12} lg={{span:4, offset:4}} auto className=" text-center">
                        <a style={RegisterStyle} id="wsHomeRegisterBtn" href="https://www.wheelspin2020.co.in/registration">Register Here</a>
                    </Col>
                </Row>
            </Container>

        )
    }
}

// //Show alert to user on clicking register
// function registerDailog(e){
//     alert("Online Registration Under Construction \nCall Respective Event Coordinator to Register");
// }

const RegisterStyle = {
    color:'white',
    backgroundColor:"transparent",
    fontSize:'3vh',
    padding:'1vh 2vh',
    fontFamily:'Inconsolata',
    boxShadow:'0.3em 0.3em 1em rgba(0,0,0,0.3)',
    border:'0.02em solid white',
    borderRadius:'0'
}

export default Register
