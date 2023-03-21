

function removeOverlays(mapRef) {
    console.log(mapRef)
    mapRef.current.getOverlays().getArray().map(container => {
        container.element.remove()
    })
    mapRef.current.getOverlays().array_ = []
    // console.log(mapRef.current.getOverlays())
}

export { removeOverlays }