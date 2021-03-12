import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import aquaskylark from '../event_page_assets/images/aquaskylark.jpg'
import {st} from '../../../../../firebase/fire'
export class EventAquaSkylark extends Component{
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/AQUASKYLARK.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

	render(){
		return(

			<div>
 			<Image src={aquaskylark} alt="Aqua Skylark Image" style={{height:'40vh',width:'100vw'}} fluid/>
 				
<h4>Introduction</h4>
<p>Design a single stage water rocket using plastic container preferably any soft drink/ Mineral water bottle
 that uses a combination of pressurized air and water for propulsion to complete a defined task.</p>
<h4>Problem Statement:</h4>
<p>Team have to make a single stage water rocket (on the basis of air and water pressure) which can cover
 maximum distance and height according to the rounds.</p>


<h4>ROCKET SPECIFICATIONS:</h4> 


<p>1. Only one litter bottle is permitted (bisleri,pepsi,coca cola etc type).</p>
<p>2. No restriction for limit of fins.</p>
<p>3. Launcher will be provided at the time of event if anyone bring their launcher they will not allow to use it.</p>
<p>4. Maximum limit of counter weight is 50 gm.</p>


<h4>RULES AND REGULATIONS:</h4>


<p>1. A team can consist of maximum two members.</p>
<p>2. Members of different institutions or colleges can form a team.</p>
<p>3. Any kind of damage to arena will not entertain and if done, the team will be immediately disqualified.</p>
<p>4. All other accessories have to be brought by the participants. </p>
<p>5. No practice will be providing.</p> 

<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>

<h4>Event Coordinators</h4>
<p>Prof. Zubeir Sheikh</p>

<h4>Student Coordinators</h4>
<p>Subur Khan 8830403971</p>
<p>Kunal Gawande 8407969965</p>

<h4>Registration Fees Rs.60 /- per participant.(Maximum of two members per team)</h4>



 			</div>
 			)
	}

}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}

export default EventAquaSkylark