import { ClimbingArea } from "../ClimbingArea"
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";

const AreaList = (props) => {

    const [areaDisplay,setAreaDisplay] = useState([])

    useEffect(() => {
        let areaStartIndex = props.currentPageIndex
        if(props.currentPageIndex > 0) {
            areaStartIndex *= 6
        }
        const areaEndIndex = areaStartIndex + 6
        const areaSlice = props.climbingAreas.slice(areaStartIndex,areaEndIndex)
        setAreaDisplay(areaSlice)
    },[props.currentPageIndex,props.climbingAreas])

    return (
        <div class='grid grid-rows-3 grid-flow-col gap-1'>
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