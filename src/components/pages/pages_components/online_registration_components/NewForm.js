import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import {db} from '../../../../firebase/fire.js'
import './NewForm.css'

// array section    
// start===>

// globle variables 
    // EVENTS LIST
    const events = [
        
        // event_name, max team member, min team member
        ['AQUA SKYLARK',2,2],
        ['BRAIN VITA',2,2],
        ['CIRCEO',2,2],
        ['LOGIC BOOSTER',2,2],
        ['TREASUREHUNT',2,2],
        ['NIRMAAN',4,1],
        ['ROBO SOCCER',4,2],
        ['ROBO RACE',4,2],
        ['IGNITE',4,1],
        ['WEBATRIX',1,1],
        ['CODE CHEF',1,1],
        ['LAN WARRIOR',1,1],
        ['PUBG',4,1],
        ['CSGO',5,1],
        ['DRAFTRIX', 1],
        ['KEATSO',1],
        ['PICASSO',1],
        ['CAMPUS DRIVE',1]

    ]

     // DEPARTMENT LIST
    const departmentList = [
        'COMPUTER & IT',
        'CIVIL',
        'BASIC SCIENCE',
        'ELETRICAL',
        'EXTC',
        'MBA',
        'MECHANICAL'
    ]



// end===>

export class NewForm extends Component {

    state = {
        // degree or diploma
    field : '',
    // registration type event / prezentaire
    reg_type : '',
    // selection event name  / department name
    selection : '',
    // team members if so
    team_member : 'none',
    // first name and last name
    firstName : '',
    lastName : '',
    // team members name if so
    second_tm_firstName : '',
    second_tm_lastName : '',
    third_tm_firstName : '',
    third_tm_lastName : '',
    fourth_tm_firstName : '',
    fourth_tm_lastName : '',
    fifth_tm_firstName:'',
    fifth_tm_lastName:'',
    // collegname
    college : '',
    // city
    city : '',
    // phone
    phone : '',
    // email
    email : ''
    }
     // user activity logic
    // on selecting event / prezentaire show respective list
    onSelectRegisterationType = (e) => {
        this.setState({reg_type:e.target.value})
        
        let value = e.target.value;

        // get container where values are to be appended
        let container = document.getElementById('containerForDynamicAppendingofEventAndDepartment');

        // remove all the existing child
        while(container.hasChildNodes()){
            container.remove(container.lastChild)
        }

        // 

        // conditional appending of options
        if(value === 'events'){

            // set state value for this option
            this.setState({reg_type:value})

            // set label to EVent
            let title = document.getElementById('titleForSelection');
            title.innerHTML = "Select Event"

            // FIRST OPTION AS PLACEHOLDER
            let placeHolderAsOption = new Option();
            placeHolderAsOption.text = "--Select Event--";
            container.appendChild(placeHolderAsOption);



            // loop through events and append them
            // start
            for(let event = 0;event<events.length; event++ ){
                let option = new Option(events[event][0],events[event][0])
                container.appendChild(option)
            }
            // end
        

            // append select team member option

            let containerPre = document.getElementById('containerForDynamicAppendingTeamMembers')
                //removing all the child elements
                while(containerPre.hasChildNodes()){
                    containerPre.remove(containerPre.lastChild)
                } 

                let selectTeamMemberOption = new Option('--Select Team Member--')
                containerPre.appendChild(selectTeamMemberOption)

            // get all the input fields
            let smfn = document.getElementById('smfn');
            let smln = document.getElementById('smln');
            let tmfn = document.getElementById('tmfn');
            let tmln = document.getElementById('tmln');
            let fmfn = document.getElementById('fmfn');
            let fmln = document.getElementById('fmln');
            let fimfn = document.getElementById('fimfn');
            let fimln = document.getElementById('fimln');

            // set all the input fields to disabled
                smfn.disabled = true;
                smln.disabled = true;
                tmfn.disabled = true;
                tmln.disabled = true;
                fmfn.disabled = true;
                fmln.disabled = true;
                fimfn.disabled = true;
                fimln.disabled = true;
        }
        else if(value ==='prezentaire'){
            // set state value for this option
            this.setState({reg_type:value})
            // set label to Department
            let title = document.getElementById('titleForSelection');
            title.innerHTML = "Select Department"

            // FIRST OPTION AS PLACEHOLDER
            let placeHolderAsOption = new Option();
            placeHolderAsOption.text = "--Select Department--";
            container.appendChild(placeHolderAsOption);

            // loop through department and append them
            // start
            for(let department = 0;department<departmentList.length; department++ ){
                let option = new Option(departmentList[department],departmentList[department])
                container.appendChild(option)
            }
            // end

            // enable team member default
             // get the container where team member count will be appended
                let containerPre = document.getElementById('containerForDynamicAppendingTeamMembers')
                //removing all the child elements
                while(containerPre.hasChildNodes()){
                    containerPre.remove(containerPre.lastChild)
                } 

                let selectTeamMemberOption = new Option('--Select Team Member--')
                containerPre.appendChild(selectTeamMemberOption)

                for(let i=2;i<=3;i++){
                    let option = new Option(String(i), String(i));
                    containerPre.appendChild(option)
                }



            
        }
    }


