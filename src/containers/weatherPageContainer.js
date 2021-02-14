import React, { Component } from 'react';

import WeatherComponent from '../components/weatherPageComponent';
import getWeatherDataAPI from '../API/getWeatherDataAPI';
import { DEFAULT_CITY, LONDON, CALGARY,TORONTO } from '../constants';


export default class WeatherContainer extends Component {

    /*   *
        *  Initializer
        *------------------------------------------------------------
    */
    constructor(props) {
        super(props);
        this.state={
            currentWeather:null,
            dailyWeather:[],
            defaultCity:LONDON,
        }
        
        this.onFailureCallBack=this.onFailureCallBack.bind(this);
        this.onSuccessCallBack=this.onSuccessCallBack.bind(this);
        this.onAPICallProcess = this.onAPICallProcess.bind(this);
        this.onCityClick = this.onCityClick.bind(this);
        this.onCityTrigger = this.onCityTrigger.bind(this);
    }

    /* *
        *  Utility
        *------------------------------------------------------------
    */
    //Nothing

    /* *
        *  Component Life-cycle Management
        *------------------------------------------------------------
    */
    componentDidMount = () => {
        const { onCityTrigger } = this;
        const { defaultCity } = this.state;
        if (localStorage.getItem(DEFAULT_CITY) === undefined || localStorage.getItem(DEFAULT_CITY) === null){
            let defaultCity = LONDON;
            localStorage.setItem(DEFAULT_CITY,defaultCity);
            onCityTrigger(defaultCity);
        }
        else {
            onCityTrigger(defaultCity)
        }
    }

    /* *
        *  API callback functions
        *------------------------------------------------------------
    */
    onAPICallProcess = (latitude,longitude) => {
        const { onSuccessCallBack,onFailureCallBack } = this;  
        getWeatherDataAPI(latitude,longitude,onSuccessCallBack,onFailureCallBack)
    }

    /* *
        *  Event handling functions
        *------------------------------------------------------------
    */
    onCityTrigger = (defaultCity) => {
        const { onAPICallProcess } = this;
        if(defaultCity === LONDON) {
            let latitude = "42.983612";
            let longitude = "-81.249725";
            onAPICallProcess(latitude,longitude);
        }
        else if (defaultCity === CALGARY){
            let latitude = "51.049999";
            let longitude = "-114.066666";
            onAPICallProcess(latitude,longitude);
        }
        else if (defaultCity === TORONTO) {
            let latitude = "43.651070";
            let longitude = "-79.347015";
            onAPICallProcess(latitude,longitude);
        }
        else {
            console.error("ERROR OCCURRED :",defaultCity);
        }
        this.setState({
            defaultCity:defaultCity,
        })
    }
    
    onCityClick = (e,defaultCity) => {
        const { onCityTrigger } = this;
        e.preventDefault();
        localStorage.setItem(DEFAULT_CITY,defaultCity);
        onCityTrigger(defaultCity);
    }

    getDailyWeatherArray = (weatherArr) => {
       let dailyWeatherArr = weatherArr;
       dailyWeatherArr.shift();
       return dailyWeatherArr
    }

    //*********************** API Response handler********************************//
    onSuccessCallBack = (response) => {
        const { getDailyWeatherArray } = this;
        if(response !== null && response !== undefined){
            let weather_forecast_data = getDailyWeatherArray(response.data.daily);
            let weather_current_data = response.data.current;
            this.setState({
                dailyWeather:weather_forecast_data,
                currentWeather:weather_current_data,
            })
        }
    }

    onFailureCallBack = (response) => {
        console.error(response);
    }
    //*********************** API Response handler********************************//

    /* *
        *  Main render function
        *------------------------------------------------------------
    */
    render(){
        const { onCityClick } = this;
        const { currentWeather,dailyWeather,defaultCity } = this.state;
        return(
            <WeatherComponent 
                onCityClick={onCityClick} 
                currentWeather={currentWeather}
                dailyWeather={dailyWeather}
                defaultCity={defaultCity}
            />
        );
    }
}