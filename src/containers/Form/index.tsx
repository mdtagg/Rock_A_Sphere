
import { useState, useContext } from "react";
import { FormContext } from "../App/contexts/FormContext";

const Form = () => {

    const { setToggleForm, setClimbingAreas } = useContext(FormContext)!
    const [ error, setError ] = useState(false)
    const [ areaName,setAreaName ] = useState("")
    const [ coords,setCoords ] = useState("")
    const errorBorder = error ? "border-red-500" : "border-black"

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const coordinateRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/
        const coordTest = coordinateRegex.test(coords)
        if(!coordTest) {
            setError(true)
            alert('Incorrect GPS coordinate format, correct example:\n\n34.12564779384274, -118.92728653222501\n\ntwo digits followed by a decimal point and up to 14 other digits. \n\nA comma separating the coordinates')
            return
        }
        let [latitude,longitude] = coords.split(",")
        setError(false)
        setToggleForm(false)
        setClimbingAreas((prevAreas) => {
            return [
                ...prevAreas,
                {
                    title:areaName,
                    coords: {latitude,longitude},
                    id:coords
                }
            ]
        })
    }

    return (
        <form 
            onSubmit={(e) => handleSubmit(e)} 
            className='flex flex-col justify-center items-center p-3 gap-2 border-2 border-black rounded w-full wide:gap-4 xl:h-full'
        >
            <div className='flex gap-2 sm:flex-col sm:gap-0 xl:flex-col xl:w-1/3' >
                <label 
                    className='font-bold whitespace-nowrap' 
                    htmlFor='coords'
                >
                    Latitude/Longitude: 
                </label>
                <input 
                    className={`${errorBorder} border-2 placeholder:text-xs sm:w-fit wide:h-fit`} 
                    placeholder='copy + paste from google maps' 
                    type='text' 
                    id='coords' 
                    name='coords' 
                    required
                    onChange={(e) => setCoords(e.target.value)}
                >
                </input>
                <label 
                    className='font-bold whitespace-nowrap' 
                    htmlFor='name'
                >
                    Area Name: 
                </label>
                <input 
                    className='border-2 border-black sm:w-fit wide:h-fit' 
                    type='text' 
                    id='name' 
                    name='title' 
                    required
                    onChange={(e) => setAreaName(e.target.value)}
                >
                </input>
            </div>
            <div className='flex gap-3 justify-center items-center sm:h-1/5 wide:h-1/3 xl:w-1/4'>
                <button 
                    className='bg-green-500 text-white border-2 border-black rounded p-1 w-1/5 sm:w-[80px] wide:flex wide:justify-center wide:items-center wide:h-8 wide:w-20 xl:h-full' 
                    type='submit'
                >
                    Add
                </button>
                <button 
                    className='bg-red-500 rounded text-white border-2 border-black p-1 w-1/5 sm:w-1/2 wide:flex wide:justify-center wide:items-center wide:h-8 wide:w-20' 
                    onClick={() => setToggleForm(false)}
                >
                    Cancel
                </button>
            </div>
            <p 
                className='flex justify-center items-center font-semibold'
            >
                (Or click map!)
            </p>
        </form>
    )
}

export { Form }