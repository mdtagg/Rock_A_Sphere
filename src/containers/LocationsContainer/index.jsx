
import { useState,useEffect,useContext } from 'react';
import { AddAreaButton } from './components/AddAreaButton';
import { NavArrows } from '../../components/NavArrows';
import CurrentInfoContext from '../App/contexts/CurrentInfoContext';
import DropDownContext from '../CurrentAreaContainer/contexts/DropDownContext';
import { ClimbingArea } from './components/ClimbingArea';
import { getPageData } from '../../components/NavArrows/utils/getPageData';
import { v4 as uuidv4 } from 'uuid';

const LocationsContainer = () => {

    const { climbingAreas } = useContext(CurrentInfoContext)
    const [ areaDisplay, setAreaDisplay ] = useState([])
    const [ currentPageIndex, setCurrentPageIndex ] = useState(0)
    const { dropdown } = useContext(DropDownContext)

    const animation = 
    dropdown ? 'animate-fadeIn' : 'animate-fadeOut'

    useEffect(() => {
        getPageData(currentPageIndex,climbingAreas,setAreaDisplay,6)
    },[currentPageIndex,climbingAreas])

    return (
        <div class={`flex flex-col w-full ${animation} gap-1 pt-1 sm:gap-2`}>
            <NavArrows
                dataFocus={climbingAreas}
                currentPageIndex={currentPageIndex}
                setCurrentPageIndex={setCurrentPageIndex}
                pageLength={6}
            />
            <div class='grid grid-rows-3 grid-cols-2 gap-1 w-full'>
                {areaDisplay.map(area => {
                    return (
                        <ClimbingArea 
                            area={area}
                            key={uuidv4()}
                        />
                    )
                })}
            </div>
            <AddAreaButton />
        </div>
    )
}

export { LocationsContainer }

