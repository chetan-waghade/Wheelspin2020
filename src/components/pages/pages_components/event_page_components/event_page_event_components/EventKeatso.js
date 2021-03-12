import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import keatso from '../event_page_assets/images/keatso.jpg'
import {st} from '../../../../../firebase/fire'

export class EventKeatso extends Component{
			componentDidMount(){
        let downloadTag = document.getElementById('downloadAnchorTag');
        let ref = st.ref('rulebooks/KEATSO.pdf')
        ref.getDownloadURL().then(function(url){
            
            downloadTag.href = url;  
            downloadTag.setAttribute("target","_blank")
            console.log(url)
            })
    }
	render(){
		return(

			<div>
			<Image src={keatso} alt="Keatso" style={{height:'40vh',width:'100vw',border:'1px solid white'}} fluid/>


			<h4>Introduction</h4>
<p> There are some who think that writing skills are something you are born with could be true to some extent however what is also true is 
that writing skills can always be cultivated all you need is a mind that is brimming with ideas and an innate desire to express yourself in the form of words. 
Beyond that, you just need to let your thoughts take over & let them flow freely. 
Easier said than done, it only make sense to follow a certain pattern to make the article & interesting read. </p>

<h4>Problem Statement</h4>
<p> In article writing competition you should choose any one topic as given below. It should be at least 300 words.
 At the time of event your article should be ready to be handed over to in changes.</p>

<h4>Topics</h4>
<p>1)	Books are better than the movies</p>
<p>2)	Indian Constitution</p>
<p>3)	Social Media Effect On Young Generation</p>
<p>4)	Stress Impact on Health</p>
<p>5)	Corona Virus</p>
<p>6)	Women Empowerment</p>
<p>7)	Female Foeticide</p>
<p>8)	Evils of Corruption</p>
<p>6)	PUBG Addiction</p>

<br></br>
        <h4><a style={downloadButtonStyle} href={this.downloadUrl} id="downloadAnchorTag">
                                 ---- Download Rule Book ----
                             </a></h4>
                             <br></br>
<h4>Event Coordinators</h4>
<p>Prof. G. D. Ghode</p>

<h4>Student Coordinators</h4>
 <p>Swarup Panchbhai 8788443386</p>
 <p>Kailas Chawale 9673650447</p>

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
export default EventKeatso
