import { useRouter } from 'next/router'
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useState } from "react"
import { ethers } from "ethers";

const SignUp = () =>{

    const supabase = useSupabaseClient()
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const supabaseSignUp = async () => {

        const wallet = ethers.Wallet.createRandom()

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                  wallet_address: wallet.address,
                  privateKey: wallet.privateKey,
                  publicKey: wallet.publicKey,
                  mnemonic: wallet.mnemonic.phrase
                }
              }
          })
        
          if(error){
            console.log(error)
          }else{
            alert(`${email}에서 인증을 완료해주세요`)
          }
    }

    return(
        <div className="w-full flex justify-center lg:items-center ">
            <div className="w-full max-w-md">
              <div className="hidden sm:block border rounded-t-xl py-4">
                    <p className="text-center text-lg font-semibold">Sign Up</p>
                </div>
                <div className="p-6 sm:border-x sm:border-b">

                        <p className="text-3xl font-bold py-6">Create Your Account</p>
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
                            <button className="w-full border rounded-xl p-3 bg-blue-600 my-6" onClick={supabaseSignUp}>
                                <p className="text-white font-semibold">Create Account</p>
                            </button>
              
                </div> 
            </div>
        </div>
    )
}

export default SignUp



