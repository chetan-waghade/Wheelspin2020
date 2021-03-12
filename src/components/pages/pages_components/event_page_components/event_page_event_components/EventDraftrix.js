import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import keatso from '../event_page_assets/images/keatso.jpg'
import {st} from '../../../../../firebase/fire'
export class EventDraftrix extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/DRAFTRIX.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }
     
	render(){
		return(

				<div>
				<Image src={keatso} alt="Draftrix" style={{height:'40vh',width:'100vw'}} fluid/>

				<h5>Introduction</h5>
				<p> A drafttrix is a representation of technical drawing, documenting an architecture or engineering design,
				 using QCAD(autocad)</p>



				<h4>Problem Statement</h4>
				<p>In drafttrix event the participants have to draw the single line or double line plan (according to problem) of
				 residential building in qcad(autocad). The information regarding the area of the plot (L x B) and some other 
				 requirement will be provided. Time limit will be provided 30 min.</p> 

				 <br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>


				<h4>Event Coordinators</h4>
				<p>Prof. V. R. Kalmegh</p>

				<h4>Student Coordinators</h4>
				<p>Viraj Harode 7083388376</p>
				<p>Shubham Kakde 9518931954</p>

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

export default EventDraftrix