    // end of onSelectRegistrationType

    // start

    onSelectEventTeamMember= (e) =>{

        this.setState({selection:e.target.value})
        

        // get the container where team member count will be appended
        let container = document.getElementById('containerForDynamicAppendingTeamMembers')
        
        
        //removing all the child elements
        while(container.hasChildNodes()){
            container.remove(container.lastChild)
        } 

        // conditional appending of team member count
        for(let event=0;event<events.length;event++){
            if(e.target.value === events[event][0]){
                // set state value for this option
            this.setState({selection:e.target.value})
                // appending none option
                let optionNone = new Option('none','none')
                container.appendChild(optionNone)
                for(let count=events[event][2];count<=events[event][1];count++){
                    let option = new Option(String(count),String(count));
                    container.appendChild(option)
                }
            }
        }


        // team member same for prezentaire
        for(let department=0; department<departmentList.length;department++){
            if(e.target.value === departmentList[department]){
                let defaultOption = new Option('--Select Team Member--');
                let noneOption = new Option('none','none');
                container.appendChild(defaultOption)
                container.appendChild(noneOption)
                this.setState({selection:e.target.value})
                for(let i=2;i<=3;i++){
                    let option = new Option(String(i), String(i));
                    container.appendChild(option)
                }
            }
        }

    }

    // end of onSelectEvent



    // onSelectTeamMemberShowInputFields
    // start

    onSelectTeamMemberShowInputFields= (e) =>{

        this.setState({team_member:e.target.value})

        
        let teamMemberCount = e.target.value;
        
        // get all the input fields
        let smfn = document.getElementById('smfn');
        let smln = document.getElementById('smln');
        let tmfn = document.getElementById('tmfn');
        let tmln = document.getElementById('tmln');
        let fmfn = document.getElementById('fmfn');
        let fmln = document.getElementById('fmln');
        let fimfn = document.getElementById('fimfn');
        let fimln = document.getElementById('fimln');

        // set all the input fields to disabled
            smfn.disabled = true;
            smln.disabled = true;
            tmfn.disabled = true;
            tmln.disabled = true;
            fmfn.disabled = true;
            fmln.disabled = true;
            fimfn.disabled = true;
            fimln.disabled = true;
        
        
        

        switch(teamMemberCount){
            case '2': 
            smfn.disabled = false;
            smln.disabled = false;
            break;
            case '3': 
            smfn.disabled = false;
            smln.disabled = false;
            tmfn.disabled = false;
            tmln.disabled = false;
            
            break;
            case '4': 
            smfn.disabled = false;
            smln.disabled = false;
            tmfn.disabled = false;
            tmln.disabled = false;
            fmfn.disabled = false;
            fmln.disabled = false;
            break;
            case '5': 
            smfn.disabled = false;
            smln.disabled = false;
            tmfn.disabled = false;
            tmln.disabled = false;
            fmfn.disabled = false;
            fmln.disabled = false;
            fimfn.disabled = false;
            fimln.disabled = false;
            break;
            default: break;
        }

        

        
    }


