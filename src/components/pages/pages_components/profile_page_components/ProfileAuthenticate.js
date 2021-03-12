import React, { Component } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import RegisterSignUp from './RegisterSignUp'
import RegisterLogIn from './RegisterLogIn'


export default class ProfileAuthenticate extends Component {

    render() {
        return (
            <Router>
                <Container className="mt-2">

                {/* view Container */}
                <Row className="mt-4">
                    <Col>
                        
                        <Route path="/register/" exact><RegisterLogIn/></Route>
                        <Route path="/register/s/"><RegisterSignUp/></Route>

                    </Col>
                </Row>  
                </Container>
                </Router>
        )
    }
}

    

    // state = {
    //     participants : null,
    //     user: null,
    //     userName: null,
    //     userEmail:null
    // }

    // authListener(){
    //     auth.onAuthStateChanged((user) => {
    //         if(user){
    //             this.setState({user});
    //         }
    //         else{
    //             this.setState({user:null});
    //         }
    //     });
    // }


    // signInUser = () => {
        
    //     let provider = new firebase.auth.GoogleAuthProvider()

    //    auth.signInWithPopup(provider)
    //     .then(function(result){
    //         // var token = result.credential.accessToken;
    //         const user = result.user;
    //         console.log(user)
    //         this.setState({
    //             userName : user.displayName,
    //             userEmail : user.email
    //         })
    //         console.log()

            

    //     }).catch(function(error){
    //         console.log(error)
    //         // var errorCode = error.code;
    //         // var errorMessage = error.message;
    //         // var email = error.email;
    //     })

        // singWithGoogle().then(function(result){
        //     console.log(result)
        // })
        // .catch(function(error){
        //     console.log(error)
        // });

    // }
    

    // // getting Data
    // componentDidMount(){
    //     console.log('mounted')
    //     db.collection('events').doc('codechef').collection('code_chef_participants')
    //        .get()
    //        .then(

    //             snapshot => {
    //                 console.log(snapshot)
    //                 const participants = []
    //                 snapshot.forEach( doc => {
    //                     const data = doc.data()
    //                     participants.push(data)
    //                 })
    //                 this.setState({participants:participants})
    //             }

    //        )
    //        .catch(error => console.log(error))
    // }


    // adding data

    // addNewParticipant = () =>{
    //     db.collection('events').doc('codechef').collection('code_chef_participants')
    //         .add({
    //             pfname: "Kaustubh"
    //         })
    //     console.log("ADDED")
    // }

    // render() {
    //     return (
            
            

    //             <Router>
    //             <Container className="mt-2">

    //             {/* view Container */}
    //             <Row className="mt-4">
    //                 <Col>
                        
    //                     <Route path="/profile/" exact><RegisterLogIn/></Route>
    //                     <Route path="/profile/signup"><RegisterSignUp/></Route>
                        
                        

    //                 </Col>
    //             </Row>  
    //             </Container>
    //             </Router>
                


      

            
    //     )
    // }
// }


