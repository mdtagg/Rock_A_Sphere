
import { useState,useContext } from 'react';
import { AreaList } from '../AreaList';
import { AddAreaButton } from '../AddAreaButton';
import { NavArrows } from '../../components/NavArrows';
import CurrentInfoContext from '../App/contexts/CurrentInfoContext';

const Locations = (props) => {

    const { climbingAreas } = useContext(CurrentInfoContext)
    const [currentPageIndex,setCurrentPageIndex] = useState(0)
    
    return (
        <div class='flex flex-col w-full gap-1 pt-1 sm:gap-2'>
            <NavArrows
                dataFocus={climbingAreas}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                pageLength={6}
            />
            <AreaList
                setDropdown={props.setDropdown}
                currentPageIndex={currentPageIndex}
            />
            <AddAreaButton 
                setToggleForm={props.setToggleForm}
            />
        </div>
    )
}

export default Locations
