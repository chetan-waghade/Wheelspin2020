import React, { Component } from 'react'
import ResponsiveNavbar from '../home_page_components/ResponsiveNavbar'
import NewForm from './NewForm'

export class OnlineRegistration extends Component {
    componentDidMount(){
        document.title = "Registration | Wheelspin"
    }

    render() {
        return (
            <>
            <ResponsiveNavbar/>
            <NewForm/>
            </>
        )
    }
}

export default OnlineRegistration
