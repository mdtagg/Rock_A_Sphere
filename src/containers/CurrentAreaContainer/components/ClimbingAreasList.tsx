import { useContext } from "react"
import { FormContext } from "../../App/contexts/FormContext"
import { LocationContext } from "../../App/contexts/FormContext"
import { TClimbingAreas,TClimbingArea } from "../../App/types/app"
import DropDownContext from "../contexts/DropDownContext"

export const ClimbingAreasList = (props:{list:TClimbingAreas}) => {

    const { setClimbingAreas, climbingAreas,setToggleForm } = useContext(FormContext)!
    const { setLocation } = useContext(LocationContext)!
    const { setDropdown } = useContext(DropDownContext)!
    const { list } = props

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
        <div
            className="grid grid-rows-3 px-6 grid-cols-2 gap-1 w-full"
        >
        {list.map(area => {
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
        })
        }
            <button
                className="w-full border-2 font-medium hover:bg-green-500 border-black col-start-1 col-end-3 bg-white rounded sm:text-[9px]"
                onClick={() => setToggleForm(true)}
            >
                Add Area
            </button>
        </div>
    )
}

