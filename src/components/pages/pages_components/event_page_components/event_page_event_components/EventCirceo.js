import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import circeo from '../event_page_assets/images/circeo.jpg'
import {st} from '../../../../../firebase/fire'
export class EventCirceo extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/CIRCEO.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

				
				<div>
				<Image src={circeo} alt="Circeo" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>


				<h4>Problem Statement</h4>
				<p>We are designing circuit by using simple breadboard techniques. Breadboards are one of the most fundamental
				 pieces when learning how to build circuits. An electronics breadboard is actually referring to a 
				 solderless breadboard. These are great units for making temporary circuits and prototyping, and they require
				  absolutely no soldering. Only wired connections are there.</p>

				<h4>Rules</h4>
				<p>• Only two members are allowed in each group. (each member 60 Rs. per head).</p>
				<p>• Components and circuit diagrams will be provided by co-ordinators. </p>
				<h4>Round I</h4>
				<p>	It is time based round.</p>
				<p>	We have to design basic circuits in it.</p>
				<p>	Students who successfully design the circuit in given time they are qualify for second round.</p>
				<h4>Round II</h4>

				<p>	It is output based round but in particular time period.</p>
				<p>	We have to design semi-complex circuit in it.</p>
				<p>	Students who design circuits in minimum time they are qualified for third round.</p>
				<p>	Only 6 teams are eligible for third round.</p>
				<h4>Round III</h4>

				<p>	It is totally output based</p> 
				<p>	We have to design complex circuit in it.</p> 
				<p>	Out of 6 teams we have to select the two best performers.</p>
				
				<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
				
				<h4>Event Coordinators</h4>
				<p>Prof. G. D. Korde</p>

				<h4>Student Coordinators</h4>
				<p>Kiran Dhage 9923211365</p>
				<p>Komal Mursakar 8999560900</p>

				<h4>Registration Fees Rs.60 /- per participant.(Only Individual Entry is Accepted)</h4>


				</div>

			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventCirceo