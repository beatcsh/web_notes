function Navbar() {
    return(
        <>
            <div class='bg-verde-fondo w-[100%] h-[80px] flex justify-between place-items-center px-4'>
                <div class='w-[100px] text-white flex justify-center text-2xl font-semibold'>Hi user</div>
                <div class='animate-pulse'>
                    <a href="/notes"><img class='w-[90px] hover:scale-[1.1] hover:cursor-pointer transition-all duration-200' src='../logoMoon.png' alt="Logo"/></a>
                </div>
                <div class='w-[100px] text-verde-fondo flex justify-center text-xl font-semibold bg-verde-moon p-1 rounded-lg hover:text-verde-moon hover:bg-white cursor-pointer transition-all duration-300'>Logout</div>
            </div>
        </>
    )
}

export default Navbar