import { ReactComponent as Rain } from '../../../assets/svg/rain.svg'
import { ReactComponent as Sun } from '../../../assets/svg/sun.svg'
import { ReactComponent as CloudSun } from '../../../assets/svg/cloud-sun.svg'
import { ReactComponent as Cloud } from '../../../assets/svg/cloud.svg'
import { ReactComponent as Snow } from '../../../assets/svg/snow.svg'
import { ReactComponent as Thunder } from '../../../assets/svg/thunder.svg'

function GetWeatherIcon(weatherIcon) {
    return (
    weatherIcon === 0 ? Sun :
    weatherIcon === 1 ? CloudSun :
    weatherIcon >= 3 && weatherIcon <= 48 ? Cloud :
    weatherIcon >= 71 && weatherIcon <= 77 ? Snow :
    weatherIcon >= 95 && weatherIcon <= 99 ? Thunder :
    Rain
    )

}

export default GetWeatherIcon

