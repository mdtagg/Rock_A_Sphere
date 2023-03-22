import { parseLatLong } from "./parseLatLong"
import { v4 as uuidv4 } from 'uuid';

function handleSubmit(e,props,setError) {
    e.preventDefault()
    const { setToggleForm,setClimbingAreas } = props
    const input = e.target[0].value
    let latLong
    
    if(input[0] === '(' && input[input.length - 1] === ')') {
        latLong = parseLatLong(input)
        
    }else {
        const coordinateRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
        const coordTest = coordinateRegex.test(input)
        if(!coordTest) {
            setError(true)
            alert('Incorrect GPS coordinate format, correct examples:\n\n34.12564779384274, -118.92728653222501\n(34.12564779384274, -118.92728653222501)\n34.12,-118.92\n\ntwo digits followed by a decimal point and up to 14 other digits. \nA comma separating the coordinates\nparenthesis on the start and end are ok')
            return
        }else {
            setError(false)
            latLong = parseLatLong(input)
        }
    }
    setToggleForm(false)
    const areaTitle = e.target[1].value
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