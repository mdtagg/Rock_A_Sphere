import { v4 as uuidv4 } from 'uuid';

const KindsOfRock = (props) => {
    return (
        <div class='flex flex-col gap-1 p-1 items-center justify-center h-full sm:p-0 wide:text-xs'>
            {props.rockData.kindsOfRock.map(item => {
                const rockName = 
                item.name === 'conglomerate' ? 'conglomerate-rock':
                item.name === 'plutonic' ? 'intrusive-rock':
                item.name === 'volcanic' ? 'extrusive-rock':
                item.name
                
                return (
                    <button 
                        class="text-center rounded font-bold w-full border-2 text-clip overflow-hidden border-black sm:text-xs " 
                        style=
                        {{
                            backgroundColor: `${item.color}`, 
                            color: item.color === '#000000' ? 'white' : 'black'
                        }}
                        key={uuidv4()}
                    >
                        <a href={`https://www.britannica.com/science/${rockName}`} target='_blank'>{item.name}</a>
                    </button>
                )
            })}
        </div>
    )
}

export { KindsOfRock }