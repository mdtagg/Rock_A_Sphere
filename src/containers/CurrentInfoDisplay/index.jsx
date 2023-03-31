
import { useState } from "react"
import MapView from "../MapView"
import { AreaTitle } from "../AreaTitle"
import { Form } from "../Form"

const CurrentInfoDisplay = (props) => {

    const [earthView,setEarthView] = useState(false)
    const [toggleForm,setToggleForm] = useState(false)

    return (
        
        <section class='flex gap-10 sm:gap-2 wide:gap-1'>
            
            {!toggleForm &&
            <>
            <AreaTitle 
                climbingAreas={props.climbingAreas}
                setClimbingAreas={props.setClimbingAreas}
                earthView={earthView}
                setEarthView={setEarthView}
                setToggleForm={setToggleForm}
            />
            <MapView 
                climbingAreas={props.climbingAreas} 
                setClimbingAreas={props.setClimbingAreas}
                earthView={earthView}
                setEarthView={setEarthView}
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
