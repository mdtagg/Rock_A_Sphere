
import { useState } from 'react';
import { AreaList } from '../AreaList';
import { AddAreaButton } from '../AddAreaButton';
import { NavArrows } from "../NavArrows"

const Locations = (props) => {

    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    
    return (
        <div class='flex flex-col gap-1'>
            <NavArrows
                climbingAreas={props.climbingAreas}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
            />
            <AreaList
                climbingAreas={props.climbingAreas}
                setClimbingAreas={props.setClimbingAreas}
                setDropdown={props.setDropdown}
                setLocation={props.setLocation}
                currentPageIndex={currentPageIndex}
            />
            <AddAreaButton 
                setToggleForm={props.setToggleForm}
            />
        </div>
    )
}

export default Locations
