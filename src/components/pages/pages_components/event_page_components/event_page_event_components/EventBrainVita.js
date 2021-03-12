import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import brainvita from '../event_page_assets/images/brainvita.png'
import {st} from '../../../../../firebase/fire'

export class EventBrainVita extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/BRAINVITA.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(
				
				<div>
				<Image src={brainvita} alt="Brain Vita Image" style={{height:'40vh',width:'100vw'}}  fluid/>

			<h4>Introduction</h4>
			<p>Brainvita is a quiz competition. Difficulty level of this competition will going to be high.
			 So all you need to brush up your intellectual skills improve your general knowledge. 
			 Your presence of mind plays a vital role in this competition. </p>
			<p>SO BE READY TO SCRATCH YOUR BRAIN.</p>

			<h4>Rounds</h4>
			<p>The rounds will be as follows:</p>
			<p>1. Screening test.</p>
			<p>2.Audio-Visual Recognition</p>	
			<p>3. Buzzer Round.</p>
			<p>4. Rapid Fire.</p>

			<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>

			<h4>Event Coordinators</h4>
			<p>Prof. R. W. Patil</p>

			<h4>Student Coordinators</h4>
			<p>Aniket Janbandhu 7558613347</p>
			

			<h4>Registration Fees Rs.100 /- per team of two members</h4>


				</div>
				

			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}


export default EventBrainVita