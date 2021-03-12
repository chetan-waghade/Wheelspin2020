import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import bdlogo from '../home_page_components/pages_assets/images/bdlogo.png'
import wslogo from '../home_page_components/pages_assets/images/wslogo.png'
import './LogoPresent.css'

export class LogoPresent extends Component {
    render() {
        return (

                <Container className="mt-2">
                    <Row>
                        <Col>
                            <Image src={bdlogo} fluid height="100" width="100" className="float-right"></Image>
                        </Col>
                        <Col className="text-center wsHomepresent">
                        <h6> Presents <br></br> 15th National Level Techfest </h6>	
                        </Col>
                        <Col>
                         <Image src={wslogo} fluid height="100" width="100" className="float-left"></Image> 
                        </Col>
                    </Row>
                </Container>

        

        //     <div class="wsHomepresent mt-1">
        //     <div class="row justify-content-center">
        //         <div class="col-4">
        //             <img src="./wslogo.png"class="float-right" height="100" width="100" alt="">
        //         </div>
        //         <div class="col-4 text-center ">
        //             <h6>
        //             Presents <br>
        //             A National Level Techfest
        //             </h6>
        //         </div>
        //         <div class="col-4">
        //             <img src="./bdlogo.png" height="100" width="100" alt="">
        //         </div>
        //     </div>
        // </div>
        )
    }
}

export default LogoPresent
