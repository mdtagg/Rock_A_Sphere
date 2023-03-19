import { ClimbingArea } from "../ClimbingArea"
import { v4 as uuidv4 } from 'uuid';

const AreaList = (props) => {
    return (
        <div class='grid grid-rows-3 grid-flow-col w-full gap-1 justify-center'>
            {props.climbingAreas.map(area => {
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