import Dashboard from "./Dashboard"
import InfoDisplay from "./InfoDisplay"
import axios from "axios"

const App = () => {

    navigator.geolocation.getCurrentPosition(positionSuccess,positionFail)
    
    function positionSuccess({ coords }) {
        getWeatherData(
            coords.latitude,
            coords.longitude,
            Intl.DateTimeFormat().resolvedOptions().timeZone
        )
    }

    function positionFail() {
        alert(
          'Error getting location, please allow us to use your location and refresh the page'
          )
      }

    const getWeatherData = (lat,long,timezone) => {
       
        return axios.get('https://api.open-meteo.com/v1/forecast?&hourly=temperature_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime',
        {
            params: {
                latitude:lat,
                longitude:long,
                timezone
            }
        }).then(({data}) => {
            console.log(data)
        })
    }
    // getWeatherData()

    return (
        <>
            <Dashboard/>
            <InfoDisplay/>
        </>
    )
}

export default App