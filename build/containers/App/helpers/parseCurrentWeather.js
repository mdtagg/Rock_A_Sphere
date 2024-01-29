function parseCurrentWeather(data) {
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const currentTemp = data.current_weather.temperature;
    const currentDate = Intl.DateTimeFormat(undefined, dateOptions).format(data.current_weather.time * 1000);
    const weatherCode = data.current_weather.weathercode;
    return { currentTemp, currentDate, weatherCode };
}
export { parseCurrentWeather };
