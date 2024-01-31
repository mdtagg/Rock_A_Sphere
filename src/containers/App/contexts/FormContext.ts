import { createContext } from "react";
import { TFormContext,TLocationContext,TTableInfoContext } from "../types/app";

export const FormContext = createContext<null | TFormContext>(null)

export const LocationContext = createContext<null | TLocationContext>(null)

export const TableInfoContext = createContext<null | TTableInfoContext>(null) 
