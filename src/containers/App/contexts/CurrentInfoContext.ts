import { createContext } from "react"
import { CurrentInfoContextType } from ".."

const CurrentInfoContext = createContext<null | CurrentInfoContextType>(null)

export default CurrentInfoContext