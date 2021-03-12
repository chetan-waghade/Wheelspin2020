import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import ignite from '../event_page_assets/images/ignite.jpg'
import {st} from '../../../../../firebase/fire'
export class EventIgnite extends Component {

    componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/IGNITE.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }

    render() {
        return (
            
            <div>
            <Image src={ignite} alt="Ignite" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>
            	 <h4>Introduction</h4>
<p>•	Beyond every boundaries of thoughts there exist ignited minds.</p>
<p>•	IGNITE provides you an opportunity to innovate your ideas.</p>
<p>•	IGNITE National Level Exhibition, which gives window of opportunity for the students of school and engineering to enlighten their ideas, by facilitating them to show case their research, projects incorporating new technology, via different models and prototypes.</p>
 <h4>Objectives</h4>
<p>•	A great platform to present their research and receive a feedback from eminent professor and expert.</p>
<p>•	Opportunity to exhibit innovation world-wide at a National Level Techfest.</p>
<p>•	To build linkage between excellences in formal scientific system and informal system to create a knowledge network for various links.</p>
<p>•	To be an inspiration for others.</p>
 <h4>Problem Statement</h4>
<p>•	Models or projects should be well implemented on the basic of concept.</p>
<p>•	The way of presenting and answering should be done properly.</p>
<p>•	Innovative ideas will be admired.</p>
 <h4>GENERAL INSTRUCTIONS Who can participate?</h4>
<p>Schooling students and graduating (UG &PG) students with any kind of innovative awaring ideas are welcome.</p>

 <h4>Type of project</h4>
<p>Project based on basic concept either simple or out of box working or non-working can be exhibited.</p>
<p>(Projects specially based on medical ground will be appreciated.)</p>

 <h4>Judging Criteria</h4>
<p>Judging criteria for schooling and graduating student will differ and the judgement will be taken accordingly.</p>

 <h4>Note</h4>
<p>Discipline should be maintained and final decision will be taken by judges and head coordinators.</p>

 <br></br>
        <h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
                             <br></br>

 <h4>Event Coordinators</h4>
	<p>Prof. G. P. Dhalware</p>

 <h4>Student Coordinators</h4>
	<p>Aadesh Pathare 7972633585</p>
	<p>Kalyani Guldhe 7757960669</p>

 <h4>Registration Fees Rs.60 /- per participant</h4>


            </div>
        )
    }
}

const downloadButtonStyle = {
    borderBottom : '2px solid white',
    background : 'transparent',
    color: 'white'
}
export default EventIgnite
