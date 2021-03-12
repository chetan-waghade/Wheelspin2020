import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './EventPageBigBox.css';
import './event_page_assets/dedicated_css/CustomScroll.css'
import EventPageHome from './EventPageHome';
import EventWebatrix from './event_page_event_components/EventWebatrix';
import EventIgnite from './event_page_event_components/EventIgnite';
import EventBrainVita from './event_page_event_components/EventBrainVita';
import EventCampusDrive from './event_page_event_components/EventCampusDrive';
import EventCirceo from './event_page_event_components/EventCirceo';
import EventCodeChef from './event_page_event_components/EventCodeChef';
import EventDraftrix from './event_page_event_components/EventDraftrix';
// import EventIsteTech from './event_page_event_components/EventIsteTech';
import EventKeatso from './event_page_event_components/EventKeatso';
import EventPUBG from './event_page_event_components/EventPUBG';
import EventLogicBooster from './event_page_event_components/EventLogicBooster';
import EventNirmaan from './event_page_event_components/EventNirmaan';
import EventPicasso from './event_page_event_components/EventPicasso';
import EventAquaSkylark from './event_page_event_components/EventAquaSkylark';
import EventRoboRace from './event_page_event_components/EventRoboRace';
import EventRoboSoccer from './event_page_event_components/EventRoboSoccer';
import EventTreasureHunt from './event_page_event_components/EventTreasureHunt';














export class EventPageBigBox extends Component {
    render() {
        return (
            <Router>
            <Container className = "mt-2" id="wsEventBigBox">
                {/* parent row *The Big Box* */}
                <Row>

                    {/* Left Column that contains events */}
                    <Col lg={2} md={12} id="wsEventsNameListLeft">

                        {/* row To Stack The columns containing Events name */}
                        <Row>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/aqua_skylark" className="EventButton border" onClick={changeEventTitle} >Aqua Skylark</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/robo_soccer" className="EventButton" onClick={changeEventTitle}>Robo Soccer</Button></Col>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/robo_race" className="EventButton" onClick={changeEventTitle} >Robo Race</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/ignite" className="EventButton" onClick={changeEventTitle}>Ignite</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/keatso" className="EventButton" onClick={changeEventTitle}>Keatso</Button></Col>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/campus_drive" className="EventButton" onClick={changeEventTitle}>Campus Drive</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/logic_booster" className="EventButton" onClick={changeEventTitle}>Logic Booster</Button></Col>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/circeo" className="EventButton" onClick={changeEventTitle}>Circeo</Button></Col>                                                      
                        </Row>
                    
                    </Col>

                    {/* Center Column that is parent to three row */}
                    <Col>
                    
                    {/* Event Title */}
                    <Row className="mt-2" >
                        <Col sm={{span:6, offset:3}} className="text-center">

                            {/* ADD a title Component */}
                        <h4 style={ EventPageEventTitleStyle } id="eventTitle"> Events at Wheelspin</h4>
                        </Col>
                    </Row>

                    {/* Event Details */}
                    <Row className="border-left border-right">
                        <Col className="mt-2 force-overflow scroller scrollbar-primary " id="wsEventDetailScroll " style={{'height':'calc(100vh - 280px)','overflow-y':'scroll','color':'white','font-family':'Inconsolata'}}> 
                            {/* add a component here  which contains event details */}

                            <Route path="/events" exact><EventPageHome/></Route>
                            <Route path="/events/webatrix"><EventWebatrix/></Route>
                            <Route path="/events/ignite" ><EventIgnite/></Route>
                            <Route path="/events/brainvita"><EventBrainVita/></Route>
                            <Route path="/events/campus_drive" ><EventCampusDrive/></Route>
                            <Route path="/events/circeo" ><EventCirceo/></Route>
                            <Route path="/events/code_chef" ><EventCodeChef/></Route>
                            <Route path="/events/draftrix" ><EventDraftrix/></Route>
                            <Route path="/events/aqua_skylark" ><EventAquaSkylark/></Route>
                            <Route path="/events/keatso" ><EventKeatso/></Route>
                            {/* <Route path="/events/lan_warriors" ><EventPUBG/></Route> */}
                            <Route path="/events/logic_booster" ><EventLogicBooster/></Route>
                            <Route path="/events/nirmaan" ><EventNirmaan/></Route>
                            <Route path="/events/picasso" ><EventPicasso/></Route>
                            <Route path="/events/pubg" ><EventPUBG/></Route>
                            <Route path="/events/robo_race" ><EventRoboRace/></Route>
                            <Route path="/events/robo_soccer" ><EventRoboSoccer/></Route>
                            <Route path="/events/treasure_hunt" ><EventTreasureHunt/></Route>

                        </Col>
                    </Row>

                    {/* Register */}
                    <Row className="mt-2 mb-3">
                        <Col sm={{span:4, offset:4}} className="text-center">
                             {/* <Button style={EventPageRegisterStyle} id="wsHomeRegisterBtn" onClick={registerDailog}>Register</Button> */}
                             <a style={EventPageRegisterStyle} id="wsHomeRegisterBtn" href="https://www.wheelspin2020.co.in/registration">Register Here</a>
                        </Col>
                    </Row>
                    
                    </Col>

                    {/* Right Column that contains events */}
                    <Col lg={2} md={12} id="wsEventsNameListRight">

                        {/* row To Stack The columns containing Events name */}
                        <Row>
                        <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/webatrix" className="EventButton border" onClick={changeEventTitle}>Webatrix</Button></Col>
                            <Col lg={12} xs={3} className=" text-center" ><Button as={Link} to="/events/code_chef" className="EventButton" onClick={changeEventTitle}>Code Chef</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/pubg" className="EventButton" onClick={changeEventTitle} href="#start" >Lan Warrior/Pubg</Button></Col>
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/treasure_hunt" className="EventButton" onClick={changeEventTitle}>Treasure Hunt</Button></Col>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/picasso" className="EventButton" onClick={changeEventTitle}>Picasso</Button></Col> 
                            <Col lg={12} xs={3} className=" text-center"><Button as={Link} to="/events/nirmaan" className="EventButton" onClick={changeEventTitle}>Nirmaan</Button></Col>
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/draftrix" className="EventButton" onClick={changeEventTitle}>Draftrix</Button></Col> 
                            <Col lg={12} xs={3} className="text-center"><Button as={Link} to="/events/brainvita" className="EventButton" onClick={changeEventTitle}>Brain Vita</Button></Col>                                                         
                        </Row>
                    
                    </Col>

                </Row>

            </Container>
            </Router>
        )

        // change event title on select
        function changeEventTitle(e) {
            let y = e.target.innerText;
            document.getElementById("eventTitle").innerText = y;
        }

        //Show alert to user on clicking register
        function registerDailog(e){
            alert("Online Registration Under Construction \nCall Respective Event Coordinator to Register");
        }
    }

        

   

   

}

// Event page event Title Style
const EventPageEventTitleStyle = {
    fontFamily: 'Inconsolata',
    fontSize: '1rem',
    color: 'white',
    borderTop: '1px solid white',
    borderBottom: '1px solid white',
    textAlign: 'center',


}

// event page register button style

const EventPageRegisterStyle = {
    color:'white',
    backgroundColor:"transparent",
    fontSize:'3vh',
    padding:'1vh 3vh',
    fontFamily:'Inconsolata',
    boxShadow:'0.3em 0.3em 1em rgba(0,0,0,0.3)',
    border:'0.02em solid white',
    borderRadius:'0'
}

export default EventPageBigBox
