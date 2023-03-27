import { P as Text } from "../../components/P"
import { handleClick } from "./utils/handleClick"
import { ReactComponent as PlusImg } from '../../assets/svg/plus.svg'

const AddAreaButton = (props) => {

    return (
        <button 
            class='flex justify-center items-center gap-1 bg-white border-2 border-black w-full rounded  hover:bg-green-500 wide:p-0'
            onClick={() => handleClick(props)}
        >
            <PlusImg
                class='h-4 w-4 wide:h-3 wide:w-3'   
            />
            <Text
                class=' font-semibold wide:text-xs'
                value='Add Area'
            />
        </button>
    )
}

export { AddAreaButton }