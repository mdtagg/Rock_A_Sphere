import { P as RainAmt} from '../../components/P';
import { P as Inches } from '../../components/P';
import { P as Day } from '../../components/P'
import { Image } from '../../components/Image';
import { ReactComponent as Rain } from '../../assets/svg/rain.svg'

const RainSquare = (props) => {

    const { item } = props

    return (
        <div 
            class={`flex flex-col justify-center items-center border-2 border-black p-6 ${item[2]} gap-3 sm:p-2 sm:items-center wide:gap-0 wide:p-2`}
        >
            <Day
                class='text-3xl gap-3 wide:text-sm wide:font-bold'
                value={item[0]}
            />
            <div class='flex gap-2 items-center wide:gap-2'>
                {/* <Image
                    class='h-5 w-5 wide:h-3 wide:w-3'
                    src='/src/assets/svg/rain.svg'
                /> */}
                <Rain
                    class='h-5 w-5 wide:h-3 wide:w-3'
                />
                <RainAmt
                    class='text-xl font-bold wide:text-xs'
                    value={`${item[1]}`}
                />
                
                <Inches
                    class='text-xl font-bold wide:text-xs italic'
                    value='In'
                />
            </div>
        </div>
        )
}

export { RainSquare }