    // end


    onSelectField = (e) =>{
        this.setState({field:e.target.value})
    }

    onChangeFirstNameInputField = (e) =>{
        this.setState({firstName:e.target.value})
    }
    onChangeLastNameInputField = (e) =>{
        this.setState({lastName:e.target.value})
    }
    onChangeSMSFirstNameInputField = (e) =>{
        this.setState({second_tm_firstName:e.target.value})
    }
    onChangeSMSLastNameInputField = (e) =>{
        this.setState({second_tm_lastName:e.target.value})
    }
    onChangeTMSFirstNameInputField = (e) =>{
        this.setState({third_tm_firstName:e.target.value})
    }
    onChangeTMSLastNameInputField = (e) =>{
        this.setState({third_tm_lastName :e.target.value})
    }
    onChangeFMSFirstNameInputField = (e) =>{
        this.setState({fourth_tm_firstName:e.target.value})
    }
    onChangeFMSLastNameInputField = (e) =>{
        this.setState({fourth_tm_lastName:e.target.value})
    }
    onChangeFiMSFirsttNameInputField = (e) =>{
        this.setState({fifth_tm_firstName:e.target.value})
    }
    onChangeFiMSLastNameInputField = (e) =>{
        this.setState({fifth_tm_lastName:e.target.value})
    }

    onChangeCollege = (e) => {
        this.setState({college:e.target.value})
    }
    onChangeCity = (e) => {
        this.setState({city:e.target.value})
    }
    onChangePhone = (e) => {
        this.setState({phone:e.target.value})
    }
    onChangeEmail = (e) => {
        this.setState({email:e.target.value})
    }



    // form validation and processing

