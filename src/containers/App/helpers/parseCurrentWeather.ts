import { numObj } from "./parseWeatherData";



function parseCurrentWeather(data:numObj) {
    const dateOptions:Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentTemp = data.temperature
    const currentDate = Intl.DateTimeFormat(undefined, dateOptions).format(data.time * 1000)
    const weatherCode = data.weathercode

    return {currentTemp,currentDate,weatherCode}
}

export { parseCurrentWeather }