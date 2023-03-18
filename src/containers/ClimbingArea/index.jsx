import { Button as ChangeLocation } from "../../components/Button"
import { Button as Delete } from "../../components/Button"
// import { v4 as uuidv4 } from 'uuid';
import { handleAreaChange } from "./utils/handleAreaChange";
import { handleDelete } from "./utils/handleDelete";

const ClimbingArea = (props) => {

    return (
        <div class='flex justify-between gap-3 bg-white rounded border border-black pl-1 sm:text-[9px] sm:font-bold wide:text-base ' >
            <ChangeLocation
                class=' h-[25px] w-[100px] justify-center truncate items-center overflow-hidden sm:break-keep sm:flex sm:justify-start sm:h-[20px] sm:w-[60px]  ' 
                onClick={() => handleAreaChange(props)} 
                value={props.area.title}
            />
            <Delete
                class='font-bold hover:bg-red-500/50 pr-1'
                data-id={props.area.id} 
                onClick={(e) => handleDelete(e,props)}
                value={'x'}
            />
        </div>
    )
}

export { ClimbingArea }