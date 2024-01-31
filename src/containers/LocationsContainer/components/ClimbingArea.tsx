import { useContext } from "react";
import DropDownContext from "../../CurrentAreaContainer/contexts/DropDownContext";
import { TClimbingArea } from "../../App/types/app";
import { FormContext,LocationContext } from "../../App/contexts/FormContext";

interface TArea {
    area:TClimbingArea
    key:string
}

const ClimbingArea = (props:TArea) => {
    const { area }:TArea = props
    const { setClimbingAreas,climbingAreas } = useContext(FormContext)!
    const {setLocation} = useContext(LocationContext)!
    const { setDropdown } = useContext(DropDownContext)!

    function handleAreaChange(area:TClimbingArea) {
        setDropdown(false)
        setLocation(area)
    }

    function handleDelete(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const { id } = e.currentTarget.dataset
        const filteredAreas = climbingAreas.filter(area => area.id !== id)
        setClimbingAreas(filteredAreas)
    }

    return (
        <div className='flex w-full gap-2 items-center bg-white rounded border-2 border-black sm:text-[9px] sm:font-bold sm:w-[90px] wide:w-[95px] wide:text-base transition-[height] ease-in duration-300' >
            <button
                className='h-[25px] w-full flex justify-start truncate font-medium items-center hover:bg-slate-500/50 sm:h-[20px] wide:text-[11px] wide:h-[10px]' 
                onClick={() => handleAreaChange(area)} 
            >
                
                {area.title}
            </button>
            <button
                className='font-bold hover:bg-red-500/50 pr-1 wide:text-sm'
                data-id={area.id} 
                onClick={(e) => handleDelete(e)}
            >
                x
            </button>
        </div>
    )
}

export { ClimbingArea }