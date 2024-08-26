import React from "react";
import { Navbar, Footer } from "../components";

function Main() {
    return (
        <>
            <Navbar />
            <div class='h-auto w-[100%] grid place-items-center bg-negro-fondo text-white'>
                <h1 class='w-[50%] text-center py-6 text-4xl font-semibold border-b-2 border-verde-moon'>Remember..</h1>
                
            </div>
            <Footer />
        </>
    )
}

export default Main