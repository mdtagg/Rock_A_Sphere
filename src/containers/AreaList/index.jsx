import { ClimbingArea } from "../ClimbingArea"
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect,useContext } from "react";
import { getPageData } from "../../components/NavArrows/utils/getPageData";
import CurrentInfoContext from "../App/contexts/CurrentInfoContext";


const AreaList = (props) => {

    const { climbingAreas } = useContext(CurrentInfoContext)
    const [areaDisplay,setAreaDisplay] = useState([])

    useEffect(() => {
        const { currentPageIndex } = props
        getPageData(currentPageIndex,climbingAreas,setAreaDisplay,6)
    },[props.currentPageIndex,climbingAreas])

    return (
        <div class='grid grid-rows-3 grid-cols-2 gap-1 w-full'>
            {areaDisplay.map(area => {
                return (
                    <ClimbingArea 
                        area={area}
                        setDropdown={props.setDropdown}
                        key={uuidv4()}
                    />
                )
            })}
        </div>
    )
}

export { AreaList }