
import { useEffect , useState} from "react";
import { useRouter } from 'next/router'
import SelectLang from "./SelectLang";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown} from "react-icons/ai";
import useTranslation from "@/hooks/useTranslation";
import { useSession, useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import Link from 'next/link'

const NavMobile = () =>{
    const {t} = useTranslation()
    const router = useRouter()
        const session = useSession()

    const [isOpen, setIsOpen] = useState(false)

    const setMenuOpen=()=>{
       setIsOpen(prev => !prev)
    }

    const closingMenuAndRouting = (param) =>{
        setIsOpen(false)
        router.push(param)
    }

    return(
        <div className='w-full '>
            <div className="h-[56px] px-6 z-50  flex justify-between items-center">
                    <div className=''>
                        <Link href="/">
                        <div className="text-xl font-bold">{t.Nav.logo}</div>
                        </Link>
                    </div>
                    <div className="grid grid-flow-col auto-cols-max gap-4 lg:hidden">
                        <button  onClick={setMenuOpen} >
                            <AiOutlineMenu size={24} />
                        </button>
                    </div>    
            </div>    
            {/* 모바일 메뉴 */}
                <div className={`w-full fixed overflow-y-auto bg-white  top-0 bottom-0 duration-500 ${isOpen ? "right-0" : "right-[-100%]"}`}>
                    <div className="h-[64px] px-6 z-50 flex justify-between items-center">
                        <div className=''>
                            <button onClick={()=>closingMenuAndRouting('/')}>
                              <div className="text-xl font-bold">{t.Nav.logo}</div>
                            </button>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max gap-4 lg:hidden">
                            <button  onClick={setMenuOpen} >
                                <AiOutlineClose size={24} />
                            </button>
                        </div>    
                    </div>
                    {/* Authentication */}
                    {session
                        ? <div className="px-6 py-4 text-2xl">Welcome!</div>
                        : <div className="px-6 py-4 grid gap-2">
                                 <button onClick={()=>closingMenuAndRouting('signin')}  className="w-full border  py-2  rounded">Login</button>
                                 <button onClick={()=>closingMenuAndRouting('signup')}   className="w-full border py-2  rounded bg-blue-600 text-white">Sign Up</button>
                        </div>
                     }
                    <div className="px-6 py-4 grid border-b">
                        <button onClick={()=>closingMenuAndRouting('wallet')} className="w-full  h-12 text-start">Wallet</button>
                        <button onClick={()=>closingMenuAndRouting('layout')} className="w-full  h-12 text-start">Layout</button>
                    </div>
                    <div className="px-6 py-4">
                    <SelectLang />
                    </div>
                   
                </div>
         </div>
    )
}


export default NavMobile