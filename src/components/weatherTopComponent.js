import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { ICONS } from '../constants';


export default function WeatherTopComponent(props){
    const { currentWeather } = props;
    return(
        <div className="top-container">
            <div className="top-inside-container">
                <h3 className="mb-4">Today</h3>
                <div className="top-inside-main-weather-container">
                    {ICONS.map((icon)=>(
                        icon.label === currentWeather?.weather[0].description && ( 
                            <FontAwesomeIcon style={{fontSize:"6.5rem",color:"#bddde3"}} icon={icon.icon} />
                        )
                    ))}
                    <div>
                        <h3 style={{fontFamily:"Impact, fantasy",fontSize:"3.7rem",color:"#000"}}>
                            {currentWeather?Math.round(currentWeather.temp):0}<sup>o</sup>
                        </h3>
                        <h3>{currentWeather?currentWeather.weather[0].description:"clear"}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}