
import MapView from "../MapView"
import { AreaTitle } from "../AreaTitle"

const CurrentInfoDisplay = (props) => {
    return (
        <section class='flex gap-10 sm:gap-5'>
            <AreaTitle 
                location={props.location}
                setLocation={props.setLocation}
                climbingAreas={props.climbingAreas}
                setClimbingAreas={props.setClimbingAreas}
                weatherData={props.weatherData}
            />
            <MapView 
                location={props.location} 
                climbingAreas={props.climbingAreas} 
                setClimbingAreas={props.setClimbingAreas}
            />
        </section>
    )
}

export { CurrentInfoDisplay }
