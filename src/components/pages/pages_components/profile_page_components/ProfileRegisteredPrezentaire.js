import React, { Component } from 'react'
import PrezentaireList from './sub_components/PrezentaireList'
import {db} from '../../../../firebase/fire'

export class ProfileRegisteredPrezentaire extends Component {

    

    prezentaires = [
        // {
        //     prezentaireName:"Webatrix",
        //     prezentairePayment:'-',
        //     prezentaireRegisteredDate:'12-2-20',
        //     prezentaireTeamMember:'2'
            
        // },
        // {
        //     prezentaireName:"Webatrix",
        //     prezentairePayment:'-',
        //     prezentaireRegisteredDate:'12-2-20',
        //     prezentaireTeamMember:'2'
            
        // },
        // {
        //     prezentaireName:"Webatrix",
        //     prezentairePayment:'-',
        //     prezentaireRegisteredDate:'12-2-20',
        //     prezentaireTeamMember:'2'
            
        // }
    ]

    prezentaire = this.prezentaires.map(prezentaire =>
        <PrezentaireList prezentaire={prezentaire}/>
    )



    render() {
        return (
            <div>
                {/* Render Prezentaire List */}
                <p>Registered Prezentaire List</p>

                {this.prezentaire}

            </div>
        )
    }
}

export default ProfileRegisteredPrezentaire
