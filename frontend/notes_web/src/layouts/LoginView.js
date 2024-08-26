import React, { useState } from "react"
import axios from 'axios'

function LoginView() {
    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        loginServer(username, pass)
    }

    function loginServer(username, pass) {
        const user = {
            username: username,
            pass: pass
        }
        axios.post('api/users/login', user)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log(err.response.data.error)
            })
    }

    return (
        <>
            <div class='w-[100%] h-[100vh] bg-negro-fondo flex flex-col place-items-center justify-center'>
                <img class='w-[200px] animate-pulse' src="../logoMoon.png" />
                <form class='grid place-items-center'>
                    {/* <h1 class='text-3xl text-negro-fondo font-semibold'>Moon Notes</h1> */}
                    <input type='text' placeholder="Username" class='p-2 bg-gray-100 w-[300px] rounded-lg text-lg'/>
                    <input type='password' placeholder="Password" class='mt-6 p-2 bg-gray-100 w-[300px] rounded-lg text-lg'/>
                    <button type='submit' class='mt-6 bg-verde-moon text-white text-lg font-semibold w-[190px] p-2 rounded-xl
                                                            hover:bg-white hover:text-verde-moon transition-all duration-300 cursor-pointer'>
                        Accept
                    </button>
                </form>
            </div>
        </>
    )
}

export default LoginView