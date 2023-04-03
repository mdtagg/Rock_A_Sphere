
import { useState } from "react"
import MapView from "../MapView"
import { AreaTitle } from "../AreaTitle"
import { Form } from "../Form"

const CurrentInfoDisplay = () => {

    const [earthView,setEarthView] = useState(false)
    const [toggleForm,setToggleForm] = useState(false)

    return (
        
        <section class='flex gap-10 sm:gap-2 wide:gap-1'>
            
            {!toggleForm &&
            <>
                <AreaTitle 
                    earthView={earthView}
                    setEarthView={setEarthView}
                    setToggleForm={setToggleForm}
                />
                <MapView 
                    earthView={earthView}
                    setEarthView={setEarthView}
                />
            </>
            }       
            {toggleForm &&
                <Form 
                    setToggleForm={setToggleForm}
                />
            }
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
