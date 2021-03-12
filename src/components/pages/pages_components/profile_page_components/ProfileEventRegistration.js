import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
// import {db, auth} from '../../../../firebase/firebase'



export default class ProfileEventRegistration extends Component {    

  
// states
  state = {
    event: {value :''},
    team_member:{value : ''},
    first_member_name:{value : ''},
    second_member_name:{value : ''},
    third_member_name:{value : ''},
    fourth_member_name:{value : ''}
  }; 

  

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
  }

  s

  onChangeForTeamMember = (e) => {
    

    this.setState({team_member:{value:e.target.value}});
    
    // disableMemberNameField(e);
    
  }

  onChangeForEvent = (e) => {
    this.setState({event:{value:e.target.value}});
    
  }


  // on changing the value of team member name field
  onChangeForFirstTeamMember = (e) => {
  
    this.setState({first_member_name:{value:e.target.value}});
  
    
  }

  // on changing the value of team member name field
  onChangeForSecTeamMember = (e) => {
  
    this.setState({second_member_name:{value:e.target.value}});
  
    
  }

  // on changing the value of team member name field
  onChangeForThirdTeamMember = (e) => {
  
    this.setState({third_member_name:{value:e.target.value}});
  
    
  }

  // on changing the value of team member name field
  onChangeForForthTeamMember = (e) => {
  
    this.setState({fourth_member_name:{value:e.target.value}});
  
    
  }


  resetForm = () => {
    this.setState();
  }

  render() {
    const { event, team_member, first_member_name, second_member_name, third_member_name, fourth_member_name} = this.state;
    

    return (

      <Container>
        <Row className="mt-4">
          <Col lg={{span:6, offset:3}} xs={12} className="p-4 border">
          <h3 className="form-signin-heading text-center" style={{color:'white'}}>Event Registration</h3>
          <div className="container">
        <form className="form-signin" onSubmit={this.onSubmit}>

      {/* Select Registration Type EVENTS / PREZENTAIRE / WORKSHOP */}

      
          

        {/* select event */}
          <div className="mt-4">

          <select
            className="form-control formFields"
            placeholder="Team Member"
            id="event_list"
            onChange={this.onChangeForEvent}
            value={event.value || ' '}
            > 

                

                {/* Computer events */}
                <option value="Webatrix" className="computer" > Webatrix </option>
                <option value="Code_Chef" className="computer" > Code Chef </option>
                <option value="Treasure_Hunt" className="computer" > Treasure Hunt </option>
                <option value="Lan Warrior"  className="computer" > Webatrix </option> 
                <option value=" PUBG " className="computer" >PUBG</option> 

                {/* mechanical events */}
                <option value="Aqua_Skylark" className="mechanical" > Aqua Skylark </option> 
                <option value="Robo_Soccer" className="mechanical" > Robo Soccer </option> 
                <option value="Robo_Race" className="mechanical" > Robo Race </option>  
                <option value="Ignite" className="mechanical" > Ignite </option> 
                <option value="Brainvita" className="mechanical" > Brain Vita </option> 

                {/* Civil */}
                <option value="Nirmaan" className="civil" > Nirmaan </option> 
                <option value="Draftrix" className="civil" > Draftrix </option> 


                {/* Electronics */}
                <option value="Logic_Booster" className="extc" > Logic Booster </option> 
                <option value="Circeo" className="extc"> Circeo </option> 

                {/* Electrical */}
                <option value="Campus_Drive" className="electrical"> Campus Drive </option> 
                <option value="Keatso" className="electrical"> Keatso </option> 

                {/* MBA */}
                <option value="Picasso" className="mba" > MBA </option> 
                    
                    
                
            </select>


            {/* <input
              type="text"
              name="email"
              className="form-control formFields"
              placeholder="Email address"
              value={email.value}
              onChange={this.onChange}
              autoFocus
            />
            <span className="help-block">{email.message}</span> */}
          </div>

          
          {/* team member */}

          <div className="mt-4">

            <select
            className="form-control formFields"
            placeholder="Team Member"
            id="team_member"
            onChange={this.onChangeForTeamMember}
            value={team_member.value || ' '}
            > 

                <option value="0" selected>None</option> 
                <option value="2" selected>2</option>  
                <option value="3" selected>3</option>  
                <option value="4" selected>4</option>     
                
            </select>


            {/* <input
              type="password"
              name="password"
              className="form-control formFields"
              placeholder="Password"
              value={password.value}
              onChange={this.onChange}
            /> */}
            
            
          </div>

          <Row className="pb-3">


            {/* First Member */}
            <Col lg={6} xs={12} className="mt-4">
            
            <div > 
            <input
              type="text"
              name="firstMemberName"
              className="form-control formFields"
              placeholder="First Member Name"
              onChange={this.onChangeForFirstTeamMember}
              value={first_member_name.value || ''}
              id="firstMemberNameField"
              autoFocus
            />
          </div>
            
            </Col>


            {/* Lsecond Member */}
            <Col lg={6} xs={12} className="mt-4">
            
            <div >
            <input
              type="text"
              name="secondMemberName"
              className="form-control formFields"
              placeholder="Second Member Name"
              onChange={this.onChangeForSecTeamMember}
              value={second_member_name.value  || ''}
              id="secondMemberNameField"
              autoFocus
            />
            
          </div>
            
            </Col>

            {/* third Member */}
            <Col lg={6} xs={12} className="mt-4">
            
            <div>
            <input
              type="text"
              name="thirdMemberName"
              className="form-control formFields"
              placeholder="Third Member Name"
              onChange={this.onChangeForThirdTeamMember}
              value={third_member_name.value  || ''}
              id="thirdMemberNameField"
              autoFocus
            />
            
          </div>
            
            </Col>

            {/* forth Member */}
            <Col lg={6} xs={12} className="mt-4">
            
            <div>
            <input
              type="text"
              name="fourthMemberName"
              className="form-control formFields"
              placeholder="Fourth Member Name"
              onChange={this.onChangeForForthTeamMember}
              value={fourth_member_name.value  || ''}
              id="fourthMemberNameField"
              autoFocus
            />
            
          </div>
            
            </Col>
          </Row>
          


          <button
            className="btn btn-lg btn-primary btn-block registerBtn"
            type="submit"
          >
            Register
          </button>
          
        </form>
      </div>

      
            
          </Col>
          
        </Row>
      </Container>
      
    );
  }
};

// function to disable input fields

// function disableMemberNameField(e){

//     // get team member count
//     let teamMemberCount = document.querySelector('#team_member').nodeValue;

//     // get all other input field
//     let firstMemberField = document.getElementById("#firstMemberNameField");
//     let secondMemberField = document.getElementById("#secondMemberNameField");
//     let thirdMemberField = document.getElementById("#thirdMemberNameField");
//     let fourthMemberField = document.getElementById("#fourMemberNameField");

//     // if count then disabled respective input field
//     switch(teamMemberCount){
//         case 0:
//             document.getElementById("#firstMemberNameField");
//             break;
//         case 2:
//             thirdMemberField.setAttribute("disabled");
//             fourthMemberField.setAttribute("disabled");
//             break;
//         case 3:
//             fourthMemberField.setAttribute("disabled");
//             break;
//         default:
//             break;

//     };
// }




