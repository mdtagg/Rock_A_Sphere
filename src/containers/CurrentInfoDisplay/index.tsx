
import { useState } from "react"
import { MapView } from "../MapView"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import { Form } from "./components/Form"
import EarthViewContext from "./contexts/EarthViewContext"
import FormContext from "./contexts/FormContext"

export interface earthViewContextType {
    earthView:boolean
    setEarthView: React.Dispatch<React.SetStateAction<boolean>>
}

export interface toggleFormContextType {
    setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}

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
