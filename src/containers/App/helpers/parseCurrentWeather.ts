import { numObj } from "./parseWeatherData";



function parseCurrentWeather(data:numObj) {
    
    const { temperature,time,weathercode } = data
    return {temperature,time,weathercode}
}

export { parseCurrentWeather }