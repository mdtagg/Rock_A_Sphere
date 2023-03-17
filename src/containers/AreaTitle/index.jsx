import { useState } from "react"
import Locations from "../Locations"
import { LocationsButton } from "../LocationsButton"
import { CurrentWeather } from "../CurrentWeather"

const AreaTitle = (props) => {

    const [ dropdown,setDropdown ] = useState(false)

    return (
        <aside class='h-fit w-fit flex flex-col justify-center items-center p-6 gap-1 rounded-md bg-gray-100/25 border-2 border-black ml-11 sm:m-0 sm:p-1 sm:h-48 sm:gap-0 sm:w-1/2 wide:gap-0 wide:p-4 wide:m-0  '>
            <LocationsButton
                location={props.location}
                setDropdown={setDropdown}
            />
            {!dropdown && 
                <CurrentWeather
                    weatherData={props.weatherData} 
                />
            }
            {dropdown &&
                <Locations 
                    climbingAreas={props.climbingAreas} 
                    setClimbingAreas={props.setClimbingAreas}
                    setLocation={props.setLocation}
                    setDropdown={setDropdown}
                />
            }
        </aside>
    )
}

export { AreaTitle }