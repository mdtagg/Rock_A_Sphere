import { createContext } from "react"

export interface MapViewContextType {
    earthView:boolean
    setEarthView: React.Dispatch<React.SetStateAction<boolean>>
}

const MapViewContext = createContext<null | MapViewContextType>(null)

export default MapViewContext