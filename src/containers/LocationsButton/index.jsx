import { P as LocationTitle} from "../../components/P"
import {ReactComponent as DownCaret} from '../../assets/svg/downCaret.svg'
import { ReactComponent as Earth } from '../../assets/svg/earth.svg'
import { recenterMap } from "../MapView/utils/recenterMap"
import { View } from "ol"

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
        <div class='flex justify-center items-center gap-3'>
        <Earth
                class='flex justify-center items-center h-5 w-5 cursor-pointer'
                onClick={() => handleViewChange(props.setEarthView)}
            />
        <button 
            class='flex justify-center items-center gap-2' 
            onClick={handleClick}
        >
            <LocationTitle
                class='text-black font-bold text-3xl sm:text-xl wide:text-lg'
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
        