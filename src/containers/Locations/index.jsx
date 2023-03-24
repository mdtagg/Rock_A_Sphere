
import { useState } from 'react';
import { AreaList } from '../AreaList';
import { AddAreaButton } from '../AddAreaButton';
import { NavArrows } from '../../components/NavArrows';

const Locations = (props) => {

    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    
    return (
        <div class='flex flex-col w-full gap-1 '>
            <NavArrows
                dataFocus={props.climbingAreas}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                pageLength={6}
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
