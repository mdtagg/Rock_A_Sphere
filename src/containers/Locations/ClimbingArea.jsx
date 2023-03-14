import { Button as ChangeLocation } from "../../components/Button"
import { Button as Delete } from "../../components/Button"
import { v4 as uuidv4 } from 'uuid';

const ClimbingArea = (props) => {

    function handleAreaChange(area) {
        props.setDropdown(false)
        props.setLocation(area)
    }

    function handleDelete(e) {
        e.preventDefault()
        const { id } = e.target.dataset
        const filteredAreas = props.climbingAreas.filter(area => area.id !== id)
        props.setClimbingAreas(filteredAreas)
    }

    return (
        <div class='flex justify-between gap-3 bg-white rounded border border-black pl-1 sm:text-sm wide:text-xs' key={uuidv4()}>
            <ChangeLocation
                class='flex justify-start items-center w-full' 
                onClick={() => handleAreaChange(props.area)} 
                value={props.area.title}
            />
            <Delete
                class='font-bold hover:bg-red-500/50 p-1'
                data-id={props.area.id} 
                onClick={(e) => handleDelete(e)}
                value={'x'}
            />
        </div>
    )
}

export { ClimbingArea }