

const MapList = (props) => {
    const {component} = props
    return (
        <div>
            {props.array.map(item => {
                return (
                    component
                )
            })}
        </div>
    )
}

export { MapList }