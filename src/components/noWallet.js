import { useRouter } from "next/router"
import {  useSupabaseClient, useUser, useSession } from '@supabase/auth-helpers-react'
import { ethers } from "ethers";

const NoWallet = () =>{

    const supabase = useSupabaseClient()
	const user = useUser()

    const createWallet= () =>{
        console.log('wallet')
        const wallet = ethers.Wallet.createRandom()
        console.log(wallet.address)
        console.log(wallet.privateKey)
        console.log(wallet.publicKey)
        console.log(wallet.mnemonic.phrase)
        console.log('done')
    }

    return(
        <div className="w-full max-w-5xl ">
            <div className="flex flex-col justify-center items-center py-8">
                <p className="py-3">지갑을 먼저 생성해 주세요</p>
                <button onClick={createWallet} className="py-2 px-4 bg-blue-600 text-white">지갑 생성</button>
            </div>
        </div>
    )
}

export default NoWallet