
import { useEffect , useState} from "react";
import { useRouter } from 'next/router'

import { AiOutlineClose, AiOutlineMenu, AiOutlineDown} from "react-icons/ai";
import Link from 'next/link'

const NavMobile = () =>{
    const router = useRouter()

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
            <div className="h-[74px] px-6 z-50 backdrop-blur-md  flex justify-between items-center">
                    <div className=''>
                        <Link href="/">
                            <div>로고</div>
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <div className="px-4 grid grid-flow-col gap-2 auto-cols-max items-center ">
                            <button className='h-8'>
                                <p className='text-sm'>KO</p>
                            </button>
                            <div>
                            <p className='text-[10px]'>|</p>
                            </div>
                            <button className='h-8'>
                                <p className='text-sm'>EN</p>
                            </button>
                        </div>
                        <button  onClick={setMenuOpen} >
                            {isOpen? <AiOutlineClose size={24} />:<AiOutlineMenu size={24} />}
                        </button>
                    </div>    
            </div>    
            {/* 모바일 메뉴 */}
                <div className={`w-full fixed overflow-y-auto bg-white  top-[74px] bottom-0 duration-500 ${isOpen ? "right-0" : "right-[-100%]"}`}>
                    <div className="px-6">
                        <button className="w-full border my-2 h-10 rounded">Login</button>
                        <button className="w-full border my-2 h-10 rounded bg-black text-white">Sign Up</button>

                        <button onClick={()=>closingMenuAndRouting('history')} className="w-full border-b my-2 h-12 text-start">History</button>
                        <button onClick={()=>closingMenuAndRouting('trade')} className="w-full border-b my-2 h-12 text-start">Trade</button>
                        <button onClick={()=>closingMenuAndRouting('wallet')} className="w-full border-b my-2 h-12 text-start">Wallet</button>

                    </div>
                </div>
         </div>
    )
}


export default NavMobile