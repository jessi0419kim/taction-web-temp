import {  useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'


const Account = () => {
    const router = useRouter()
    const supabase = useSupabaseClient()

        const getLogout = async() => {
            const { error } = await supabase.auth.signOut()

            if(error){
                console.log(error)
            }else{
                router.replace('/')
            }
        }

        return(
            <div className="flex flex-col items-center justify-center ">
                <div className='mt-40'/>
                <button onClick={getLogout} className="px-4 py-2 bg-blue-600 text-white">Logout</button>

            </div>
        )
}

export default Account