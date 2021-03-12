import React, { Component } from 'react';
import { ResponsiveNavbar } from '../pages/pages_components/home_page_components/ResponsiveNavbar.js';
import { AboutMainPage } from '../pages/pages_components/about_page_components/AboutMainPage'

export class About extends Component {

    componentDidMount(){
        document.title = "About | Wheelspin"
    }

    render() {
        return (
            <>
            <ResponsiveNavbar/>
            <AboutMainPage/>
            </>
        )
    }
}

export default About
