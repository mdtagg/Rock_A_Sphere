/// <reference types="../../../../svg.d.ts" />
import { ReactNode } from 'react'
import { ReactComponent as RainImg } from '../../../assets/svg/rain.svg'
import { TRainReadout } from '../../RainReadout'

interface TRainInfo {
    rainInfo: TRainReadout
}

const RainInfo = (props:TRainInfo) => {
    const rainInfo = props.rainInfo[1] as ReactNode

    return (
        <div className='flex gap-2 items-center'>
            <RainImg
                className='h-5 w-5 wide:h-3 wide:w-3 sm:h-4 sm:w-4'
            />
            <p
                className='text-xl font-bold sm:text-base wide:text-xs'
            >
                {rainInfo}
            </p>
            <p
                className='text-xl font-bold sm:text-base wide:text-xs italic'
            >
                In
            </p>
        </div>
    )
}

export { RainInfo }