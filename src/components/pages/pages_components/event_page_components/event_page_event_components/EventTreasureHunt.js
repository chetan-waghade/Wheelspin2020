import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import treasurehunt from '../event_page_assets/images/treasurehunt.jpg'
import {st} from '../../../../../firebase/fire'

export class EventTreasureHunt extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/TREASURE HUNT.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

			<div>
 			<Image src={treasurehunt} alt="Treasure Hunt" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>
 			<h3>TREASURE HUNT</h3>

<p>Not all treasure is silver & gold, mate</p>
<p>~Jack Sparrow</p>

<p>TREASURE HUNT: Key has always been the treasure. Here puzzle is the key, 
so solve the puzzle and get to the treasure. Extraordinary things are always hidden in the places 
people never think to look.</p>

<h4>Problem Statements</h4>
<p>•	Team would comprise of two members</p> 
<p>•	Decision of the executing committee will be final</p>
<p>•	Punctuality would be appreciated</p>
<p>•	Registration fee won’t be refunded under any circumstances</p>
<p>•	Participation certificates will be provided to all</p>
<p>•	Cheating, Misconduct & External help will lead to disqualification.</p>
<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
<h4>Event Coordinators</h4>
<p>Prof. K. Lamsoge</p>

<h4>Student Coordinators</h4>
<p>Jishita Raut 9370657066</p>
<p>Rohan Swashinkar 8793557734</p>
<p>Ashish Saraf 8600257785</p>

<h4>Registration Fees Rs.160 /- per team of two members.</h4>
 			</div>

			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventTreasureHunt