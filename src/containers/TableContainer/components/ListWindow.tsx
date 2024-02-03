import { ReactComponent as LeftCaret } from '../../../assets/svg/left-caret.svg'
import { ReactComponent as RightCaret} from '../../../assets/svg/right-caret.svg'
import { useState,useEffect } from 'react'

export const ListWindow = (props:{reRenderData:any,data:any,pages:number,MappingComponent:any}) => {
   
    const {reRenderData,data,MappingComponent,pages} = props
    const List = MappingComponent
    const [ currentPageIdx,setCurrentPageIdx ] = useState([0,pages])
    const [ dataWindow,setDataWindow ] = useState(props.data.slice(0,pages))
    const [moveRight,setMoveRight] = useState(false)
    const [moveLeft,setMoveLeft] = useState(false)

    const bumpRight = 
    moveRight ? 'animate-bumpRight' : ''

    const bumpLeft = 
    moveLeft ? 'animate-bumpLeft' : ''

    function handlePageBack() {
        const [start,end] = currentPageIdx
        if(start > 0) {
            setCurrentPageIdx([start - pages,end - pages])
        }
    }

    function handlePageForward() {
        const [start,end] = currentPageIdx
        if(end <= data.length) {
            setCurrentPageIdx([start + pages,end + pages])
        }
    }

    useEffect(() => {
        setDataWindow(data.slice(currentPageIdx[0],currentPageIdx[1]))
    },[currentPageIdx,reRenderData])

    return (
        <div className='flex flex-col h-full w-full justify-center items-center'>
            <List
                list={dataWindow}
            />
            <div className='flex'>
                <LeftCaret 
                    className={`h-4 w-4 cursor-pointer rounded-full relative ${bumpLeft}`}
                    onClick={() => {
                        handlePageBack()
                        setMoveRight(false)
                        setMoveLeft(true)
                    }}
                    onAnimationEnd={() => {
                        setMoveLeft(false)
                    }}
                />
                <RightCaret 
                    className={`h-4 w-4 cursor-pointer rounded-full relative ${bumpRight}`}
                    onClick={() => {
                        handlePageForward()
                        setMoveLeft(false)
                        setMoveRight(true)
                    }}
                    onAnimationEnd={() => {
                        setMoveRight(false)
                    }}
                />
            </div>
            
        </div>
    )
}