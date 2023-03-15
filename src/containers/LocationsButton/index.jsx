import { Button } from "../../components/Button"
import { Image } from "../../components/Image"

const LocationsButton = (props) => {

    function handleClick() {
        setDropdown((prevState) => {
            return !prevState
        })
    }

    return (
        <div class='flex justify-center items-center gap-2'>
            <Button
                class='text-black text-3xl rounded wide:text-lg wide:font-bold'
                onClick={handleClick}
                value={props.location.title}
            />
            <Image
                class='h-5 w-5 wide:h-3 wide:w-3'
                src='/src/assets/svg/downCaret.svg'
            />
        </div>
        
    )
}

export { LocationsButton }