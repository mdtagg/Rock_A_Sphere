
import { useState } from "react"
import { MapView } from "../MapView"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import { Form } from "./components/Form"
import MapViewContext from "./contexts/MapViewContext"
import FormContext from "./contexts/FormContext"

const CurrentInfoDisplay = () => {

    const [ earthView, setEarthView ] = useState<boolean>(false)
    const [ toggleForm, setToggleForm ] = useState<boolean>(false)

    return (
        
        <section 
            className='
                flex 
                gap-10
                sm:gap-2 
                wide:gap-1
            '
            >
            {!toggleForm &&
            <MapViewContext.Provider 
                value={{earthView,setEarthView}}
            >

                <FormContext.Provider 
                    value={{setToggleForm}}
                >
                    <CurrentAreaContainer />
                </FormContext.Provider>
                
                <MapView />
            </MapViewContext.Provider>
            }       
            {toggleForm &&
            <FormContext.Provider 
                value={{setToggleForm}}
            >
                <Form />
            </FormContext.Provider>
            }
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
