

function recenterMap(mapRef,webMerc) {
    mapRef.current.getView().setCenter(webMerc)
    mapRef.current.getView().setZoom(16)
}

export { recenterMap }