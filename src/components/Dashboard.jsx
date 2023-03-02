import { useState,useEffect } from "react"

const Dashboard = (props) => {
    console.log(props.weatherData)

    useEffect(() => {
        
    },[])

    return (
        <section class='flex flex-col m-8 gap-1'>
            <p class='text-black text-3xl'>{props.location.title}</p>
            <p class='text-black '>
                {props.weatherData &&
                props.weatherData.currentWeather.currentDate}
            </p>
            <p class='text-black text-4xl'>
                {props.weatherData &&
                props.weatherData.currentWeather.currentTemp} &deg;F
            </p>
            <p>

            </p>
        </section>
    )
}

export default Dashboard

// // console.log(props.location)
    // const [city,setCity] = useState('')

    // console.log({city})
   

    // const getCity = async (lat,long) => {
    //     console.log(lat)
    //     await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=5caa923f63af4fb7a20bd70619ca5fbd` )
    //     .then(({data}) => {
    //         let results = data.results[0]
    //         setCity(results.city)
    //     })
    // }

    // useEffect(() => {
    //     console.log(props.location.latitude)
    //     if(!props.location.latitude || !props.location.longitude) return
    //         // getCity(props.location.latitude,props.location.longitude)
        
    // },[location])

    // <p class='text-white text-3xl m-0'>
    //             {city}
    //         </p>