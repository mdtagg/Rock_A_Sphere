
import { useState } from "react"
import { MapView } from "../MapView"
import { CurrentAreaContainer } from "../CurrentAreaContainer"
import MapViewContext from "./contexts/MapViewContext"

const CurrentInfoDisplay = () => {

    const [ earthView, setEarthView ] = useState<boolean>(false)

    return (
        
        <section 
            className='
                flex 
                gap-10
                sm:gap-2 
                wide:gap-1
            '
            >
            <MapViewContext.Provider 
                value={{earthView,setEarthView}}
            >
                
                <CurrentAreaContainer />
                <MapView />

            </MapViewContext.Provider>
            
        </section>
        
    )
}

export { CurrentInfoDisplay }
