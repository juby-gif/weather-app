import { TOKEN } from '../constants';


const axios = require('axios').default;
const getWeatherDataAPI = async (latitude,longitude,onSuccessCallBack,onFailureCallBack) => {
    try {
      const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=' + 
                                        latitude + '&lon=' + longitude + 
                                        '&exclude=minutely,hourly,alerts&mode=json&units=metric&appid=' 
                                        + TOKEN
                                      );
      onSuccessCallBack(response)
    } catch (error) {
      console.error(error);
      onFailureCallBack(error)
    }
}

export default getWeatherDataAPI;