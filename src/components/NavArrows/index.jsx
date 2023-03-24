import { ReactComponent as LeftCaret } from '../../assets/svg/left-caret.svg'
import { ReactComponent as RightCaret } from '../../assets/svg/right-caret.svg'
import { useState,useEffect } from 'react'


const NavArrows = (props) => {

    const { dataFocus,currentPageIndex,setCurrentPageIndex,pageLength } = props
    const [totalPages,setTotalPages] = useState(1)
    const [moveRight,setMoveRight] = useState(false)
    const [moveLeft,setMoveLeft] = useState(false)

    const bumpRight = 
    moveRight ? 'animate-bumpRight' : ''

    const bumpLeft = 
    moveLeft ? 'animate-bumpLeft' : ''

    function handlePageBack() {
        if(
            dataFocus.length <= pageLength  || 
            !dataFocus ||
            currentPageIndex === 0
            ) {
                return
            }
        setCurrentPageIndex((prevPage) => {
            prevPage -= 1
            return prevPage
        })
    }

    function handlePageForward() {
        if(!dataFocus.length > pageLength || 
            !dataFocus.length ||
            currentPageIndex === totalPages - 1) {
                return
            }
        setCurrentPageIndex((prevPage) => {
            prevPage += 1
            return prevPage
        })
    }

    useEffect(() => {

        if(!dataFocus.length) return 
        const pageNumbers = Math.ceil(dataFocus.length / pageLength)
        if(currentPageIndex === pageNumbers) {
            setCurrentPageIndex((prevIndex) => {
                prevIndex -= 1
                return prevIndex
            })
        }
        setTotalPages(pageNumbers)

    },[dataFocus])

    return (
        <div class='flex justify-center items-center'>
            <LeftCaret 
                class={`h-4 w-4 cursor-pointer rounded-full relative ${bumpLeft}`}
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
                class={`h-4 w-4 cursor-pointer rounded-full relative ${bumpRight}`}
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
    )
}

export { NavArrows }