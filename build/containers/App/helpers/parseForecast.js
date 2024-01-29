function parseForecast(data) {
    const dayOptions = { weekday: 'short', day: 'numeric' };
    const hourOptions = { hour: "numeric" };
    const forecastData = {};
    for (let key in data) {
        forecastData[key] = data[key].slice(7);
    }
    for (let key in forecastData) {
        if (key === 'time') {
            forecastData[key] = forecastData[key].map((date) => {
                return Intl.DateTimeFormat(undefined, dayOptions).format(date * 1000);
            });
        }
        else if (key === 'sunrise' || key === 'sunset') {
            forecastData[key] = forecastData[key].map((date) => {
                return Intl.DateTimeFormat(undefined, hourOptions).format(date * 1000);
            });
        }
    }
    return forecastData;
}
export { parseForecast };
