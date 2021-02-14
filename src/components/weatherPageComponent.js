import React from 'react';
import { Card,Col,Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import WeatherTopComponent from '../components/weatherTopComponent';
import WeatherBottomComponent from '../components/weatherBottomComponent';
import { LONDON,CALGARY,TORONTO } from '../constants';
import '../styles.less';

export default function WeatherComponent(props){
    const { onCityClick,
            currentWeather, 
            dailyWeather,
            defaultCity,
         } = props;
    return(
        <Container className="main-container" fluid>
            <Container className="text-container">

                {/* To handle active state */}

                {defaultCity === LONDON? (
                    <Link to="/" style={{color:"#0b4dad"}} onClick={(e) => onCityClick(e,LONDON)}>
                        <h1>london</h1>
                    </Link>):
                    (<Link to="/" style={{color:"#000"}} onClick={(e) => onCityClick(e,LONDON)}>
                        <h1>london</h1>
                    </Link>)
                }

                {defaultCity === CALGARY? (
                    <Link to="/" style={{color:"#0b4dad"}} onClick={(e) => onCityClick(e,LONDON)}>
                        <h1>calgary</h1>
                    </Link>):
                    (<Link to="/" style={{color:"#000"}} onClick={(e) => onCityClick(e,CALGARY)}>
                        <h1>calgary</h1>
                    </Link>)
                }

                {defaultCity === TORONTO? (
                    <Link to="/" style={{color:"#0b4dad"}} onClick={(e) => onCityClick(e,TORONTO)}>
                        <h1>toronto</h1>
                    </Link>):
                    (<Link to="/" style={{color:"#000"}} onClick={(e) => onCityClick(e,TORONTO)}>
                        <h1>toronto</h1>
                    </Link>)
                }
            {/* To handle active state */}

            </Container>
            <Col></Col>
            <Col>
                <Card className="mt-4 card">
                    <WeatherTopComponent currentWeather={currentWeather}/>
                    <WeatherBottomComponent dailyWeather={dailyWeather} />
                </Card>
            </Col>
            <Col></Col>
        </Container>
    );
}