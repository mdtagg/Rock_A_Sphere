import { useState,useEffect } from "react"
import axios from "axios"

const Dashboard = (props) => {

    // console.log(props.location)
    const [city,setCity] = useState('')

    console.log({city})
   

    const getCity = async (lat,long) => {
        const latitude = lat.toString()
        const longitude = long.toString()
   
        await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=5caa923f63af4fb7a20bd70619ca5fbd`, 
        { 
            params: 
            {
                latitude:lat,
                longitude:long 
            } 
            }).then(({data}) => {
            let results = data.results[0]
            setCity(results.city)
        })
    }

    useEffect(() => {
        getCity(props.location.latitude,props.location.longitude)
    },[location])

 
    return (
        <section class='flex flex-col m-6'>
            <p class='text-white text-2xl m-0'>
                {city}
            </p>
            <p>

            </p>
        </section>
    )
}

export default Dashboard