import { createContext } from "react";
import { TClimbingArea,ReactSetter,IParsedWeather, TRainData} from "../types/app";

export interface ILocationContext {
    location: TClimbingArea
    setLocation: ReactSetter<TClimbingArea>;
    weatherData: IParsedWeather | undefined
}

export interface IFormContext {
    climbingAreas:TClimbingArea[]
    setClimbingAreas:ReactSetter<TClimbingArea[]>
    setToggleForm:ReactSetter<boolean>
}

export interface ITableInfoContext {
    rainData:TRainData
    setRainData:ReactSetter<TRainData>
}

export const FormContext = createContext<null | IFormContext>(null)

export const LocationContext = createContext<null | ILocationContext>(null)

export const TableInfoContext = createContext<null | ITableInfoContext>(null) 
