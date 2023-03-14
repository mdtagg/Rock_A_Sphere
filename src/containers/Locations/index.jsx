
import { useState } from 'react'
import { Form } from './Form';
import { ButtonImage as AddAreaButton } from '../../components/ButtonImage';
import { AreaList } from './AreaList';

const Locations = (props) => {

    const [toggleForm,setToggleForm] = useState(false)

    function handleClick() {
        setToggleForm(true)
    }

    return (
        <>
            {!toggleForm &&
            <div class='flex flex-col gap-3 w-full'>
                <AreaList
                    climbingAreas={props.climbingAreas}
                    setDropdown={props.setDropdown}
                    setLocation={props.setLocation}
                />
                <AddAreaButton 
                    btnClass='flex justify-center gap-1 items-center bg-white border-2 border-black w-full rounded p-1 hover:bg-green-500 wide:p-0 wide:text-xs'
                    onClick={handleClick}
                    imgClass='h-4 w-4 wide:h-3 wide:w-3'
                    src='/src/assets/svg/plus.svg'
                    value='Add Area'
                    left={true}
                />
            </div>
            }
            {toggleForm &&
                <Form 
                    setToggleForm={setToggleForm}
                    setClimbingAreas={props.setClimbingAreas}
                />
            }
        </>
    )
}

export default Locations
