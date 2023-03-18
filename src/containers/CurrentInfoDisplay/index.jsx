
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
                earthView={props.earthView}
                setEarthView={props.setEarthView}
                
            />
            <MapView 
                location={props.location} 
                climbingAreas={props.climbingAreas} 
                setClimbingAreas={props.setClimbingAreas}
                earthView={props.earthView}
                setEarthView={props.setEarthView}
            />
        </section>
    )
}

export { CurrentInfoDisplay }
