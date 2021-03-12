import React, { Component } from 'react'

import ResponsiveNavbar from './ResponsiveNavbar'
import CollegeName from './CollegeName'
import LogoPresent from './LogoPresent'
import Connect from './Connect'
import Register from './Register'

export class MainPage extends Component {

    componentDidMount(){
        document.title = "Connect | Wheelspin"
    }

    render() {
        return (
            <>
            <ResponsiveNavbar/>
            <CollegeName/>
            <LogoPresent/>
            <Connect/>
            <Register/>
            </>
        )
    }
}

export default MainPage
