
import { handleSubmit } from "./utils/handleSubmit";
import { handleCancel } from "./utils/handleCancel";

const Form = (props) => {

    return (
        <form onSubmit={(e) => handleSubmit(e,props)} class='flex flex-col gap-2'>
            <div class='flex gap-2 sm:flex-col wide:h-1/3 sm:gap-0'>
                <label class='font-bold whitespace-nowrap' htmlFor='coords'>Latitude/Longitude: </label>
                <input class='border-2 border-black placeholder:text-xs sm:w-fit wide:h-fit' placeholder='copy + paste from google maps' type='text' id='coords' name='coords' required></input>
                <label class='font-bold whitespace-nowrap' htmlFor='name'>Area Name: </label>
                <input class='border-2 border-black sm:w-fit wide:h-fit' type='text' id='name' name='title' required></input>
            </div>
            <div class='flex gap-3 justify-center items-center sm:h-1/5 wide:h-1/3'>
                <button class='bg-green-500 text-white border-2 border-black rounded p-1 w-1/5 sm:w-1/2 wide:flex wide:justify-center wide:items-center wide:h-8' type='submit'>Add</button>
                <button class='bg-red-500 rounded text-white border-2 border-black p-1 w-1/5 sm:w-1/2 wide:flex wide:justify-center wide:items-center wide:h-8' onClick={() => handleCancel(props)}>Cancel</button>
            </div>
            <p class='flex justify-center items-center font-bold'>Or click map!</p>
        </form>
    )
}

export { Form }