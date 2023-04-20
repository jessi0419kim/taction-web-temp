
import Link from 'next/link'
import Authentication from './Authentication'
import useTranslation from '@/hooks/useTranslation'
import { useSession, useUser, useSupabaseClient } from '@supabase/auth-helpers-react'
import { useRouter } from 'next/router'
import LinkMenu from '../linkMenu'

const NavDeskTop =  () =>{
    const {pathname} = useRouter()
    const session = useSession()
    const user = useUser()
    const {t} = useTranslation()



   return(
         <div className={`w-full h-[64px] lg:h-[74px] px-5 bg-white  flex justify-between items-center ${pathname == '/' ? "":"border-b"}`}>
                <div className='flex justify-between items-center'>
                    <Link href="/" className='mr-6'>
                        <div className="text-2xl font-bold ">{t.Nav.logo}</div>
                    </Link>
                    {/* 링크 메뉴 */}
                    <LinkMenu />
                </div>

            


            {/* 계정관련 메뉴 */}
            <div className="grid  grid-flow-col auto-cols-max gap-6">
                {session
                ?  <Link href="/account">
                      <div className='flex leading-none items-center'>Welcome!</div>
                    </Link>
                : <Authentication />
                }   
            </div>

            </div>
   )
}


export default NavDeskTop