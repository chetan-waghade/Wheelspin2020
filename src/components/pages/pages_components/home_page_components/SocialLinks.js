import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col'
import './SocialLinks.css'

export class SocialLinks extends Component {
    render() {
        return (
            
            <Container className="wsHomeSocialLink mt-3 mb-1" id="wsHomeFooter">
                <Row noGutters = {true}>
                    <Col sm={{ span:6, offset:3 }}  auto className="text-center " >
                      
                            <a href="https://m.facebook.com/WheelSpin-2020-106635767560857/"><i class="fab fa-facebook-f"></i></a>
							<a href="https://www.instagram.com/wheelspin2020/"><i class="fab fa-instagram"></i></a>
							<a href="https://www.youtube.com/channel/UC24GbsSdPKbpTRfwkIbR4JAnpm"><i class="fab fa-youtube"></i></a>
                        
                    </Col>
                </Row>
                
                

            </Container>

        )
    }

}


export default SocialLinks;
