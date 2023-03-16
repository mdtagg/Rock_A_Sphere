import { Button as ChangeLocation } from "../../components/Button"
import { Button as Delete } from "../../components/Button"
// import { v4 as uuidv4 } from 'uuid';
import { handleAreaChange } from "./utils/handleAreaChange";
import { handleDelete } from "./utils/handleDelete";

const ClimbingArea = (props) => {

    return (
        <div class='flex justify-between gap-3 bg-white rounded border border-black pl-1 sm:text-sm wide:text-xs' >
            <ChangeLocation
                class='flex justify-start items-center w-full' 
                onClick={() => handleAreaChange(props)} 
                value={props.area.title}
            />
            <Delete
                class='font-bold hover:bg-red-500/50 p-1'
                data-id={props.area.id} 
                onClick={(e) => handleDelete(e,props)}
                value={'x'}
            />
        </div>
    )
}

export { ClimbingArea }