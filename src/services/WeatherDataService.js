import axios from "axios"

class WeatherDataService {
    async getWeatherData(lat,long,timezone) {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?&daily=weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7',
        {
            params: {
                latitude:lat,
                longitude:long,
                timezone
            }
        })
        return response.data
    }
}

export default new WeatherDataService()