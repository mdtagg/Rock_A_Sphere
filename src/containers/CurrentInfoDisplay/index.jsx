
import { useState } from "react"
import MapView from "../MapView"
import { AreaTitle } from "../AreaTitle"
import { Form } from "../Form"
import EarthViewContext from "./contexts/EarthViewContext"

const CurrentInfoDisplay = () => {

    const [earthView,setEarthView] = useState(false)
    const [toggleForm,setToggleForm] = useState(false)

    return (
        
        <section class='flex gap-10 sm:gap-2 wide:gap-1'>
            
            {!toggleForm &&
            <EarthViewContext.Provider value={{earthView,setEarthView}}>
                <AreaTitle 
                    setToggleForm={setToggleForm}
                />
                <MapView />
            </EarthViewContext.Provider>
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
