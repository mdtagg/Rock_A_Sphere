import { ReactComponent as PlusImg } from '../../../assets/svg/plus.svg'
import { FormContext } from '../../App/contexts/FormContext'
import { useContext } from 'react'

const AddAreaButton = () => {

    const { setToggleForm } = useContext(FormContext)!

    function handleClick() {
        setToggleForm(true)
    }

    return (
        <button 
            className='flex justify-center items-center gap-1 bg-white border-2 border-black w-full rounded  hover:bg-green-500 wide:p-0'
            onClick={handleClick}
        >
            <PlusImg
                className='h-4 w-4 wide:h-3 wide:w-3'   
            />
            <p
                className=' font-semibold wide:text-xs'
            >
                Add Area
            </p>
        </button>
    )
}

export { AddAreaButton }