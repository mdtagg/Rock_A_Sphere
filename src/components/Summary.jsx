import axios from "axios"
import { useState,useEffect } from "react"

const Summary = (props) => {

    const [rockTypes,setRockTypes] = useState([])

    useEffect(() => {
        const getRockTypes = async () => {
            const response = await axios.get('https://macrostrat.org/api/defs/lithologies?all')
            setRockTypes(response.data.success.data)
        }
        getRockTypes()
    },[])
    
    return (
        
        <section class='flex flex-col border-2 text-xl border-black h-full w-1/3 mb-8 ml-8 bg-slate-300/70 rounded gap-3'>
            <p>{`The total amount of rain and snow for the past 7 days was ${props.totalRain.pastSevenTotal}`} inches,</p>
            <p>{`The total amount of rain and snow for the last 3 days was ${props.totalRain.pastThreeTotal}`} inches </p>
            <p>{`This climbing area is composed primarily of ${props.location.rockType}`} </p>
            <p>Based on this information it would be ideal to wait at least 5 days before climbing</p>
            <p>Always check to make sure dirt underneath your climb is dry!</p>
        </section>
    )
}

export default Summary