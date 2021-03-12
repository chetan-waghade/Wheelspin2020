import React, { Component } from 'react'
import EventList from './sub_components/EventList'
import {db} from '../../../../firebase/fire'


export class ProfileRegisteredEvents extends Component {

    // events = [

    // ]
     


    componentDidMount(){
        // console.log(this.state.events)
        db.collection('users').doc('ShraddhaMehta').collection('registered_events').get().then(function(col){
            console.log("h"); 
            const events = [];
            col.docs.forEach(doc => {
                console.log(doc.data());
                events.push(doc.data())
                console.log(events)
            })
            // this.events.
            // console.log(this.state.events)
        
            
        });

        
    }


    // events = [
    //     {
    //         eventName:"Webatrix",
    //         eventPayment:'-',
    //         eventRegisteredDate:'12-2-20',
    //         eventTeamMember:'2'
            
    //     },
    //     {
    //         eventName:"Webatrix",
    //         eventPayment:'-',
    //         eventRegisteredDate:'12-2-20',
    //         eventTeamMember:'2'
            
    //     },
    //     {
    //         eventName:"Webatrix",
    //         eventPayment:'-',
    //         eventRegisteredDate:'12-2-20',
    //         eventTeamMember:'2'
            
    //     }
    // ]

    // eventList = this.state.events.map(event =>
    //     <EventList event={event}/>
    // )

    render() {
        return (
            <div>

                

                {/* Render Event list */}

                {/* {this.eventList} */}
                
               
            </div>
        )
    }
}

export default ProfileRegisteredEvents
