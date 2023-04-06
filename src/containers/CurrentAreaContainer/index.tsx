import { useState } from "react"
// import { LocationsContainer } from '../LocationsContainer'
// import { LocationsButton } from "./components/LocationsButton"
// import { CurrentWeather } from "./components/CurrentWeather"
// import { useDelayUnmount } from "./Hooks/useDelayUnmount"
// import DropDownContext from "./contexts/DropDownContext"

const CurrentAreaContainer = () => {
    
    const [ dropdown, setDropdown ] = useState(false);
    // const showDiv = useDelayUnmount(dropdown,250)

    const dropdownContextValues = 
    {
        dropdown,
        setDropdown
    }

    return (
        <aside className='h-56 w-1/3 flex flex-col justify-center items-center p-6 gap-2 rounded-md bg-gray-100/25 border-2 border-black ml-11 sm:m-0 sm:p-1 sm:h-48 sm:gap-0 sm:w-1/2 wide:gap-0 wide:p-1 wide:m-0 wide:h-40 wide:w-52'>
            {/* <DropDownContext.Provider value={dropdownContextValues}>
                <LocationsButton />
            </DropDownContext.Provider>

            {!showDiv && 
                <CurrentWeather />
            }

            {showDiv &&
            <DropDownContext.Provider value={dropdownContextValues}>
                <LocationsContainer />
            </DropDownContext.Provider>
            } */}
        </aside>
    )
}

export { CurrentAreaContainer }