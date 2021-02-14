import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment';

import { ICONS } from '../constants';


export default function WeatherBottomComponent(props){
    const { dailyWeather } = props;
    return(
        <div className="bottom-container"fluid>
            {dailyWeather.map((weatherForecastedForTheDay,index)=>(
                <div key={index} >
                    <h3 style={{fontSize:"1.5rem",color:"grey"}}>
                        {moment.unix(weatherForecastedForTheDay.dt).format('ddd')}
                    </h3>
                    
                    {ICONS.map((icon)=>(icon.label === weatherForecastedForTheDay.weather[0].description && ( 
                        <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={icon.icon} />
                        )
                    ))}

                    <h3>{Math.round(weatherForecastedForTheDay.temp.day)}<sup>o</sup></h3>
                </div>
            ))}
        </div>
    );
}