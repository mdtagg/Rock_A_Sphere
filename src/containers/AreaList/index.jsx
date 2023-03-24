import { ClimbingArea } from "../ClimbingArea"
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";
import { getPageData } from "../../components/NavArrows/utils/getPageData";

const AreaList = (props) => {

    const [areaDisplay,setAreaDisplay] = useState([])

    useEffect(() => {
        const { currentPageIndex,climbingAreas } = props
        getPageData(currentPageIndex,climbingAreas,setAreaDisplay,6)
    },[props.currentPageIndex,props.climbingAreas])

    return (
        <div class='grid grid-rows-3 grid-cols-2 gap-1 '>
            {areaDisplay.map(area => {
                return (
                    <ClimbingArea 
                        area={area}
                        setDropdown={props.setDropdown}
                        setLocation={props.setLocation}
                        climbingAreas={props.climbingAreas}
                        setClimbingAreas={props.setClimbingAreas}
                        key={uuidv4()}
                    />
                )
            })}
        </div>
    )
}

export { AreaList }