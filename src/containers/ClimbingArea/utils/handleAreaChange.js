function handleAreaChange(props) {
    const { setDropdown,setLocation,area } = props
    setDropdown(false)
    setLocation(area)
}

export { handleAreaChange }