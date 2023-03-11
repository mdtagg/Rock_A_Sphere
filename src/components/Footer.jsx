

const Footer = () => {
    return (
        <footer class='flex items-center h-10 bg-gray-100/75 justify-between md:h-6'>
            <div class='flex justify-center m-auto items-center gap-2'>
                <p class='text-black text-2xl font-medium sm:text-sm sm:font-medium md:text-sm'>Developed by Michael Tagg</p>
                <a href='https://github.com/mdtagg'>
                    <img 
                        class='h-5 w-5 md:h-3 md:w-3' src='github.svg'>
                    </img>
                </a>
            </div>
            <div  class='text-black text-xs flex flex-col items-end' style={{lineHeight:'10px',fontSize:'8px'}}>
                <p>Background Photo By: </p>
                <p>
                    <a href='https://unsplash.com/@aaronburden'><i>Aaron Burden</i></a>
                </p>
            </div>
        </footer>
    )
}

export default Footer