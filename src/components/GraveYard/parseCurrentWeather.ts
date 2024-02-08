import { numObj } from "../../containers/App/helpers/parseWeatherData";



function parseCurrentWeather(data:numObj) {
    
    const { temperature,time,weathercode } = data
    return {temperature,time,weathercode}
}

export { parseCurrentWeather }