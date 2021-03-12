import React, { Component } from 'react'
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'

export class Sponsors extends Component {
    render() {
        return (
            <Container className="mt-2 border" >
                <Row noGutters = {true}>
                    <Col lg={{span:2,offset:5}} auto className="text-center">
                    <h6 style={{borderBottom:'2px solid white'}}>Our Sponsors</h6>
                    </Col>
                    <Col lg={12} xs={12} sm={12}  auto className="text-center"  style={{'height':'calc(100vh - 700px)','overflow-y':'scroll','color':'white','font-family':'Inconsolata'}} >
                      
                    <Carousel className="align-item-center" fade>
                    <Carousel.Item>
                        {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                        /> */}
                        <h5>Intel</h5>
                        <p>lorem lorem 
                        lorem lorem
                        lorem lorem
                        lorem lorem
                        lorem lorem
                        </p>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Second slide&bg=282c34"
                        alt="Third slide"
                        /> */}
                        <h5>SpaceX</h5>
                    </Carousel.Item>
                    <Carousel.Item>
                        {/* <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        /> */}
                        <h5>Microsoft</h5>
                    </Carousel.Item>
                    </Carousel>
                            
                        
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Sponsors


