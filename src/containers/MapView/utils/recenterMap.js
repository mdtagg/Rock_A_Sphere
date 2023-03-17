
function recenterMap(mapRef,place) {
    mapRef.current.getView().setCenter(place)
    mapRef.current.getView().setZoom(16)
}

export { recenterMap }