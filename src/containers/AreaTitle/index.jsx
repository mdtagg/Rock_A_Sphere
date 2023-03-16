import { useState } from "react"
import Locations from "../Locations"
import { LocationsButton } from "../LocationsButton"
import { CurrentWeather } from "../CurrentWeather"

const AreaTitle = (props) => {

    const [ dropdown,setDropdown ] = useState(false)

    return (
        <aside class='h-fit flex justify-center items-center flex-col p-6 gap-1 rounded-md bg-gray-100/25  w-fit border-2 border-black ml-11 sm:m-0 sm:p-2 sm:w-1/2 wide:gap-0 wide:p-4 wide:m-0  '>
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