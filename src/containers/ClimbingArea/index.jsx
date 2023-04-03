import { useContext } from "react";
import CurrentInfoContext from "../App/contexts/CurrentInfoContext";

const ClimbingArea = (props) => {

    const { setLocation,setClimbingAreas,climbingAreas } = useContext(CurrentInfoContext)

    function handleAreaChange(area) {
        props.setDropdown(false)
        setLocation(area)
    }

    function handleDelete(e) {
        const { id } = e.target.dataset
        const filteredAreas = climbingAreas.filter(area => area.id !== id)
        setClimbingAreas(filteredAreas)
    }

    return (
        <div class='flex w-full gap-2 items-center bg-white rounded border-2 border-black sm:text-[9px] sm:font-bold sm:w-[90px] wide:w-[95px] wide:text-base transition-[height] ease-in duration-300' >
            <button
                class='h-[25px] w-full flex justify-start truncate font-medium items-center hover:bg-slate-500/50 sm:h-[20px] wide:text-[11px] wide:h-[10px]' 
                onClick={() => handleAreaChange(props.area)} 
            >
                
                {props.area.title}
            </button>
            <button
                class='font-bold hover:bg-red-500/50 pr-1 wide:text-sm'
                data-id={props.area.id} 
                onClick={(e) => handleDelete(e)}
            >
                x
            </button>
        </div>
    )
}

export { ClimbingArea }