import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'

import nirmaan from '../event_page_assets/images/nirmaan.jpg'
import {st} from '../../../../../firebase/fire'


export class EventNirmaan extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/NIRMAAN.docx')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

				<div>
				<Image src={nirmaan} alt="Nirmaan" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>


				<h4>Problem statement:</h4>
				<p>Design a truss bridge using popsicles sticks and Fevicol as adhesive that can sustain the maximum possible 
				load (vertical) with minimum deflection, satisfying all the understated constraints.</p>

				<h4>Certificate Policy:</h4>
				<p>•	Certificate of excellence and prize will be given to the top 2 teams.</p>
				<p>•	Certificate of participation will be awarded to all teams .</p>

				<h4>Note:</h4>
				<p>*Please Download PDF for more details and rules.</p>
				<p>*Please carefully go through this document i.e. check every detail in every text as well as every images to 
				avoid any confusion.</p>
				<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>


				<h4>Event Coordinators</h4>
				<p>Prof. Prateek Dhiran</p> 


				<h4>Student Coordinators</h4>
				<p>Amit Bilawne 9689064706</p>
				<p>Rupesh Jawade 9764495137</p>

				<h4>Registration Fees Rs.60 /- per team of three members.</h4>


				</div>
				
					

			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}
export default EventNirmaan
