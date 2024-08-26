function Footer() {
    return (
        <>
            <div class='bg-verde-fondo w-[100%] grid place-items-center py-4'>
                {/* <div class='grid-grid-cols-3 place-items-center'>
                    <a><i class='w-[80px] bx bxl-facebook-circle'></i></a>
                    <a><i class='w-[80px] bx bxl-instagram-alt' ></i></a>
                    <a><i class='w-[80px] bx bxl-tiktok' ></i></a>
                </div> */}
                <div class='w-[50%] h-[70px] grid grid-cols-3 place-items-center'>
                    <a class='text-center text-2xl text-gray-100 hover:scale-125 hover:cursor-pointer transition-all duration-200'><i class='bx bxl-facebook-circle'></i></a>
                    <a class='text-center text-2xl text-gray-100 hover:scale-125 hover:cursor-pointer transition-all duration-200'><i class='bx bxl-instagram-alt' ></i></a>
                    <a class='text-center text-2xl text-gray-100 hover:scale-125 hover:cursor-pointer transition-all duration-200'><i class='bx bxl-tiktok' ></i></a>
                </div>
                <h3 class='font-bold text-gray-100 text-xl my-4'>@beatcshz</h3>
            </div >
        </>
    )
}

export default Footer