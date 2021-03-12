import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import roborace from '../event_page_assets/images/roborace.jpg'
import {st} from '../../../../../firebase/fire'


export class EventRoboRace extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/ROBO RACE.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

			<div>
 			<Image src={roborace} alt="Robo Race" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>



 									
<h4>Problem Statement</h4>
<p>Teams have to build a 4 wheel drive manipulator(manually controlled bot) which can pass given obstacles on
 the race track in minimum time. The arena will test your strategy,speed and manoeuvrability through all
  of its terrains. Are you fast enough??</p>

<h4>Bot Specifications</h4>
<p>•	The dimensions of the bot should be less than or equal to 300 mm X 300 mm X 300 mm. The team which does not meet the requirements will be disqualified from the competition. However the bot can extend its dimension once the run starts. An error of (+5% /5%) is permitted.</p>
<p>•	The bot must be controlled manually.</p>
<p>•	Teams can use both wired as well as wireless control mechanisms.</p>
<p>•	If the participants use wireless mechanism then it is mandatory to use a dual frequency remote.</p>
<p>•	Irrespective of the mechanism used, only one person will be allowed to control the bot.</p>
<p>•	Failing to meet the above specifications will lead to immediate disqualification.</p>
<p>•	There is no weight limit for the bot.</p>
<p>•	Power supply can be on board or off the board.</p>
<h4>Rules and regulation</h4>
<p>•	A team can consist of maximum of 4 members.</p>
<p>•	Members of different institutions or colleges can form a team.</p> 
<p>•	Only 2 member of a team are allowed to stay around the arena for controlling and assisting. A team is allowed to play with one bot only and should continue with the same bot for further rounds.</p>
<p>•	Any kind of damage to the arena will not be entertained and if done, the bot will be immediately disqualified.</p>
<p>•	All the required accessories have to be brought by the participants.</p>
<p>•	No practice runs will be provided.</p>
<p>•	Use of IC engine in any form is not allowed.</p>
<p>•	Human interference (e.g. touching the bot) during the game is not allowed (except while using the replacements).</p>
<p>•	Unfair game may lead to disqualification of the team.</p>
<p>•	A bot is allowed to participate only once by a team.</p>
<p>•	Participants with wired bot are strictly advised to get wires of length 3m or more.</p>
<p>•	The power supply should not be exceed more than 12V. No external power supply will be provided at the time event.</p>
<p>•	Minimum two members are allowed in team.</p>
<h4>NOTES:</h4>
<p>If there will be any other round for top Teams that will be disclosed during the event after the qualifying round.</p>
<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
<h4>Event Coordinators</h4>
<p>Prof. A. B. Tupkar</p>

<h4>Student Coordinators</h4>
<p>Pallavi Urkude 9834026972</p>
<p>Abhijeet Rangari 7798534867</p>

<h4>Registration Fees Rs.80/- per team member.</h4>
<h4>(Maximum four and minimum two members in per team)</h4>

 			</div>
 			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventRoboRace