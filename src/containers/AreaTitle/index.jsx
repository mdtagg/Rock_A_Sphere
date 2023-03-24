import { useState,useEffect } from "react"
import Locations from "../Locations"
import { LocationsButton } from "../LocationsButton"
import { CurrentWeather } from "../CurrentWeather"
import { useDelayUnmount } from "../../hooks/useDelayUnmount"

const AreaTitle = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const showDiv = useDelayUnmount(dropdown,250)

    return (
        <aside class='h-full w-1/3 flex flex-col justify-center items-center p-6 gap-2 rounded-md bg-gray-100/25 border-2 border-black ml-11 sm:m-0 sm:p-1 sm:h-48 sm:gap-0 sm:w-1/2 wide:gap-0 wide:p-1 wide:m-0 wide:h-40 wide:w-52'>
            <LocationsButton
                location={props.location}
                setDropdown={setDropdown}
                dropdown={dropdown}
                earthView={props.earthView}
                setEarthView={props.setEarthView}
            />
            {!showDiv && 
            <div 
                class={dropdown && 'animate-fadeOut'}
            >
                <CurrentWeather
                    weatherData={props.weatherData} 
                />
            </div>
            }
            {showDiv &&
            <div 
                class={dropdown ? 'animate-fadeIn' : 'animate-fadeOut'}
            >
                <Locations 
                    climbingAreas={props.climbingAreas} 
                    setClimbingAreas={props.setClimbingAreas}
                    setLocation={props.setLocation}
                    setDropdown={setDropdown}
                    setToggleForm={props.setToggleForm}
                />
            </div>
            }
        </aside>
    )
}

export { AreaTitle }