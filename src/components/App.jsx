import Dashboard from "./Dashboard"
import Summary from "./Summary"
import InfoDisplay from "./InfoDisplay"
import axios from "axios"
import { getClimbingAreas } from '../climbingAreas'
import { useState,useEffect } from "react"

const App = () => {

    const [climbingAreas,setClimbingAreas] = useState(getClimbingAreas())

    console.log(climbingAreas)

    //BUG consider initializing weatherData with an array and updating the initial rendering
    //conditions in the other components
    const [weatherData,setWeatherData] = useState(undefined)
    const [location,setLocation] = useState(climbingAreas[0])
    const [totalRain,setTotalRain] = useState({})
    
    console.log({climbingAreas,weatherData})
    const getWeatherData = async (lat,long,timezone) => {
        // console.log({lat,long})
        await axios.get('https://api.open-meteo.com/v1/forecast?&daily=weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7',
        {
            params: {
                latitude:lat,
                longitude:long,
                timezone
            }
        }).then(({data}) => {
            const parsedData = parseWeatherData(data)
            setWeatherData(parsedData)
        })
    }

    function parseWeatherData(data) {
        
        const currentWeather = parseCurrentWeather(data)
        const dailyWeather = parseDailyWeather(data.daily)
        return {currentWeather,dailyWeather}
    }

    function parseCurrentWeather(data) {
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const currentTemp = data.current_weather.temperature
        const currentDate = Intl.DateTimeFormat(undefined, dateOptions).format(data.current_weather.time * 1000)
        const weatherCode = data.current_weather.weathercode
        
        return {currentTemp,currentDate,weatherCode}
    }

    function parseDailyWeather(data) {
        const dayOptions = { weekday:'short',day:'numeric' }
        let days = data.time.map(date => {
            return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
        })
        days = days.slice(0,7)
        let rainTotal = data.precipitation_sum
        rainTotal = rainTotal.slice(0,7)
        // console.log({rainTotal})
        //     item = parseFloat(item)
        // })

        
        let cumulativeRain = rainTotal.reduce((total,amt) => {
            return total + amt
        })
        cumulativeRain = cumulativeRain.toFixed(2)

        let pastThreeRain = rainTotal.slice(0,3)
        pastThreeRain = pastThreeRain.reduce((total,amt) => {
            return total + amt
        })
        pastThreeRain = pastThreeRain.toFixed(2)
        
        setTotalRain({cumulativeRain,pastThreeRain})

        return {days,rainTotal}
    }

    useEffect(() => {
        getWeatherData(
            location.coords.latitude,
            location.coords.longitude,
            "America/Los_Angeles"
        )
    },[location])


    return (
        <main class={`bg-[url('/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-between`}>
            <Dashboard climbingAreas={climbingAreas} setClimbingAreas={setClimbingAreas} weatherData={weatherData} location={location} setLocation={setLocation}/>
            <Summary location={location} totalRain={totalRain} />
            <InfoDisplay location={location} weatherData={weatherData} />
        </main>
    )
}

export default App

// class="bg-[url('/redRock.jpg')] bg-cover h-screen w-screen flex flex-col"

// const geolocationAPI = navigator.geolocation;

// const getUserCoordinates = () => {
//     if (!geolocationAPI) {
//       setError('Geolocation API is not available in your browser!')
//     } else {
//       geolocationAPI.getCurrentPosition((position) => {
//         const { coords } = position;
//         const {latitude,longitude} = coords
        
//       }, (error) => {
//         setError('Something went wrong getting your position!')
//       })
//     }
// }

// useEffect(() => {
    //     // console.log('location test')
    //     // navigator.geolocation.getCurrentPosition(positionSuccess,positionFail)
    // },[])

    // useEffect(() => {
    //     if(!location.latitude || !location.longitude) return
    //     console.log(location.latitude)
    //     getWeatherData(
    //         location.latitude,
    //         location.longitude,
    //         Intl.DateTimeFormat().resolvedOptions().timeZone
    //     )
    // },[location])

