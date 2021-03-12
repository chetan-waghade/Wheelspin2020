import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import webatrix from '../event_page_assets/images/webatrix.jpg'
import {st} from '../../../../../firebase/fire'

export class EventWebatrix extends Component {
	componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/WEBATRIX.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }
    render() {
        return (
            
            <div>
            <Image src={webatrix} alt="Webatrix" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>

                <h4>Introduction</h4>
<p>Webatrix event emphasis on creating basic web designs using HTML (Hypertext Markup Language) 
and CSS (Cascading Style Sheets). The participants are introduced to plan and design effective web pages; 
implementing web pages by writing HTML and CSS code; enhancing web page with the use of page layout techniques, 
text formatting, graphics, images, and multimedia; and producing a functional, multi-page website.</p>
<p>Students have to design webpage on given platform</p>
<p>•   Platform will be Notepad++ 6.8.8 or Dreamweaver CS5/CS6.</p>
<p>•   They can take the support of internet for downloading images related to theme.</p>
<p>•   Participants have to design only a webpage excluding the other requirements like designing navigation pages or links.</p>
<p>•   It is mandatory to include texts, images, data, text slider, image slider, header, footer, animation, search banner, logos, and checkout baskets in complete layout. So, be prepared to be an innovative web designer.</p>
<h4>Rules</h4>


<h4>~ ~ ROUND I ~ ~</h4>
<h4>Web Page Design</h4>
<p>•   First 15 min will allow downloading images related to themes.</p>
<p>•   1hr will be allocated to complete the event.</p>
<p>•   Judges will select the winner on the basis of effective and attractive webpage.</p>
<p>•   Participants should report on given time.</p>
<h4>Event Themes</h4>
<p>•   Digital India </p>
<p>•   Social Awareness</p>
<p>•   Social Networking</p>
<p>•   Wheelspin Website/other event website</p>
<p>•   Demonetization</p>
<p>•   7 Wonders of the World</p>
<p>•   Science & Technology</p>
<p>•   UX Design</p>
<br></br>
		<h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
							 <br></br>
<h4>Event Coordinators</h4>
<p>Prof A. V. Kadu</p>

<h4>Student Coordinators</h4>
<p>Shubham Mandade 7709318883</p>
<p>Akshay Chandankhede 8007447091</p>

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

export default EventWebatrix
