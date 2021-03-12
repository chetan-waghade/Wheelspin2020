import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import logic_booster from '../event_page_assets/images/logicbooster.jpg'
import {st} from '../../../../../firebase/fire'

export class EventLogicBooster extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/LOGIC BOOSTER.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(
				<div>
				<Image src={logic_booster} alt="Logic Booster" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>


									<h4>Problem Statement</h4>
				<p>Logic booster is an event which is used to implement digital circuit using logic gates and digital kits.</p>

				<h4>Rules</h4>
				<p>•	This competition gives opportunity to the students of Engineering and Polytechnic students.</p>
				<p>•	The competition will be held in 3 rounds.</p>
				<p>•	Participants must show the output of the circuit.</p>
				<p>•	Both rounds will have timing statistics.</p>
				<h4>Round I</h4>
				<p>It is a qualification round in which test of 15-20 questions will be conducted. 
				MCQ questions will be asked on paper within a 10 min .On the basis of score, participant will be 
				shortlisted for the next round.(Test is held on technical question (digital circuits))</p>

				<h4>Round II</h4>
				<p>This round is rapid round in which team has to complete the task in given time otherwise they will be disqualified.</p>

				<h4>Round III</h4>
				<p>A circuit will be given to each team, who has to complete and successfully run circuit in minimum time.</p>

				<p>Second and Third round is logic circuit designing (Components will be provided to each team)</p>

				<h4>Note</h4>
				<p>•	Maximum 2 member (1 team)</p>
				<p>•	Component will be provided to each team.</p>
				<p>•	Final decision will be taken by judges.</p>
				<p>•	Each round is elimination round.</p>
				<p>•	Individual member is also accepted.</p>
				<br></br>
        <h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
                             <br></br>
				<h4>Event Coordinators</h4>
				<p>Prof. J. D. Dhande</p>

				<h4>Student Coordinators</h4>
				<p>Vipulta Pardhi 8788070445</p>
				<p>Sweety Dhole  8999665862</p>

				<h4>Registration Fees Rs.60 /- per participant And Rs.100 /- per team
				(Team consists of 2 members, individual participation also accepted)
				Only Limited Entries for this Event.</h4>	


				</div>
			
			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventLogicBooster