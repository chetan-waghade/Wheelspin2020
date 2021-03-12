import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import codechef from '../event_page_assets/images/codechef.jpg'
import {st} from '../../../../../firebase/fire'
export class EventCodeChef extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/CODECHEF.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }
	render(){
		return(

						<div>
						<Image src={codechef} alt="Codechef" style={{height:'40vh',width:'100vw'}} fluid/>

						<h5> ~ ~ ROUND I ~ ~ </h5>
		<h4>Quizier</h4>

		<p> There will be 20 questions on C, C++ and 30 min time will be given to the participants. First 30 candidates will be qualified for second round </p>

		<h5> ~ ~ ROUND II ~ ~ </h5>

		<h4>Code Hunter</h4>

		<p> Programmer needs to debug the existing code. Participants successfully executing maximum program with optimized code with minimum time allotted will be titled as wheelspin-2019 “Code-Chef" </p>

		<h4>General Rules</h4>

		
		<p> ♦ A team consist of maximum one member per team. </p>
		<p> ♦ The decision of organizers shall be treated as final and binding to all. </p>
		<p>♦ Event organizers are liable to change the rules as per their convenience. </p>
		
		<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
		

		<h4> Event Coordinators Code Chef </h4>
		<p> Prof. A.V. Kadu </p>

		<h4> Student Coordinators </h4>
		<p> Yogesh Shugani 9890708302</p>
		<p> Pawan Kahurke 7770076770</p>

		<h4> Entry Fees </h4>
		<h4> A fees of Rs. 60/- is applicable for each participant.</h4>
		

		</div>
				
			)
	}

}
const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventCodeChef