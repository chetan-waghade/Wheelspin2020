import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import lanwarrior from '../event_page_assets/images/lanwarrior.jpg'
import {st} from '../../../../../firebase/fire'

export class EventPUBG extends Component{

	
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/LANGAMING.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
        let downloadTagPUBG = document.getElementById('downloadAnchorTagPUBG');
        let refP = st.ref('rulebooks/PUBG_.pdf')
        refP.getDownloadURL().then(function(url){
            
            downloadTagPUBG.href = url;  
            downloadTagPUBG.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

			<div id="#start">
 			<Image src={lanwarrior} alt="Lan Warrior" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>
 				<h3>PUBG</h3>
<p>In a long day, it will be fun way to have chicken dinner.</p>

<h4>Problem Statement</h4>
<p>Players Unknown Battlegrounds is a online player versus player shooter game in which up to one hundred players 
fight in a battle royal a type of large-scale last man standing death match where players fight to remain the
 last alive. Players can choose to enter the match solo, duo, or with a small team of up to four people.</p>

<p>In the game, up to one hundred players parachute onto an island and scavenge for weapons and 
equipment to kill others while avoiding getting killed themselves. The available safe area of the game's map
 decreases in size over time, directing surviving players into tighter areas to force encounters.
  The last person or team alive wins the match</p>



<h4>Student Coordinators</h4>
<p>Akshay Gale 8788269591</p>
<p>Nayan Patil 9588625526</p>

<h4>Registration Fees Rs.50 /- per participant (4 members in a team)</h4>
<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTagPUBG">
                                 --- Download Rule Book ---
                             </a></h4>
							 <br></br>


		{/* lan warriors */}
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
	the world with your skills to claim the podium. </p>

		<p>LAN WARRIORS is a LAN GAMING event comprising of THREE gaming event:</p>
		<p>•	COUNTER STRIKE</p>
		<p>•	NFS (NEED FOR SPEED: MOST WANTED)</p>
		<p>•	SMACKDOWN</p>


		<h4>CONDITION:</h4>
		<p>•	For NFS and SMACKDOWN it is a single participant event. 50 rs. per head.</p>	
		<p>•	For Counter STRIKE 200rs per team (5 member).</p>
		<p>*Analog console shall be provided for SMACKDOWN.</p>

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



		
					


 			</div>
 			)
	}

}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}


export default EventPUBG