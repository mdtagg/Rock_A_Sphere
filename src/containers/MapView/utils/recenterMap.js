
function recenterMap(mapRef,place) {
    mapRef.current.getView().setCenter(place)
}

export { recenterMap }