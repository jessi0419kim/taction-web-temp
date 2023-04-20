import {  useSupabaseClient, useUser, useSession } from '@supabase/auth-helpers-react'



const WalletInfo = () => {

    const user = useUser()
        console.log(user?.user_metadata)

    return(
        <div className="w-full max-w-5xl my-10">
            <div className='grid grid-rows-4 break-all '> 
                <div>
                    <h1 className="font-bold text-3xl py-2">Wallet Address</h1>
                    <p>{user?.user_metadata.wallet_address}</p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-2">Private Key</h1>
                    <p>{user?.user_metadata.privateKey}</p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-2">Public Key</h1>
                    <p>{user?.user_metadata.publicKey}</p>
                </div>
                <div>
                    <h1 className="font-bold text-3xl py-2">Mnemonics</h1>
                    <p>{user?.user_metadata.mnemonic}</p>
                </div>
            </div>
        </div>
    )
}


export default WalletInfo