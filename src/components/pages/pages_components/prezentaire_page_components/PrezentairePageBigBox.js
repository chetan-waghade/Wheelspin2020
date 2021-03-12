import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {st}  from '../../../../firebase/fire'
import './PrezentairePageBigBox.css'
import '../event_page_components/event_page_assets/dedicated_css/CustomScroll.css'
import PrezentaireCompandIT from './prezentaire_page_dep_page/PrezentaireCompandIT';
import PrezentaireBasicScience from './prezentaire_page_dep_page/PrezentaireBasicScience';
import PrezentaireElectricalGroup from './prezentaire_page_dep_page/PrezentaireElectricalGroup';
import PrezentaireElectronicsGroup from './prezentaire_page_dep_page/PrezentaireElectronicsGroup';
import PrezentaireMechanical from './prezentaire_page_dep_page/PrezentaireMechanical';
import PrezentaireMBA from './prezentaire_page_dep_page/PrezentaireMBA';
import PrezentaireCivil from './prezentaire_page_dep_page/PrezentaireCivil';


export class PrezentairePageBigBox extends Component {

    
    componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('prezentaire/PrezentaireSamplePaper.doc')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }
    

    


    render() {
        return (
            <Router>
            <Container className="mt-1">
                {/* BIGBOX */}
                <Row>

                    {/* Prezentaire Department List */}
                    <Col>
                        <Row className="pb-2 pt-2 border-bottom border-top">
                            
                        <Col lg={2} xs={4} className="text-center m-auto "><Button as={Link} to="/prezentaire/computerIT" className="PrezentaireButton" onClick={changePrezentaireTitle} >Computer & IT </Button></Col>
                            <Col lg={2} xs={4} className=" text-center m-auto "><Button as={Link} to="/prezentaire/mechanical" className="PrezentaireButton" onClick={changePrezentaireTitle}>Mechanical</Button></Col>
                            <Col lg={2} xs={4} className="text-center m-auto"><Button as={Link} to="/prezentaire/electronics" className="PrezentaireButton" onClick={changePrezentaireTitle} >Electronics</Button></Col>
                            <Col lg={2} xs={4} className=" text-center m-auto"><Button as={Link} to="/prezentaire/electrical" className="PrezentaireButton" onClick={changePrezentaireTitle}>Electrical</Button></Col>
                            <Col lg={2} xs={4} className=" text-center m-auto"><Button as={Link} to="/prezentaire/basicscience" className="PrezentaireButton" onClick={changePrezentaireTitle}>Basic Science</Button></Col>
                            <Col lg={1} xs={4} className="text-center  m-auto"><Button as={Link} to="/prezentaire/mba" className="PrezentaireButton" onClick={changePrezentaireTitle}>MBA</Button></Col>
                            <Col lg={1} xs={4} className="text-center  m-auto"><Button as={Link} to="/prezentaire/civil" className="PrezentaireButton" onClick={changePrezentaireTitle}>Civil</Button></Col>

                        </Row>
                    
                
                    {/* Prezentaire Department Details */}
                        {/* Prezentaire Department Title */}
                        <Row className="mt-2">
                            <Col sm={{span:6, offset:3}} className="text-center">
                            <h4 style={ PrezentairePageEventTitleStyle } id="prezentaireTitle">Computer & IT Engineering Group</h4>
                            </Col>
                        </Row>

                        {/* Prezentaire Department More Details */}
                        <Row className="border-left border-right">
                            <Col className="mt-2 force-overflow scroller scrollbar-primary " id="wsPrezentaireDetailScroll " style={{'height':'calc(100vh - 298px)','overflow-y':'scroll','color':'white','font-family':'Inconsolata'}}> 
                            {/* add a component here  which contains event details */}
                            
                             <Route path="/prezentaire" exact><PrezentaireCompandIT/></Route>
                            <Route path="/prezentaire/computerIT"><PrezentaireCompandIT/></Route>
                            <Route path="/prezentaire/electrical" ><PrezentaireElectricalGroup/></Route>
                            <Route path="/prezentaire/electronics" ><PrezentaireElectronicsGroup/></Route>
                            <Route path="/prezentaire/mechanical" ><PrezentaireMechanical/></Route>
                            <Route path="/prezentaire/mba" ><PrezentaireMBA/></Route>
                            <Route path="/prezentaire/basicscience" ><PrezentaireBasicScience/></Route>
                            <Route path="/prezentaire/civil" ><PrezentaireCivil/></Route>

                                            

                       
                            </Col>
                        </Row>

                        {/* Prezentaire Upload */}
                        <Row>
                        <Col lg = {12} xs={12} className="text-center mt-1">
                            
                        <a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 Download Sample Paper
                             </a>
                        </Col>
                        <Col sm={{span:4, offset:4}} className="text-center mt-1">
                        {/* <a style={PrezentairePageUploadStyle} id="wsPrezentaireUploadBtn" href="" download>Download Sample Paper</a> */}
                             <Button style={PrezentairePageUploadStyle} id="wsPrezentaireUploadBtn" onClick={uploadDailog}>Upload</Button>

                        </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </Router>
        )

        


        function changePrezentaireTitle(e) {
            let y = e.target.innerText;
            if(y==="Computer & IT"  || y==="Electronics" || y==="Electrical"){
                document.getElementById("prezentaireTitle").innerText = y + " Engineering Group";
            }
            else if(y==="Mechanical" || y==="Civil"){
                document.getElementById("prezentaireTitle").innerText = y + " Engineering";
            }
            else{
            document.getElementById("prezentaireTitle").innerText = y;
            }
        }

        //Show alert to user on clicking register
        function uploadDailog(e){
            
            alert("Email Your Paper to Respective Department email id\n" +
                "Computer  " + ": Prezentaire.ce@gmail.com \n"+
                "Mechanical " + ": Prezentaire.mech@gmail.com \n"+
                "Civil " + ": Prezentaire.civil@gmail.com \n"+
                "Electronics " + ": Prezentaire.extc@gmail.com \n"+
                "Electrical " + ": Prezentaire.electrical@gmail.com \n"+
                "MBA " + ": Prezentaire.mba@gmail.com \n" +
                "Basic Science " + ": Prezentaire.1styear@gmail.com \n");
        }

    }
}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}



// Event page event Title Style
const PrezentairePageEventTitleStyle = {
    fontFamily: 'Inconsolata',
    color: 'white',
    borderRight: '1px solid white',
    borderLeft: '1px solid white',
    textAlign: 'center',
    


}

// event page register button style

const PrezentairePageUploadStyle = {
    color:'white',
    backgroundColor:"transparent",
    fontSize:'2vh',
    padding:'0.5vh 3vh',
    fontFamily:'Inconsolata',
    boxShadow:'0.3em 0.3em 1em rgba(0,0,0,0.3)',
    border:'0.02em solid white',
    borderRadius:'0'
}



export default PrezentairePageBigBox
