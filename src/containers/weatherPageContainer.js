import React, { Component } from 'react';

import WeatherComponent from '../components/weatherPageComponent';
import getWeatherDataAPI from '../API/getWeatherDataAPI';

export default class WeatherContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
        this.onFailureCallBack=this.onFailureCallBack.bind(this);
        this.onSuccessCallBack=this.onSuccessCallBack.bind(this);
    }
    componentDidMount(){
        const { onSuccessCallBack,onFailureCallBack } = this;
        let latitude = "43.651070";
        let longitude = "-79.347015"
        getWeatherDataAPI(latitude,longitude,onSuccessCallBack,onFailureCallBack)
    }

    onSuccessCallBack = (response) => {
        console.log(response)
    }

    onFailureCallBack = (response) => {
        console.log(response)
    }

    render(){
        return(
            <WeatherComponent />
        );
    }
}