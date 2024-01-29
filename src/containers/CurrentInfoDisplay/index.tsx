
import { useState } from "react"
import { MapView } from "../MapView"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import { Form } from "./components/Form"
import MapViewContext from "./contexts/MapViewContext"
import FormContext from "./contexts/FormContext"

const CurrentInfoDisplay = () => {

    const [ earthView, setEarthView ] = useState<boolean>(false)
    const [ toggleForm, setToggleForm ] = useState<boolean>(false)

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
        
        <section className='flex gap-10 sm:gap-2 wide:gap-1'>
            {!toggleForm &&
            <MapViewContext.Provider 
                value={earthViewContextValues}
            >

                <FormContext.Provider 
                    value={formContextValues}
                >
                    <CurrentAreaContainer />
                </FormContext.Provider>
                
                <MapView />
            </MapViewContext.Provider>
            }       
            {toggleForm &&
            <FormContext.Provider 
                value={formContextValues}
            >
                <Form />
            </FormContext.Provider>
            }
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
