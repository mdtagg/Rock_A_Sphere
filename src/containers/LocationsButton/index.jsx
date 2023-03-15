import { Image } from "../../components/Image"
import { P } from "../../components/P"

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
            <P
                class='text-black font-bold text-3xl sm:text-2xl wide:text-lg'
                value={props.location.title}
            />
            <Image
                class='h-5 w-5 wide:h-3 wide:w-3'
                src='/src/assets/svg/downCaret.svg'
            />
        </button>
        
    )
}

export { LocationsButton }