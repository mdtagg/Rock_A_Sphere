

import { parseLatLong } from "./utils/parseLatLong"
import { v4 as uuidv4 } from 'uuid';

const Form = (props) => {

    function handleSubmit(e) {
        e.preventDefault()
        props.setToggleForm(false)
        const latLong = parseLatLong(e.target[0].value)
        const areaTitle = e.target[1].value
        props.setClimbingAreas((prevAreas) => {
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

    function handleCancel() {
        props.setToggleForm(false)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div class='flex gap-2 sm:flex-col wide:h-1/3'>
                <label class='font-bold' htmlFor='coords'>Latitude/Longitude: </label>
                <input class='border-2 border-black placeholder:text-xs' placeholder='copy + paste from google maps' type='text' id='coords' name='coords' required></input>
                <label class='font-bold' htmlFor='name'>Area Name: </label>
                <input class='border-2 border-black' type='text' id='name' name='title' required></input>
            </div>
            <div class='flex gap-3 justify-center mt-4 wide:h-1/3'>
                <button class='bg-green-500 text-white border-2 border-black rounded p-1 w-1/5 sm:w-1/2 wide:flex wide:justify-center wide:items-center' type='submit'>Add</button>
                <button class='bg-red-500 rounded text-white border-2 border-black p-1 w-1/5 sm:w-1/2 wide:flex wide:justify-center wide:items-center' onClick={handleCancel}>Cancel</button>
            </div>
        </form>
    )
}

export { Form }