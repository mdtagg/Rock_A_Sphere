import { P as LocationTitle} from "../../components/P"
import {ReactComponent as DownCaret} from '../../assets/svg/downCaret.svg'
import { ReactComponent as Earth } from '../../assets/svg/earth.svg'

const LocationsButton = (props) => {

    function handleClick() {
        props.setDropdown((prevState) => {
            return !prevState
        })
    }

    function handleViewChange(setEarthView) {
       setEarthView(true)
    }

    return (
        <div class='flex w-full justify-center items-center gap-5 '>
            <Earth
                    class='flex rounded-full justify-center items-center h-5 w-5 cursor-pointer hover:bg-slate-500/50'
                    onClick={() => handleViewChange(props.setEarthView)}
                />
            <button 
                class='flex w-2/3 rounded gap-2 justify-center items-center hover:bg-slate-500/50 xl:w-full' 
                onClick={handleClick}
            >
                <LocationTitle
                    class='text-black font-bold text-2xl sm:text-xl sm:truncate wide:truncate wide:text-lg xl:w-full'
                    value={props.location.title}
                />
                <DownCaret
                    class='flex justify-center items-center h-4 w-4'
                />
            </button>
        </div>
    )
}

export { LocationsButton }

// setMap((prevMap) => {
//     return {
//         target:prevMap.target,
//         layers:prevMap.layers,
//        center:[0,0],
//             zoom:1,
//             maxZoom:19
//         }),
//     }
// })
// console.log(props.map)     view: new View({
//             projection:'EPSG:3857',
        