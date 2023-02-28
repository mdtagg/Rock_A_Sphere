import Dashboard from "./Dashboard"
import InfoDisplay from "./InfoDisplay"
import axios from "axios"

const App = () => {

    navigator.geolocation.getCurrentPosition(positionSuccess,positionFail)
    
    function positionSuccess({ coords }) {

        // getCity(
        //     coords.latitude,
        //     coords.longitude
        // )

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

    // const getCity = (lat,long) => {
    //     const latitude = lat.toString()
    //     const longitude = long.toString()
   
    //     return axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=5caa923f63af4fb7a20bd70619ca5fbd`, 
    //     { 
    //         params: 
    //         {
    //             latitude:lat,
    //             longitude:long 
    //         } 
    //         }).then(({data}) => {
    //         let results = data.results[0]
    //         return results.city
    //     })
    // }

    const getWeatherData = (lat,long,timezone) => {
       
        return axios.get('https://api.open-meteo.com/v1/forecast?&daily=weathercode,apparent_temperature_max,sunrise,sunset,precipitation_sum,precipitation_hours,precipitation_probability_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timeformat=unixtime&past_days=7',
        {
            params: {
                latitude:lat,
                longitude:long,
                timezone
            }
        }).then(({data}) => {
            // console.log(data)
        })
    }

    return (
        <body class="bg-[url('/yosemite.jpg')] bg-cover h-screen w-screen">
            <Dashboard />
            <InfoDisplay/>
        </body>
    )
}

export default App