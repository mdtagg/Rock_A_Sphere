import { createContext } from "react"
import { CurrentInfoContextType } from "../types/app"

const CurrentInfoContext = createContext<null | CurrentInfoContextType>(null)

export default CurrentInfoContext