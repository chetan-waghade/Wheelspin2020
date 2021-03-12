import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import Navbar  from 'react-bootstrap/Navbar';
import Nav  from 'react-bootstrap/Nav';   
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ProfileRegistations from './ProfileRegistrations'
import ProfilePayment from './ProfilePayment';
import ProfileRegisteredEvents from './ProfileRegisteredEvents';
import ProfileRegisteredPrezentaire from './ProfileRegisteredPrezentaire';
import { db,auth} from '../../../../firebase/fire.js'


export class ProfileAbout extends Component {

    state = {
        user:'',
        uid:this.props.userUID,  
    }

    logout(){
        auth.signOut();
    }

    componentDidMount(){
            console.log('mounted')
            console.log(this.state.uid)
            db.collection('users').doc(this.state.uid)
               .get()
               .then(
                   doc =>
                   {
                    
                    this.setState({user:doc.data()})
                    console.log(doc.data())
                   }
                
                    // snapshot => {
                    //     console.log(snapshot)
                    //     const user = []
                    //     snapshot.forEach( doc => {
                    //         const data = doc.data()
                    //         user.push(data)
                    //     })
                        
                    // }
    
               )
               .catch(error => console.log(error))
        }

    render() {
        return (
            <Router>
            <Container>

                {/* NAVBAR */}
                <Row className="mt-2">

                <Col lg={12} xs={12} style={{color:'white'}}>


                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  id="wsHomeNavbar" >   
                        <Navbar.Brand bg="dark" expand="xs" id="wheelspin_brand">WHEELSPIN'20</Navbar.Brand>        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="m-auto wsHomeNavItemContainer">
                                <Nav.Link eventKey={1} href="https://www.wheelspin2020.co.in"  className="wsHomeNavItem"  >Home</Nav.Link>
                                <Nav.Link eventKey={2} as={Link} to="/register/payment"  className=" wsHomeNavItem ">Payment</Nav.Link>
                                <Nav.Link eventKey={3} as={Link} to="/register/registerations"  className=" wsHomeNavItem ">Registration</Nav.Link>
                                <Nav.Link eventKey={4} as={Link} to="/register/registered_event"  className=" wsHomeNavItem ">Registered Event</Nav.Link>
                                <Nav.Link eventKey={5} as={Link} to="/register/registered_prezentaire"  className=" wsHomeNavItem " >Registered Prezentaire</Nav.Link>
                                
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    

                </Col>

                </Row>

                {/* about */}
                <Row className="mt-2">

                    <Col lg={12} xs={12}>


        <h5>{this.state.user.userFirstName}</h5>
                    <h5>College : BDCOE</h5>
                    <h5>City : Wardha</h5>
                    <button onClick={this.logout}>LOGOUT</button>
                    


                    </Col>

                </Row>

                {/* routes */}
                <Row>

                <Col lg={12} xs={12}>

                            <Route path="/p" exact><p>Home</p></Route>
                            <Route path="/register/registerations"><ProfileRegistations/></Route>
                            <Route path="/register/payment"><ProfilePayment/></Route>
                            <Route path="/register/registered_event"><ProfileRegisteredEvents/></Route>
                            <Route path="/register/registered_prezentaire"><ProfileRegisteredPrezentaire/></Route>
                
                </Col>


                </Row>


            </Container>
            </Router>
        )
    }
}

 // btn Style
 const btnWithUnderline={
    backgroundColor:'transparent',
    color:'white',
    fontWeight:'bold',
    border:'none',
    borderRadius:'0px',
    borderBottom:'2px solid white'
  }

export default ProfileAbout
