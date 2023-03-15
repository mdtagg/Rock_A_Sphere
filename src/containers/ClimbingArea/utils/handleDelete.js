function handleDelete(e,props) {
    const { climbingAreas,setClimbingAreas } = props
    e.preventDefault()
    const { id } = e.target.dataset
    const filteredAreas = climbingAreas.filter(area => area.id !== id)
    setClimbingAreas(filteredAreas)
}

export { handleDelete }