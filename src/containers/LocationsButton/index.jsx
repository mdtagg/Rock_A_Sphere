import { P as LocationTitle} from "../../components/P"
import {ReactComponent as DownCaret} from '../../assets/svg/downCaret.svg'
import { ReactComponent as Earth } from '../../assets/svg/earth.svg'
import { useContext } from "react"
import { AppContext } from "../App"

const LocationsButton = (props) => {

    const { location } = useContext(AppContext)

    const rotate = 
    props.dropdown ? 'animate-spinUp transform rotate-[540deg]' : 'animate-spinDown'

    function handleViewChange(setEarthView) {
       setEarthView(true)
    }

    return (
        <div class='flex w-full gap-2 justify-center items-center xl:w-auto'>
            <Earth
                    class='flex rounded-[100%] justify-center items-center h-6 w-7 cursor-pointer hover:bg-slate-500/50 sm:w-5 sm:h-5 wide:h-5 wide:w-5'
                    onClick={() => handleViewChange(props.setEarthView)}
                />
            <button 
                class='flex rounded gap-2 justify-center items-center sm:w-3/4 wide:w-3/4 xl:w-full' 
                onClick={() => {
                    props.setDropdown(!props.dropdown)
                }}
            >
                <LocationTitle
                    class='text-black font-bold text-2xl sm:text-xl sm:truncate wide:truncate wide:text-base xl:w-full'
                    value={location.title}
                />
                <DownCaret
                    class={`flex justify-center items-center h-4 w-4 ${rotate}`}
                />
            </button>
        </div>
    )
}

export { LocationsButton }

        