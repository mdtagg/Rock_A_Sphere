import axios from "axios";
class WeatherDataService {
    async getWeatherData(lat, long, timezone) {
        const response = await axios.get('https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,windspeed_10m&daily=weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,snowfall_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7', {
            params: {
                latitude: lat,
                longitude: long,
                timezone
            }
        });
        return response.data;
    }
}
export default new WeatherDataService();
// https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,windspeed_10m&models=best_match&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7
