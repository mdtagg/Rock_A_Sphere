import { useState } from "react"
import axios from "axios"

const Dashboard = () => {

    const [city,setCity] = useState('')

    navigator.geolocation.getCurrentPosition(positionSuccess,positionFail)

    function positionSuccess({coords}) {
        getCity(
            coords.latitude,
            coords.longitude
        )
    }

    const getCity = (lat,long) => {
        const latitude = lat.toString()
        const longitude = long.toString()
   
        return axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=5caa923f63af4fb7a20bd70619ca5fbd`, 
        { 
            params: 
            {
                latitude:lat,
                longitude:long 
            } 
            }).then(({data}) => {
            let results = data.results[0]
            // console.log(results.city)
            // setValue(results.city)
            setCity(results.city)
        })
    }
    
    function positionFail() {
        console.log('Error')
    }

    function setValue(city) {
        setCity(city)
        
    }
 
    return (
        <div class='city'>{city}</div>
    )
}

export default Dashboard