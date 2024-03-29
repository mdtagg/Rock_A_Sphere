import { jsx as _jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { getDefaultAreas } from "./helpers/getDefaultAreas";
import WeatherDataService from "../../services/WeatherDataService";
import UseLocalStorage from "./hooks/UseLocalStorage";
// import { CurrentInfoDisplay } from "../CurrentInfoDisplay"
// import { TableContainer } from "../TableContainer"
// import { RainReadout } from "../RainReadout"
// import Footer from "./components/Footer/Index"
import { parseWeatherData } from "./helpers/parseWeatherData";
// import CurrentInfoContext from "./contexts/CurrentInfoContext"
// import WeatherContext from "./contexts/WeatherContext"
const App = () => {
    const [climbingAreas, setClimbingAreas] = UseLocalStorage('climbing-areas', getDefaultAreas());
    const [weatherData, setWeatherData] = useState(undefined);
    const [location, setLocation] = useState(climbingAreas[0]);
    const [buttonTitle, setButtonTitle] = useState('Wet Rock');
    const currentInfoContextValues = {
        location,
        setLocation,
        weatherData,
        climbingAreas,
        setClimbingAreas
    };
    const weatherContextValues = {
        location,
        weatherData,
        buttonTitle,
        setButtonTitle,
    };
    useEffect(() => {
        (async function () {
            const weatherData = await WeatherDataService.getWeatherData(location.coords.latitude, location.coords.longitude, "auto");
            const parsedWeatherData = parseWeatherData(weatherData);
            setWeatherData(parsedWeatherData);
        })();
    }, [location]);
    return (_jsx("main", { className: `bg-[url('./assets/images/redRock.jpg')] bg-cover bg-center h-screen w-screen flex flex-col pt-10 justify-between sm:p-0 wide:p-0 wide:justify-center `, children: "Hello" }));
};
export { App };
