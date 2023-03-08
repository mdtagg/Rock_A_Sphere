import { useState,useEffect } from "react"

const DaysToClimb = (props) => {

    const [ daysToClimb, setDaysToClimb ] = useState(0)

function getDaysToClimb() {

    const lastThree = parseFloat(props.totalRain.pastThreeTotal)
    console.log({lastThree})
    
    if(lastThree > 0.5) {
        setDaysToClimb(3)
    }
    else if(lastThree <= 0.5 && lastThree > 0.25) {
        setDaysToClimb(2)
    }else if(lastThree <= 0.25 && lastThree > 0.15) {
        setDaysToClimb(1)
    }else {
        setDaysToClimb(0)
    }
}

useEffect(() => {
    if(!props.totalRain) return 
    getDaysToClimb()
},[props.totalRain])
    
    return (
        <div class='flex flex-col items-center justify-center'>
            <p class='text-3xl'>{daysToClimb}</p>
            <p class='text-[.25rem] leading-none'>
                Always make sure to check to see if the ground by your climb is Wet,
                if it is give it another day or two!
            </p>
        </div>
        
       
    )
}

export default DaysToClimb