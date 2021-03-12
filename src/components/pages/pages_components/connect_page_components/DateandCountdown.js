import React, { Component } from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row'; 
import Col  from 'react-bootstrap/Col'
import { Countdown } from './Countdown.js';  
import './DateandCountdown.css';

export class DateandCountdown extends Component {

    render() {
        const currentDate = new Date("Feb 25, 2020 00:00:00").getTime();
        // const year = (currentDate.getMonth() === 11 && currentDate.getDate() > 23) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
        return (

            <Container className="wsHomeDateCountdown">
                <Row>                
                    <Col lg={{span:2, offset:2}} auto className="text-center">
                    <h6 class="border-left border-right p-2">25th Feb</h6>
                    </Col>                 
                    <Col lg={{span:3, offset:3}}auto >
                        <h6 class="border-left border-right p-2 text-center">

                            <Countdown date={currentDate} />

                        </h6>
                    </Col>                   
                </Row>
            </Container>


            
                
            
        )
    }
}


export default DateandCountdown
