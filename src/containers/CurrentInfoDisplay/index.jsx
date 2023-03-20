
import { useState } from "react"
import MapView from "../MapView"
import { AreaTitle } from "../AreaTitle"
import { Form } from "../Form"

const CurrentInfoDisplay = (props) => {

    const [toggleForm,setToggleForm] = useState(false)

    return (
        
        <section class='flex gap-10 sm:gap-5 wide:gap-1'>
            
            {!toggleForm &&
            <>
            <AreaTitle 
                location={props.location}
                setLocation={props.setLocation}
                climbingAreas={props.climbingAreas}
                setClimbingAreas={props.setClimbingAreas}
                weatherData={props.weatherData}
                earthView={props.earthView}
                setEarthView={props.setEarthView}
                setToggleForm={setToggleForm}
                
            />
            <MapView 
                location={props.location} 
                setLocation={props.setLocation}
                climbingAreas={props.climbingAreas} 
                setClimbingAreas={props.setClimbingAreas}
                earthView={props.earthView}
                setEarthView={props.setEarthView}
            />
            </>
            }       
            {toggleForm &&
            <Form 
                setToggleForm={setToggleForm}
                setClimbingAreas={props.setClimbingAreas}
            />
            }
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
