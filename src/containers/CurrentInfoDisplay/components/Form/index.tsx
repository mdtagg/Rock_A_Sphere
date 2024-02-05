
import { handleSubmit } from "./utils/handleSubmit";
import { useState, useEffect, useContext } from "react";
import { FormContext } from "../../../App/contexts/FormContext";

const Form = () => {

    const { setToggleForm,setClimbingAreas } = useContext(FormContext)!
    const [ error, setError ] = useState(false)
    const [ errorBorder, setErrorBorder ] = useState<string>()

    const submitProps = 
    { 
        setClimbingAreas, 
        setToggleForm, 
        setError 
    }

    function handleCancel() {
        setToggleForm(false)
    }

    useEffect(() => {
        const border =
        error ? 'border-2 border-red-600' :
        'border-2 border-black'
        setErrorBorder(border)
    },[error])

    return (
        <form 
            onSubmit={(e) => handleSubmit(e,submitProps)} 
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
                    className={`${errorBorder} placeholder:text-xs sm:w-fit wide:h-fit`} 
                    placeholder='copy + paste from google maps' 
                    type='text' 
                    id='coords' 
                    name='coords' 
                    required
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
                    required>
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
                    onClick={handleCancel}
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