import { ClimbingArea } from "./ClimbingArea"

const AreaList = (props) => {
    return (
        <div class='grid grid-rows-3 grid-flow-col w-full gap-1'>
            {props.climbingAreas.map(area => {
                return (
                    <ClimbingArea 
                        area={area}
                        setDropdown={props.setDropdown}
                        setLocation={props.setLocation}
                    />
                )
            })}
        </div>
    )
}

export { AreaList }