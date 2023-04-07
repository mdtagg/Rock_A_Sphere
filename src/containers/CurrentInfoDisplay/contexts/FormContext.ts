import { createContext } from "react";
import { toggleFormContextType } from "..";

const FormContext = createContext<null | toggleFormContextType>(null)

export default FormContext