import { parseLatLong } from "./parseLatLong"
import { v4 as uuidv4 } from 'uuid';

function handleSubmit(e,props) {
    const { setToggleForm,setClimbingAreas } = props
    e.preventDefault()
    setToggleForm(false)
    const latLong = parseLatLong(e.target[0].value)
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