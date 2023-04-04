
import { useState } from "react"
import MapView from "../MapView"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import { Form } from "../Form"
import EarthViewContext from "./contexts/EarthViewContext"
import FormContext from "./contexts/FormContext"

const CurrentInfoDisplay = () => {

    const [ earthView, setEarthView ] = useState(false)
    const [ toggleForm, setToggleForm ] = useState(false)

    const earthViewContextValues = 
    { 
        earthView, 
        setEarthView 
    }

    const formContextValues = 
    {
        setToggleForm
    }

    return (
        
        <section class='flex gap-10 sm:gap-2 wide:gap-1'>
            
            {!toggleForm &&
                <EarthViewContext.Provider value={earthViewContextValues}>
                    <FormContext.Provider value={formContextValues}>
                        <CurrentAreaContainer />
                    </FormContext.Provider>
                    <MapView />
                </EarthViewContext.Provider>
            }       
            {toggleForm &&
            <FormContext.Provider value={formContextValues}>
                <Form />
            </FormContext.Provider>
            }
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
