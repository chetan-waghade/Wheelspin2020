import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col'
import './WheelspinTitle.css'
import '../home_page_components/pages_assets/dedicated_css/glitch.css'

export class WheelspinTitle extends Component {
    render() {
        return (
            <Container >
                <Row>
                    <Col md={{span : 10, offset :1}} className="text-center wsHomeTitle">
                    <div>
                    <h1 class="text" data-text="WheelSpin'20">
						WheelSpin'20
						</h1>    
                    </div> 
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default WheelspinTitle
