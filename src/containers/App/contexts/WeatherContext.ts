import { createContext } from "react";
import { WeatherContextType } from "..";

const WeatherContext = createContext<WeatherContextType | null>(null)

export default WeatherContext
