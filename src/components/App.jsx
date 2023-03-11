import { useState,useEffect } from "react"
import { getClimbingAreas } from '../climbingAreas'
import UseLocalStorage from "../hooks/UseLocalStorage"
import axios from "axios"
import Dashboard from "./DashboardComponents/Dashboard"
import Summary from "./SummaryComponents/Summary"
import InfoDisplay from "./InfoDisplay"
import Footer from "./Footer"

const App = () => {

    const [climbingAreas,setClimbingAreas] = UseLocalStorage('climbing-areas',getClimbingAreas())
    const [weatherData,setWeatherData] = useState(undefined)
    const [location,setLocation] = useState(climbingAreas[0])
    const [totalRain,setTotalRain] = useState({})

    const getWeatherData = async (lat,long,timezone) => {
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
        const days = data.time.map(date => {
            return Intl.DateTimeFormat(undefined,dayOptions).format(date * 1000)
        }).slice(0,7)

        const rainTotal = data.precipitation_sum.slice(0,7)
        const pastSevenRain = data.precipitation_sum.slice(0,7)
        const pastThreeRain = data.precipitation_sum.slice(4,7)

        const {pastSevenTotal,pastThreeTotal} = parseRainData([pastSevenRain,pastThreeRain])
        
        setTotalRain({pastSevenTotal,pastThreeTotal})
        return {days,rainTotal}
    }

    function parseRainData(rainData) {
        const parsedData = rainData.map(data => {
            return data.reduce((total,amt) => {
                return total + amt
            }).toFixed(2)
        })
        return {
            pastSevenTotal:parsedData[0],
            pastThreeTotal:parsedData[1]
        }
    }

    useEffect(() => {
        getWeatherData(
            location.coords.latitude,
            location.coords.longitude,
            "auto"
        )
    },[location])

    return (
        <main class={`bg-[url('/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col justify-between sm:justify-end `}>
            <div class='flex flex-col justify-evenly gap-3 h-full md:gap-1'>
                <Dashboard 
                    climbingAreas={climbingAreas} 
                    setClimbingAreas={setClimbingAreas} 
                    weatherData={weatherData} 
                    location={location} 
                    setLocation={setLocation}
                />
                <Summary 
                    location={location} 
                    totalRain={totalRain} 
                />
                <InfoDisplay 
                    location={location} 
                    weatherData={weatherData} 
                />
            </div>
            <Footer/>
        </main>
    )
}

export default App



