

function getWeatherIcon(weatherIcon) {
    let newIcon = ''
    weatherIcon === 0 ? newIcon = '/src/assets/svg/sun.svg' :
    weatherIcon >= 1 && weatherIcon <=3 ? newIcon = '/src/assets/svg/cloud-sun.svg':
    weatherIcon >= 45 && weatherIcon <= 48 ? newIcon = '/src/assets/svg/cloud.svg' :
    weatherIcon >= 71 && weatherIcon <= 77 ? newIcon = '/src/assets/svg/snow.svg':
    weatherIcon >= 95 && weatherIcon <= 99 ? newIcon = '/src/assets/svg/thunder.svg':
    newIcon = '/src/assets/svg/rain.svg'

    return newIcon
    
}

export { getWeatherIcon }