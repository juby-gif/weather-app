import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function WeatherBottomComponent(props){
    return(
        <div className="bottom-container"fluid>
            <div >
                <h3 style={{fontSize:"1.5rem",color:"grey"}}>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div>
            {/* <div >
                <h3>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div>
            <div >
                <h3>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div>
            <div>
                <h3>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div>
            <div >
                <h3>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div>
            <div>
                <h3>Wed</h3>
                <FontAwesomeIcon style={{fontSize:"3rem",color:"#bddde3"}} icon={faSnowflake} />
                <h3>12<sup>o</sup></h3>
            </div> */}
            
        </div>
    );
}