import { useEffect } from "react"

const Dashboard = (props) => {

    useEffect(() => {
        
    },[])

    return (
        <section class='flex items-center flex-col m-8 p-6 gap-1 rounded-md bg-gray-100/25 h-fit w-fit border-2 border-black'>
            <button class='text-black text-3xl rounded flex items-center gap-1' >
                {props.location.title} 
                <img class='h-5 w-5' src='/downCaret.svg'></img>
            </button>
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

    // <button class='text-black text-3xl rounded flex items-center gap-1' >
    //             {props.location.title} 
    //             <img class='h-5 w-5' src='/downCaret.svg'></img>
    //         </button>