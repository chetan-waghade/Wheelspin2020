import React, { Component } from 'react';
// import ProfileEventRegistration from './ProfileEventRegistration'
// import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import ProfileAbout from './ProfileAbout'

import { auth} from '../../../../firebase/fire.js'
import ProfileAuthenticate  from './ProfileAuthenticate';
// import RegisterLogIn from './RegisterLogIn'

export class ProfilePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            user:null,
        }
        this.authListener = this.authListener.bind(this)
    }

    componentDidMount(){
        this.authListener();
        console.log(this.state.user);
        console.log("mounted")
    }

    authListener(){
        auth.onAuthStateChanged((user) =>{
            if(user){
                this.setState({user});
            }
            else{
                this.setState({user:null})
            }
        })
    }

    render() {
        return (
            <div>
                
             
            {this.state.user ? (<ProfileAbout userUID={this.state.user.uid} />) : (<ProfileAuthenticate/>)} 
                
            </div>
        )
    }
}

export default ProfilePage
