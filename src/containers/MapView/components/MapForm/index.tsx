import { useState,useContext,SyntheticEvent } from "react"
import { cancelPoint } from "./helpers/cancelPoint"
import { Map } from "ol"
import { Coordinate } from "ol/coordinate"
// import CurrentInfoContext from "../../../App/contexts/CurrentInfoContext"
import { FormContext } from "../../../App/contexts/FormContext"
import { transform } from 'ol/proj';

type MapFormProps = {
    mapRef:React.MutableRefObject<Map>
    popupElement: React.MutableRefObject<HTMLFormElement>
    clickCoords: Coordinate
    areaId: string
    map:Map
}

const MapForm = (props:MapFormProps) => {
    const { mapRef,popupElement,clickCoords,areaId,map } = props
    const { setClimbingAreas } = useContext(FormContext)!
    const [ areaName, setAreaName ] = useState('')

    function handleSubmit(e:SyntheticEvent) {
        e.preventDefault()
        mapRef.current.getOverlays().clear()
        const transformedCoords = transform(clickCoords,'EPSG:3857','EPSG:4326')
        setClimbingAreas((prevAreas) => {
            return [
                ...prevAreas,
                {
                    title:areaName,
                    coords: {
                        latitude:transformedCoords[1].toString(),
                        longitude:transformedCoords[0].toString()
                    },
                    id: areaId
                }
            ]
        })
    }

    function handleInput(e:React.BaseSyntheticEvent) {
        const { value } = e.target
        setAreaName(value)
    }

    function deleteOverlay(e:React.BaseSyntheticEvent) {
        e.preventDefault()
        cancelPoint(mapRef,map)
        mapRef.current.getOverlays().clear()
    }

    return (
        <form 
                className='h-14 w-32 flex flex-col justify-between relative bottom-[70px] right-[64px] bg-slate-300/75 border-2 border-black rounded text-xs'
                ref={popupElement}
            >
                <div className='h-1/2 flex flex-col'>
                    <label 
                        htmlFor='area-name'
                    >
                        Area Name: 
                    </label>
                    <input 
                        id='area-name' 
                        name='areaName'
                        onChange={(e) => handleInput(e)}
                    >
                    </input>
                </div>
                <div className='h-1/3 flex'>
                    <button 
                        className='flex justify-center items-center w-1/2 bg-green-500 hover:bg-green-700 text-white border border-black' 
                        onClick={(e) => handleSubmit(e)}
                    >
                        Add
                    </button>
                    <button 
                        className='flex justify-center items-center h-full w-1/2 bg-red-600 hover:bg-red-800 text-white border border-black' 
                        onClick={deleteOverlay}
                    >
                        Cancel
                    </button>
                </div>
            </form>
    )
}

export { MapForm }