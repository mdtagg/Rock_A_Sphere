import { ReactComponent as PlusImg } from '../../../assets/svg/plus.svg'
import FormContext from '../../CurrentInfoDisplay/contexts/FormContext'
import { useContext } from 'react'

const AddAreaButton = () => {

    const { setToggleForm } = useContext(FormContext)

    function handleClick() {
        setToggleForm(true)
    }

    return (
        <button 
            class='flex justify-center items-center gap-1 bg-white border-2 border-black w-full rounded  hover:bg-green-500 wide:p-0'
            onClick={handleClick}
        >
            <PlusImg
                class='h-4 w-4 wide:h-3 wide:w-3'   
            />
            <p
                class=' font-semibold wide:text-xs'
            >
                Add Area
            </p>
        </button>
    )
}

export { AddAreaButton }