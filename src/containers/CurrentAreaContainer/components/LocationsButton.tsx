/// <reference types="../../../../svg.d.ts" />
import { ReactComponent as DownCaret } from '../../../assets/svg/downCaret.svg'
import { ReactComponent as Earth } from '../../../assets/svg/earth.svg'
import { useContext } from "react"
import CurrentInfoContext from "../../App/contexts/CurrentInfoContext"
import EarthViewContext from "../../CurrentInfoDisplay/contexts/MapViewContext"
import DropDownContext from '../contexts/DropDownContext'
import { ReactSetter } from '../../App/types/app'

const LocationsButton = () => {

    const { dropdown, setDropdown } = useContext(DropDownContext)!
    const { location } = useContext(CurrentInfoContext)!
    const { setEarthView } = useContext(EarthViewContext)!

    const rotate = 
    dropdown ? 'animate-spinUp transform rotate-[540deg]' : 'animate-spinDown'

    function handleViewChange(setEarthView:ReactSetter<boolean>) {
       setEarthView(true)
    }
    return (
        <div className='flex w-full gap-2 justify-center items-center xl:w-auto'>
            <Earth
                className='flex rounded-[100%] justify-center items-center h-6 w-7 cursor-pointer hover:bg-slate-500/50 sm:w-5 sm:h-5 wide:h-5 wide:w-5'
                onClick={() => handleViewChange(setEarthView)}
            />
            <button 
                className='flex rounded gap-2 justify-center items-center sm:w-3/4 wide:w-3/4 xl:w-full' 
                onClick={() => {
                    setDropdown(!dropdown)
                }}
            >
                <p
                    className='text-black font-bold text-2xl sm:text-xl sm:truncate wide:truncate wide:text-base xl:w-full'
                >
                    {location.title}
                </p>
                <DownCaret
                    className={`flex justify-center items-center h-4 w-4 ${rotate}`}
                />
            </button>
        </div>
    )
}

export { LocationsButton }

        