    onSubmit = (e) => {
        e.preventDefault();
        // ref  
        const {field, reg_type, selection, team_member, firstName, lastName, second_tm_firstName,second_tm_lastName,third_tm_firstName,third_tm_lastName,fourth_tm_firstName,fourth_tm_lastName,fifth_tm_firstName,fifth_tm_lastName,college,city,phone} = this.state;
        

        
        if(field === '' || reg_type === '' || selection === '' || team_member=== '' || firstName === '' || lastName === '' || college=== '' ||city=== '' || phone=== '' ){
            alert("Please Enter Necessary Information");
            
        
        }
        
        else if(team_member ==='2'){
            if(second_tm_firstName === '' || second_tm_lastName === '' ){
                alert("Please Enter Necessary Information")
               
            }
            else{
                let ref = db.collection('registrations').doc(this.state.field).collection(this.state.reg_type).doc(this.state.selection).collection('registeration').doc(this.state.firstName+this.state.lastName);
                ref.set({
                    participant_field : this.state.field,
                    participant_registration_type : this.state.reg_type,
                    participant_selection_type : this.state.selection,
                    participant_team_member: this.state.team_member,
    
                    participant_first_name : this.state.firstName.toUpperCase(),
                    participant_last_name : this.state.lastName.toUpperCase(),
    
                    participant_second_team_member_first_name:
                    this.state.second_tm_firstName.toUpperCase(),
                    participant_second_team_member_last_name:
                    this.state.second_tm_lastName.toUpperCase(),
    
                    participant_college: this.state.college,
                    participant_city : this.state.city,
                    participant_phone : this.state.phone,
                    participant_registration_time : new Date().toUTCString(),
                    participant_email : this.state.email,
                  });
                  alert("Successfully Registered")
            }
        }
        else if(team_member==='3'){
            if(second_tm_firstName === '' || second_tm_lastName === '' || third_tm_firstName === '' || third_tm_lastName=== '' ){
                alert("Please Enter Necessary Information")
              
            }
            else{
                let ref = db.collection('registrations').doc(this.state.field).collection(this.state.reg_type).doc(this.state.selection).collection('registeration').doc(this.state.firstName+this.state.lastName);
                ref.set({
                    participant_field : this.state.field,
                    participant_registration_type : this.state.reg_type,
                    participant_selection_type : this.state.selection,
                    participant_team_member: this.state.team_member,
    
                    participant_first_name : this.state.firstName.toUpperCase(),
                    participant_last_name : this.state.lastName.toUpperCase(),
    
                    participant_second_team_member_first_name:
                    this.state.second_tm_firstName.toUpperCase(),
                    participant_second_team_member_last_name:
                    this.state.second_tm_lastName.toUpperCase(),
    
                    participant_third_team_member_first_name:
                    this.state.third_tm_firstName.toUpperCase(),
                    participant_third_team_member_last_name:
                    this.state.third_tm_lastName.toUpperCase(),
    
                    participant_college: this.state.college,
                    participant_city : this.state.city,
                    participant_phone : this.state.phone,
                    participant_registration_time : new Date().toUTCString(),
                    participant_email : this.state.email,
                  });
                  alert("Successfully Registered")
            }
        }
        else if(team_member==='4'){
            if(second_tm_firstName === '' || second_tm_lastName=== '' || third_tm_firstName=== '' || third_tm_lastName === '' || fourth_tm_firstName === '' || fourth_tm_lastName === '' ){
                alert("Please Enter Necessary Information")
               
            }
            else{
                let ref = db.collection('registrations').doc(this.state.field).collection(this.state.reg_type).doc(this.state.selection).collection('registeration').doc(this.state.firstName+this.state.lastName);
                ref.set({
                    participant_field : this.state.field,
                    participant_registration_type : this.state.reg_type,
                    participant_selection_type : this.state.selection,
                    participant_team_member: this.state.team_member,
    
                    participant_first_name : this.state.firstName.toUpperCase(),
                    participant_last_name : this.state.lastName.toUpperCase(),
    
                    participant_second_team_member_first_name:
                    this.state.second_tm_firstName.toUpperCase(),
                    participant_second_team_member_last_name:
                    this.state.second_tm_lastName.toUpperCase(),
    
                    participant_third_team_member_first_name:
                    this.state.third_tm_firstName.toUpperCase(),
                    participant_third_team_member_last_name:
                    this.state.third_tm_lastName.toUpperCase(),
    
                    participant_fourth_team_member_first_name:
                    this.state.fourth_tm_firstName.toUpperCase(),
                    participant_fourth_team_member_last_name:
                    this.state.fourth_tm_lastName.toUpperCase(),
    
                    participant_college: this.state.college,
                    participant_city : this.state.city,
                    participant_phone : this.state.phone,
                    participant_registration_time : new Date().toUTCString(),
                    participant_email : this.state.email,
                  });
                  alert("Successfully Registered")
            }
        }
        else if(team_member==='5'){
            if(second_tm_firstName === '' || second_tm_lastName=== '' || third_tm_firstName=== '' || third_tm_lastName === '' || fourth_tm_firstName === '' || fourth_tm_lastName === '' || fifth_tm_firstName === '' || fifth_tm_lastName === '' ){
                alert(" Please Enter Necessary Information")
               
            }
            else{
                let ref = db.collection('registrations').doc(this.state.field).collection(this.state.reg_type).doc(this.state.selection).collection('registeration').doc(this.state.firstName+this.state.lastName);
                ref.set({
                    participant_field : this.state.field,
                    participant_registration_type : this.state.reg_type,
                    participant_selection_type : this.state.selection,
                    participant_team_member: this.state.team_member,
    
                    participant_first_name : this.state.firstName.toUpperCase(),
                    participant_last_name : this.state.lastName.toUpperCase(),
    
                    participant_second_team_member_first_name:
                    this.state.second_tm_firstName.toUpperCase(),
                    participant_second_team_member_last_name:
                    this.state.second_tm_lastName.toUpperCase(),
    
                    participant_third_team_member_first_name:
                    this.state.third_tm_firstName.toUpperCase(),
                    participant_third_team_member_last_name:
                    this.state.third_tm_lastName.toUpperCase(),
    
                    participant_fourth_team_member_first_name:
                    this.state.fourth_tm_firstName.toUpperCase(),
                    participant_fourth_team_member_last_name:
                    this.state.fourth_tm_lastName.toUpperCase(),
                    
                    participant_fifth_team_member_first_name:
                    this.state.fifth_tm_firstName.toUpperCase(),
                    participant_fifth_team_member_last_name:
                    this.state.fifth_tm_lastName.toUpperCase(),
    
                    participant_college: this.state.college,
                    participant_city : this.state.city,
                    participant_phone : this.state.phone,
                    participant_registration_time : new Date().toUTCString(),
                    participant_email : this.state.email,
                  });
                  alert("Successfully Registered")
            }
        }
        else if(phone.length !== 10){
            alert("Not Valid Phone Number / Type without (+91)")
        }
        else{
            let ref = db.collection('registrations').doc(this.state.field).collection(this.state.reg_type).doc(this.state.selection).collection('registeration').doc(this.state.firstName+this.state.lastName);
            ref.set({
                participant_field : this.state.field,
                participant_registration_type : this.state.reg_type,
                participant_selection_type : this.state.selection,
                participant_team_member: this.state.team_member,

                participant_first_name : this.state.firstName.toUpperCase(),
                participant_last_name : this.state.lastName.toUpperCase(),

                participant_college: this.state.college,
                participant_city : this.state.city,
                participant_phone : this.state.phone,
                participant_registration_time : new Date().toUTCString(),
                participant_email : this.state.email
              });
            alert("Successfully Registered")
        }



    }

