import { v4 as uuidv4 } from 'uuid';

const KindsOfRock = (props) => {
    return (
        <div class='flex flex-col gap-1 p-1 items-center justify-center h-full sm:p-0 wide:text-xs'>
            {props.rockData.kindsOfRock.map(item => {
                return (
                    <div 
                        class="text-center rounded font-bold w-full border-2 text-clip overflow-hidden border-black sm:text-xs " 
                        style=
                        {{
                            backgroundColor: `${item.color}`, 
                            color: item.color === '#000000' ? 'white' : 'black'
                        }}
                        key={uuidv4()}
                    >
                        {item.name}
                    </div>
                )
            })}
        </div>
    )
}

export { KindsOfRock }