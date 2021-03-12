import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import robosoccer from '../event_page_assets/images/robosoccer.jpg'
import {st} from '../../../../../firebase/fire'


export class EventRoboSoccer extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/ROBO SOCCER.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }


	render(){
		return(

			<div>
 			<Image src={robosoccer} alt="Robo Soccer" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>

 				
<h4>Problem Statement</h4>
<p>• Call it soccer, association football, or just plain football, soccer is the most popular game on the planet. 
From Chinese cuju (literally meaning ‘kick ball’) to huge national and international tournaments such as the
 EPL (English Premier League), World Cups, and Olympics, soccer has been a huge part of history. 
 The most exciting new technology in his field is the soccer robot.</p>

<p>The RoboCup tournament states its goal as "By the middle of the 21st century, a team of fully autonomous
 humanoid robot soccer players shall win a soccer game, complying with the official rules of FIFA, against
  the winner of the most recent World Cup." At BDCOE, we are fully committed to bringing this technology alive</p>

<h4>Objectives:</h4>
<p>• To build a manually controlled robot, within the given specifications, which can successfully play soccer.</p>

<h4>Team Specifications:</h4> 
<p>* There can be a minimum 2 and maximum of 4 members per team.</p>
<p>* Only 2 members of each team may be present at a time at the arena.</p>
<p>* One member will be the controller of the bot and the other will be the wire holder.</p>
<p>* Both the controller and the wire holder may not be changed during a match.</p>
<h4>BOT SPECIFICATION:</h4>
<p>* Bots can be wired or wireless.</p>
<p>* Wireless bots should have a minimum range of 12 feet.</p>
<p>* The wire length of wired bots must be greater than 11 feet.</p> 
<p>*The bot dimensions should be as follows (10% tolerance is allowed) </p>
<p>Length &lt;= 30 cm</p> 
<p>Breath &lt;= 25 cm</p>
<p>Height &lt;= 25 cm </p>
<p>Weight &lt;= 5 kg </p>
<p>*The battery voltage (potential) supplied to the bot should not exceed 12 volts.</p>
<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
<h4>Event Coordinators</h4>
<p>Prof. S. M. Fulmali</p>

<h4>Student Coordinators</h4>
<p>Achal Betal  8208675712</p>
<p>Md. Ishtiyaque Umair 9766821077</p>

<h4>Registration Fees Rs.80 /- per member</h4>
<h4>(Team consist of maximum four members and minimum two members)</h4>

 			</div>
 			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}


export default EventRoboSoccer