    render() {
        return (
              
            <Container className="mt-2 mb-2">

                <Row>

                    <Col lg={{span:6, offset:3}} xs={12} md={12} className="formBox pt-1 pl-4 pr-4">

                        <h5 className="text-center">Registration</h5>
                    
                    <Form onSubmit={this.onSubmit}>
                        <Form.Row>
                            {/* Degree or Diploma CheckBox */}
                            <Form.Group as={Col} lg={12} controlId="formGridEmail">
                            <Form.Label >Select Field</Form.Label>
                            <Row className="p-2">
                                <Col><Form.Check type="radio" name="field" label="Diploma" value="diploma" 
                                onChange = {this.onSelectField}
                                className="fCheckBox"/></Col>
                                <Col><Form.Check type="radio" name="field" label="Degree" value="degree"
                                onChange = {this.onSelectField}  className="fCheckBox" /></Col>
                            </Row>
                            </Form.Group>


                            {/* Event or Prezentaire CheckBox */}
                            <Form.Group as={Col} lg={12} controlId="formGridEmail">
                            <Form.Label >Select Registration Type</Form.Label>
                            <Row className="p-2">
                                <Col><Form.Check type="radio" name="reg_type" label="Event" value={"events"} className="fCheckBox"
                                onChange={this.onSelectRegisterationType}
                                /></Col>
                                <Col><Form.Check type="radio" name="reg_type" label="Prezentaire" value="prezentaire"  className="fCheckBox" 
                                onChange={this.onSelectRegisterationType}
                                /></Col>
                            </Row>
                            </Form.Group>

                            {/* events or departments */}
                            <Form.Group as={Col} lg={6}  xs={6} controlId="formGridState">
                            <Form.Label id="titleForSelection">Select</Form.Label>
                            <Form.Control as="select" className="f " onChange={this.onSelectEventTeamMember} 
                            
                            id="containerForDynamicAppendingofEventAndDepartment">
                                {/* events / departments to be place dynamically on selection */}
                                {/* <option>select event</option>
                                <option>...</option> */}
                            </Form.Control>
                            </Form.Group>
                            
                            {/* team member */}
                            <Form.Group as={Col} lg={6}  xs={6} controlId="formGridState">
                            <Form.Label>Team Member</Form.Label>
                            <Form.Control as="select" className="f " id="containerForDynamicAppendingTeamMembers"
                            onChange = {this.onSelectTeamMemberShowInputFields}
                            // onClick={this.onSubmit}
                            >
                                {/* team member count will be appended dynamically */}
                                {/* <option>select event</option>
                                <option>...</option> */}
                            </Form.Control>
                            </Form.Group>
                            
                            
                                {/* start */}
                            
                                 {/* First Name Last Name */}
                                 <Form.Group as={Col} lg={6} xs={6}  controlId="formGridEmail">
                                 <Form.Label>First Member</Form.Label>
                                <Form.Control type="text" placeholder="First Name" name = "firstName" className="f" onChange={this.onChangeFirstNameInputField} onKeyPress="return (event.charCode > 64 && event.charCode < 91) || ( event.charCode >96 && event.charCode < 123)" />
                                 <Form.Control type="text" placeholder="Last Name" name = "lastName" className="f mt-1" onChange={this.onChangeLastNameInputField} />
                                 </Form.Group>
    
                                 
    
    
    
    
                                 {/* second member First Name Last Name */}
                                
                                 <Form.Group as={Col} lg={6} xs={6}  controlId="formGridEmail">
                                <Form.Label>Second Member</Form.Label>
                                 <Form.Control type="text" placeholder="First Name" className="f" id="smfn"
                                 onChange={this.onChangeSMSFirstNameInputField} disabled />
                                 <Form.Control type="text" placeholder="Last Name" className="f mt-1" 
                                 onChange={this.onChangeSMSLastNameInputField}
                                 id="smln" disabled />
                                 </Form.Group>
    
                                
    
                                  {/* end */}
    
    
    
                                 {/* third member First Name Last Name */}
                                 <Form.Group as={Col} lg={6} xs={6}  controlId="formGridEmail">
                                 <Form.Label>Third Member</Form.Label>
                                 <Form.Control type="text" placeholder="First Name" className="f " id="tmfn"
                                 onChange={this.onChangeTMSFirstNameInputField}
                                  disabled />
                                 <Form.Control type="text" placeholder="Last Name" className="f mt-1" 
                                 onChange={this.onChangeTMSLastNameInputField}id="tmln" disabled />
                                 </Form.Group>
       
                                 {/* end */}
    
    
    
    
                                 {/* fourth member First Name Last Name */}
                                 <Form.Group as={Col} lg={6} xs={6}  controlId="formGridEmail">
                                 <Form.Label>Fourth Member</Form.Label>
                                <Form.Control type="text" placeholder="First Name" className="f" id="fmfn"
                                onChange={this.onChangeFMSFirstNameInputField} disabled />
                                <Form.Control type="text" placeholder="Last Name" className="f mt-1" 
                                onChange={this.onChangeFMSLastNameInputField} id="fmln" disabled />
                                 </Form.Group>
                                
                                 {/* fifth member First Name Last Name */}
                                 <Form.Group as={Col} lg={12} xs={12}  controlId="formGridEmail">
                                 <Form.Label>Fifth Member</Form.Label>
                                <Form.Control type="text" placeholder="First Name" className="f" id="fimfn"
                                onChange={this.onChangeFiMSFirsttNameInputField} disabled />
                                <Form.Control type="text" placeholder="Last Name" className="f mt-1" 
                                onChange={this.onChangeFiMSLastNameInputField} id="fimln" disabled />
                                 </Form.Group>

                              




                            

                            
 
                            {/* College */}
                            <Form.Group as={Col} lg={12} controlId="formGridEmail">
                            <Form.Label>College</Form.Label>
                            <Form.Control type="text" placeholder="College" 
                            onChange={this.onChangeCollege}
                            className="f " />
                            </Form.Group>

                            {/* City */}
                            
                            {/* City*/}
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control type="text" placeholder="city" 
                            onChange={this.onChangeCity}className="f "/>
                            </Form.Group>
                            
                             {/* Phone*/}
                             <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="phone" 
                            onChange={this.onChangePhone}
                            className="f "/>
                            </Form.Group>

                             {/* Email*/}
                             <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="email" 
                            onChange={this.onChangeEmail}
                            className="f " />
                            </Form.Group>

                            
                        </Form.Row>

                         

                        <Form.Row>
                            <Col lg={12} className="text-center">
                                <Button variant="primary" type="submit" className="registerBtn" >Register</Button>
                            </Col>
                        </Form.Row>
                    </Form>



                    </Col>



                </Row>
                    
            </Container>
        )
    }
}

export default NewForm
