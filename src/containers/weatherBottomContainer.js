import React, { Component } from 'react';

import WeatherBottomComponent from '../components/weatherBottomComponent';
import getWeatherDataAPI from '../API/getWeatherDataAPI';

export default class WeatherBottomContainer extends Component {
    constructor(props) {
        super(props);
        this.state= {

        }
        this.onFailureCallBack=this.onFailureCallBack.bind(this);
        this.onSuccessCallBack=this.onSuccessCallBack.bind(this);
    }
    componentDidMount(){
        const { onSuccessCallBack,onFailureCallBack } = this;
        let city = "London,uk";
        getWeatherDataAPI(city,onSuccessCallBack,onFailureCallBack)
    }

    onSuccessCallBack = (response) => {
        console.log(response)
    }

    onFailureCallBack = (response) => {
        console.log(response)
    }

    render(){
        return(
            <WeatherBottomComponent />
        );
    }
}