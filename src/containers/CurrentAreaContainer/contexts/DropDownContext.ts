import { createContext } from "react";
import { IDropDownContext } from "..";

const DropDownContext = createContext<null | IDropDownContext>(null)

export default DropDownContext