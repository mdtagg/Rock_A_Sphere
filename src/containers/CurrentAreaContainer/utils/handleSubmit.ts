import { parseLatLong } from "./parseLatLong"
import { v4 as uuidv4 } from 'uuid';
import { ReactSetter,TClimbingAreas } from "../../App/types/app";

type submitProps = {
    setClimbingAreas: ReactSetter<TClimbingAreas>
    setToggleForm: React.Dispatch<React.SetStateAction<boolean>>
    setError: React.Dispatch<React.SetStateAction<boolean>>
}

export type LatLong = {
    latitude: string,
    longitude: string
}

function handleSubmit(e:React.FormEvent,submitProps:submitProps) {
    e.preventDefault()
    const { setToggleForm,setClimbingAreas,setError } = submitProps
    const target = e.target as HTMLFormElement
    const input = target[0] as HTMLInputElement
    const areaName = target[1] as HTMLInputElement
    const value = input.value

    let latLong:LatLong
    
    if(value[0] === '(' && value[value.length - 1] === ')') {
        latLong = parseLatLong(value)
    }else {
        const coordinateRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
        const coordTest = coordinateRegex.test(value)
        if(!coordTest) {
            setError(true)
            alert('Incorrect GPS coordinate format, correct examples:\n\n34.12564779384274, -118.92728653222501\n(34.12564779384274, -118.92728653222501)\n34.12,-118.92\n\ntwo digits followed by a decimal point and up to 14 other digits. \nA comma separating the coordinates\nparenthesis on the start and end are ok')
            return
        }else {
            setError(false)
            latLong = parseLatLong(value)
        }
    }
    setToggleForm(false)
    const areaTitle = areaName.value
    setClimbingAreas((prevAreas) => {
        return [
            ...prevAreas,
            {
                title:areaTitle,
                coords: latLong,
                id:uuidv4()
            }
        ]
    })
}

export { handleSubmit }