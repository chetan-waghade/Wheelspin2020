import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col';

export class PrezentairePageTitle extends Component {
    render() {
        return (
            <Container className="mt-2">
                <Row>
                    <Col sm={{span:4, offset:4}} className="text-center">
                    <h4 style={PrezentairePageTitleStyle}>PREZENTAIRE</h4>
                    </Col>
                </Row>
            </Container>
        )
    }
}

// Title Styling
const PrezentairePageTitleStyle = {
        fontFamily: 'Inconsolata',
        fontSize: '1.5rem',
        fontWeight:' bold',
        color: 'white',
        borderLeft: '2px solid white',
        borderRight: '2px solid white',
        textAlign: 'center',
    
    
}

export default PrezentairePageTitle 
