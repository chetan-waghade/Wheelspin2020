import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import campus_drive from '../event_page_assets/images/campus_drive.jpg'
import {st} from '../../../../../firebase/fire'

export class EventCampusDrive extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/Campus Drive.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

				<div>
				<Image src={campus_drive} alt="Campus Drive Image" style={{height:'40vh',width:'100vw'}} fluid/>

				<h4>Introduction</h4>
				<p>This event is mock of campus Recruitment process including four rounds.</p>

				<h5>~ ~ Round I - Quantitative Aptitude</h5>
				<p>This round consist of quantitative, verbal, reasoning 30 multiple choice question and will last for 20 minutes.</p>

				<h5>~ ~ Round II - Group Discussion</h5>
				<p>This is the group discussion round on the given topic.</p>

				<h5>~ ~ Round III - Extempore</h5>
				<p>In this round you have to speak on a given topic for 2 minutes.</p>

				<h5>~ ~ Round IV - Personal Interview</h5>
				<p>Personal interview will be taken by the H.R.</p>
				<p>All round are elimination rounds.</p>

				<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>

				<h4>Event Coordinators</h4>
				<p>Prof. K. S. Dhore</p>

				<h4>Student Coordinators</h4>
				<p>Shivani Moon 7058650755</p>
				<p>Vijay Bonath 8390543475</p>


				<h4>Registration Fees Rs.60 /- per participant.</h4>
									


				</div>

			)
	}

}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}



export default EventCampusDrive