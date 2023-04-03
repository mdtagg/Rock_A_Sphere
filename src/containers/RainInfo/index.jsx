import { ReactComponent as RainImg } from '../../assets/svg/rain.svg'

const RainInfo = (props) => {
    return (
        <div class='flex gap-2 items-center'>
            <RainImg
                class='h-5 w-5 wide:h-3 wide:w-3 sm:h-4 sm:w-4'
            />
            <p
                class='text-xl font-bold sm:text-base wide:text-xs'
            >
                {props.rainInfo[1]}
            </p>
            <p
                class='text-xl font-bold sm:text-base wide:text-xs italic'
            >
                In
            </p>
        </div>
    )
}

export { RainInfo }