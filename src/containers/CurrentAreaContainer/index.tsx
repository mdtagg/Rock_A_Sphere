import { useState,useContext } from "react"
import { LocationsContainer } from '../LocationsContainer'
import { ReactComponent as DownCaret } from '../../assets/svg/downCaret.svg'
import { ReactComponent as EarthIcon } from '../../assets/svg/earth.svg'
import { FormContext, LocationContext } from "../App/contexts/FormContext"
import EarthViewContext from "../CurrentInfoDisplay/contexts/MapViewContext"
import { useDelayUnmount } from "./Hooks/useDelayUnmount"
import DropDownContext from "./contexts/DropDownContext"
import { GetWeatherIcon } from "./utils/getWeatherIcon"
import { ListWindow } from "../TableContainer/components/ListWindow"
import { TClimbingAreas } from "../App/types/app"
import { ClimbingArea } from "../LocationsContainer/components/ClimbingArea"
import { ClimbingAreasList } from "./components/ClimbingAreasList"

export interface IDropDownContext {
    dropdown: boolean
    setDropdown: React.Dispatch<React.SetStateAction<boolean>>
}

const CurrentAreaContainer = () => {
    
    const [ dropdown, setDropdown ] = useState<boolean>(false);
    const showDiv = useDelayUnmount(dropdown,250)
    const { location,weatherData } = useContext(LocationContext)!
    const { climbingAreas } = useContext(FormContext)!
    const { setEarthView } = useContext(EarthViewContext)!
    const rotate = dropdown ? 'animate-spinUp transform rotate-[540deg]' : 'animate-spinDown'
    const WeatherIcon = weatherData ? GetWeatherIcon(weatherData.currentWeather.weatherCode) : undefined


    const dropdownContextValues = 
    {
        dropdown,
        setDropdown
    }

    return (
        <section 
            className="h-56 w-1/3 flex flex-col justify-center items-center gap-2 py-5 rounded-md bg-gray-100/25 border-2 border-black ml-11 sm:m-0 sm:p-1 sm:h-48 sm:gap-0 sm:w-1/2 wide:gap-0 wide:p-1 wide:m-0 wide:h-40 wide:w-52"
        >
            <div 
                className='flex gap-2 justify-center items-center '
            >
                <EarthIcon
                    className='rounded-[100%] h-6 w-7 cursor-pointer hover:bg-slate-500/50 sm:w-5 sm:h-5 wide:h-5 wide:w-5'
                    onClick={() => setEarthView(true)}
                />
                <button 
                    className='flex gap-2 justify-center items-center font-bold text-2xl sm:w-3/4 wide:w-3/4 sm:text-xl sm:truncate wide:truncate wide:text-base' 
                    onClick={() => setDropdown(!dropdown)}
                >
                    {location.title}
                    <DownCaret
                        className={`h-4 w-4 ${rotate}`}
                    />
                </button>
            </div>

            
            {!showDiv && weatherData && WeatherIcon ?
                <div className='flex flex-col gap-2 h-fit sm:gap-0 wide:gap-0 sm:text-xs wide:text-sm'>

                    {weatherData.currentWeather.currentDate}
                  
                    <p
                        className='flex justify-center text-4xl items-center gap-3 sm:text-2xl sm:gap-2 wide:gap-3 wide:text-xl '                
                    >
                        {`${weatherData.currentWeather.currentTemp}\u00b0F`}
                        <WeatherIcon
                            className='w-8 sm:h-5 wide:h-5 wide:w-5 '
                        />
                    </p>
                </div>
                :

                showDiv &&
           
                <DropDownContext.Provider
                    value={dropdownContextValues}
                >
                    <ListWindow
                        reRenderData={showDiv}
                        data={climbingAreas}
                        pages={6}
                        MappingComponent={ClimbingAreasList}
                    />
                </DropDownContext.Provider>
                
            }
        </section>
    )
}

export { CurrentAreaContainer }