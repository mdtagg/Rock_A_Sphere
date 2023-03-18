import { P as LocationTitle} from "../../components/P"
import {ReactComponent as DownCaret} from '../../assets/svg/downCaret.svg'

const LocationsButton = (props) => {

    function handleClick() {
        props.setDropdown((prevState) => {
            return !prevState
        })
    }

    return (
        <button 
            class='flex justify-center items-center gap-2' 
            onClick={handleClick}
        >
            <LocationTitle
                class='text-black font-bold text-3xl sm:text-xl wide:text-lg'
                value={props.location.title}
            />
            <DownCaret
                class='flex justify-center items-center h-4 w-4'
            />
        </button>
        
    )
}

export { LocationsButton }
