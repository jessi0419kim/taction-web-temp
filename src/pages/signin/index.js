//import { supabase } from "@/supabase/supabaseClient"
import {  useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from "react"
import { useRouter } from 'next/router'

const SignIn = () =>{
    const router = useRouter()
    const supabase = useSupabaseClient()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitToSupabaseAuth = async() => {
        
        try{
            const { error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })

            error? alert(error) :  router.push('/')

        }catch(err){
            console.log(err)
        }
        
    }

    return(
        <div className="w-full flex justify-center lg:items-center">
            <div className="w-full max-w-md">
                <div className="hidden sm:block border rounded-t-2xl py-4">
                    <p className="text-center text-lg font-semibold">Sign In</p>
                </div>
                <div className="p-6 sm:border-x sm:border-b rounded-b-2xl">

                        <p className="text-3xl font-bold py-6">Welcome to Taction</p>

                            <input type="email" 
                                 placeholder="e-mail"
                                 value={email} 
                                 onChange={(e) => setEmail(e.target.value)}
                                 className="w-full border rounded-2xl p-4 mb-4"/>
                            <input 
                            type="password" 
                            placeholder="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-2xl p-4 mb-3"/>
                            <div className="mb-8">
                                <p className="text-end leading-none text-sm text-blue-600 font-medium">Forgot Password?</p>
                            </div>
                            <button className="w-full border rounded-xl p-3 bg-blue-600 my-6" onClick={submitToSupabaseAuth}>
                                <p className="text-white font-semibold">Sign In</p>
                            </button>
                </div>
            </div>
        </div>
    )
}

export default SignIn