

function removeOverlays(mapRef) {
    
    mapRef.current.getOverlays().getArray().map(container => {
        container.element.remove()
    })
    mapRef.current.getOverlays().array_ = []
}

export { removeOverlays }