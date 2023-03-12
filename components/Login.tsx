"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";

function Login() {
  return (
    <div className ="bg-[#19aa86] h-screen flex flex-col  items-center justify-center text-center">
        <Image
         src="data:image/png;base64,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"
         width={300}
         height={300}
         alt="logo"
        />

        <button 
            onClick={() => signIn('google')} 
            className=" text-white font-bold text-3xl animate-pulse">
            Sign in to use ChatGPT
        </button>
    </div>
  )
}

export default Login