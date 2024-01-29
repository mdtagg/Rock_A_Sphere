import { createContext } from "react";

export interface toggleFormContextType {
    setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
}

const FormContext = createContext<null | toggleFormContextType>(null)

export default FormContext