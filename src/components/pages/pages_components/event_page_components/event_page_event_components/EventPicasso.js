import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import picasso from '../event_page_assets/images/picasso.jpg'
import {st} from '../../../../../firebase/fire'


export class EventPicasso extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/PICASSO.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

				<div>
				<Image src={picasso} alt="Picasso" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>


				<p>“Art is a lie that makes us realize the truth”</p>
				<h4>Problem Statement</h4>
				<p>If you think you can, you can..! If you think you can’t, you can’t…</p>

				<h4>Topics</h4>
				<p>•	Go green</p>
				<p>•	Global warming</p>
				<p>•	Cashless economy/Digital India</p>
				<p>•	Effects of social media</p>
				<p>•	Indian Traffic rules </p>
				<p>•	Merits & demerits of technology </p>
				<p>•	Indian Politics</p> 
				<h4>Rules</h4>
				<p>•	Participation won’t be in group.</p> 
				<p>•	Fees for competition 60/- for each poster.</p>
				<p>•	One participant may submit more than one poster.</p>
				<p>•	Poster may be drawn by hand sketch/painting.</p>
				<p>•	Poster should be A3 Size (12inch*16.5Inch).</p>
				<p>•	Poster with slogan most preferred.</p>
				<p>•	Decision of judges will be final and binding.</p>
				<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
				<h4>Event Coordinators</h4>
				<p>Prof. R. D. Raghatate</p>

				<h4>Student Coordinators</h4>
				<p>Omdeo Moraskar 8788931179</p>
				<p>Swastik Dandekar 8379964460</p>

				<h4>Registration Fees Rs.50 /- per participant.</h4>
					

				</div>

				
			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}
export default EventPicasso