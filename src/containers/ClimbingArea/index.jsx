import { Button as ChangeLocation } from "../../components/Button"
import { Button as Delete } from "../../components/Button"
import { handleAreaChange } from "./utils/handleAreaChange";
import { handleDelete } from "./utils/handleDelete";

const ClimbingArea = (props) => {

    return (
        <div class='flex w-[125px] justify-between gap-2 items-center bg-white rounded border-2 border-black sm:text-[9px] sm:font-bold sm:w-[90px] wide:text-base ' >
            <ChangeLocation
                class='h-[25px] w-full flex justify-start truncate font-medium items-center hover:bg-slate-500/50 sm:h-[20px] wide:text-xs wide:h-[10px]' 
                onClick={() => handleAreaChange(props)} 
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