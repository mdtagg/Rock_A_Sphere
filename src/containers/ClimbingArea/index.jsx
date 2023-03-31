import { Button as ChangeLocation } from "../../components/Button"
import { Button as Delete } from "../../components/Button"
import { useContext } from "react";
import { handleDelete } from "./utils/handleDelete";
import { AppContext } from "../App";

const ClimbingArea = (props) => {

    const { setLocation } = useContext(AppContext)

    function handleAreaChange(area) {
        props.setDropdown(false)
        setLocation(area)
    }

    return (
        <div class='flex w-full gap-2 items-center bg-white rounded border-2 border-black sm:text-[9px] sm:font-bold sm:w-[90px] wide:w-[95px] wide:text-base transition-[height] ease-in duration-300' >
            <ChangeLocation
                class='h-[25px] w-full flex justify-start truncate font-medium items-center hover:bg-slate-500/50 sm:h-[20px] wide:text-[11px] wide:h-[10px]' 
                onClick={() => handleAreaChange(props.area)} 
                value={props.area.title}
            />
            <Delete
                class='font-bold hover:bg-red-500/50 pr-1 wide:text-sm'
                data-id={props.area.id} 
                onClick={(e) => handleDelete(e,props)}
                value={'x'}
            />
        </div>
    )
}

export { ClimbingArea }