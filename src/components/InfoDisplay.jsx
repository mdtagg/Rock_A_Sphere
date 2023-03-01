

const InfoDisplay = (props) => {
    return (
        <section class='flex'>
            {props.weatherData.days.map(item => {
                return <div class='text-white'>{item}</div>
            })}
        </section>
    )
}

export default InfoDisplay