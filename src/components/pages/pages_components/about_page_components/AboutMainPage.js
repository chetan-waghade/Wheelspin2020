import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import './AboutMainPage.css'
import '../event_page_components/event_page_assets/dedicated_css/CustomScroll.css'
import sd from './about_page_assets/images/sd.jpg'
import gv from './about_page_assets/images/gv.jpg'
import ad from './about_page_assets/images/ad.jpg'
import aw from './about_page_assets/images/aw.jpg'
import kw from './about_page_assets/images/kw.jpg'
import rc from './about_page_assets/images/rc.jpg'
import sm from './about_page_assets/images/sm.jpg'
import ag from './about_page_assets/images/ag.jpg'



export class AboutMainPage extends Component {
    render() {
        return (
            
            <Container className="mt-2 border-left border-right">
                <Row>
                    <Col lg={{span:4 ,offset: 4}} xs={12} className="text-center">
                        <h4 style={AboutPageTitleStyle} id="aboutTitle">ABOUT</h4>
                    </Col>
                </Row>

                <Row className="mt-2">

                    {/* About Details */}
                    <Col>

                        {/* About Techfest */}
                        <Row className="mt-1">
                            <Col className= "text-center">
                                <h4 style={AboutPageHeading} >About Wheelspin</h4>
                                <p style={AboutPageParagraph}>Every year BDCOE organises a national level techfest</p>
                            </Col>
                        </Row>
                        {/* About  Us */}
                        <Row className="border-bottom">
                            <Col lg={6} xs={12}  className= "text-center ">
                                <h4 style={AboutPageHeading}>Vision</h4>
                                
                                <p style={AboutPageParagraph}>Globally acceptable professionals satisfying technical and social needs.</p>
                            </Col>
                            <Col lg={6} xs={12}  className= "text-center ">
                                <h4 style={AboutPageHeading}>Mission</h4>
                               
                                <p style={AboutPageParagraph}>Networking and cooperation with global organizations by creating suitable environment in campus.</p>
                            </Col>
                            
                        </Row>
                        {/* About People */}
                        <Row className="force-overflow  scrollbar-primary pt-2" style={{'height':'calc(100vh - 350px)','overflow-y':'scroll','color':'white','font-family':'Inconsolata'}}> 
                            <Col lg={3} xs={6} className="text-center">

                            <div style={ProfilePhotoStyle}> <Image src={sd} fluid></Image> </div>
                                <h6 style={AboutPagePeopleName} className="mt-2">Er. Sameer Deshmukh</h6>
                                <p>Patron</p>
                                
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                            <div style={ProfilePhotoStyle}> <Image src={gv}  fluid></Image></div>
                                <h6 style={AboutPagePeopleName} className="mt-2">Dr. G. V. Thakre</h6>
                                <p>Principal</p>
                                
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                             <div style={ProfilePhotoStyle}> <Image src={sm}  fluid></Image></div> 
                            <h6 style={AboutPagePeopleName} className="mt-2">Dr. S. W. Mohod</h6>   
                                <p>Convener / Head (CE&IT)</p>
                               
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                            <div style={ProfilePhotoStyle}> <Image src={kw}  fluid></Image></div>
                                <h6 style={AboutPagePeopleName} className="mt-2">Prof. K. V. Warkar</h6>
                                <p>Co-ordinator</p>
                                
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                            <div style={ProfilePhotoStyle}> <Image src={ag}  fluid></Image></div> 
                                <h6 style={AboutPagePeopleName} className="mt-2">Prof. A. D. Gotmare</h6>
                                <p>Co-coordinator</p>
                                
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                             <div style={ProfilePhotoStyle}> <Image src={ad}  fluid></Image></div> 
                            <h6 style={AboutPagePeopleName} className="mt-2">Prof. A. R. Dandekar</h6>
                                <p>Co-coordinator</p>
                                
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                            <div style={ProfilePhotoStyle}> <Image src={aw}  fluid></Image></div> 
                            <h6 style={AboutPagePeopleName} className="mt-2">Prof. A. R. Welekar</h6>
                                <p>Co-coordinator</p>
                               
                            </Col>
                            <Col lg={3} xs={6} className="text-center">
                             <div style={ProfilePhotoStyle}> <Image src={rc}  fluid></Image></div> 
                            <h6 style={AboutPagePeopleName} className="mt-2">Prof. R. V. Chaudhary</h6>
                                <p>Treasurer</p>
                                
                            </Col>
                            
                        </Row>

                        

                    </Col>

                </Row>

            </Container>

        )


    }
}


// Event page event Title Style
const AboutPageTitleStyle = {
    fontFamily: 'Inconsolata',
        fontSize: '1.5rem',
        fontWeight:' bold',
        color: 'white',
        borderLeft: '2px solid white',
        borderRight: '2px solid white',
        textAlign: 'center',

}

const AboutPageHeading = {
    fontFamily: 'Inconsolata',
        fontSize: '1.2rem',
        fontWeight:' bold',
        color: 'white',

}

const AboutPageParagraph = {
    fontFamily: 'Inconsolata',
        fontSize: '0.8rem',
        color: 'white',


}

const AboutPagePeopleName = {
    fontWeight : 'bold'
}

const ProfilePhotoStyle = {
    boxShadow : '1px 1px 4px 1px black',
    borderRadius:'50%', 
    overflow:'hidden',
    height:'100px',
    width:'100px', 
    margin:'0 auto'
}


export default AboutMainPage
