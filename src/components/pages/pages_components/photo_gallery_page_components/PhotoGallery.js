import React, { Component } from 'react'
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import ResponsiveNavbar from '../home_page_components/ResponsiveNavbar'
import {st} from '../../../../firebase/fire'
import './PhotoGallery.css'

export class PhotoGallery extends Component {

    // logic to append photos
    componentDidMount(){
        let photos = ['a','b','c','d','e','f','g','h','j','k','l','m','n','o','p','q','r','s','t','u','v'];
        for(let photo=0; photo<photos.length;photo++){
            let imgTag = document.getElementById(photos[photo]);
            let regName = 'photo_gallery/'+photos[photo]+'.jpeg'
            let imgRef = st.ref(regName)
            imgRef.getDownloadURL().then(function(url){
                
                imgTag.setAttribute('src',url)
            })
            
        }
        
    }


    render() {
        return (
            <>
            <ResponsiveNavbar/>
            <Container className="mt-2">
                <Row>
                    
                    <Col auto className="text-center"><h5>Photo Gallery</h5></Col>
                   
                </Row>
                <Row style={{'height':'calc(100vh - 180px)'}} className="border-left border-right">
                    
                    <Col auto>
                    <Carousel className="align-item-center" fade>
                        {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="a"
                        alt="" img-fluid
                                                                        /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="b"
                        alt="" img-fluid
                                                                        /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="c"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="d"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="e"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="f"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="g"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="h"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="i"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="j"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="k"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="l"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="m"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="n"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="o"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="p"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="q"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="r"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="s"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="t"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="u"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    {/* start */}
                    <Carousel.Item>
                        <img
                        className="d-block w-80 h-60 pg_photo"
                        src=""
                        id="v"
                        alt="" img-fluid
                                                /> 
                    </Carousel.Item>
                    {/* end */}
                    </Carousel>
                    
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}

export default PhotoGallery
