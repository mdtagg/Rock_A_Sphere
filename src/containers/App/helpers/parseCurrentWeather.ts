import { numObj } from "./parseWeatherData";



function parseCurrentWeather(data:numObj) {
    
    const { currentTemp,currentDate,weatherCode } = data
    return {currentTemp,currentDate,weatherCode}
}

export { parseCurrentWeather }