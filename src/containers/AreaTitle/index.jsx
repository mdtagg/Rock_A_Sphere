import { useState } from "react"
import Locations from "../Locations"
import { LocationsButton } from "../LocationsButton"
import { CurrentWeather } from "../CurrentWeather"
import { useDelayUnmount } from "../../hooks/useDelayUnmount"
import DropDownContext from "./contexts/DropDownContext"

const AreaTitle = () => {
    
    const [ dropdown, setDropdown ] = useState(false);
    const showDiv = useDelayUnmount(dropdown,250)

    const dropdownContextValues = 
    {
        dropdown,
        setDropdown
    }

    return (
        <aside class='h-56 w-1/3 flex flex-col justify-center items-center p-6 gap-2 rounded-md bg-gray-100/25 border-2 border-black ml-11 sm:m-0 sm:p-1 sm:h-48 sm:gap-0 sm:w-1/2 wide:gap-0 wide:p-1 wide:m-0 wide:h-40 wide:w-52'>
            <DropDownContext.Provider value={dropdownContextValues}>
                <LocationsButton />
            </DropDownContext.Provider>

            {!showDiv && 
                <CurrentWeather />
            }

            {showDiv &&
            <DropDownContext.Provider value={dropdownContextValues}>
                <Locations />
            </DropDownContext.Provider>
            }
        </aside>
    )
}

export { AreaTitle }