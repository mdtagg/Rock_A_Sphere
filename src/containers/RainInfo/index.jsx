import { P as RainAmt} from '../../components/P';
import { P as Inches } from '../../components/P';
import { ReactComponent as RainImg } from '../../assets/svg/rain.svg'

const RainInfo = (props) => {
    return (
        <div class='flex gap-2 items-center'>
            <RainImg
                class='h-5 w-5 wide:h-3 wide:w-3 sm:h-4 sm:w-4'
            />
            <RainAmt
                class='text-xl font-bold sm:text-base wide:text-xs'
                value={`${props.rainInfo[1]}`}
            />
            <Inches
                class='text-xl font-bold sm:text-base wide:text-xs italic'
                value='In'
            />
        </div>
    )
}

export { RainInfo }