
import Link from 'next/link'


const NavDeskTop =  () =>{

   return(
         <div className='w-full h-[74px] lg:h-20 px-6 lg:px-[72px] backdrop-blur-md  flex justify-between items-center'>
                <div className='lg:min-w-[250px]'>
                    <Link href="/">
                        <div>로고</div>
                    </Link>
                </div>

            
            {/* 링크 메뉴 */}
            <div className="hidden lg:grid grid-flow-col auto-cols-max gap-6 text-[#666666]">
               <Link href="/trade">
                     <p>Trade</p>
                </Link>
                <Link href="/history">
                     <p>History</p>
                </Link>
                <Link href="/wallet">
                     <p>Wallet</p>
                </Link>
            </div>

            {/* 계정관련 메뉴 */}
            <div className="hidden lg:grid  grid-flow-col auto-cols-max gap-6">

                <button className='h-8 px-3 rounded'>
                    <p className='text-sm '>로그인</p>
                </button>
                <button className='h-8 px-3 rounded bg-black'>
                    <p className='text-white text-sm '>회원가입</p>
                </button>  
                <div className="grid grid-flow-col gap-2 auto-cols-max items-center ">
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
            </div>

            </div>
   )
}


export default NavDeskTop