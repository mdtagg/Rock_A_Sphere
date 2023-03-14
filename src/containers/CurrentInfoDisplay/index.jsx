
import MapView from "../MapView"
import Menu from "../Menu"

const CurrentInfoDisplay = (props) => {

    return (
        <section class='flex gap-10'>
            <Menu 
                location={props.location}
                setLocation={props.setLocation}
                climbingAreas={props.climbingAreas}
                setClimbingAreas={props.setClimbingAreas}
                weatherData={props.weatherData}
            />
            <MapView 
                location={props.location} 
                climbingAreas={props.climbingAreas} 
            />
        </section>
    )
}

export default CurrentInfoDisplay
