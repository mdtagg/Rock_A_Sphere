import { useState,useEffect } from "react"
import axios from "axios"

const Dashboard = (props) => {

    // console.log(props.location)
    const [city,setCity] = useState('')

    console.log({city})
   

    const getCity = async (lat,long) => {
        console.log(lat)
        await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${long}&format=json&apiKey=5caa923f63af4fb7a20bd70619ca5fbd` )
        .then(({data}) => {
            let results = data.results[0]
            setCity(results.city)
        })
    }

    useEffect(() => {
        console.log(props.location.latitude)
        if(!props.location.latitude || !props.location.longitude) return
            // getCity(props.location.latitude,props.location.longitude)
        
    },[location])

 
    return (
        <section class='flex flex-col m-8 gap-1'>
            <p class='text-white text-3xl m-0'>
                {city}
            </p>
            <p class='text-white '>
                {props.weatherData.currentDate}
            </p>
            <p class='text-white text-4xl'>
                {props.weatherData.currentTemp} &deg;F
            </p>
            <p>

            </p>
        </section>
    )
}

export default Dashboard