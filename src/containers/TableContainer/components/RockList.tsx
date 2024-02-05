import { KindOfRockType } from "../../App/types/app"

export const RockList = (props:{list:KindOfRockType[]}) => {

    return (
        <div className='h-full w-full gap-1 flex flex-col justify-center items-center'>
            {props.list.map(rock => {
             
                const { color, name } = rock

                return (
                    
                    <button 
                        className={`border-2 border-black rounded font-bold w-full text-center sm:text-xs sm:flex sm:justify-center sm:p-0  wide:text-xs`}
                        style={{backgroundColor:color}}
                    >
                        <a 
                            className='text-clip' 
                            href={`https://en.wikipedia.org/wiki/${name}`} 
                            target='_blank'
                        >
                            {name}
                        </a>
                    </button>
                
                )
            })}
        </div>
    )
}
