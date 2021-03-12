import React from 'react';
import './App.css';
// bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// router 
import { BrowserRouter as Router, Route } from 'react-router-dom';
// importing page component
import { Home } from './components/pages/Home.js';
import { Events } from './components/pages/Events.js';
import { Prezentaire } from './components/pages/Prezentaire.js';
import { About } from './components/pages/About.js'
import { ContactUs } from './components/pages/ContactUs.js'
import {OnlineRegistration} from './components/pages/pages_components/online_registration_components/OnlineRegistration'
import {PhotoGallery} from './components/pages/pages_components/photo_gallery_page_components/PhotoGallery'
import {MainPage} from './components/pages/pages_components/connect_page_components/MainPage'
// // import { Register } from './components/pages/Register';
// import  { ProfilePage }  from './components/pages/pages_components/profile_page_components/ProfilePage';

function App() {
  return (
    
    <Router>
    <Route path="/" exact><Home/></Route>
    <Route path="/events"><Events/></Route>
    <Route path="/prezentaire"><Prezentaire/></Route>
    <Route path="/about"><About/></Route>
    <Route path="/contact_us"><ContactUs/></Route>
    <Route path="/registration"><OnlineRegistration/></Route>
    <Route path="/photo_gallery"><PhotoGallery/></Route>
    <Route path="/connect"><MainPage/></Route>
    </Router>
  

  );
}

export default App;
