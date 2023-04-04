
import { useState,useContext } from 'react';
import { AreaList } from '../AreaList';
import { AddAreaButton } from '../AddAreaButton';
import { NavArrows } from '../../components/NavArrows';
import CurrentInfoContext from '../App/contexts/CurrentInfoContext';
import DropDownContext from '../AreaTitle/contexts/DropDownContext';

const Locations = () => {

    const { climbingAreas } = useContext(CurrentInfoContext)
    const [ currentPageIndex, setCurrentPageIndex ] = useState(0)
    const { dropdown } = useContext(DropDownContext)

    const animation = 
    dropdown ? 'animate-fadeIn' : 'animate-fadeOut'

    return (
        <div class={`flex flex-col w-full ${animation} gap-1 pt-1 sm:gap-2`}>
            <NavArrows
                dataFocus={climbingAreas}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                pageLength={6}
            />
            <AreaList
                currentPageIndex={currentPageIndex}
            />
            <AddAreaButton />
        </div>
    )
}

export default Locations

