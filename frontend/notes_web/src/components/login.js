import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        log_fun(email, pass);
      };

    function log_fun(email, pass) {
        alert('los tomo')
    }
    return (
        <>
            <div className="flex justify-center place-items-center rounded-xl m-4
                        md:w-[380px] sm:w-[270px] h-auto p-8 shadow-xl bg-white border-2">
                <div className="m-4 p-4">
                    <h1 className="flex justify-center text-2xl font-bold mb-4 text-blue-900">Notes APP</h1>
                    <form className="grid place-items-center gap-6" onSubmit={handleSubmit}>
                        <input className="md:w-[240px] h-[30px] sm:w[200px] px-2 rounded-lg 
                                border-2 shadow-md text-sm" type="email" placeholder="@ Email" id="email" name="pass" value={email}
                            onChange={handleEmailChange}></input>
                        <input className="md:w-[240px] h-[30px] sm:w[200px] px-2 rounded-lg 
                                border-2 shadow-md text-sm" type="password" placeholder="Password" id="pass" name="pass" value={pass}
                            onChange={handlePasswordChange}></input>
                        <button className="w-[160px] h-[30px] rounded-lg bg-blue-500 font-bold text-white
                                        hover:rounded-xl hover:bg-blue-600 hover:cursor-pointer ease-in duration-300"
                            type="submit">
                            Submit
                        </button>
                        <div className="grid grid-cols-2 gap-2 w-fill text-xs text-blue-600">
                            <a href="/" className="hover:cursor-pointer hover:text-blue-400 ease-in duration-300">Sign up</a>
                            <a href="/" className="hover:cursor-pointer hover:text-blue-400 ease-in duration-300">Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Login;