
// import { useState } from 'react'
// import { Form } from '../Form';
import { AreaList } from '../AreaList';
import { AddAreaButton } from '../AddAreaButton';

const Locations = (props) => {

    // const [toggleForm,setToggleForm] = useState(false)

    return (
        // <>
            
            <div class='flex flex-col gap-1 w-full'>
                <AreaList
                    climbingAreas={props.climbingAreas}
                    setClimbingAreas={props.setClimbingAreas}
                    setDropdown={props.setDropdown}
                    setLocation={props.setLocation}
                />
                <AddAreaButton 
                    setToggleForm={props.setToggleForm}
                />
            </div>
            // }
            // {toggleForm &&
                // <Form 
                //     setToggleForm={setToggleForm}
                //     setClimbingAreas={props.setClimbingAreas}
                // />
            // }
        // </>
    )
}

export default Locations
