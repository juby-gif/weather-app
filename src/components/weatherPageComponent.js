import React from 'react';
import { Card,Col,Container } from 'react-bootstrap';

import WeatherTopComponent from './weatherTopComponent';
import WeatherBottomComponent from './weatherBottomComponent';
import "../App.css"

export default function WeatherComponent(props){
    return(
        <Container className="main-container" fluid>
            <Container className="text-container">
                <h1>london</h1>
                <h1>calgary</h1>
                <h1>toronto</h1>

            </Container>
            <Col></Col>
            <Col>
                <Card className="mt-4 card">
                    <WeatherTopComponent />
                    <WeatherBottomComponent />
                </Card>
            </Col>
            <Col></Col>
        </Container>
    );
}