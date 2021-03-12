import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import lanwarrior from '../event_page_assets/images/lanwarrior.jpg'
import {st} from '../../../../../firebase/fire'

export class EventLanWarriors extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/LAN Warrior.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }


	render(){
		return(

				<div>

			
			
			<Image src={lanwarrior} alt="Lan Warrior" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>
			


						<h4>LAN GAMING:</h4>
		<p>

				The journey to the amazing virtual world of games never ends just
	as you become a pro from a rookie. So it will be a mind boggling
	venture when the best in the country come face to face to display
	their gaming skills and to prove their metal to the gaming world.
	With breathtaking display of e-game skills by gaming lovers from
	across India Gaming Zone gives you exactly what each and every
	gaming persona would like to see. Fierce competition, some
	breathtaking skills and yes a lot of risk finally draw the better from
	the pool of best. So before it says Game Over get ready to dazzle
	the world with your skills to claim the podium.




		</p>
		<p>•	NFS (NEED FOR SPEED: MOST WANTED)</p>
		<p>•	SMACKDOWN</p>
		<h4>CONDITION:</h4>
		<p>•	For NFS and SMACKDOWN it is a single participant event.</p>
		
		<p>•	Single participant for fifa 14.</p>
		<p>*Analog console shall be provided for SMACKDOWN.</p>
		<h4>♦ Call OF Duty and NFS</h4>
		<h4>♦ Smackdown</h4>
		<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
        

		<h4>Event Coordinators</h4>
		<p>Prof. S. V. Nakade</p>

		<h4>Student Coordinators</h4>
		<p>Akshay Gale 8788269591</p>
		<p>Nikhil Jikar 9823414594</p>



		<h4>Registration Fees Rs. 50/- Per Student</h4>
					

				</div>

			)
	}

}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}
export default EventLanWarriors