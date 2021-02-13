import React from 'react';
import { div,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function WeatherTopComponent(props){
    return(
        <div className="top-container">
            <div className="top-inside-container">
                <h3 className="mb-3">Today</h3>
                <div className="top-inside-main-weather-container">
                    <FontAwesomeIcon style={{fontSize:"6rem",color:"#bddde3"}} icon={faCloud} />
                        <div>
                            <h3 style={{fontFamily:"Impact, fantasy",fontSize:"2.8rem",color:"#000"}}>19<sup>o</sup></h3>
                            <h3>Clouds</h3>
                        </div>
                </div>
            </div>
        </div>
    );
}