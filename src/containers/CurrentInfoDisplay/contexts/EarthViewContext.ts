import { createContext } from "react"
import { earthViewContextType } from ".."

const EarthViewContext = createContext<null | earthViewContextType>(null)

export default EarthViewContext