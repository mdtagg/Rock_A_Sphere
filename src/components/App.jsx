import Dashboard from "./Dashboard"
import InfoDisplay from "./InfoDisplay"
import axios from "axios"
import { useState,useEffect } from "react"

const App = () => {

    const [weatherData,setWeatherData] = useState({})
    const [location,setLocation] = useState({})

    // console.log({weatherData,location})
    
    function positionSuccess({coords}) {
        let {latitude,longitude} = coords
        setLocation({latitude,longitude})
    }

    function positionFail() {
        alert(
          'Error getting location, please allow us to use your location and refresh the page'
          )
      }

    const getWeatherData = async (lat,long,timezone) => {
        // console.log(lat,long)
        await axios.get('https://api.open-meteo.com/v1/forecast?&daily=weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7',
        {
            params: {
                latitude:lat,
                longitude:long,
                timezone
            }
        }).then(({data}) => {
            const parsedData = parseWeatherData(data)
            // console.log(parsedData)
            setWeatherData(parsedData)
        })
        
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(positionSuccess,positionFail)
    },[])

    useEffect(() => {
        getWeatherData(
            location.latitude,
            location.longitude,
            Intl.DateTimeFormat().resolvedOptions().timeZone
        )
    },[location])

    function parseWeatherData(data) {
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentTemp = data.current_weather.temperature
        const currentDate = Intl.DateTimeFormat(undefined, dateOptions).format(data.current_weather.time * 1000)
        const weatherCode = data.current_weather.weathercode
        return {currentTemp,currentDate,weatherCode}
    }

    return (
        <main class="bg-[url('/yosemite.jpg')] bg-cover h-screen w-screen flex flex-col">
            <Dashboard weatherData={weatherData} location={location}/>
            <InfoDisplay/>
        </main>
    )
}

export default App